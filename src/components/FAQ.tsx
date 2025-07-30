import React, { useState } from 'react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';

const faqs = [
  {
    question: "How do I enroll in a course?",
    answer: "Simply browse our course catalog, select the course you're interested in, and click 'Enroll Now'. You'll be connected with us via WhatsApp to complete the enrollment process and begin your Islamic learning journey."
  },
  {
    question: "Are the certificates embassy-attested?",
    answer: "Yes! All our certificates are embassy-attested and government-approved, making them internationally recognized and valuable for career advancement and further studies."
  },
  {
    question: "How long do I have access to course materials?",
    answer: "Once you enroll in a course, you have lifetime access to all course materials through our app-based learning platform. You can learn at your own pace with both live and recorded sessions."
  },
  {
    question: "Do you provide personal mentorship?",
    answer: "Absolutely! We provide one-on-one guidance from expert instructors with years of teaching experience in Islamic studies. Our mentors are committed to your success."
  },
  {
    question: "What are the prerequisites for Islamic studies courses?",
    answer: "Most of our courses are designed for beginners and require no prior experience. Some advanced courses may require basic Arabic knowledge, which is clearly mentioned on each course page."
  },
  {
    question: "Can I access courses on mobile devices?",
    answer: "Yes! Our app-based learning platform works seamlessly on all devices. You can access live sessions, recorded lectures, and study materials anytime, anywhere."
  },
  {
    question: "What support is available during the course?",
    answer: "We provide comprehensive support including personal mentorship, WhatsApp support, discussion forums, and direct access to instructors for all your learning needs."
  },
  {
    question: "How are the courses structured?",
    answer: "Our courses combine traditional Islamic learning methods with modern technology, featuring live sessions, recorded lectures, practical exercises, and authentic Islamic texts and references."
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
            <HelpCircle size={32} className="text-blue-600" />
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Find answers to common questions about our courses and platform
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
              <button
                className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-gray-50 transition-colors"
                onClick={() => toggleFAQ(index)}
              >
                <h3 className="text-lg font-semibold text-gray-900 pr-4">
                  {faq.question}
                </h3>
                {openIndex === index ? (
                  <ChevronUp className="text-blue-600 flex-shrink-0" size={24} />
                ) : (
                  <ChevronDown className="text-gray-400 flex-shrink-0" size={24} />
                )}
              </button>
              
              {openIndex === index && (
                <div className="px-6 pb-4">
                  <p className="text-gray-600 leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <div className="bg-white rounded-xl p-8 shadow-sm">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">
              Still have questions?
            </h2>
            <p className="text-gray-600 mb-6">
              Can't find the answer you're looking for? Our support team is here to help.
            </p>
            <a
              href="https://wa.me/919746822548?text=Hi! I have a question about your courses."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
            >
              Contact Support
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}