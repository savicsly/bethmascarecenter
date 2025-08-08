"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Building,
  CheckCircle,
  Clock,
  Heart,
  Home,
  MessageCircle,
  School,
  Target,
  Users,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const mainServices = [
  {
    icon: Brain,
    title: "Applied Behavior Analysis (ABA)",
    shortDescription:
      "Evidence-based therapy for autism and behavioral challenges",
    fullDescription:
      "Our ABA program uses scientifically proven methods to help children develop communication, social, and daily living skills. Each program is individually designed based on comprehensive assessments.",
    features: [
      "One-on-one therapy sessions",
      "Discrete trial training",
      "Natural environment teaching",
      "Functional behavior assessments",
      "Progress tracking and data collection",
      "Parent training and support",
    ],
    duration: "2-6 hours daily",
    ageRange: "2-18 years",
    image: "/images/image-11.jpeg",
    color: "from-blue-500 to-blue-600",
  },
  {
    icon: BookOpen,
    title: "Special Education Services",
    shortDescription:
      "Individualized education programs for learning differences",
    fullDescription:
      "Comprehensive educational support designed to help children with learning disabilities, developmental delays, and special needs succeed academically and socially.",
    features: [
      "Individualized Education Plans (IEP)",
      "Curriculum modification and adaptation",
      "Academic skill development",
      "Learning disability support",
      "Educational assessments",
      "School collaboration and consultation",
    ],
    duration: "3-6 hours daily",
    ageRange: "3-16 years",
    image: "/images/image-12.jpeg",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: MessageCircle,
    title: "Speech & Language Therapy",
    shortDescription: "Communication development and language skills training",
    fullDescription:
      "Professional speech-language pathology services to help children develop effective communication skills, overcome speech disorders, and improve social interaction.",
    features: [
      "Speech sound production",
      "Language comprehension and expression",
      "Social communication skills",
      "Augmentative and alternative communication (AAC)",
      "Feeding and swallowing therapy",
      "Voice and fluency disorders",
    ],
    duration: "45-60 minutes per session",
    ageRange: "18 months - 18 years",
    image: "/images/image-13.jpeg",
    color: "from-purple-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Social Skills Training",
    shortDescription:
      "Building meaningful relationships and social connections",
    fullDescription:
      "Structured programs to help children develop essential social skills, build friendships, and navigate social situations with confidence.",
    features: [
      "Peer interaction training",
      "Social problem-solving",
      "Emotion regulation skills",
      "Group therapy sessions",
      "Playground and community practice",
      "Social stories and role-playing",
    ],
    duration: "60-90 minutes per session",
    ageRange: "4-16 years",
    image: "/images/image-14.jpeg",
    color: "from-orange-500 to-orange-600",
  },
];

const serviceLocations = [
  {
    icon: Building,
    title: "Center-Based Services",
    description:
      "Comprehensive programs in our specialized facility with state-of-the-art equipment and sensory-friendly environments.",
    benefits: [
      "Structured learning environment",
      "Specialized equipment and resources",
      "Peer interaction opportunities",
      "Multidisciplinary team approach",
    ],
  },
  {
    icon: Home,
    title: "Home-Based Services",
    description:
      "Therapy and education services delivered in the comfort and familiarity of your home environment.",
    benefits: [
      "Natural environment learning",
      "Family involvement and training",
      "Flexible scheduling",
      "Generalization of skills",
    ],
  },
  {
    icon: School,
    title: "School-Based Support",
    description:
      "Collaborative services with schools to ensure continuity of care and academic success.",
    benefits: [
      "Classroom consultation",
      "Teacher training and support",
      "IEP development and monitoring",
      "Transition planning",
    ],
  },
];

const additionalServices = [
  {
    title: "Occupational Therapy",
    description:
      "Sensory integration, fine motor skills, and daily living activities",
    icon: Target,
  },
  {
    title: "Behavioral Intervention",
    description:
      "Positive behavior support plans and crisis intervention strategies",
    icon: Heart,
  },
  {
    title: "Family Training",
    description: "Parent education and caregiver skill development programs",
    icon: Users,
  },
  {
    title: "Assessment Services",
    description: "Comprehensive developmental and educational evaluations",
    icon: Award,
  },
];

export default function Services() {
  return (
    <div className="font-inter">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-blue-50 via-white to-emerald-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <Badge
              variant="secondary"
              className="mb-6 bg-blue-100 text-blue-800"
            >
              Our Services
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
              Comprehensive
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                {" "}
                Special Education Services
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Evidence-based interventions tailored to each child's unique
              needs. Our multidisciplinary approach ensures comprehensive
              support for children with autism, ADHD, learning disabilities, and
              other developmental challenges.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/programs"
                className="inline-flex items-center justify-center bg-transparent text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Programs
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Main Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Core Service Areas
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our specialized programs are designed to address the unique needs
              of each child
            </p>
          </motion.div>

          <div className="space-y-20">
            {mainServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className={`grid lg:grid-cols-2 gap-12 items-center ${
                  index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
                }`}
              >
                <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                  <div className="flex items-center mb-6">
                    <div
                      className={`bg-gradient-to-r ${service.color} w-16 h-16 rounded-xl flex items-center justify-center mr-4`}
                    >
                      <service.icon className="h-8 w-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 font-poppins">
                        {service.title}
                      </h3>
                      <p className="text-gray-600">
                        {service.shortDescription}
                      </p>
                    </div>
                  </div>

                  <p className="text-lg text-gray-700 mb-6 leading-relaxed">
                    {service.fullDescription}
                  </p>

                  <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Clock className="h-5 w-5 text-blue-600 mr-2" />
                        Duration
                      </h4>
                      <p className="text-gray-600">{service.duration}</p>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3 flex items-center">
                        <Users className="h-5 w-5 text-blue-600 mr-2" />
                        Age Range
                      </h4>
                      <p className="text-gray-600">{service.ageRange}</p>
                    </div>
                  </div>

                  <div className="mb-8">
                    <h4 className="font-semibold text-gray-900 mb-4">
                      Key Features:
                    </h4>
                    <div className="grid md:grid-cols-2 gap-2">
                      {service.features.map((feature, featureIndex) => (
                        <div key={featureIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {feature}
                          </span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <Link
                    href="/contact"
                    className="inline-flex items-center text-blue-600 font-semibold hover:text-blue-700 transition-colors duration-200"
                  >
                    Learn More About This Service
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>

                <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                  <div className="relative h-64 md:h-80 lg:h-96 rounded-2xl overflow-hidden shadow-xl">
                    <Image
                      src={service.image}
                      alt={service.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-tr ${service.color} opacity-20`}
                    ></div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Service Locations Section */}
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
              Where We Serve
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Flexible service delivery options to meet your family's needs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {serviceLocations.map((location, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
                  <CardHeader className="text-center">
                    <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                      <location.icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl font-poppins">
                      {location.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600 mb-6">{location.description}</p>
                    <div className="space-y-2">
                      {location.benefits.map((benefit, benefitIndex) => (
                        <div key={benefitIndex} className="flex items-center">
                          <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                          <span className="text-gray-700 text-sm">
                            {benefit}
                          </span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Additional Services Section */}
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
              Additional Support Services
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Complementary services to provide comprehensive support for your
              child's development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {additionalServices.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                whileHover={{ y: -5 }}
                className="text-center p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-emerald-500 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4">
                  <service.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3 font-poppins">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
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
              Our Process
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A systematic approach to ensure the best outcomes for your child
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Initial Consultation",
                description: "Discuss your child's needs and our services",
              },
              {
                step: "02",
                title: "Comprehensive Assessment",
                description: "Detailed evaluation of developmental areas",
              },
              {
                step: "03",
                title: "Individualized Plan",
                description:
                  "Custom treatment plan based on assessment results",
              },
              {
                step: "04",
                title: "Implementation & Progress",
                description: "Regular therapy sessions with ongoing monitoring",
              },
            ].map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6 text-xl font-bold">
                  {process.step}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3 font-poppins">
                  {process.title}
                </h3>
                <p className="text-gray-600">{process.description}</p>
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
              Ready to Get Started?
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Contact us today to schedule a consultation and learn how our
              services can support your child's development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Consultation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
