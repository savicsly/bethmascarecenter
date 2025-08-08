"use client";

import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Award,
  BookOpen,
  Brain,
  Calendar,
  CheckCircle,
  Clock,
  Heart,
  Star,
  Target,
  Users,
  Zap,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";

const programs = [
  {
    title: "Early Intervention Program",
    ageRange: "18 months - 5 years",
    duration: "6-12 months",
    intensity: "15-25 hours/week",
    description:
      "Comprehensive early intervention for children with autism and developmental delays. Focus on foundational skills including communication, social interaction, and play skills.",
    image: "/images/image-15.jpeg",
    color: "from-blue-500 to-blue-600",
    features: [
      "Developmental assessments",
      "Parent training and support",
      "Play-based interventions",
      "Communication development",
      "Social skills foundation",
      "Sensory integration activities",
    ],
    outcomes: [
      "Improved communication skills",
      "Enhanced social engagement",
      "Better behavioral regulation",
      "School readiness preparation",
    ],
    icon: Heart,
  },
  {
    title: "School Readiness Program",
    ageRange: "4-6 years",
    duration: "3-6 months",
    intensity: "10-15 hours/week",
    description:
      "Prepares children for mainstream or special education settings. Focuses on academic prerequisites, following instructions, and classroom behaviors.",
    image: "/images/image-16.jpeg",
    color: "from-emerald-500 to-emerald-600",
    features: [
      "Pre-academic skills training",
      "Classroom behavior preparation",
      "Following multi-step instructions",
      "Group participation skills",
      "Independence building",
      "Transition planning",
    ],
    outcomes: [
      "Successful school transitions",
      "Improved attention and focus",
      "Better following directions",
      "Enhanced independence",
    ],
    icon: BookOpen,
  },
  {
    title: "Social Skills Intensive",
    ageRange: "6-14 years",
    duration: "4-8 months",
    intensity: "8-12 hours/week",
    description:
      "Specialized program for children struggling with peer relationships and social interactions. Includes group therapy and real-world practice opportunities.",
    image: "/images/image-17.jpeg",
    color: "from-purple-500 to-purple-600",
    features: [
      "Group therapy sessions",
      "Peer interaction training",
      "Social problem-solving",
      "Emotion regulation",
      "Friendship building skills",
      "Community-based practice",
    ],
    outcomes: [
      "Meaningful peer relationships",
      "Better emotional regulation",
      "Improved social confidence",
      "Reduced social anxiety",
    ],
    icon: Users,
  },
  {
    title: "Behavioral Support Program",
    ageRange: "3-16 years",
    duration: "6-18 months",
    intensity: "20-30 hours/week",
    description:
      "Intensive behavioral intervention for children with challenging behaviors. Uses positive behavior support strategies and functional behavior assessments.",
    image: "/images/image-18.jpeg",
    color: "from-orange-500 to-orange-600",
    features: [
      "Functional behavior assessment",
      "Positive behavior support plans",
      "Crisis intervention strategies",
      "Environmental modifications",
      "Replacement behavior teaching",
      "Family behavior training",
    ],
    outcomes: [
      "Significant behavior reduction",
      "Improved family dynamics",
      "Better community access",
      "Enhanced quality of life",
    ],
    icon: Target,
  },
  {
    title: "Academic Support Program",
    ageRange: "6-16 years",
    duration: "1-2 years",
    intensity: "12-18 hours/week",
    description:
      "Specialized academic instruction for children with learning disabilities and developmental delays. Individualized curriculum and teaching methods.",
    image: "/images/image-19.jpeg",
    color: "from-indigo-500 to-indigo-600",
    features: [
      "Individualized curriculum",
      "Multi-sensory teaching methods",
      "Academic skills assessment",
      "Progress monitoring",
      "Assistive technology training",
      "Study skills development",
    ],
    outcomes: [
      "Academic skill improvement",
      "Increased school success",
      "Better learning strategies",
      "Enhanced confidence",
    ],
    icon: Brain,
  },
  {
    title: "Life Skills Program",
    ageRange: "12-18 years",
    duration: "1-3 years",
    intensity: "10-16 hours/week",
    description:
      "Prepares adolescents for independent living with focus on daily living skills, vocational preparation, and community integration.",
    image: "/images/image-20.jpeg",
    color: "from-teal-500 to-teal-600",
    features: [
      "Daily living skills training",
      "Vocational skill development",
      "Money management",
      "Transportation training",
      "Community integration",
      "Self-advocacy skills",
    ],
    outcomes: [
      "Increased independence",
      "Better life skills",
      "Vocational readiness",
      "Community participation",
    ],
    icon: Zap,
  },
];

const programBenefits = [
  {
    icon: Award,
    title: "Evidence-Based Approaches",
    description:
      "All programs use scientifically proven methods and are continuously updated based on latest research.",
  },
  {
    icon: Users,
    title: "Individualized Plans",
    description:
      "Each program is customized to meet the unique needs, strengths, and goals of every child.",
  },
  {
    icon: Heart,
    title: "Family-Centered Care",
    description:
      "Parents and families are integral partners in the intervention process and receive ongoing support.",
  },
  {
    icon: Star,
    title: "Qualified Staff",
    description:
      "Our team consists of licensed professionals with specialized training in their respective fields.",
  },
];

export default function Programs() {
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
              Our Programs
            </Badge>
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 font-poppins leading-tight">
              Specialized Programs for
              <span className="bg-gradient-to-r from-blue-600 to-emerald-500 bg-clip-text text-transparent">
                {" "}
                Every Developmental Stage
              </span>
            </h1>
            <p className="text-xl text-gray-600 max-w-4xl mx-auto mb-12">
              Our comprehensive programs are designed to support children at
              every stage of their development. Each program is evidence-based,
              individualized, and delivered by qualified professionals.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-blue-600 text-white px-8 py-4 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Enroll Today
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/services"
                className="inline-flex items-center justify-center bg-transparent text-blue-600 border-2 border-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transition-all duration-300"
              >
                View Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6 font-poppins">
              Choose the Right Program
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Each program is carefully structured to address specific
              developmental needs and goals
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-12">
            {programs.map((program, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 + index * 0.1 }}
              >
                <Card className="h-full hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden">
                  <div className="relative h-48">
                    <Image
                      src={program.image}
                      alt={program.title}
                      fill
                      className="object-cover"
                    />
                    <div
                      className={`absolute inset-0 bg-gradient-to-r ${program.color} opacity-80`}
                    ></div>
                    <div className="absolute top-4 left-4">
                      <div className="bg-white/20 backdrop-blur-sm rounded-full p-3">
                        <program.icon className="h-6 w-6 text-white" />
                      </div>
                    </div>
                    <div className="absolute bottom-4 left-4 right-4">
                      <h3 className="text-2xl font-bold text-white mb-2 font-poppins">
                        {program.title}
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        <Badge
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30"
                        >
                          {program.ageRange}
                        </Badge>
                        <Badge
                          variant="secondary"
                          className="bg-white/20 text-white border-white/30"
                        >
                          {program.intensity}
                        </Badge>
                      </div>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <p className="text-gray-600 mb-6 leading-relaxed">
                      {program.description}
                    </p>

                    <div className="grid md:grid-cols-2 gap-4 mb-6">
                      <div className="flex items-center">
                        <Calendar className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-600">
                          Duration: {program.duration}
                        </span>
                      </div>
                      <div className="flex items-center">
                        <Clock className="h-4 w-4 text-blue-600 mr-2" />
                        <span className="text-sm text-gray-600">
                          Intensity: {program.intensity}
                        </span>
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Program Features:
                      </h4>
                      <div className="space-y-2">
                        {program.features
                          .slice(0, 4)
                          .map((feature, featureIndex) => (
                            <div
                              key={featureIndex}
                              className="flex items-center"
                            >
                              <CheckCircle className="h-4 w-4 text-emerald-500 mr-2 flex-shrink-0" />
                              <span className="text-gray-700 text-sm">
                                {feature}
                              </span>
                            </div>
                          ))}
                      </div>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold text-gray-900 mb-3">
                        Expected Outcomes:
                      </h4>
                      <div className="space-y-2">
                        {program.outcomes.map((outcome, outcomeIndex) => (
                          <div key={outcomeIndex} className="flex items-center">
                            <Star className="h-4 w-4 text-yellow-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">
                              {outcome}
                            </span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Link
                      href="/contact"
                      className="inline-flex items-center w-full justify-center bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:scale-105"
                    >
                      Learn More
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Benefits */}
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
              Why Choose Our Programs?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our programs are built on years of experience and research-backed
              methodologies
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {programBenefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
                className="text-center"
              >
                <div className="bg-blue-100 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6">
                  <benefit.icon className="h-8 w-8 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 font-poppins">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Success Stories Preview */}
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
              Success Stories
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Real progress from children who have participated in our programs
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {[
              {
                name: "Ahmed, 8 years old",
                program: "Social Skills Intensive",
                progress:
                  "Went from having no friends to joining the school soccer team and making lasting friendships.",
                improvement: "85% improvement in social interaction skills",
              },
              {
                name: "Fatima, 5 years old",
                program: "Early Intervention Program",
                progress:
                  "Developed functional communication and is now successfully integrated into mainstream kindergarten.",
                improvement: "90% reduction in challenging behaviors",
              },
              {
                name: "David, 15 years old",
                program: "Life Skills Program",
                progress:
                  "Learned independent living skills and is preparing for supported employment in the community.",
                improvement: "95% increase in independence skills",
              },
            ].map((story, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true, amount: 0.1 }}
              >
                <Card className="h-full hover:shadow-lg transition-shadow duration-300">
                  <CardContent className="p-6">
                    <div className="flex items-center mb-4">
                      <div className="bg-emerald-100 w-12 h-12 rounded-full flex items-center justify-center mr-4">
                        <Star className="h-6 w-6 text-emerald-600" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900">
                          {story.name}
                        </h3>
                        <Badge
                          variant="outline"
                          className="text-blue-600 border-blue-600"
                        >
                          {story.program}
                        </Badge>
                      </div>
                    </div>
                    <p className="text-gray-600 mb-4 italic">
                      "{story.progress}"
                    </p>
                    <div className="bg-emerald-50 p-3 rounded-lg">
                      <p className="text-emerald-700 font-medium text-sm">
                        {story.improvement}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Enrollment Process */}
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
              How to Enroll
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Simple steps to get your child started in the right program
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                step: "01",
                title: "Contact Us",
                description:
                  "Call or email to schedule an initial consultation",
              },
              {
                step: "02",
                title: "Assessment",
                description:
                  "Comprehensive evaluation to determine needs and goals",
              },
              {
                step: "03",
                title: "Program Selection",
                description:
                  "Choose the most appropriate program for your child",
              },
              {
                step: "04",
                title: "Begin Services",
                description: "Start your child's journey with our expert team",
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
              Start Your Child's Program Today
            </h2>
            <p className="text-xl mb-8 max-w-3xl mx-auto text-blue-100">
              Don't wait to give your child the support they need. Contact us to
              discuss which program is right for your family.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center bg-white text-blue-600 px-8 py-4 rounded-lg font-semibold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Schedule Assessment
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center justify-center bg-transparent text-white border-2 border-white px-8 py-4 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-all duration-300"
              >
                Learn More About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
