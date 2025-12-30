import { EyeOff, Lock, User } from 'lucide-react';

export default function Login_page() {
  return (
    <div className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 flex items-center justify-center p-4 font-sans">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl overflow-hidden border border-gray-100 transition-all duration-300 hover:shadow-2xl">
        {/* Header */}
        <div className="px-8 pt-8 pb-6 text-center">
          <div className="mx-auto w-12 h-12 bg-indigo-600 rounded-full flex items-center justify-center mb-4 shadow-lg shadow-indigo-200">
            <Lock className="w-6 h-6 text-white" />
          </div>
          <h2 className="text-3xl font-bold text-gray-800 tracking-tight">Welcome Back</h2>
          <p className="text-gray-500 mt-2 text-sm">Please sign in to your account</p>
        </div>

        {/* Form */}
        <form className="px-8 pb-8 pt-2">
          {/* General error */}

          {/* Username Field */}
          <div className="mb-5 group">
            <label
              htmlFor="username"
              className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1"
            >
              Username
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <User className={`h-5 w-5 text-gray-400 group-focus-within:text-indigo-500`} />
              </div>
              <input
                id="username"
                name="username"
                type="text"
                className={`block w-full pl-10 pr-3 py-2.5 border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200 border-gray-200 focus:border-indigo-500 focus:ring-indigo-200 hover:border-gray-300`}
                placeholder="Enter your username"
              />
            </div>
          </div>

          {/* Password Field */}
          <div className="mb-2 group">
            <label
              htmlFor="password"
              className="block text-sm font-semibold text-gray-700 mb-1.5 ml-1"
            >
              Password
            </label>
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Lock className={`h-5 w-5 text-gray-400 group-focus-within:text-indigo-500`} />
              </div>
              <input
                id="password"
                name="password"
                className={`block w-full pl-10 pr-10 py-2.5 border rounded-lg bg-gray-50 text-gray-900 placeholder-gray-400 focus:bg-white focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all duration-200 border-gray-200 focus:border-indigo-500 focus:ring-indigo-200 hover:border-gray-300`}
                placeholder="Enter your password"
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-gray-400 hover:text-gray-600 focus:outline-none"
              >
                <EyeOff className="h-5 w-5" />
              </button>
            </div>
          </div>

          {/* Forgot Password */}
          <div className="flex justify-end mb-6">
            <a
              href="#"
              className="text-sm font-medium text-indigo-600 hover:text-indigo-500 hover:underline transition-colors duration-200"
            >
              Forgot Password?
            </a>
          </div>

          {/* Sign In */}
          <button
            type="submit"
            className="w-full py-3 px-4 border border-transparent rounded-lg text-sm font-bold text-white tracking-wide bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 shadow-md hover:shadow-lg transform active:scale-[0.98] transition-all duration-200 disabled:opacity-70 disabled:cursor-not-allowed flex justify-center items-center"
          >
            Sign In
          </button>
        </form>
      </div>
    </div>
  );
}
