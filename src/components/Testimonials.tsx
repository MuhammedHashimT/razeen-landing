import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Jumaila Wafiyya",
    course: "Translation Course",
    rating: 5,
    image: "/avatar.png",
    text: "Learn with Razeen's translation course uses simple methods ideal for beginners, offering clear instructions and insights into professional translation, building confidence and clarity in both Arabic and English. Highly recommended!"
  },
  {
    name: "Muhammad Salim Hudawi",
    course: "Translation Course",
    rating: 5,
    image: "/avatar.png",
    text: "As an Arabic college student, I knew translation basics. This systematic online course exceeded expectations—taught me work management, official records handling, and effective translation. Alhamdulillah, I’m fully satisfied and grateful."
  },
  {
    name: "Hasna Thasnim",
    course: "Translation Course",
    rating: 5,
    image: "/avatar.png",
    text: "I completed the Learn with Razeen Translation Course. It offers structured, easy-to-understand classes and activities across 15 modules, helping build confidence from beginner to advanced level."
  }
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            What Our Students Say
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Don't just take our word for it - hear from thousands of successful students
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg p-6 relative">
              <div className="absolute -top-3 left-6">
                <div className="bg-blue-600 p-2 rounded-full">
                  <Quote className="text-white" size={20} />
                </div>
              </div>
              
              <div className="pt-4">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400 fill-current" size={20} />
                  ))}
                </div>
                
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "{testimonial.text}"
                </p>
                
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900">{testimonial.name}</h4>
                    <p className="text-sm text-gray-500">{testimonial.course}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
