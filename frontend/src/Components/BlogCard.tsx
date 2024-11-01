
interface BlogcardProps {
    authorName:string,
    title:string,
    content:string,
    publishDate:string
}


export const Blogcard = ({
    authorName,
    title,
    content,
    publishDate
}:BlogcardProps)=>{
      return (
        <div className="max-w-4xl mx-auto ">
          {/* Blog Posts */}
          <main className="py-5 border-b border-gray-200">
            
              <article 
              //key={post.id}
               className="mb-12">
                <div className="flex items-start justify-between ">
                  <div className="flex-grow">
                    {/* Author info */}
                    <div className="flex items-center space-x-2 mb-2">
                      <Avatar name={authorName}/>
                      <span className="font-medium">{authorName}</span>
                      <span className="text-gray-500">·</span>
                      <span className="text-gray-500">{publishDate}</span>
                      
                    </div>
    
                    {/* Post content */}
                    <div className="flex justify-between">
                      <div className="flex-grow pr-8">
                        <h2 className="text-xl font-bold mb-2">{title}</h2>
                        <p className="text-gray-700 mb-4">{content.substring(0,100)+"..."}</p>
                        <div className="flex items-center text-gray-500 text-sm"> 
                      <span>{`${Math.ceil(content.length/100)} minute(s) read`}</span> 
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>
            
          </main>
        </div>
      )
}
function Avatar ({name}:{name:string}){
    return(

<div className="relative inline-flex items-center justify-center w-10 h-10 overflow-hidden bg-gray-100 rounded-full dark:bg-gray-600">
    <span className="font-medium text-gray-600 dark:text-gray-300">{name[0].toUpperCase()}</span>
</div>

    )
}