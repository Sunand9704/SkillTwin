
import { useState } from 'react';

export const useForm = (initialValues, validationRules = {}) => {
  const [values, setValues] = useState(initialValues);
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (name, value) => {
    setValues(prev => ({
      ...prev,
      [name]: value
    }));

    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ''
      }));
    }
  };

  const validate = () => {
    const newErrors = {};

    Object.keys(validationRules).forEach(field => {
      const rules = validationRules[field];
      const value = values[field];

      if (rules.required && (!value || value.toString().trim() === '')) {
        newErrors[field] = `${field} is required`;
      } else if (rules.email && value && !/\S+@\S+\.\S+/.test(value)) {
        newErrors[field] = 'Please enter a valid email';
      } else if (rules.minLength && value && value.length < rules.minLength) {
        newErrors[field] = `${field} must be at least ${rules.minLength} characters`;
      } else if (rules.phone && value && !/^\+?[\d\s\-\(\)]{10,}$/.test(value)) {
        newErrors[field] = 'Please enter a valid phone number';
      }
    });

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (onSubmit) => {
    if (!validate()) return false;

    setIsSubmitting(true);
    try {
      await onSubmit(values);
      return true;
    } catch (error) {
      console.error('Form submission error:', error);
      return false;
    } finally {
      setIsSubmitting(false);
    }
  };

  const reset = () => {
    setValues(initialValues);
    setErrors({});
    setIsSubmitting(false);
  };

  return {
    values,
    errors,
    isSubmitting,
    handleChange,
    handleSubmit,
    reset
  };
};
