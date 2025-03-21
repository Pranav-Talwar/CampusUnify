
function App() {
  return (
    <div className="flex min-h-screen ">
      {/* Sidebar Component */}

      {/* Main Content Area */}
      <div className="flex flex-col flex-1 items-center justify-center p-8">
        <div className="w-full max-w-md">
          {/* Landing Message */}
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold text-white">
              Welcome to PolyConnect
            </h1>
            <p className="mt-2 text-gray-300">
              Connect, collaborate, and share experiences with your college community.
            </p>
          </div>
          {/* Login Card */}
          <div className="bg-gray-800 p-10 rounded-xl shadow-2xl">
            <h2 className="text-2xl font-bold text-white text-center mb-6">
              Member Login
            </h2>
            <form className="space-y-6">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-1">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="your.name@rdpolytech.ca"
                />
              </div>
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-1">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full px-4 py-2 bg-gray-700 text-white border border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="••••••••"
                />
              </div>
              <div className="flex justify-between items-center">
                <div className="flex items-center">
                  <input 
                    type="checkbox" 
                    id="remember" 
                    className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded" 
                  />
                  <label htmlFor="remember" className="ml-2 block text-sm text-gray-300">
                    Remember Me
                  </label>
                </div>
                <a href="#" className="text-sm text-indigo-400 hover:text-indigo-300">
                  Forgot Password?
                </a>
              </div>
              <button 
                type="submit" 
                className="w-full py-2 px-4 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md font-semibold"
              >
                Login
              </button>
            </form>
            <p className="mt-4 text-sm text-gray-400 text-center">
              Don't have an account?{' '}
              <a href="#" className="text-indigo-400 hover:underline">
                Sign Up
              </a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
