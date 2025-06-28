
// API service for handling form submissions and data fetching
const API_BASE_URL = 'http://localhost:5000/api';

class ApiService {
  async post(endpoint, data) {
    try {
      const response = await fetch(`${API_BASE_URL}${endpoint}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      return await response.json();
    } catch (error) {
      console.error('API request failed:', error);
      throw error;
    }
  }

  async submitInquiry(inquiryData) {
    return this.post('/inquiry', inquiryData);
  }

  async submitEnrollment(enrollmentData) {
    return this.post('/enroll', enrollmentData);
  }

  async submitContact(contactData) {
    return this.post('/contact', contactData);
  }
}

export const apiService = new ApiService();
