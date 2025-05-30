
import { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Eye, EyeOff, Bot } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleSocialAuth = (provider: string) => {
    console.log(`Authenticating with ${provider}`);
    // Handle social authentication here
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gray-50">
      <div className="w-full max-w-5xl flex bg-white rounded-2xl shadow-2xl overflow-hidden">
        {/* Left Side - Welcome Section */}
        <div className="hidden lg:flex lg:w-1/2 bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800 relative overflow-hidden">
          <div className="absolute inset-0 bg-black/20"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          
          {/* Animated background elements with floating motion */}
          <div className="absolute top-20 left-20 w-32 h-32 bg-white/10 rounded-full blur-xl animate-[float1_6s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-40 right-20 w-24 h-24 bg-purple-300/20 rounded-full blur-lg animate-[float2_8s_ease-in-out_infinite]"></div>
          <div className="absolute top-1/2 left-10 w-16 h-16 bg-blue-300/20 rounded-full blur-md animate-[float3_5s_ease-in-out_infinite]"></div>
          <div className="absolute top-32 right-32 w-20 h-20 bg-white/15 rounded-full blur-lg animate-[float4_7s_ease-in-out_infinite]"></div>
          <div className="absolute bottom-20 left-1/3 w-28 h-28 bg-cyan-300/20 rounded-full blur-xl animate-[float5_9s_ease-in-out_infinite]"></div>
          <div className="absolute top-2/3 right-16 w-12 h-12 bg-pink-300/25 rounded-full blur-sm animate-[float6_4s_ease-in-out_infinite]"></div>
          
          <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
            <div className="flex items-center mb-8">
              <div className="w-12 h-12 bg-white/20 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 border border-white/30 group cursor-pointer">
                <Bot className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
              </div>
              <h1 className="text-3xl font-bold">MagicPrompt</h1>
            </div>
            
            <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
              Welcome to
              <span className="block bg-gradient-to-r from-yellow-300 to-pink-300 bg-clip-text text-transparent">
                AI Magic
              </span>
            </h2>
            
            <p className="text-lg text-white/80 mb-8 max-w-md leading-relaxed">
              Join thousands of creators who use MagicPrompt to generate amazing AI prompts. 
              Experience the next generation of AI-powered creativity.
            </p>
            
            <div className="flex items-center space-x-4">
              <div className="flex -space-x-2">
                <div className="w-10 h-10 bg-gradient-to-r from-pink-400 to-purple-400 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
              </div>
              <span className="text-white/60">Trusted by 50k+ creators</span>
            </div>
          </div>
        </div>

        {/* Right Side - Form Section */}
        <div className="w-full lg:w-1/2 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="text-center mb-8">
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-600 to-blue-600 rounded-2xl flex items-center justify-center group cursor-pointer shadow-lg">
                  <Bot className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg]" />
                </div>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                {isSignIn ? 'Welcome Back' : 'Join MagicPrompt'}
              </h3>
              <p className="text-gray-600">
                {isSignIn 
                  ? 'Sign in to continue creating amazing prompts' 
                  : 'Sign up to start your AI prompt journey'
                }
              </p>
            </div>

            {/* Social Auth Buttons */}
            <div className="space-y-3 mb-6">
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 border-2 hover:bg-gray-50 transition-all duration-200 hover:scale-[1.02]"
                onClick={() => handleSocialAuth('google')}
              >
                <FcGoogle className="w-5 h-5 mr-3" />
                Continue with Google
              </Button>
              
              <Button
                type="button"
                variant="outline"
                className="w-full h-12 border-2 hover:bg-gray-900 hover:text-white transition-all duration-200 hover:scale-[1.02]"
                onClick={() => handleSocialAuth('github')}
              >
                <Github className="w-5 h-5 mr-3" />
                Continue with GitHub
              </Button>
            </div>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="bg-white px-4 text-gray-500">Or continue with email</span>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
              {!isSignIn && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-sm font-medium text-gray-700">
                    Full Name
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="h-12 border-2 focus:border-purple-500 transition-colors"
                    required={!isSignIn}
                  />
                </div>
              )}
              
              <div className="space-y-2">
                <Label htmlFor="email" className="text-sm font-medium text-gray-700">
                  Email Address
                </Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="h-12 border-2 focus:border-purple-500 transition-colors"
                  required
                />
              </div>
              
              <div className="space-y-2">
                <Label htmlFor="password" className="text-sm font-medium text-gray-700">
                  Password
                </Label>
                <div className="relative">
                  <Input
                    id="password"
                    type={showPassword ? "text" : "password"}
                    placeholder="Enter your password"
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className="h-12 border-2 focus:border-purple-500 transition-colors pr-12"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 hover:text-gray-700"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {!isSignIn && (
                <div className="space-y-2">
                  <Label htmlFor="confirmPassword" className="text-sm font-medium text-gray-700">
                    Confirm Password
                  </Label>
                  <Input
                    id="confirmPassword"
                    type="password"
                    placeholder="Confirm your password"
                    value={formData.confirmPassword}
                    onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                    className="h-12 border-2 focus:border-purple-500 transition-colors"
                    required={!isSignIn}
                  />
                </div>
              )}

              {isSignIn && (
                <div className="flex items-center justify-between">
                  <div className="flex items-center">
                    <input
                      id="remember"
                      type="checkbox"
                      className="h-4 w-4 text-purple-600 focus:ring-purple-500 border-gray-300 rounded"
                    />
                    <Label htmlFor="remember" className="ml-2 text-sm text-gray-600">
                      Remember me
                    </Label>
                  </div>
                  <button
                    type="button"
                    className="text-sm text-purple-600 hover:text-purple-800 font-medium"
                  >
                    Forgot password?
                  </button>
                </div>
              )}

              <Button
                type="submit"
                className="w-full h-12 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg"
              >
                {isSignIn ? 'Sign In to MagicPrompt' : 'Create Account'}
              </Button>
            </form>

            <div className="text-center mt-6">
              <span className="text-gray-600">
                {isSignIn ? "Don't have an account? " : "Already have an account? "}
              </span>
              <button
                type="button"
                onClick={() => setIsSignIn(!isSignIn)}
                className="text-purple-600 hover:text-purple-800 font-medium transition-colors"
              >
                {isSignIn ? 'Sign up' : 'Sign in'}
              </button>
            </div>
          </div>
        </div>

        {/* Custom CSS for floating animations */}
        <style jsx>{`
          @keyframes float1 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(30px, -20px) rotate(90deg); }
            50% { transform: translate(-20px, -40px) rotate(180deg); }
            75% { transform: translate(-40px, 20px) rotate(270deg); }
          }
          
          @keyframes float2 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(-25px, 30px) rotate(120deg); }
            66% { transform: translate(35px, -15px) rotate(240deg); }
          }
          
          @keyframes float3 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            20% { transform: translate(15px, -25px) rotate(72deg); }
            40% { transform: translate(-30px, -10px) rotate(144deg); }
            60% { transform: translate(20px, 35px) rotate(216deg); }
            80% { transform: translate(-10px, 15px) rotate(288deg); }
          }
          
          @keyframes float4 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            50% { transform: translate(-35px, 25px) rotate(180deg); }
          }
          
          @keyframes float5 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            25% { transform: translate(-20px, -30px) rotate(90deg); }
            50% { transform: translate(40px, -10px) rotate(180deg); }
            75% { transform: translate(10px, 25px) rotate(270deg); }
          }
          
          @keyframes float6 {
            0%, 100% { transform: translate(0, 0) rotate(0deg); }
            33% { transform: translate(20px, -20px) rotate(120deg); }
            66% { transform: translate(-15px, 30px) rotate(240deg); }
          }
        `}</style>
      </div>
    </div>
  );
};

export default AuthPage;
