export interface Env {
    // Add any necessary environment variables
  }
  
  export default {
    async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
      if (request.method !== 'POST') {
        return new Response('Method not allowed', { status: 405 })
      }
  
      const { message } = await request.json()
  
      // TODO: Implement actual chatbot logic here
      const response = `You said: "${message}". This is a simple echo response.`
  
      return new Response(JSON.stringify({ response }), {
        headers: { 'Content-Type': 'application/json' },
      })
    },
  }