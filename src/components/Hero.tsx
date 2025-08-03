import React from 'react';
import { ArrowRight, Play, BookOpen, Users, Award } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="relative bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
        <div className="absolute top-40 right-20 w-72 h-72 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-1000"></div>
        <div className="absolute -bottom-8 left-20 w-80 h-80 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse delay-2000"></div>
      </div>
      
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-20 pb-16">
        <div className="gap-12 items-center">
          {/* Left Content */}
          <div className="text-center">
            
            <h1 className="text-5xl md:text-7xl font-bold text-gray-900 mb-6 leading-tight">
              Learn with {" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 block lg:inline">
                Razeen
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Master Linguistics, Translation, and Islamic studies with <span className="font-semibold text-blue-600">certified courses</span>, personal mentorship, and flexible learning from government authorized institution.
            </p>
            
            {/* Quick Stats */}
            <div className="flex flex-wrap justify-center gap-6 mb-8">
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2">
                <BookOpen className="text-blue-600" size={20} />
                <span className="text-sm font-medium text-gray-700">3+ Courses</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2">
                <Users className="text-blue-600" size={20} />
                <span className="text-sm font-medium text-gray-700">100+ Students</span>
              </div>
              <div className="flex items-center gap-2 bg-white/70 backdrop-blur-sm rounded-lg px-4 py-2">
                <Award className="text-blue-600" size={20} />
                <span className="text-sm font-medium text-gray-700">Certified</span>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.open('https://wa.me/919746822548?text=Hi! I\'m interested in learning more about your courses.', '_blank')}
                className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-semibold hover:from-blue-700 hover:to-indigo-700 transition-all duration-300 flex items-center gap-2 group shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Get Started Today
                <ArrowRight size={20} className="group-hover:translate-x-1 transition-transform" />
              </button>
              <button 
                onClick={() => window.open('https://www.youtube.com/watch?v=GgiZt_SzuTk', '_blank')}
                className="border-2 border-blue-600 text-blue-600 px-8 py-4 rounded-xl font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 flex items-center gap-2 group backdrop-blur-sm bg-white/50"
              >
                <Play size={20} className="group-hover:scale-110 transition-transform" />
                Watch Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}