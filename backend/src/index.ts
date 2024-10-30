import { Hono } from 'hono'

const app = new Hono()
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'




app.post('/api/v1/user/signup', (c)=>{
  const prisma = new PrismaClient({
    datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate())
  return c.text("POST signup")
})

app.post('/api/v1/user/signin', (c)=>{
  return c.text("POST signin")
})

app.post('/api/v1/blog', (c)=>{
  return c.text("POST blog")
})
app.put('/api/v1/blog', (c)=>{
  return c.text("PUT blog")
})
app.get('/api/v1/blog/:id', (c) => {
	const id = c.req.param('id')
	console.log(id);
	return c.text('get blog route')
})

app.get('/api/v1/blog/bulk', (c)=>{
  return c.text("GET blog in bulk")
})

export default app
