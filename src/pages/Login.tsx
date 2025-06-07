
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Login = () => {
  return (
    <div className="min-h-screen flex">
      {/* Left Side - Brand Image */}
      <div className="hidden lg:flex lg:w-1/2 relative">
        <img 
          src="https://images.unsplash.com/photo-1578662996442-48f60103fc96?q=80&w=2000&auto=format&fit=crop"
          alt="Luxury Interior"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-charcoal/80 to-transparent" />
        <div className="absolute bottom-12 left-12 text-ivory">
          <h2 className="font-playfair text-4xl font-bold mb-4">
            Welcome Back to <span className="text-gold">GrapheneArte</span>
          </h2>
          <p className="text-ivory/80 text-lg">
            Where luxury meets sustainability in every brushstroke.
          </p>
        </div>
      </div>

      {/* Right Side - Login Form */}
      <div className="w-full lg:w-1/2 flex items-center justify-center p-12 bg-ivory">
        <div className="max-w-md w-full space-y-8">
          <div className="text-center">
            <Link to="/" className="font-playfair text-3xl font-bold text-charcoal">
              Graphene<span className="text-gold">Arte</span>
            </Link>
            <h2 className="mt-6 font-playfair text-3xl font-bold text-charcoal">
              Sign in to your account
            </h2>
            <p className="mt-2 text-charcoal/60">
              Access your saved palettes and sample requests
            </p>
          </div>

          <form className="mt-8 space-y-6">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-charcoal mb-2">
                Email address
              </label>
              <input
                id="email"
                name="email"
                type="email"
                required
                className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors"
                placeholder="Enter your email"
              />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-charcoal mb-2">
                Password
              </label>
              <input
                id="password"
                name="password"
                type="password"
                required
                className="w-full px-4 py-3 border border-charcoal/20 rounded-lg focus:border-gold focus:outline-none focus:ring-2 focus:ring-gold/20 transition-colors"
                placeholder="Enter your password"
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="flex items-center">
                <input
                  id="remember-me"
                  name="remember-me"
                  type="checkbox"
                  className="h-4 w-4 text-gold focus:ring-gold border-charcoal/20 rounded"
                />
                <label htmlFor="remember-me" className="ml-2 block text-sm text-charcoal">
                  Remember me
                </label>
              </div>
              <a href="#" className="text-sm text-gold hover:text-gold/80">
                Forgot your password?
              </a>
            </div>

            <Button
              type="submit"
              className="w-full bg-gold hover:bg-gold/90 text-charcoal font-medium py-3 text-lg shine-effect"
            >
              Sign in
            </Button>

            <div className="text-center">
              <p className="text-charcoal/60">
                Don't have an account?{' '}
                <Link to="/signup" className="text-gold hover:text-gold/80 font-medium">
                  Sign up
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
