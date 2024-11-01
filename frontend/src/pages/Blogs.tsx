import { Blogcard } from "../Components/BlogCard"
import { Navbar } from "../Components/Navbar"
import { useBlogs } from "../hooks";


export const Blogs =()=>{
    const {loading,blogs} = useBlogs();
    if(loading){
        return
        <div>
            Loading...
        </div>
    }
    console.log(blogs);
    
    return (
        
        <div className="bg-[#f8f5f0]">
            <Navbar/>
            {/* Header */}
            {loading?"Loading":
            
            <div className="max-w-4xl mx-auto px-4 py-8 ">
            <header className="border-b border-gray-200">
            <nav className="flex items-center justify-between py-4">
              <div className="flex items-center space-x-8">
                <button className="text-2xl">+</button>
                <div className="space-x-4">
                  <button className="font-medium">For you</button>
                  <button className="text-gray-500">Following</button>
                </div>
              </div>
            </nav>
          </header>
          </div>
          }
          {blogs.map(blog=>
            <Blogcard authorName={blog.author.name} content={blog.content} publishDate="05/09/2024" title={blog.title}/>)}
              
        </div>
    )
}