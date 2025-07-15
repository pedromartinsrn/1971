export default {
  async fetch(request, env) {
    const db = env.DB_DEV || env.DB;
    
    const origin = request.headers.get('Origin');

    const allowedOrigins = [
      'https://oqueaconteceuem1971.com',
      'https://1971.pages.dev',
      'http://localhost:8787',
      'http://127.0.0.1:8787',
      'http://127.0.0.1:5501',
      'http://localhost:5501'
    ];

    const corsHeaders = {
      'Access-Control-Allow-Origin': allowedOrigins.includes(origin) ? origin : allowedOrigins[0],
      'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Max-Age': '86400'
    };

    if (request.method === 'OPTIONS') {
      return new Response(null, { headers: corsHeaders });
    }

    const url = new URL(request.url);
    const path = url.pathname;

    try {
      // GET /api/comments
      if (path === '/api/comments' && request.method === 'GET') {
        const chartId = url.searchParams.get('chartId');
        
        if (!chartId) {
          return new Response('Chart ID is required', { 
            status: 400,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }

        const comments = await db.prepare(`
          SELECT 
            c.*, 
            0 as likes_count,
            c.created_at
          FROM comments c 
          WHERE chart_id = ?
          ORDER BY created_at DESC
        `).bind(chartId).all();

        return new Response(JSON.stringify(comments.results), {
          headers: { ...corsHeaders, 'Content-Type': 'application/json' }
        });
      }

      if (path === '/api/comments' && request.method === 'POST') {
        try {
          const { chartId, userId, content } = await request.json();
          
          if (!chartId || !userId || !content) {
            return new Response('Missing required fields', { 
              status: 400,
              headers: { ...corsHeaders, 'Content-Type': 'application/json' }
            });
          }

          const result = await db.prepare(`
            INSERT INTO comments (chart_id, user_id, content, created_at) 
            VALUES (?, ?, ?, datetime('now'))
          `).bind(chartId, userId, content).run();

          return new Response(JSON.stringify({ 
            id: result.lastRowId,
            success: true 
          }), {
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        } catch (error) {
          return new Response(JSON.stringify({
            error: error.message,
            stack: error.stack
          }), { 
            status: 500,
            headers: { ...corsHeaders, 'Content-Type': 'application/json' }
          });
        }
      }

      return new Response('Not Found', { status: 404 });
      
    } catch (error) {
      return new Response('Internal Server Error', { status: 500 });
    }
  }
}; 