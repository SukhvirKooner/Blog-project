import { Blogcard } from "../Components/BlogCard"
import { Navbar } from "../Components/Navbar"


export const Blogs =()=>{
    return (
        <div className="bg-[#f8f5f0]">
            <Navbar/>
            {/* Header */}
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
            <Blogcard authorName="Sukhvir" content="my name is sukhvir singh . I am a student a maharaja surajmal institute of technology " publishDate="05/09/2024" title="life of sukhvir"/>
            <Blogcard authorName="Sukhvir" content="my name is sukhvir singh . I am a student a maharaja surajmal institute of technology " publishDate="05/09/2024" title="life of sukhvir"/>
            <Blogcard authorName="Sukhvir" content="my name is sukhvir singh . I am a student a maharaja surajmal institute of technology " publishDate="05/09/2024" title="life of sukhvir"/>
            <Blogcard authorName="Sukhvir" content="my name is sukhvir singh . I am a student a maharaja surajmal institute of technology " publishDate="05/09/2024" title="life of sukhvir"/>
            <Blogcard authorName="Sukhvir" content="my name is sukhvir singh . I am a student a maharaja surajmal institute of technology " publishDate="05/09/2024" title="life of sukhvir"/>  
        </div>
    )
}