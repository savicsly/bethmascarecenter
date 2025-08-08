"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import {
  Calendar,
  Clock,
  Heart,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  Send,
  Star,
  Users,
} from "lucide-react";
import Image from "next/image";

const contactInfo = [
  {
    icon: Phone,
    title: "Phone",
    details: ["+234 (0) 809 123 4567", "+234 (0) 703 456 7890"],
    color: "bg-blue-500",
  },
  {
    icon: Mail,
    title: "Email",
    details: ["info@bethmascare.ng", "admissions@bethmascare.ng"],
    color: "bg-emerald-500",
  },
  {
    icon: MapPin,
    title: "Address",
    details: ["Plot 123, Gwarinpa District", "Abuja, FCT, Nigeria"],
    color: "bg-purple-500",
  },
  {
    icon: Clock,
    title: "Office Hours",
    details: ["Mon - Fri: 8:00 AM - 5:00 PM", "Sat: 9:00 AM - 2:00 PM"],
    color: "bg-orange-500",
  },
];

const services = [
  "Initial Consultation",
  "Comprehensive Assessment",
  "ABA Therapy",
  "Special Education",
  "Speech Therapy",
  "Social Skills Training",
  "Behavioral Intervention",
  "Parent Training",
  "School Support",
  "Home-Based Services",
];

const faqs = [
  {
    question: "What age groups do you serve?",
    answer:
      "We serve children from 18 months to 18 years old, with specialized programs for different developmental stages.",
  },
  {
    question: "Do you accept insurance?",
    answer:
      "We work with several insurance providers and offer various payment options. Contact us to discuss your specific situation.",
  },
  {
    question: "How long does the initial assessment take?",
    answer:
      "The comprehensive assessment typically takes 2-3 hours and includes developmental, behavioral, and educational evaluations.",
  },
  {
    question: "Can services be provided at home?",
    answer:
      "Yes, we offer home-based services, school-based support, and center-based programs to meet your family's needs.",
  },
];

export default function Contact() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <Badge
                variant="secondary"
                className="mb-6 bg-blue-100 text-blue-800"
              >
                Contact Us
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
                Ready to Begin Your
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  {" "}
                  Child's Journey?
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                Take the first step towards unlocking your child's potential.
                Our team is here to answer your questions and help you find the
                right services for your family.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <div className="flex items-center space-x-3">
                  <div className="bg-blue-100 p-2 rounded-full">
                    <Phone className="h-5 w-5 text-blue-600" />
                  </div>
                  <span className="text-gray-700">
                    Call us directly at +234 (0) 809 123 4567
                  </span>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[400px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/image-21.jpeg"
                  alt="Bethmas Care Center contact"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Get in Touch
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Multiple ways to reach us - choose what's most convenient for you
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div
                      className={`${info.color} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4`}
                    >
                      <info.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">
                      {info.title}
                    </h3>
                    <div className="space-y-1">
                      {info.details.map((detail, detailIndex) => (
                        <p key={detailIndex} className="text-gray-600 text-sm">
                          {detail}
                        </p>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          {/* Contact Form and Map */}
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            >
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-2xl font-poppins flex items-center">
                    <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
                    Send us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName">First Name *</Label>
                      <Input
                        id="firstName"
                        placeholder="Enter your first name"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName">Last Name *</Label>
                      <Input id="lastName" placeholder="Enter your last name" />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address *</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone Number</Label>
                    <Input
                      id="phone"
                      type="tel"
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="childAge">Child's Age</Label>
                    <Input id="childAge" placeholder="Enter your child's age" />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="service">Service of Interest</Label>
                    <select
                      id="service"
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service}>
                          {service}
                        </option>
                      ))}
                    </select>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">Message *</Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your child's needs and how we can help..."
                      className="min-h-[120px]"
                    />
                  </div>

                  <Button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3">
                    <Send className="h-4 w-4 mr-2" />
                    Send Message
                  </Button>

                  <p className="text-sm text-gray-600 text-center">
                    We typically respond within 24 hours during business days.
                  </p>
                </CardContent>
              </Card>
            </motion.div>

            {/* Map and Additional Info */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 1.0 }}
              className="space-y-8"
            >
              {/* Map Placeholder */}
              <Card className="shadow-xl">
                <CardContent className="p-0">
                  <div className="relative h-64 bg-gray-200 rounded-t-lg overflow-hidden">
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-gray-400 mx-auto mb-2" />
                        <p className="text-gray-600">Interactive Map</p>
                        <p className="text-sm text-gray-500">
                          Plot 123, Gwarinpa District, Abuja
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3">
                      Visit Our Center
                    </h3>
                    <p className="text-gray-600 mb-4">
                      We're conveniently located in Gwarinpa District, easily
                      accessible by public transportation and with ample parking
                      for visitors.
                    </p>
                    <div className="flex items-center space-x-2">
                      <Badge
                        variant="outline"
                        className="text-emerald-600 border-emerald-600"
                      >
                        <Users className="h-3 w-3 mr-1" />
                        Family Friendly
                      </Badge>
                      <Badge
                        variant="outline"
                        className="text-blue-600 border-blue-600"
                      >
                        <Heart className="h-3 w-3 mr-1" />
                        Wheelchair Accessible
                      </Badge>
                    </div>
                  </div>
                </CardContent>
              </Card>

              {/* Quick Actions */}
              <Card className="shadow-xl">
                <CardHeader>
                  <CardTitle className="text-xl font-poppins">
                    Quick Actions
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Calendar className="h-4 w-4 mr-3" />
                    Schedule a Tour
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Star className="h-4 w-4 mr-3" />
                    Request Assessment
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <MessageSquare className="h-4 w-4 mr-3" />
                    Ask a Question
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Phone className="h-4 w-4 mr-3" />
                    Emergency Contact
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Quick answers to common questions about our services and processes
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            {faqs.map((faq, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">
                      {faq.question}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">
                      {faq.answer}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mt-12"
          >
            <p className="text-gray-600 mb-6">
              Don't see your question answered? We're here to help!
            </p>
            <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3">
              <MessageSquare className="h-4 w-4 mr-2" />
              Contact Us Directly
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Emergency Contact */}
      <section className="py-12 bg-red-50 border-t-4 border-red-500">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center"
          >
            <div className="bg-red-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
              <Phone className="h-8 w-8 text-red-600" />
            </div>
            <h3 className="text-2xl font-bold text-gray-900 mb-4 font-poppins">
              Emergency Support
            </h3>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              For urgent behavioral crises or immediate support needs outside of
              business hours, please call our emergency line.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button className="bg-red-600 hover:bg-red-700 text-white px-8 py-3">
                <Phone className="h-4 w-4 mr-2" />
                Emergency: +234 (0) 818 000 0000
              </Button>
              <Button
                variant="outline"
                className="border-red-600 text-red-600 hover:bg-red-50 px-8 py-3"
              >
                Crisis Resources
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
