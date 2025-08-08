"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  Building,
  Calendar,
  Heart,
  MapPin,
  Star,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const values = [
  {
    icon: Heart,
    title: "Compassionate Care",
    description:
      "Every child deserves understanding, patience, and individualized attention.",
    color: "bg-red-500",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We maintain the highest standards in special education and therapy services.",
    color: "bg-yellow-500",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working closely with families, schools, and communities for optimal outcomes.",
    color: "bg-blue-500",
  },
  {
    icon: Target,
    title: "Results-Focused",
    description:
      "Evidence-based practices that deliver measurable improvements.",
    color: "bg-emerald-500",
  },
];

const team = [
  {
    name: "Dr. Sarah Johnson",
    role: "Clinical Director",
    credentials: "Ph.D., BCBA-D",
    image: "/images/image-06.jpeg",
    description:
      "15+ years in Applied Behavior Analysis and autism intervention.",
  },
  {
    name: "Michael Thompson",
    role: "Lead Special Education Teacher",
    credentials: "M.Ed., Special Education",
    image: "/images/image-07.jpeg",
    description:
      "Specialized in individualized education planning and curriculum development.",
  },
  {
    name: "Dr. Amina Hassan",
    role: "Speech-Language Pathologist",
    credentials: "M.S., CCC-SLP",
    image: "/images/image-08.jpeg",
    description: "Expert in communication disorders and language development.",
  },
  {
    name: "Grace Adebayo",
    role: "Occupational Therapist",
    credentials: "M.OT, OTR/L",
    image: "/images/image-09.jpeg",
    description:
      "Focused on sensory integration and daily living skills development.",
  },
];

const achievements = [
  {
    year: "2010",
    event: "Center Founded",
    description:
      "Started with a vision to transform special education in Abuja",
  },
  {
    year: "2013",
    event: "First 100 Students",
    description: "Reached our first major milestone in student enrollment",
  },
  {
    year: "2016",
    event: "Accreditation Received",
    description: "Officially accredited by Nigeria Education Board",
  },
  {
    year: "2019",
    event: "Home-Based Services",
    description: "Expanded services to include in-home therapy programs",
  },
  {
    year: "2022",
    event: "500+ Families Served",
    description: "Celebrated serving over 500 families in our community",
  },
  {
    year: "2025",
    event: "Excellence Award",
    description: "Recognized as leading special education center in FCT",
  },
];

export default function About() {
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
                About Bethmas Care Center
              </Badge>
              <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
                Transforming Lives Through
                <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                  {" "}
                  Evidence-Based Care
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                For over 15 years, we've been at the forefront of special
                education in Abuja, providing comprehensive support for children
                with developmental differences and their families.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  Schedule a Visit
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
                <Link
                  href="/services"
                  className="inline-flex items-center justify-center bg-transparent text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
                >
                  Our Services
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              <div className="relative h-96 lg:h-[500px] rounded-2xl overflow-hidden shadow-2xl">
                <Image
                  src="/images/image-10.jpeg"
                  alt="Bethmas Care Center facility"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/20 to-transparent"></div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Our Story
            </h2>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
              Founded in 2010 by a group of dedicated educators and therapists,
              Bethmas Care Center emerged from a simple yet powerful belief:
              every child, regardless of their developmental challenges,
              deserves the opportunity to reach their full potential. What
              started as a small center in Abuja has grown into one of Nigeria's
              most respected special education facilities.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="text-center"
            >
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Building className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                Our Facility
              </h3>
              <p className="text-gray-600">
                State-of-the-art 5,000 sq ft facility with specialized therapy
                rooms, sensory integration spaces, and adaptive technology.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="text-center"
            >
              <div className="bg-emerald-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <MapPin className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                Our Reach
              </h3>
              <p className="text-gray-600">
                Serving families across Abuja and the Federal Capital Territory
                with center-based, home-based, and school-based interventions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{ once: true, amount: 0.1 }}
              className="text-center"
            >
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Calendar className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                Our Experience
              </h3>
              <p className="text-gray-600">
                15+ years of experience supporting children with autism, ADHD,
                learning disabilities, and other developmental challenges.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Our Core Values
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These principles guide everything we do and shape how we support
              every child and family
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Card className="text-center h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div
                      className={`${value.color} w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6`}
                    >
                      <value.icon className="h-8 w-8 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                      {value.title}
                    </h3>
                    <p className="text-gray-600">{value.description}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true, amount: 0.1 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Meet Our Expert Team
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our multidisciplinary team brings together years of experience and
              specialized training
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Card className="text-center hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardContent className="p-6">
                    <div className="relative w-24 h-24 mx-auto mb-4 rounded-full overflow-hidden">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                      {member.name}
                    </h3>
                    <Badge
                      variant="secondary"
                      className="mb-2 bg-blue-100 text-blue-800"
                    >
                      {member.credentials}
                    </Badge>
                    <p className="text-blue-600 font-medium mb-3">
                      {member.role}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
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
              Our Journey
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Key milestones in our mission to transform special education in
              Nigeria
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-px h-full w-0.5 bg-blue-200 hidden lg:block"></div>

            <div className="space-y-12">
              {achievements.map((achievement, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true, amount: 0.1 }}
                  className={`flex items-center ${
                    index % 2 === 0 ? "lg:flex-row" : "lg:flex-row-reverse"
                  } flex-col lg:flex-row`}
                >
                  <div
                    className={`lg:w-1/2 ${
                      index % 2 === 0 ? "lg:pr-12" : "lg:pl-12"
                    } mb-6 lg:mb-0`}
                  >
                    <Card className="p-6 hover:shadow-lg transition-shadow duration-300">
                      <div className="flex items-center mb-4">
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-600 mr-4 text-lg px-3 py-1"
                        >
                          {achievement.year}
                        </Badge>
                        <Star className="h-5 w-5 text-yellow-500" />
                      </div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 font-poppins">
                        {achievement.event}
                      </h3>
                      <p className="text-gray-600">{achievement.description}</p>
                    </Card>
                  </div>

                  {/* Timeline dot */}
                  <div className="hidden lg:block relative z-10">
                    <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-lg"></div>
                  </div>

                  <div className="lg:w-1/2"></div>
                </motion.div>
              ))}
            </div>
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
              Join Our Community
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Become part of a supportive community dedicated to helping every
              child reach their potential.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule a Tour
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
