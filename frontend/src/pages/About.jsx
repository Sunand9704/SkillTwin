import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Users, Target, Heart, Award, Clock, Shield } from 'lucide-react';

const About = () => {
  const values = [
    {
      icon: Target,
      title: "Excellence",
      description: "We strive for excellence in everything we do, delivering top-quality support and training."
    },
    {
      icon: Heart,
      title: "Integrity",
      description: "We maintain the highest standards of integrity and transparency in all our interactions."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in the power of collaboration and work closely with our clients to achieve success."
    },
    {
      icon: Award,
      title: "Innovation",
      description: "We continuously innovate our methods and approaches to stay ahead in the rapidly evolving tech industry."
    }
  ];

  const stats = [
    { number: "500+", label: "Successful Placements" },
    { number: "1000+", label: "Happy Clients" },
    { number: "50+", label: "Expert Mentors" },
    { number: "5+", label: "Years of Experience" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-100 to-blue-300 text-gray-900 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-4">About SkillTwin</h1>
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Empowering careers through expert job support, training programs, and personalized mentorship.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-700 mb-2">{stat.number}</div>
                <div className="text-gray-700">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  SkillTwin was founded with a simple yet powerful vision: to bridge the gap between 
                  talent and opportunity in the tech industry. We recognized that many skilled 
                  professionals struggled to navigate the competitive landscape and unlock their full potential.
                </p>
                <p>
                  Starting as a small team of industry veterans, we began by offering personalized 
                  job support and mentorship. Our approach was different – we didn't just provide 
                  generic advice, but offered hands-on, practical support tailored to each individual's needs.
                </p>
                <p>
                  Today, SkillTwin has grown into a comprehensive platform that has helped hundreds 
                  of professionals advance their careers, land dream jobs, and develop the skills 
                  needed to thrive in the ever-evolving tech landscape.
                </p>
              </div>
            </div>
            <div className="bg-gray-100 rounded-lg p-8">
              <img 
                src="https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&h=400&fit=crop" 
                alt="Team collaboration" 
                className="w-full h-64 object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <Card className="border-black text-center hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-blue-700 font-semibold">
                  <Target className="h-6 w-6 mr-3 text-blue-400" />
                  Our Mission
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To empower tech professionals with the knowledge, skills, and support they need 
                  to achieve their career goals. We provide personalized guidance, comprehensive 
                  training, and ongoing mentorship to help individuals navigate the competitive 
                  tech industry successfully.
                </p>
              </CardContent>
            </Card>

            <Card className="border-black text-center hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
              <CardHeader>
                <CardTitle className="text-2xl flex items-center text-blue-700 font-semibold">
                  <Heart className="h-6 w-6 mr-3 text-blue-400" />
                  Our Vision
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700 leading-relaxed">
                  To be the leading platform that transforms careers and lives in the tech industry. 
                  We envision a world where every talented individual has access to the resources 
                  and support needed to reach their full potential, regardless of their background 
                  or starting point.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600">
              The principles that guide everything we do
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="border-black text-center hover:shadow-2xl transition-shadow hover:scale-105 transition-transform duration-300 ease-in-out cursor-pointer">
                  <CardHeader>
                    <div className="mx-auto bg-blue-100 p-3 rounded-full w-16 h-16 flex items-center justify-center mb-4">
                      <Icon className="h-8 w-8 text-blue-400" />
                    </div>
                    <CardTitle className="text-xl text-blue-700 font-semibold">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Founder's Note */}
      <section className="py-16 bg-white text-gray-900">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-black">Founder's Note</h2>
            <p className="text-xl text-gray-700 mb-8">
              Our mission is to help you succeed in your tech career journey.
            </p>
          </div>
          <div className="bg-white/10 rounded-lg p-8">
            <blockquote className="text-lg leading-relaxed mb-6">
              "Having worked in the tech industry for over a decade, I've witnessed firsthand 
              the challenges that talented professionals face in advancing their careers. 
              SkillTwin was born from my passion to democratize access to expert guidance 
              and create a supportive community where everyone can thrive.
              <br /><br />
              Our success is measured not just by the number of placements we've facilitated, 
              but by the lives we've transformed and the confidence we've instilled in our clients. 
              Every success story motivates us to continue pushing boundaries and setting new 
              standards in career development."
            </blockquote>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
                <Users className="h-8 w-8" />
              </div>
              <div className="text-left">
                <div className="font-semibold text-lg">John Smith</div>
                <div className="text-blue-200">Founder & CEO</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Professionals Choose SkillTwin
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <Clock className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-700">24/7 Support</h3>
              <p className="text-gray-700">
                Our team is available around the clock to provide assistance when you need it most.
              </p>
            </div>
            <div className="text-center">
              <Shield className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Proven Track Record</h3>
              <p className="text-gray-700">
                With hundreds of successful placements, our methods are tested and proven effective.
              </p>
            </div>
            <div className="text-center">
              <Users className="h-12 w-12 text-blue-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-3 text-blue-700">Expert Team</h3>
              <p className="text-gray-700">
                Our mentors are industry veterans with decades of combined experience.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
