
import { useState, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card, CardContent } from "@/components/ui/card";
import { Github, Mail, Eye, EyeOff, Bot, Moon, Sun, Sparkles } from 'lucide-react';
import { FcGoogle } from 'react-icons/fc';

const AuthPage = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    name: ''
  });

  useEffect(() => {
    // Check for saved theme preference or default to light mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
      setIsDarkMode(true);
    }
  }, []);

  useEffect(() => {
    // Apply theme to document
    document.documentElement.classList.toggle('dark', isDarkMode);
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
  }, [isDarkMode]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Handle form submission here
  };

  const handleSocialAuth = (provider: string) => {
    console.log(`Authenticating with ${provider}`);
    // Handle social authentication here
  };

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <>
      <style>{`
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

        @keyframes pulse-glow {
          0%, 100% { 
            box-shadow: 0 0 20px rgba(147, 51, 234, 0.4);
            transform: scale(1);
          }
          50% { 
            box-shadow: 0 0 40px rgba(147, 51, 234, 0.8);
            transform: scale(1.05);
          }
        }

        @keyframes sparkle {
          0%, 100% { opacity: 0; transform: scale(0) rotate(0deg); }
          50% { opacity: 1; transform: scale(1) rotate(180deg); }
        }

        @keyframes gradient-shift {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }

        .float1 { animation: float1 6s ease-in-out infinite; }
        .float2 { animation: float2 8s ease-in-out infinite; }
        .float3 { animation: float3 5s ease-in-out infinite; }
        .float4 { animation: float4 7s ease-in-out infinite; }
        .float5 { animation: float5 9s ease-in-out infinite; }
        .float6 { animation: float6 4s ease-in-out infinite; }
        .pulse-glow { animation: pulse-glow 3s ease-in-out infinite; }
        .sparkle { animation: sparkle 2s ease-in-out infinite; }
        .gradient-shift { 
          background-size: 400% 400%;
          animation: gradient-shift 8s ease infinite;
        }

        .theme-transition {
          transition: all 0.3s ease-in-out;
        }

        .dark .bg-gray-50 { background-color: #0f0f23; }
        .dark .bg-white { background-color: #1a1a2e; }
        .dark .text-gray-900 { color: #f1f5f9; }
        .dark .text-gray-600 { color: #94a3b8; }
        .dark .text-gray-700 { color: #cbd5e1; }
        .dark .border-gray-300 { border-color: #374151; }
        .dark .bg-gray-100 { background-color: #374151; }
        .dark .hover\\:bg-gray-50:hover { background-color: #1f2937; }
        .dark .hover\\:bg-gray-900:hover { background-color: #f9fafb; }
        .dark .hover\\:text-white:hover { color: #1f2937; }
      `}</style>
      
      <div className={`min-h-screen flex items-center justify-center p-4 theme-transition ${isDarkMode ? 'bg-gray-900' : 'bg-gray-50'}`}>
        {/* Theme Toggle Button */}
        <button
          onClick={toggleTheme}
          className={`fixed top-6 right-6 z-50 p-3 rounded-full theme-transition ${
            isDarkMode 
              ? 'bg-yellow-500 hover:bg-yellow-400 text-gray-900' 
              : 'bg-gray-800 hover:bg-gray-700 text-white'
          } shadow-lg hover:shadow-xl transform hover:scale-110 transition-all duration-300`}
        >
          {isDarkMode ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>

        <div className={`w-full max-w-5xl flex theme-transition rounded-2xl shadow-2xl overflow-hidden ${isDarkMode ? 'bg-gray-800' : 'bg-white'}`}>
          {/* Left Side - Welcome Section */}
          <div className={`hidden lg:flex lg:w-1/2 relative overflow-hidden gradient-shift ${
            isDarkMode 
              ? 'bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900'
              : 'bg-gradient-to-br from-purple-600 via-blue-600 to-indigo-800'
          }`}>
            <div className="absolute inset-0 bg-black/20"></div>
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
            
            {/* Enhanced Animated background elements */}
            <div className={`absolute top-20 left-20 w-32 h-32 rounded-full blur-xl float1 ${
              isDarkMode ? 'bg-cyan-400/20' : 'bg-white/10'
            }`}></div>
            <div className={`absolute bottom-40 right-20 w-24 h-24 rounded-full blur-lg float2 ${
              isDarkMode ? 'bg-purple-400/30' : 'bg-purple-300/20'
            }`}></div>
            <div className={`absolute top-1/2 left-10 w-16 h-16 rounded-full blur-md float3 ${
              isDarkMode ? 'bg-blue-400/25' : 'bg-blue-300/20'
            }`}></div>
            <div className={`absolute top-32 right-32 w-20 h-20 rounded-full blur-lg float4 ${
              isDarkMode ? 'bg-white/20' : 'bg-white/15'
            }`}></div>
            <div className={`absolute bottom-20 left-1/3 w-28 h-28 rounded-full blur-xl float5 ${
              isDarkMode ? 'bg-cyan-400/30' : 'bg-cyan-300/20'
            }`}></div>
            <div className={`absolute top-2/3 right-16 w-12 h-12 rounded-full blur-sm float6 ${
              isDarkMode ? 'bg-pink-400/35' : 'bg-pink-300/25'
            }`}></div>

            {/* AI Sparkle Effects */}
            <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full sparkle opacity-0"></div>
            <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-cyan-400 rounded-full sparkle opacity-0" style={{animationDelay: '1s'}}></div>
            <div className="absolute top-1/2 right-1/3 w-2 h-2 bg-pink-400 rounded-full sparkle opacity-0" style={{animationDelay: '2s'}}></div>
            
            <div className="relative z-10 flex flex-col justify-center items-start p-12 text-white">
              <div className="flex items-center mb-8">
                <div className={`w-12 h-12 backdrop-blur-sm rounded-xl flex items-center justify-center mr-4 border group cursor-pointer pulse-glow ${
                  isDarkMode 
                    ? 'bg-cyan-500/20 border-cyan-400/30' 
                    : 'bg-white/20 border-white/30'
                }`}>
                  <Bot className="w-6 h-6 text-white transition-transform duration-300 group-hover:scale-110 group-hover:rotate-12" />
                </div>
                <h1 className="text-3xl font-bold">MagicPrompt</h1>
                <Sparkles className="w-6 h-6 ml-2 text-yellow-400 sparkle" />
              </div>
              
              <h2 className="text-4xl lg:text-5xl font-bold mb-6 leading-tight">
                Welcome to
                <span className={`block bg-clip-text text-transparent ${
                  isDarkMode 
                    ? 'bg-gradient-to-r from-cyan-300 to-purple-300'
                    : 'bg-gradient-to-r from-yellow-300 to-pink-300'
                }`}>
                  AI Magic
                </span>
              </h2>
              
              <p className="text-lg text-white/80 mb-8 max-w-md leading-relaxed">
                Join thousands of creators who use MagicPrompt to generate amazing AI prompts. 
                Experience the next generation of AI-powered creativity.
              </p>
              
              <div className="flex items-center space-x-4">
                <div className="flex -space-x-2">
                  <div className={`w-10 h-10 rounded-full border-2 border-white ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-400 to-purple-400'
                      : 'bg-gradient-to-r from-pink-400 to-purple-400'
                  }`}></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-400 to-cyan-400 rounded-full border-2 border-white"></div>
                  <div className="w-10 h-10 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full border-2 border-white"></div>
                </div>
                <span className="text-white/60">Trusted by 50k+ creators</span>
              </div>
            </div>
          </div>

          {/* Right Side - Form Section */}
          <div className={`w-full lg:w-1/2 flex items-center justify-center p-8 theme-transition ${
            isDarkMode ? 'bg-gray-800' : 'bg-white'
          }`}>
            <div className="w-full max-w-md">
              <div className="text-center mb-8">
                <div className="flex justify-center mb-4">
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center group cursor-pointer shadow-lg pulse-glow ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600'
                  }`}>
                    <Bot className="w-8 h-8 text-white transition-all duration-500 group-hover:scale-125 group-hover:rotate-[360deg]" />
                  </div>
                </div>
                <h3 className={`text-2xl font-bold mb-2 theme-transition ${
                  isDarkMode ? 'text-white' : 'text-gray-900'
                }`}>
                  {isSignIn ? 'Welcome Back' : 'Join MagicPrompt'}
                </h3>
                <p className={`theme-transition ${
                  isDarkMode ? 'text-gray-300' : 'text-gray-600'
                }`}>
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
                  className={`w-full h-12 border-2 transition-all duration-200 hover:scale-[1.02] theme-transition ${
                    isDarkMode 
                      ? 'border-gray-600 bg-gray-700 text-white hover:bg-gray-600'
                      : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-50'
                  }`}
                  onClick={() => handleSocialAuth('google')}
                >
                  <FcGoogle className="w-5 h-5 mr-3" />
                  Continue with Google
                </Button>
                
                <Button
                  type="button"
                  variant="outline"
                  className={`w-full h-12 border-2 transition-all duration-200 hover:scale-[1.02] theme-transition ${
                    isDarkMode 
                      ? 'border-gray-600 bg-gray-700 text-white hover:bg-white hover:text-gray-900'
                      : 'border-gray-300 bg-white text-gray-900 hover:bg-gray-900 hover:text-white'
                  }`}
                  onClick={() => handleSocialAuth('github')}
                >
                  <Github className="w-5 h-5 mr-3" />
                  Continue with GitHub
                </Button>
              </div>

              <div className="relative mb-6">
                <div className="absolute inset-0 flex items-center">
                  <div className={`w-full border-t theme-transition ${
                    isDarkMode ? 'border-gray-600' : 'border-gray-300'
                  }`}></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className={`px-4 theme-transition ${
                    isDarkMode ? 'bg-gray-800 text-gray-400' : 'bg-white text-gray-500'
                  }`}>Or continue with email</span>
                </div>
              </div>

              {/* Form */}
              <form onSubmit={handleSubmit} className="space-y-5">
                {!isSignIn && (
                  <div className="space-y-2">
                    <Label htmlFor="name" className={`text-sm font-medium theme-transition ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      type="text"
                      placeholder="Enter your full name"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      className={`h-12 border-2 transition-colors theme-transition ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                      }`}
                      required={!isSignIn}
                    />
                  </div>
                )}
                
                <div className="space-y-2">
                  <Label htmlFor="email" className={`text-sm font-medium theme-transition ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Email Address
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className={`h-12 border-2 transition-colors theme-transition ${
                      isDarkMode 
                        ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                        : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                    }`}
                    required
                  />
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="password" className={`text-sm font-medium theme-transition ${
                    isDarkMode ? 'text-gray-300' : 'text-gray-700'
                  }`}>
                    Password
                  </Label>
                  <div className="relative">
                    <Input
                      id="password"
                      type={showPassword ? "text" : "password"}
                      placeholder="Enter your password"
                      value={formData.password}
                      onChange={(e) => setFormData({...formData, password: e.target.value})}
                      className={`h-12 border-2 transition-colors pr-12 theme-transition ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                      }`}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className={`absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors ${
                        isDarkMode ? 'text-gray-400 hover:text-gray-200' : 'text-gray-500 hover:text-gray-700'
                      }`}
                    >
                      {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                    </button>
                  </div>
                </div>

                {!isSignIn && (
                  <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className={`text-sm font-medium theme-transition ${
                      isDarkMode ? 'text-gray-300' : 'text-gray-700'
                    }`}>
                      Confirm Password
                    </Label>
                    <Input
                      id="confirmPassword"
                      type="password"
                      placeholder="Confirm your password"
                      value={formData.confirmPassword}
                      onChange={(e) => setFormData({...formData, confirmPassword: e.target.value})}
                      className={`h-12 border-2 transition-colors theme-transition ${
                        isDarkMode 
                          ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400 focus:border-cyan-500'
                          : 'bg-white border-gray-300 text-gray-900 focus:border-purple-500'
                      }`}
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
                        className={`h-4 w-4 rounded focus:ring-2 ${
                          isDarkMode 
                            ? 'text-cyan-600 focus:ring-cyan-500 border-gray-600 bg-gray-700'
                            : 'text-purple-600 focus:ring-purple-500 border-gray-300 bg-white'
                        }`}
                      />
                      <Label htmlFor="remember" className={`ml-2 text-sm theme-transition ${
                        isDarkMode ? 'text-gray-300' : 'text-gray-600'
                      }`}>
                        Remember me
                      </Label>
                    </div>
                    <button
                      type="button"
                      className={`text-sm font-medium transition-colors ${
                        isDarkMode 
                          ? 'text-cyan-400 hover:text-cyan-300'
                          : 'text-purple-600 hover:text-purple-800'
                      }`}
                    >
                      Forgot password?
                    </button>
                  </div>
                )}

                <Button
                  type="submit"
                  className={`w-full h-12 text-white font-medium transition-all duration-200 hover:scale-[1.02] shadow-lg ${
                    isDarkMode 
                      ? 'bg-gradient-to-r from-cyan-600 to-purple-600 hover:from-cyan-700 hover:to-purple-700'
                      : 'bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700'
                  }`}
                >
                  {isSignIn ? 'Sign In to MagicPrompt' : 'Create Account'}
                </Button>
              </form>

              <div className="text-center mt-6">
                <span className={`theme-transition ${
                  isDarkMode ? 'text-gray-400' : 'text-gray-600'
                }`}>
                  {isSignIn ? "Don't have an account? " : "Already have an account? "}
                </span>
                <button
                  type="button"
                  onClick={() => setIsSignIn(!isSignIn)}
                  className={`font-medium transition-colors ${
                    isDarkMode 
                      ? 'text-cyan-400 hover:text-cyan-300'
                      : 'text-purple-600 hover:text-purple-800'
                  }`}
                >
                  {isSignIn ? 'Sign up' : 'Sign in'}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default AuthPage;
