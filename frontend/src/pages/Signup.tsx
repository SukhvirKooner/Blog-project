
export const Signup =()=>{
    return (
        <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      {/* Sign Up Form Section */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-12">
        <div className="max-w-md w-full space-y-8">
          <div>
            <h2 className="text-3xl font-bold text-gray-900">Create an account</h2>
            <p className="mt-2 text-sm text-gray-600">
              Already have an account?{' '}
              <a href="/signin" className="font-medium text-indigo-600 hover:text-indigo-500">
                Login
              </a>
            </p>
          </div>
          
          <form className="mt-8 space-y-6">
            <div className="space-y-4">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700">
                  Username
                </label>
                <input
                  id="username"
                  name="username"
                  type="text"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="Enter your username"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                  placeholder="m@example.com"
                />
              </div>

              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                  Password
                </label>
                <input
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                />
              </div>
            </div>

            <button
              type="submit"
              className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-black hover:bg-gray-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-black"
            >
              Sign Up
            </button>
          </form>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="flex-1 bg-gray-100 lg:flex items-center justify-center hidden">
        <div className="max-w-md p-8">
          <blockquote className="text-2xl font-medium text-gray-900 mb-4">
            "The customer service I received was exceptional. The support team went above and beyond to address my concerns."
          </blockquote>
          <div className="mt-4">
            <p className="text-lg font-semibold text-gray-900">Jules Winnfield</p>
            <p className="text-gray-600">CEO, Acme Inc</p>
          </div>
        </div>
      </div>
    </div>
    )
}