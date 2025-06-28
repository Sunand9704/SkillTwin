import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';
import { useForm } from '@/hooks/useForm';
import { apiService } from '@/services/api';

const InquiryForm = () => {
  const { toast } = useToast();
  
  const { values, errors, isSubmitting, handleChange, handleSubmit, reset } = useForm(
    {
      name: '',
      email: '',
      phone: '',
      technology: '',
      helpType: '',
      message: ''
    },
    {
      name: { required: true, minLength: 2 },
      email: { required: true, email: true },
      phone: { required: true, phone: true },
      technology: { required: true },
      helpType: { required: true }
    }
  );

  const technologies = [
    'Java', 'Python', 'JavaScript', 'React', 'Angular', 'Node.js',
    'Spring Boot', 'Django', '.NET', 'PHP', 'AWS', 'DevOps', 'Other'
  ];

  const helpTypes = [
    'Job Support', 'Project Help', 'Interview Preparation', 
    'Training Program', 'Career Guidance', 'Other'
  ];

  const onSubmit = async (formData) => {
    try {
      await apiService.submitInquiry(formData);
      toast({
        title: "Inquiry Submitted!",
        description: "We'll get back to you within 24 hours.",
      });
      reset();
    } catch (error) {
      toast({
        title: "Submission Failed",
        description: "Please try again or contact us directly.",
        variant: "destructive",
      });
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto">
      <CardHeader>
        <CardTitle className="text-2xl text-center">Get Expert Help Today</CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={(e) => {
          e.preventDefault();
          handleSubmit(onSubmit);
        }} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
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

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label>Technology *</Label>
              <Select value={values.technology} onValueChange={(value) => handleChange('technology', value)}>
                <SelectTrigger className={errors.technology ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select technology" />
                </SelectTrigger>
                <SelectContent>
                  {technologies.map((tech) => (
                    <SelectItem key={tech} value={tech}>{tech}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.technology && <p className="text-red-500 text-sm">{errors.technology}</p>}
            </div>

            <div className="space-y-2">
              <Label>Help Type *</Label>
              <Select value={values.helpType} onValueChange={(value) => handleChange('helpType', value)}>
                <SelectTrigger className={errors.helpType ? 'border-red-500' : ''}>
                  <SelectValue placeholder="Select help type" />
                </SelectTrigger>
                <SelectContent>
                  {helpTypes.map((type) => (
                    <SelectItem key={type} value={type}>{type}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.helpType && <p className="text-red-500 text-sm">{errors.helpType}</p>}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="message">Additional Message (Optional)</Label>
            <textarea
              id="message"
              rows={4}
              value={values.message}
              onChange={(e) => handleChange('message', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-300"
              placeholder="Tell us more about your requirements..."
            />
          </div>

          <Button 
            type="submit" 
            className="w-full" 
            disabled={isSubmitting}
            size="lg"
          >
            {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};

export default InquiryForm;
