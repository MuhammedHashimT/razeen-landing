import React from 'react';
import { LifeBuoy, BookOpen, MessageCircle, Video, Download, Settings } from 'lucide-react';

const helpCategories = [
  {
    icon: BookOpen,
    title: "Getting Started",
    description: "Learn how to navigate the platform and enroll in your first course",
    articles: [
      "Creating your account",
      "Navigating the dashboard",
      "Enrolling in courses",
      "Setting up your profile"
    ]
  },
  {
    icon: Video,
    title: "Course Access",
    description: "Everything about accessing and viewing course content",
    articles: [
      "Accessing course materials",
      "Video playback issues",
      "Downloading resources",
      "Mobile app usage"
    ]
  },
  {
    icon: Settings,
    title: "Account Management",
    description: "Manage your account settings and preferences",
    articles: [
      "Updating profile information",
      "Changing password",
      "Email preferences",
      "Account deletion"
    ]
  },
  {
    icon: Download,
    title: "Certificates",
    description: "Information about course certificates and completion",
    articles: [
      "Earning certificates",
      "Downloading certificates",
      "Certificate verification",
      "Sharing on LinkedIn"
    ]
  }
];

export default function HelpCenter() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <LifeBuoy size={32} className="text-blue-600" />
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Help Center
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find guides, tutorials, and answers to help you make the most of your learning experience
          </p>
        </div>

        {/* Search Bar */}
        <div className="max-w-2xl mx-auto mb-12">
          <div className="relative">
            <input
              type="text"
              placeholder="Search for help articles..."
              className="w-full px-6 py-4 text-lg border border-gray-300 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent shadow-sm"
            />
            <button className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>
        </div>

        {/* Help Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {helpCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-6 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-100 p-3 rounded-lg">
                  <category.icon className="text-blue-600" size={24} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-gray-900">{category.title}</h3>
                  <p className="text-gray-600 text-sm">{category.description}</p>
                </div>
              </div>
              
              <ul className="space-y-2">
                {category.articles.map((article, articleIndex) => (
                  <li key={articleIndex}>
                    <a
                      href="#"
                      className="text-blue-600 hover:text-blue-700 hover:underline transition-colors"
                    >
                      {article}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Contact Support */}
        <div className="bg-white rounded-xl shadow-sm p-8 text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <MessageCircle size={32} className="text-blue-600" />
          </div>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Need Personal Assistance?
          </h2>
          <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
            Our support team is available 24/7 to help you with any questions or issues you might have.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
            <a
              href="mailto:support@learnwithrazeen.in"
              className="border-2 border-blue-600 text-blue-600 px-6 py-3 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-colors"
            >
              Email Us
            </a>
          </div>
          
          <div className="mt-6 text-sm text-gray-500">
            <p>Average response time: 2-4 hours</p>
          </div>
        </div>
      </div>
    </div>
  );
}