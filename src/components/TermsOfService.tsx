import React from 'react';
import { FileText, Users, CreditCard, AlertTriangle } from 'lucide-react';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12">
          <div className="text-center mb-12">
            <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
              <FileText size={32} className="text-blue-600" />
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Terms of Service
            </h1>
            <p className="text-gray-600">
              Last updated: January 2025
            </p>
          </div>

          <div className="space-y-8">
            <section>
              <div className="flex items-center gap-3 mb-4">
                <Users className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">User Accounts</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                To access our courses, you must create an account and provide accurate information.
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>You are responsible for maintaining the security of your account</li>
                <li>You must be at least 13 years old to create an account</li>
                <li>One account per person - sharing accounts is prohibited</li>
                <li>You must notify us immediately of any unauthorized use</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <CreditCard className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Payment and Refunds</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                Course fees are due at the time of enrollment. We offer a satisfaction guarantee:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Full refund available within 30 days of purchase</li>
                <li>Refunds processed within 5-7 business days</li>
                <li>Access to course materials will be revoked upon refund</li>
                <li>Certificates earned will be invalidated if refund is processed</li>
              </ul>
            </section>

            <section>
              <div className="flex items-center gap-3 mb-4">
                <AlertTriangle className="text-blue-600" size={24} />
                <h2 className="text-2xl font-bold text-gray-900">Prohibited Activities</h2>
              </div>
              <p className="text-gray-600 leading-relaxed mb-4">
                The following activities are strictly prohibited:
              </p>
              <ul className="list-disc list-inside text-gray-600 space-y-2">
                <li>Sharing course materials with non-enrolled users</li>
                <li>Recording or redistributing course content</li>
                <li>Using the platform for any illegal activities</li>
                <li>Attempting to hack or compromise our systems</li>
                <li>Harassing other students or instructors</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Limitation of Liability</h2>
              <p className="text-gray-600 leading-relaxed">
                Learn With Razeen  provides educational content "as is" without warranties. 
                We are not liable for any indirect, incidental, or consequential damages arising 
                from your use of our services.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Contact Information</h2>
              <p className="text-gray-600 leading-relaxed">
                Questions about these terms? Contact us:
              </p>
              <div className="mt-4 p-4 bg-blue-50 rounded-lg">
                <p className="text-gray-700">
                  <strong>Email:</strong> legal@learnwithrazeen.in<br />
                  <strong>Phone:</strong> +1 (555) 123-4567
                </p>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}