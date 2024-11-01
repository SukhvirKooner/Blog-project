import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { createBlog, updateBlog } from "@sukhvir05/medium-app";
import { Hono } from "hono";
import { verify } from "hono/jwt";


export const blogRouter = new Hono<{
	Bindings: {         // in hono u have to pass this thing to specify the type of database url
		DATABASE_URL: string,
        JWT_SECRET:string,
	},
	Variables:{
		userId:string
	}
}>();

blogRouter.use('/*', async (c, next) => {    
    const authHeader = c.req.header('Authorization') || '';
    try{const user = await verify(authHeader,c.env.JWT_SECRET);
        if(user){
            c.set('userId',user.id as string);            
            await next();
        }else{
            c.status(403);
            return c.json({message:"you are not loggedin "})
        }}catch(e){
            c.status(403);
            return c.json({message:"you are not loggedin error "})
        }
})


blogRouter.post('/',async (c) => {
    console.log("point reached");
    const id = c.get('userId')
    const prisma = new PrismaClient({     
        datasourceUrl: c.env.DATABASE_URL, 
    }).$extends(withAccelerate()) 
    const body = await c.req.json();
    const {success} = createBlog.safeParse(body);
    if(!success){
        c.status(403)
        return c.json({
            error:"invalid inputs"
        })
    }
    const blog = await prisma.post.create({
            data:{
                title: body.title,
                content:body.content,
                authorId:id
            }
    })
    return c.json({
        id:blog.id
        })
    })

blogRouter.put('/',async (c)=>{
    const id = c.get('userId')
    const prisma = new PrismaClient({     
        datasourceUrl: c.env.DATABASE_URL, 
    }).$extends(withAccelerate()) 
    const body = await c.req.json();
    const {success} = updateBlog.safeParse(body);
    if(!success){
        c.status(403)
        return c.json({
            error:"invalid inputs"
        })
    }
    const blog = await prisma.post.update({
            where:{
                id:body.id
            },
            data:{
                title: body.title,
                content:body.content,
            }
    })
    return c.json({
        id:blog.id
        })
    })


blogRouter.get('/:id', async(c) => {
        const postid = c.req.param('id')
        console.log(postid)
        const prisma = new PrismaClient({     
            datasourceUrl: c.env.DATABASE_URL, 
        }).$extends(withAccelerate()) 
        try{const blog = await prisma.post.findFirst({
                where:{
                    id:postid
                }
        })
        return c.json({
            title:blog?.title,
            content:blog?.content
            })
        }catch(e){
            return c.json({
                message:'error while fetching'
                })
        }
    })

// add pagination

blogRouter.get('/', async (c) => {    
	const prisma = new PrismaClient({     
        datasourceUrl: c.env.DATABASE_URL, 
    }).$extends(withAccelerate())
	
	const posts = await prisma.post.findMany({
        select:{
            title:true,
            content:true,
            author:{
                select:{
                    name:true
                }
            }
        }
    });

	return c.json(posts);
})