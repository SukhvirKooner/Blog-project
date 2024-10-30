import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
	Bindings: {         // in hono u have to pass this thing to specify the type of database url
		DATABASE_URL: string
	}
}>();

// in serverless backend , we should avoid global variables bcz 
// depending on the runtime , they just start the specific function
// u might loose access to global contents
app.post('/api/v1/user/signup', async(c)=>{  
  const prisma = new PrismaClient({     
    datasourceUrl: c.env.DATABASE_URL, 
}).$extends(withAccelerate()) 

const body = await c.req.json();
const secret = 'mylittlesecret'
  const user = await prisma.user.create({
    data:{
      email: body.email,
      name: body.name,
      password: body.password
    }
  })
    const token = await sign({id : user.id},secret);
    return c.json({"messsage":"signup successfull",token});
})

app.get("/",(c)=>{
   return c.text("server is running ")
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
