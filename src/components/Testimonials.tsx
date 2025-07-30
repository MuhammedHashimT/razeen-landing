import React from 'react';
import { Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Ahmed Hassan",
    course: "Web Development Fundamentals",
    rating: 5,
    image: "/5e0cd223-e370-4a03-a16a-5dcbf002f486.jpg",
    text: "Learn with Razeen transformed my career! The instructors are incredibly knowledgeable and the course content is practical and up-to-date. Highly recommended!"
  },
  {
    name: "Fatima Al-Zahra",
    course: "Data Science & Analytics",
    rating: 5,
    image: "/94bcbf14-29c0-46a7-9659-c1083341841e.jpg",
    text: "The personal mentorship and app-based learning made it so convenient to study while working. The certificate is embassy-attested which helped me get my dream job!"
  },
  {
    name: "Mohammed Ibrahim",
    course: "Advanced Programming Concepts",
    rating: 5,
    image: "/a5596dda-20ba-42ae-a87b-084b35ab43d1.jpg",
    text: "Excellent teaching methodology and great support from instructors. The flexible schedule allowed me to learn at my own pace. Worth every rupee spent!"
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
