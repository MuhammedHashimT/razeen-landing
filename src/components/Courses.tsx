import React from 'react';
import { Clock, Users, Star } from 'lucide-react';

const courses = [
  {
    id: 1,
    title: "Islamic Studies Foundation",
    description: "Learn fundamental Quran recitation, and basic Arabic from qualified scholars.",
    image: "/5e0cd223-e370-4a03-a16a-5dcbf002f486.jpg",
    duration: "12 weeks",
    students: "2,500+",
    rating: 4.8,
    price: "₹2,500"
  },
  {
    id: 2,
    title: "Advanced Arabic Language",
    description: "Master Arabic grammar, vocabulary, and conversation with experienced native speakers.",
    image: "/94bcbf14-29c0-46a7-9659-c1083341841e.jpg",
    duration: "16 weeks",
    students: "1,800+",
    rating: 4.9,
    price: "₹3,500"
  },
  {
    id: 3,
    title: "Hadith & Tafseer Studies",
    description: "Deep dive into Hadith sciences and Quranic interpretation with scholarly guidance.",
    image: "/a5596dda-20ba-42ae-a87b-084b35ab43d1.jpg",
    duration: "20 weeks",
    students: "1,200+",
    rating: 4.7,
    price: "₹4,500"
  }
];

export default function Courses() {
  return (
    <section id="courses" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Featured Courses
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose from our carefully crafted courses designed by industry experts
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {courses.map((course) => (
            <div key={course.id} className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow group">
              <div className="relative overflow-hidden">
                <img 
                  src={course.image} 
                  alt={course.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute top-4 right-4 bg-blue-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                  {course.price}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-2">{course.title}</h3>
                <p className="text-gray-600 mb-4">{course.description}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Clock size={16} />
                    {course.duration}
                  </div>
                  <div className="flex items-center gap-1">
                    <Users size={16} />
                    {course.students}
                  </div>
                  <div className="flex items-center gap-1">
                    <Star size={16} className="fill-yellow-400 text-yellow-400" />
                    {course.rating}
                  </div>
                </div>
                
                <button 
                  onClick={() => window.open('https://wa.me/919746822548?text=Hi! I\'m interested in enrolling for the ' + course.title + ' course.', '_blank')}
                  className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                >
                  Enroll Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}