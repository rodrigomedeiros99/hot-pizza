"use client";

import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="py-20 bg-gray-100" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl text-gray-800 font-bold mb-4">Contact Us</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Have a question or feedback? We would love to hear from you.
          </p>
        </div>
        <div className="grid md:grid-cols-2 gap-12">
          <div
            className="w-full ring-1 ring-gray-200 shadow-xl shadow-gray-600  h-96 rounded-lg overflow-hidden"
            data-aos="fade-right"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.9663095343008!2d-74.00425872439819!3d40.74076427932881!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1686416314071!5i"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
          <div className="space-y-8" data-aos="fade-left">
            <div className="flex items-start space-x-4">
              <FaPhone className="text-red-500 text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-lg text-gray-600 font-semibold mb-1">
                  Phone
                </h3>
                <p className="text-gray-600">+1 (555) 123-4567</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaEnvelope className="text-red-500 text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-lg text-gray-600 font-semibold mb-1">
                  Email
                </h3>
                <p className="text-gray-600">info@deliciouspizza.com</p>
              </div>
            </div>
            <div className="flex items-start space-x-4">
              <FaMapMarkerAlt className="text-red-500 text-2xl flex-shrink-0" />
              <div>
                <h3 className="text-lg text-gray-600 font-semibold mb-1">
                  Address
                </h3>
                <p className="text-gray-600">
                  123 Pizza Street
                  <br />
                  New York, NY 10001
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
