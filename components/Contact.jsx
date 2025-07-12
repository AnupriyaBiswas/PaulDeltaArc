import React from "react";
import { Mail, Phone, MapPin, Linkedin, FileText, Globe } from "lucide-react";

const Contact = () => {
  return (
    <div
      id="contact"
      className="w-full min-h-screen bg-gradient-to-br from-teal-50 to-cyan-50 py-12 px-4"
    >
      <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl p-8 sm:p-12">
        <h2 className="text-3xl sm:text-4xl font-bold text-center text-teal-700 mb-10">
          Get in Touch
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Left - Contact Info */}
          <div className="space-y-6">
            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mr-4">
                <Phone className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-medium">+91 7439556612</p>
                <p className="text-base font-medium">+91 6291463644</p>
              </div>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mr-4">
                <Mail className="w-5 h-5" />
              </div>
              <a
                href="mailto:info@pauldeltaarc.com"
                className="text-base font-medium text-teal-700 hover:underline break-all"
              >
                info@pauldeltaarc.com
              </a>
            </div>

            <div className="flex items-center">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mr-4">
                <Globe className="w-5 h-5" />
              </div>
              <a
                href="https://www.pauldeltaarc.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-base font-medium text-teal-700 hover:underline break-all"
              >
                www.pauldeltaarc.com
              </a>
            </div>

            <div className="flex items-start">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mr-4 mt-1">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-base font-medium">
                  Jagannath Apartment, Arunachal, Sodepur,
                </p>
                <p className="text-base font-medium">
                  Kolkata - 700110, West Bengal, India
                </p>
              </div>
            </div>
          </div>

          {/* Right - CTA + Social */}
          <div className="flex flex-col justify-between">
            <div className="text-center md:text-left mb-8 md:mb-0">
              <p className="text-lg font-semibold text-gray-800">
                We&#39;re always happy to talk!
              </p>
              <p className="text-sm text-gray-600 mt-2">
                Feel free to call us or drop an email. We&#39;re here to help with
                your electrical & engineering needs.
              </p>
            </div>

            <div className="flex justify-center md:justify-start gap-4">
              <a
                href="https://www.linkedin.com/company/pauldeltaarc"
                target="_blank"
                rel="noreferrer"
                className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-200 transition"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:info@pauldeltaarc.com"
                className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-200 transition"
              >
                <Mail className="w-5 h-5" />
              </a>
              {/* <a
                href="#"
                className="w-10 h-10 bg-teal-100 text-teal-600 rounded-lg flex items-center justify-center hover:bg-teal-200 transition"
              >
                <FileText className="w-5 h-5" />
              </a> */}
            </div>
          </div>
        </div>

        <div className="mt-10 text-center">
          <p className="text-sm text-gray-500 font-medium">
            Powering Precision, Delivering Reliability
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
