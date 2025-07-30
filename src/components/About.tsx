import React from 'react';
import { Award, BookOpen, Users, Target, Shield, UserCheck, Smartphone } from 'lucide-react';

const features = [
  { 
    icon: Shield, 
    title: "Certified Courses", 
    description: "Embassy-attested & government-approved certifications that boost your career prospects"
  },
  { 
    icon: UserCheck, 
    title: "Personal Mentorship", 
    description: "One-on-one guidance from expert instructors with years of teaching experience"
  },
  { 
    icon: Smartphone, 
    title: "App-based Learning", 
    description: "Flexible study schedule with live & recorded sessions accessible anytime, anywhere"
  }
];

export default function About() {
  return (
    <section id="about" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Why Choose Learn With Razeen?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            We're committed to providing high-quality Islamic education that empowers students to achieve their goals and transform their careers.
          </p>
          
          {/* Enhanced Stats Section */}
          <div className="bg-gradient-to-r from-blue-600 to-indigo-700 rounded-2xl p-8 text-white shadow-xl">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">5+</div>
                <div className="text-blue-100">Years of Excellence</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100+</div>
                <div className="text-blue-100">Happy Students</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold mb-2">100%</div>
                <div className="text-blue-100">Certified Courses</div>
              </div>
            </div>
            
            {/* <div className="mt-8 pt-6 border-t border-blue-400/30">
              <div className="flex flex-col md:flex-row items-center justify-center gap-4 text-center">
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">Based at Darul Huda Islamic University</span>
                </div>
                <div className="hidden md:block w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">Kerala, India</span>
                </div>
                <div className="hidden md:block w-2 h-2 bg-blue-400 rounded-full"></div>
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                  <span className="text-blue-100">Globally Recognized</span>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="grid md:grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
          {features.map((feature, index) => (
            <div key={index} className="text-center bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <feature.icon size={32} className="text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}