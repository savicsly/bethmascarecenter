import {
  Clock,
  Facebook,
  Heart,
  Instagram,
  Linkedin,
  Mail,
  MapPin,
  Phone,
  Twitter,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Bethmas Care Center"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
              <div>
                <h3 className="text-xl font-bold font-poppins">
                  Bethmas Care Center
                </h3>
                <p className="text-gray-400 text-sm">
                  Special Education & Behavioral Intervention
                </p>
              </div>
            </div>
            <p className="text-gray-300 mb-6 max-w-md">
              Supporting children with Autism, ADHD, Learning Disabilities, and
              other developmental challenges through evidence-based practices
              and individualized care plans.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-gray-400 hover:text-blue-400 transition-colors duration-200"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/about"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Our Services
                </Link>
              </li>
              <li>
                <Link
                  href="/programs"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Programs
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Contact Us
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-300 hover:text-white transition-colors duration-200"
                >
                  Resources
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-lg font-semibold mb-6 font-poppins">
              Contact Info
            </h4>
            <div className="space-y-4">
              <div className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <p className="text-gray-300 text-sm">
                  Plot 123, Gwarinpa District,
                  <br />
                  Abuja, FCT, Nigeria
                </p>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">+234 (0) 809 123 4567</p>
              </div>
              <div className="flex items-center space-x-3">
                <Mail className="h-5 w-5 text-blue-400 flex-shrink-0" />
                <p className="text-gray-300 text-sm">info@bethmascare.ng</p>
              </div>
              <div className="flex items-start space-x-3">
                <Clock className="h-5 w-5 text-blue-400 mt-0.5 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p>Mon - Fri: 8:00 AM - 5:00 PM</p>
                  <p>Sat: 9:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Services Grid */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <h4 className="text-lg font-semibold mb-6 font-poppins text-center">
            Our Specialized Services
          </h4>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div className="text-gray-300 text-sm">
              <p className="font-medium text-blue-400">ABA Therapy</p>
              <p>Applied Behavior Analysis</p>
            </div>
            <div className="text-gray-300 text-sm">
              <p className="font-medium text-blue-400">Special Education</p>
              <p>Individualized Learning</p>
            </div>
            <div className="text-gray-300 text-sm">
              <p className="font-medium text-blue-400">Speech Therapy</p>
              <p>Communication Development</p>
            </div>
            <div className="text-gray-300 text-sm">
              <p className="font-medium text-blue-400">Social Skills</p>
              <p>Peer Interaction Training</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center space-x-2 text-gray-400 text-sm">
            <span>© 2025 Bethmas Care Center Abuja. All rights reserved.</span>
          </div>
          <div className="flex items-center space-x-2 text-gray-400 text-sm mt-4 md:mt-0">
            <span>Made with</span>
            <Heart className="h-4 w-4 text-red-500" />
            <span>for special children</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
