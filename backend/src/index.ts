import { Hono } from 'hono'
import { userRouter } from './routes/user';
import { blogRouter } from './routes/blog';
import { cors } from 'hono/cors';



const app = new Hono<{
	Bindings: {         // in hono u have to pass this thing to specify the type of database url
		DATABASE_URL: string,
    JWT_SECRET:string,
	},
	Variables:{
		userId:string
	}
}>();
app.use('/*', cors())
app.route('/api/v1/user',userRouter);
app.route('/api/v1/blog',blogRouter);


export default app
