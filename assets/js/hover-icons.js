// Hover icons with Mutation Observer for dynamic content
(function() {
    'use strict';
    
    let isInitialized = false;
    
    function setupHoverIcons() {
        if (isInitialized) return;
        
        const chartContainers = document.querySelectorAll('.chart-container');
        if (chartContainers.length === 0) return;
        
        console.log('Setting up hover icons with Mutation Observer...');
        
        chartContainers.forEach((container, index) => {
            const iconsHover = container.querySelector('.chart-icons-hover');
            if (!iconsHover) return;
            
            let entryX = 0;
            
            // Mouse enters chart container (entire chart area)
            container.addEventListener('mouseenter', function(e) {
                console.log(`Mouse ENTERED chart area ${index}`);
                entryX = e.clientX;
                iconsHover.style.opacity = '1';
                iconsHover.style.visibility = 'visible';
                iconsHover.style.transform = 'translateY(-50%) translateY(0)';
            });
            
            // Mouse leaves chart container (entire chart area)
            container.addEventListener('mouseleave', function() {
                console.log(`Mouse LEFT chart area ${index}`);
                iconsHover.style.opacity = '0';
                iconsHover.style.visibility = 'hidden';
                iconsHover.style.transform = 'translateY(-50%) translateY(200px)';
            });
            
            // Mouse moves right (only log when hiding)
            container.addEventListener('mousemove', function(e) {
                const deltaX = e.clientX - entryX;
                if (deltaX > 150) {
                    console.log(`Mouse moved RIGHT - hiding icons in chart ${index}`);
                    iconsHover.style.opacity = '0';
                    iconsHover.style.visibility = 'hidden';
                    iconsHover.style.transform = 'translateY(-50%) translateY(200px)';
                }
            });
        });
        
        isInitialized = true;
        console.log('Hover icons setup complete');
    }
    
    function startMutationObserver() {
        // Verificar se document.body existe
        if (!document.body) {
            console.log('document.body not ready, waiting...');
            setTimeout(startMutationObserver, 100);
            return;
        }
        
        // Mutation Observer to watch for dynamic content
        const observer = new MutationObserver(function(mutations) {
            mutations.forEach(function(mutation) {
                if (mutation.addedNodes.length) {
                    // Check if any chart containers were added
                    mutation.addedNodes.forEach(function(node) {
                        if (node.nodeType === 1) { // Element node
                            if (node.classList && node.classList.contains('chart-container')) {
                                console.log('New chart container detected, setting up hover icons...');
                                setTimeout(setupHoverIcons, 100);
                            }
                            // Also check child elements
                            const chartContainers = node.querySelectorAll ? node.querySelectorAll('.chart-container') : [];
                            if (chartContainers.length > 0) {
                                console.log('Chart containers found in added node, setting up hover icons...');
                                setTimeout(setupHoverIcons, 100);
                            }
                        }
                    });
                }
            });
        });
        
        // Start observing
        observer.observe(document.body, { 
            childList: true, 
            subtree: true 
        });
        
        console.log('Mutation Observer started successfully');
    }
    
    // Initial setup
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', function() {
            setTimeout(setupHoverIcons, 500);
            startMutationObserver();
        });
    } else {
        setTimeout(setupHoverIcons, 500);
        startMutationObserver();
    }
    
    // Also try setup periodically for the first few seconds
    let attempts = 0;
    const maxAttempts = 10;
    const interval = setInterval(function() {
        attempts++;
        if (attempts >= maxAttempts) {
            clearInterval(interval);
            return;
        }
        setupHoverIcons();
    }, 1000);
    
})(); 