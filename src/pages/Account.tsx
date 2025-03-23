
import { useEffect } from 'react';
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const Account = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-grow pt-32 pb-16">
        <div className="mvmt-container">
          <h1 className="text-3xl font-semibold mb-8">My Account</h1>
          
          <div className="bg-white shadow rounded-md p-8 max-w-2xl mx-auto">
            <form className="space-y-6">
              <div>
                <h2 className="text-xl font-medium mb-4">Login</h2>
                <p className="text-mvmt-gray-600 mb-6">
                  Enter your email and password to access your account.
                </p>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full border border-mvmt-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mvmt-black/20"
                  />
                </div>
                
                <div>
                  <label htmlFor="password" className="block text-sm font-medium mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    id="password"
                    className="w-full border border-mvmt-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-mvmt-black/20"
                  />
                </div>
              </div>
              
              <div>
                <button
                  type="submit"
                  className="w-full bg-mvmt-black text-white py-3 rounded-md hover:bg-mvmt-black/90 transition-colors"
                >
                  Login
                </button>
              </div>
              
              <div className="text-center">
                <a href="#" className="text-sm text-mvmt-black hover:underline">
                  Forgot your password?
                </a>
              </div>
              
              <div className="pt-4 border-t border-mvmt-gray-200">
                <h2 className="text-xl font-medium mb-4">Don't have an account?</h2>
                <button
                  type="button"
                  className="w-full border border-mvmt-black bg-white text-mvmt-black py-3 rounded-md hover:bg-mvmt-gray-100 transition-colors"
                >
                  Create Account
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Account;
