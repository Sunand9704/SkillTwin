import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Zap,
  Shield,
  Clock,
  Star,
  ArrowRight,
  CheckCircle,
  Users,
  Code,
  Briefcase,
} from "lucide-react";
import InquiryForm from "@/components/InquiryForm";
import {
  benefits,
  techStack,
  testimonials,
  pricingPlans,
  trainingPrograms,
  faqs,
} from "@/data";

const Home = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const iconMap = {
    zap: Zap,
    shield: Shield,
    clock: Clock,
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-indigo-800 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-8">
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Accelerate Your{" "}
              <span className="text-yellow-400">Tech Career</span>
            </h1>
            <p className="text-xl md:text-2xl text-blue-100 max-w-3xl mx-auto">
              Expert job support, training programs, and mentorship to help you
              succeed in the competitive tech industry.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button
                size="lg"
                className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold px-8 py-3"
              >
                Get Started Today
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white text-white hover:bg-white text-blue-600"
              >
                View Services
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400">500+</div>
                <div className="text-blue-100">Successful Placements</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400">24/7</div>
                <div className="text-blue-100">Expert Support</div>
              </div>
              <div className="text-center">
                <div className="text-4xl font-bold text-yellow-400">95%</div>
                <div className="text-blue-100">Success Rate</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Inquiry Form Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <InquiryForm />
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose SkillTwin?
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              We provide comprehensive support to help you achieve your career
              goals with confidence.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {benefits.map((benefit, index) => {
              const Icon = iconMap[benefit.icon];
              return (

                <Card key={index} className="border-black text-center hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">

                  <CardHeader>
                    <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-blue-600" />
                    </div>
                    <CardTitle className="text-xl">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-600">{benefit.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Tech Stack Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Technologies We Support
            </h2>
            <p className="text-xl text-gray-600">
              Expert guidance across all major technologies and frameworks
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-4">
            {techStack.map((tech, index) => (
              <Badge
                key={index}
                variant="secondary"
                className="px-4 py-2 text-sm"
              >
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              What Our Clients Say
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <Card className="text-center">
              <CardContent className="pt-8">
                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentTestimonial].rating)].map(
                    (_, i) => (
                      <Star
                        key={i}
                        className="h-5 w-5 text-yellow-500 fill-current"
                      />
                    )
                  )}
                </div>
                <blockquote className="text-xl text-gray-700 mb-6">
                  "{testimonials[currentTestimonial].content}"
                </blockquote>
                <div>
                  <div className="font-semibold text-gray-900">
                    {testimonials[currentTestimonial].name}
                  </div>
                  <div className="text-gray-600">
                    {testimonials[currentTestimonial].role}
                  </div>
                </div>
              </CardContent>
            </Card>
            <div className="flex justify-center mt-6 space-x-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentTestimonial(index)}
                  className={`w-3 h-3 rounded-full transition-colors ${
                    index === currentTestimonial ? "bg-blue-600" : "bg-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Flexible Pricing Plans
            </h2>
            <p className="text-xl text-gray-600">
              Choose the plan that works best for your needs
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card
              className={`relative ${pricingPlans[0].popular ? "border-blue-500 shadow-lg" : ""} hover:shadow-2xl transition-shadow hover:scale-105 transition-transform durtion-300 ease-in-out cursor-pointer `}
            >
              {pricingPlans[0].popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  {pricingPlans[0].name}
                </CardTitle>
                <div className="text-4xl font-bold text-blue-600">
                  {pricingPlans[0].price}
                  <span className="text-lg text-gray-600">
                    /{pricingPlans[0].period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-12">
                  {pricingPlans[0].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full mt-12" size="lg">
                  Get Start
                </Button>
              </CardContent>
            </Card>

            <Card
              className={`relative ${pricingPlans[1].popular ? "border-blue-500 shadow-lg" : ""} hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer`}
            >
              {pricingPlans[1].popular && (
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <span className="bg-blue-500 text-white px-4 py-1 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-2xl">
                  {pricingPlans[1].name}
                </CardTitle>
                <div className="text-4xl font-bold text-blue-600">
                  {pricingPlans[1].price}
                  <span className="text-lg text-gray-600">
                    /{pricingPlans[1].period}
                  </span>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {pricingPlans[1].features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <CheckCircle className="h-5 w-5 text-green-500 mr-3" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className="w-full" size="lg">
                  Get Started
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Training Programs Preview */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Training Programs
            </h2>
            <p className="text-xl text-gray-600">
              Comprehensive training programs designed by industry experts
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {trainingPrograms.map((program) => (

              <Card key={program.id} className=" text-center hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">

              

                <div className="aspect-video bg-gray-200 rounded-t-lg overflow-hidden">
                  <img
                    src={program.image}
                    alt={program.title}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardHeader>
                  <CardTitle className="text-xl">{program.title}</CardTitle>
                  <CardDescription>{program.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3 mb-4">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Duration:</span>
                      <span className="font-semibold">{program.duration}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-600">Level:</span>
                      <span className="font-semibold">{program.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-gray-600">Price:</span>
                      <span className="font-bold text-blue-600 text-lg">
                        {program.price}
                      </span>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {program.technologies.slice(0, 3).map((tech, index) => (
                      <Badge key={index} variant="outline" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>
                  <Button asChild className="w-full">
                    <Link to={`/trainings/${program.id}`}>
                      View Details <ArrowRight className="ml-2 h-4 w-4" />
                    </Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8">
            <Button asChild size="lg" variant="outline">
              <Link to="/trainings">View All Programs</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-gray-600">
              Get answers to common questions about our services
            </p>
          </div>
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-white rounded-lg px-6"
              >
                <AccordionTrigger className="text-left font-semibold">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-blue-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Ready to Accelerate Your Career?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Join thousands of successful professionals who have transformed
            their careers with SkillTwin.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-yellow-500 hover:bg-yellow-600 text-black font-semibold"
            >
              Start Your Journey
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white text-white hover:bg-white text-blue-600"
            >
              Schedule a Call
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
