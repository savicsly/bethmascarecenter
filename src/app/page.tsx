"use client";

import ImageCarousel from "@/components/ImageCarousel";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  CheckCircle,
  Heart,
  MessageCircle,
  Target,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const services = [
  {
    icon: Brain,
    title: "ABA Therapy",
    description:
      "Applied Behavior Analysis therapy tailored to each child's unique needs and developmental goals.",
    color: "bg-blue-500",
  },
  {
    icon: BookOpen,
    title: "Special Education",
    description:
      "Individualized education plans designed to help children with learning differences thrive academically.",
    color: "bg-emerald-500",
  },
  {
    icon: MessageCircle,
    title: "Speech Therapy",
    description:
      "Communication development programs to enhance language skills and social interaction.",
    color: "bg-purple-500",
  },
  {
    icon: Target,
    title: "Behavioral Support",
    description:
      "Comprehensive behavioral intervention plans to address challenging behaviors positively.",
    color: "bg-orange-500",
  },
];

const achievements = [
  { number: "500+", label: "Children Helped" },
  { number: "95%", label: "Success Rate" },
  { number: "15+", label: "Years Experience" },
  { number: "50+", label: "Certified Staff" },
];

const images = [
  "/images/image-01.jpeg",
  "/images/image-02.jpeg",
  "/images/image-03.jpeg",
  "/images/image-04.jpeg",
  "/images/image-05.jpeg",
];

export default function Home() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center bg-gradient-to-br from-blue-50 via-white to-emerald-50 overflow-hidden pt-32 md:pt-28">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-5">
          <div className="absolute top-10 left-10 w-20 h-20 bg-blue-600 rounded-full"></div>
          <div className="absolute top-32 right-20 w-16 h-16 bg-emerald-500 rounded-full"></div>
          <div className="absolute bottom-20 left-32 w-12 h-12 bg-purple-500 rounded-full"></div>
          <div className="absolute bottom-32 right-10 w-24 h-24 bg-orange-500 rounded-full"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-4 py-2 rounded-full text-sm font-medium mb-6"
            >
              <Heart className="h-4 w-4" />
              <span>Supporting Special Children Since 2010</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 font-poppins leading-tight"
            >
              Empowering Children with
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                {" "}
                Special Needs
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="text-xl text-gray-600 mb-8 max-w-2xl"
            >
              Professional special education and behavioral intervention center
              in Abuja. We support children with Autism, ADHD, and Learning
              Disabilities through evidence-based practices and individualized
              care.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-transparent text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300 transform hover:scale-105"
              >
                Our Services
              </Link>
            </motion.div>

            {/* Quick Stats */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
              className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12"
            >
              {achievements.map((achievement, index) => (
                <div key={index} className="text-center">
                  <div className="text-2xl lg:text-3xl font-bold text-blue-600 font-poppins">
                    {achievement.number}
                  </div>
                  <div className="text-gray-600 text-sm">
                    {achievement.label}
                  </div>
                </div>
              ))}
            </motion.div>
          </motion.div>

          {/* Hero Image/Carousel */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative"
          >
            <ImageCarousel />
          </motion.div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Our Specialized Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Evidence-based interventions designed to support every child's
              unique journey
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -10 }}
                className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 p-6 text-center group"
              >
                <div
                  className={`${service.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {service.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.1 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
                About Bethmas Care Center
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Since 2010, we've been dedicated to providing exceptional
                special education and behavioral intervention services for
                children with developmental differences. Our evidence-based
                approach ensures every child receives personalized care.
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">
                    Certified Special Education Teachers
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">
                    Individualized Education Plans (IEP)
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">
                    Multi-Environment Support
                  </span>
                </div>
                <div className="flex items-center space-x-3">
                  <CheckCircle className="h-5 w-5 text-emerald-500" />
                  <span className="text-gray-700">
                    Family-Centered Approach
                  </span>
                </div>
              </div>

              <Link
                href="/about"
                className="inline-flex items-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
              >
                Learn More About Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true, amount: 0.1 }}
              className="relative"
            >
              <div className="bg-blue-600 rounded-2xl p-8 text-white">
                <div className="flex items-center mb-6">
                  <Award className="h-8 w-8 text-yellow-400 mr-3" />
                  <h3 className="text-2xl font-bold font-poppins">
                    Our Mission
                  </h3>
                </div>
                <p className="text-blue-100 text-lg leading-relaxed">
                  To provide individualized, evidence-based educational and
                  behavioral interventions for children with special needs,
                  empowering them to reach their full potential in a supportive,
                  nurturing environment.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Image Gallery Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 font-poppins">
              Our Learning Environment
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Take a glimpse into our specialized facilities designed for
              optimal learning
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {images.slice(0, 6).map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ scale: 1.05 }}
                className="relative h-64 rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <Image
                  src={image}
                  alt={`Bethmas Care Center facility ${index + 1}`}
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-blue-600 to-emerald-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6 font-poppins">
              Ready to Start Your Child's Journey?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Take the first step towards unlocking your child's potential.
              Schedule a consultation with our expert team today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Free Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300 transform hover:scale-105"
              >
                View Our Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
