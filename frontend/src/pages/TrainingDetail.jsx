import { useParams, Link } from 'react-router-dom';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Separator } from '@/components/ui/separator';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Clock, Users, Star, CheckCircle, Calendar, ArrowLeft, BookOpen } from 'lucide-react';
import { trainingPrograms } from '@/data';
import { useForm } from '@/hooks/useForm';
import { useToast } from '@/hooks/use-toast';
import { apiService } from '@/services/api';

const TrainingDetail = () => {
  const { id } = useParams();
  const { toast } = useToast();
  const program = trainingPrograms.find(p => p.id === id);

  const { values, errors, isSubmitting, handleChange, handleSubmit, reset } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      experience: '',
      schedule: '',
      message: ''
    },
    {
      name: { required: true, minLength: 2 },
      email: { required: true, email: true },
      phone: { required: true, phone: true },
      experience: { required: true }
    }
  );

  if (!program) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4">Program Not Found</h1>
          <Link to="/trainings">
            <Button>Back to Trainings</Button>
          </Link>
        </div>
      </div>
    );
  }

  const onEnroll = async (formData) => {
    try {
      await apiService.submitEnrollment({
        ...formData,
        programId: program.id,
        programTitle: program.title,
        programPrice: program.price
      });
      toast({
        title: "Enrollment Submitted!",
        description: "We'll contact you within 24 hours to complete your enrollment.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Enrollment Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <div className="min-h-screen">
      {/* Back Button */}
      <div className="bg-gray-50 py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link to="/trainings" className="inline-flex items-center text-blue-400 hover:text-blue-600">
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Training Programs
          </Link>
        </div>
      </div>

      {/* Header */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
            <div>
              <div className="aspect-video bg-gray-200 rounded-lg overflow-hidden mb-6">
                <img 
                  src={program.image} 
                  alt={program.title}
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div>
              <Badge variant="secondary" className="mb-4">{program.level}</Badge>
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{program.title}</h1>
              <p className="text-xl text-gray-600 mb-6">{program.description}</p>
              
              <div className="grid grid-cols-2 gap-4 mb-6">
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-blue-400 mr-2" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center">
                  <Star className="h-5 w-5 text-yellow-500 mr-2" />
                  <span>4.8/5 (120+ reviews)</span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Small batches (max 15)</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-blue-400 mr-2" />
                  <span>Lifetime access</span>
                </div>
              </div>

              <div className="text-3xl font-bold text-blue-400 mb-6">{program.price}</div>
              
              <div className="mb-6">
                <h3 className="font-semibold mb-3">Technologies Covered:</h3>
                <div className="flex flex-wrap gap-2">
                  {program.technologies.map((tech, index) => (
                    <Badge key={index} variant="outline">{tech}</Badge>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Syllabus */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Course Syllabus</h2>
              <div className="space-y-4">
                {program.syllabus.map((topic, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <div className="bg-blue-400 text-white w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold flex-shrink-0 mt-1">
                      {index + 1}
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{topic}</h3>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Enrollment Form */}
            <div>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl">Enroll Now</CardTitle>
                </CardHeader>
                <CardContent>
                  <form onSubmit={(e) => {
                    e.preventDefault();
                    handleSubmit(onEnroll);
                  }} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">Full Name *</Label>
                      <Input
                        id="name"
                        type="text"
                        value={values.name}
                        onChange={(e) => handleChange('name', e.target.value)}
                        className={errors.name ? 'border-red-500' : ''}
                      />
                      {errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="email">Email Address *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={values.email}
                        onChange={(e) => handleChange('email', e.target.value)}
                        className={errors.email ? 'border-red-500' : ''}
                      />
                      {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="phone">Phone Number *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={values.phone}
                        onChange={(e) => handleChange('phone', e.target.value)}
                        className={errors.phone ? 'border-red-500' : ''}
                      />
                      {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label>Experience Level *</Label>
                      <Select value={values.experience} onValueChange={(value) => handleChange('experience', value)}>
                        <SelectTrigger className={errors.experience ? 'border-red-500' : ''}>
                          <SelectValue placeholder="Select your experience level" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="beginner">Beginner (0-1 years)</SelectItem>
                          <SelectItem value="intermediate">Intermediate (2-4 years)</SelectItem>
                          <SelectItem value="advanced">Advanced (5+ years)</SelectItem>
                        </SelectContent>
                      </Select>
                      {errors.experience && <p className="text-red-500 text-sm">{errors.experience}</p>}
                    </div>

                    <div className="space-y-2">
                      <Label>Preferred Schedule</Label>
                      <Select value={values.schedule} onValueChange={(value) => handleChange('schedule', value)}>
                        <SelectTrigger>
                          <SelectValue placeholder="Select preferred time" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="weekday-morning">Weekday Morning (9 AM - 12 PM)</SelectItem>
                          <SelectItem value="weekday-evening">Weekday Evening (6 PM - 9 PM)</SelectItem>
                          <SelectItem value="weekend">Weekend (Flexible timing)</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Additional Message (Optional)</Label>
                      <textarea
                        id="message"
                        rows={3}
                        value={values.message}
                        onChange={(e) => handleChange('message', e.target.value)}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
                        placeholder="Any specific goals or questions?"
                      />
                    </div>

                    <Button 
                      type="submit" 
                      className="w-full" 
                      disabled={isSubmitting}
                      size="lg"
                    >
                      {isSubmitting ? 'Enrolling...' : 'Enroll Now'}
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            What You'll Get
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: "Live Interactive Sessions",
                description: "Participate in live coding sessions with expert instructors and get real-time feedback."
              },
              {
                title: "Hands-on Projects",
                description: "Build 3-5 industry-relevant projects that you can showcase in your portfolio."
              },
              {
                title: "Career Support",
                description: "Get help with resume building, interview preparation, and job search strategies."
              },
              {
                title: "Community Access",
                description: "Join our exclusive community of learners and alumni for networking and support."
              },
              {
                title: "Mentorship",
                description: "One-on-one mentorship sessions with industry professionals throughout the program."
              },
              {
                title: "Certification",
                description: "Receive a completion certificate that validates your newly acquired skills."
              }
            ].map((feature, index) => (
              <div key={index} className="text-center">
                <CheckCircle className="h-12 w-12 text-green-500 mx-auto mb-4" />
                <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default TrainingDetail;
