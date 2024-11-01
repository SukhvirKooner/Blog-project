import { useNavigate } from "react-router-dom"

export const Navbar =()=>{
    const navigate = useNavigate();
    return(
        <nav className="flex items-center justify-between px-6 py-4 border-b border-b-[#242424] bg-[#feedce]">
        <a href="/" className="text-2xl font-serif font-bold">
          Read It
        </a>
        <div className="flex items-center gap-6">
            {localStorage.getItem('auth-token') && localStorage.getItem('auth-token') !== 'undefined'?
            <>
            <button onClick={()=>{navigate('/blogs')}} className="px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800">
              Start Writing
            </button></>
             :
             <>
          <a href="/signup" className="text-gray-600 hover:text-gray-900">Write</a>
          <a href="/signin" className="text-gray-600 hover:text-gray-900">Sign in</a>
          <button onClick={()=>{navigate('/signup')}} className="px-4 py-2 text-white bg-black rounded-full hover:bg-gray-800">
            Get started
          </button></>
          }
        </div>
      </nav>
    )
} 