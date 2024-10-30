import { Hono } from 'hono'
import { sign } from 'hono/jwt'
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'

const app = new Hono<{
	Bindings: {         // in hono u have to pass this thing to specify the type of database url
		DATABASE_URL: string,
    JWT_SECRET:string
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
  try {
		const user = await prisma.user.create({
			data: {
				email: body.email,
				password: body.password
			}
		});
		const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
		return c.json({ jwt ,'message':"signup successfull"});
	} catch(e) {
		c.status(403);
		return c.json({ error: "error while signing up" });
	}
})

app.get("/",(c)=>{
   return c.text("server is running ")
})

app.post('/api/v1/user/signin', async(c)=>{
  const prisma = new PrismaClient({     
    datasourceUrl: c.env.DATABASE_URL, 
}).$extends(withAccelerate()) 

const body = await c.req.json();

 const user = await prisma.user.findUnique({
  where:{
    email:body.email
  }
 });
  if(!user){
  return c.json({error:"wrong email"})
  }else if(user.password===body.password){
    const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
	  return c.json({ jwt,message:"signin successfull" });
  }else{
    return c.json({error:"wrong Password"})
  }

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
