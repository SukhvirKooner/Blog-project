
import { useNavigate } from "react-router-dom";
import { Navbar } from "../Components/Navbar";
const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className="min-h-screen bg-[#fdf5e6]">
      {/* Navigation */}
      <Navbar/>
      {/* Main Content */}
      <main className="container mx-auto px-6 py-16 flex justify-between items-center bg-[#f8f5f0]">
        <div className="max-w-2xl bg-[#f8f5f0]">
          <h1 className="text-7xl font-serif mb-6">
            Human
            <br />
            stories & ideas
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            A place to read, write, and deepen your understanding
          </p>
          <button onClick={()=>{navigate('/blogs')}} className="px-6 py-3 text-white bg-black rounded-full text-lg hover:bg-gray-800">
            Start reading
          </button>
        </div>

        {/* Enhanced Experimental Pattern Section */}
        <div className="relative bg-[#f8f5f0]">
          <div className="w-96 h-96 relative">
            {/* Top Abstract Flower */}
            <div className="absolute top-0 right-0 w-32 h-32">
              <svg viewBox="0 0 100 100" className="fill-green-500">
                {/* Complex flower pattern */}
                <path d="M50 0 
                        C60 20, 80 20, 100 50
                        C80 80, 60 80, 50 100
                        C40 80, 20 80, 0 50
                        C20 20, 40 20, 50 0Z" />
                <circle cx="50" cy="50" r="8" className="fill-white opacity-60" />
                {/* Additional petals */}
                {[0, 45, 90, 135, 180, 225, 270, 315].map((angle, i) => (
                  <path key={i}
                    transform={`rotate(${angle} 50 50)`}
                    d="M50 20 Q60 35, 50 50 Q40 35, 50 20"
                    className="fill-green-600 opacity-30"
                  />
                ))}
              </svg>
            </div>

            {/* Main Geometric Pattern */}
            <div className="absolute bottom-0 right-0 w-full h-2/3">
              <svg viewBox="0 0 400 300" className="w-full h-full">
                {/* Background */}
                <rect x="0" y="0" width="400" height="300" className="fill-green-500" />
                
                {/* Base Grid Pattern */}
                <pattern id="grid" x="0" y="0" width="40" height="40" patternUnits="userSpaceOnUse">
                  <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" className="opacity-10" />
                </pattern>
                <rect x="0" y="0" width="400" height="300" fill="url(#grid)" />

                {/* Circular Elements */}
                <g className="opacity-70">
                  <circle cx="200" cy="150" r="100" className="fill-none stroke-white stroke-1 opacity-20" />
                  <circle cx="200" cy="150" r="80" className="fill-none stroke-white stroke-1 opacity-20" />
                  <circle cx="200" cy="150" r="60" className="fill-none stroke-white stroke-1 opacity-20" />
                </g>

                {/* Dynamic Lines */}
                <g className="opacity-50">
                  {[...Array(8)].map((_, i) => (
                    <path
                      key={i}
                      d={`M ${400} ${i * 40} L ${300 - i * 30} ${300}`}
                      className="stroke-white stroke-1 opacity-30"
                    />
                  ))}
                </g>

                {/* Hexagonal Pattern */}
                <g className="opacity-40">
                  {[...Array(5)].map((_, i) => (
                    <path
                      key={i}
                      d={`M ${320 + i * 20} 0 L ${380 + i * 20} ${100 + i * 20} L ${320 + i * 20} ${200 + i * 20}`}
                      className="fill-none stroke-white stroke-1"
                    />
                  ))}
                </g>

                {/* Scattered Dots */}
                <g className="opacity-60">
                  {[...Array(20)].map((_, i) => (
                    <circle
                      key={i}
                      cx={Math.random() * 400}
                      cy={Math.random() * 300}
                      r={Math.random() * 3 + 1}
                      className="fill-white"
                    />
                  ))}
                </g>

                {/* Abstract Shapes */}
                <path d="M 350 50 Q 400 100, 350 150 T 350 250" 
                      className="fill-none stroke-white stroke-2 opacity-40" />
                <path d="M 300 0 Q 400 150, 300 300" 
                      className="fill-none stroke-white stroke-2 opacity-40" />

                {/* Decorative Stars */}
                {[...Array(15)].map((_, i) => {
                  const x = Math.random() * 400;
                  const y = Math.random() * 300;
                  const size = Math.random() * 2 + 1;
                  return (
                    <path
                      key={i}
                      d={`M ${x-size} ${y} L ${x+size} ${y} M ${x} ${y-size} L ${x} ${y+size}`}
                      className="stroke-white opacity-40"
                    />
                  );
                })}
              </svg>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
                
    </div>
  );
};

export default LandingPage;