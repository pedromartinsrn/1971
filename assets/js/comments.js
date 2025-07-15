class ChartComments {
    constructor(chartId) {
        this.chartId = chartId;
        this.commentsContainer = null;
        this.init();
    }

    async init() {
        // Create and insert comments container
        this.createCommentsUI();
        await this.loadComments();
        this.setupEventListeners();
    }

    createCommentsUI() {
        const container = document.createElement('div');
        container.className = 'chart-comments';
        container.innerHTML = `
            <div class="comments-header">
                <h3>Comentários</h3>
                <span class="comment-count">0</span>
            </div>
            <div class="comments-list"></div>
            <form class="comment-form">
                <textarea placeholder="Adicione seu comentário..." required></textarea>
                <button type="submit">Enviar</button>
            </form>
        `;
        
        // Insert after the chart
        const chartElement = document.getElementById(this.chartId);
        chartElement.parentNode.insertBefore(container, chartElement.nextSibling);
        
        this.commentsContainer = container;
    }

    async loadComments() {
        try {
            const response = await fetch(`/api/comments/${this.chartId}`);
            const comments = await response.json();
            this.renderComments(comments);
        } catch (error) {
            console.error('Error loading comments:', error);
        }
    }

    renderComments(comments) {
        const commentsList = this.commentsContainer.querySelector('.comments-list');
        const commentCount = this.commentsContainer.querySelector('.comment-count');
        
        commentsList.innerHTML = comments.map(comment => `
            <div class="comment">
                <div class="comment-content">${this.escapeHtml(comment.content)}</div>
                <div class="comment-meta">
                    <span class="comment-id">#${comment.id}</span>
                    <span class="comment-date">${new Date(comment.timestamp).toLocaleDateString()}</span>
                </div>
            </div>
        `).join('');
        
        commentCount.textContent = comments.length;
    }

    setupEventListeners() {
        const form = this.commentsContainer.querySelector('.comment-form');
        form.addEventListener('submit', async (e) => {
            e.preventDefault();
            const textarea = form.querySelector('textarea');
            const content = textarea.value.trim();
            
            if (!content) return;
            
            try {
                const response = await fetch(`/api/comments/${this.chartId}`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ content })
                });
                
                if (response.ok) {
                    textarea.value = '';
                    await this.loadComments();
                }
            } catch (error) {
                console.error('Error posting comment:', error);
            }
        });
    }

    escapeHtml(unsafe) {
        return unsafe
            .replace(/&/g, "&amp;")
            .replace(/</g, "&lt;")
            .replace(/>/g, "&gt;")
            .replace(/"/g, "&quot;")
            .replace(/'/g, "&#039;");
    }
}

function addCommentIcon(chartId) {
    const chartContainer = document.getElementById(chartId).closest('.chart-container');
    const iconSvg = `
        <svg class="comment-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 122.88 114.44">
            <path d="M34.75,35.84A6.72,6.72,0,1,1,28,42.56a6.72,6.72,0,0,1,6.72-6.72ZM7,0H115.91a7,7,0,0,1,7,7V79.86a7,7,0,0,1-7,7H62.55L36.14,106.45c-5,4.76-9.47,7.76-12.88,8-5,.3-7.61-3.1-7-11.56v-16H7a7,7,0,0,1-7-7V7A7,7,0,0,1,7,0ZM115.91,6.8H7A.17.17,0,0,0,6.8,7V79.86A.17.17,0,0,0,7,80H19.64a3.4,3.4,0,0,1,3.4,3.4v19.49h0a2.09,2.09,0,0,1,0,.25c-.23,3.15-.27,4.48-.17,4.47,1.67-.1,4.77-2.46,8.75-6.24l.32-.26L59.2,80.87A3.36,3.36,0,0,1,61.44,80h54.47a.17.17,0,0,0,.17-.17V7a.17.17,0,0,0-.17-.17Zm-55.47,29a6.72,6.72,0,1,1-6.73,6.72,6.72,6.72,0,0,1,6.73-6.72Zm25.69,0a6.72,6.72,0,1,1-6.73,6.72,6.72,6.72,0,0,1,6.73-6.72Z"/>
        </svg>
    `;
    chartContainer.insertAdjacentHTML('beforeend', iconSvg);
} 