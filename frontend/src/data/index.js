
export const benefits = [
  {
    title: "Fast Response",
    description: "Get expert help within 24 hours. Our team is ready to support your career goals immediately.",
    icon: "zap"
  },
  {
    title: "Secure & Confidential",
    description: "Your privacy is our priority. All sessions and data are handled with complete confidentiality.",
    icon: "shield"
  },
  {
    title: "Flexible Support",
    description: "Choose from various support options that fit your schedule and learning preferences.",
    icon: "clock"
  }
];

export const techStack = [
  "Java", "Python", "JavaScript", "React", "Angular", "Node.js", 
  "Spring Boot", "AWS", "Docker", "Kubernetes", "MongoDB", "PostgreSQL"
];

export const testimonials = [
  {
    name: "Sarah Johnson",
    role: "Software Engineer at Google",
    content: "SkillTwin's job support helped me land my dream job at Google. The mock interviews were incredibly helpful!",
    rating: 5
  },
  {
    name: "Mike Chen",
    role: "Full Stack Developer",
    content: "The training programs are top-notch. I went from beginner to confident developer in just 6 months.",
    rating: 5
  },
  {
    name: "Emily Davis",
    role: "DevOps Engineer",
    content: "Professional, knowledgeable, and always available when I needed help. Highly recommend!",
    rating: 5
  }
];

export const pricingPlans = [
  {
    name: "Hourly Support",
    price: "$50",
    period: "per hour",
    features: [
      "1-on-1 Expert Support",
      "Flexible Scheduling",
      "All Technologies",
      "Project Assistance",
      "Interview Preparation"
    ],
    popular: false
  },
  {
    name: "Monthly Plan",
    price: "$299",
    period: "per month",
    features: [
      "Unlimited Support Hours",
      "Priority Scheduling",
      "All Technologies",
      "Project + Job Support",
      "Mock Interviews",
      "Career Guidance",
      "Resume Review"
    ],
    popular: true
  }
];

export const trainingPrograms = [
  {
    id: 'java-fullstack',
    title: "Java Full Stack Development",
    description: "Master Java backend and modern frontend technologies",
    duration: "4 months",
    level: "Beginner to Advanced",
    price: "$1299",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=400&h=300&fit=crop",
    technologies: ["Java", "Spring Boot", "React", "MySQL"],
    syllabus: [
      "Java Fundamentals & OOP",
      "Spring Framework & Spring Boot",
      "REST APIs & Microservices",
      "Database Design & MySQL",
      "Frontend with React",
      "Deployment & DevOps"
    ]
  },
  {
    id: 'ai-ml',
    title: "AI & Machine Learning",
    description: "Build intelligent applications with Python and ML frameworks",
    duration: "6 months",
    level: "Intermediate",
    price: "$1599",
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=400&h=300&fit=crop",
    technologies: ["Python", "TensorFlow", "PyTorch", "Pandas"],
    syllabus: [
      "Python for Data Science",
      "Machine Learning Algorithms",
      "Deep Learning with TensorFlow",
      "Natural Language Processing",
      "Computer Vision",
      "Model Deployment"
    ]
  },
  {
    id: 'devops',
    title: "DevOps & Cloud Engineering",
    description: "Master modern DevOps practices and cloud platforms",
    duration: "3 months",
    level: "Intermediate to Advanced",
    price: "$999",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?w=400&h=300&fit=crop",
    technologies: ["AWS", "Docker", "Kubernetes", "Jenkins"],
    syllabus: [
      "Linux & Shell Scripting",
      "Docker & Containerization",
      "Kubernetes Orchestration",
      "AWS Cloud Services",
      "CI/CD with Jenkins",
      "Infrastructure as Code"
    ]
  }
];

export const faqs = [
  {
    question: "How quickly can I get support?",
    answer: "We provide support within 24 hours of your request. For urgent matters, we often respond within a few hours."
  },
  {
    question: "What technologies do you support?",
    answer: "We support all major technologies including Java, Python, JavaScript, React, Angular, Node.js, AWS, and many more."
  },
  {
    question: "Is the support confidential?",
    answer: "Absolutely! We maintain strict confidentiality for all our clients and their projects."
  },
  {
    question: "Can you help with interview preparation?",
    answer: "Yes! We provide comprehensive interview preparation including mock interviews, technical questions practice, and resume review."
  },
  {
    question: "What's included in the training programs?",
    answer: "Our training programs include live sessions, hands-on projects, career guidance, and lifetime access to course materials."
  },
  {
    question: "Do you offer refunds?",
    answer: "We offer a 7-day money-back guarantee if you're not satisfied with our services."
  }
];

export const services = [
  {
    id: 'job-support',
    title: 'Job Support',
    description: 'Get expert help with your daily work tasks and challenging projects.',
    icon: 'briefcase',
    features: [
      'Real-time project assistance',
      'Code review and optimization',
      'Problem-solving guidance',
      'Best practices implementation',
      'Technology-specific support'
    ],
    pricing: 'Starting from $50/hour'
  },
  {
    id: 'proxy-interviews',
    title: 'Proxy Interview Support',
    description: 'Professional interview support to help you succeed in technical interviews.',
    icon: 'users',
    features: [
      'Technical interview guidance',
      'Mock interview sessions',
      'Question preparation',
      'Communication coaching',
      'Industry-specific preparation'
    ],
    pricing: 'Starting from $100/session'
  },
  {
    id: 'mentorship',
    title: '1:1 Mentorship',
    description: 'Personalized mentorship to accelerate your career growth.',
    icon: 'user-check',
    features: [
      'Career roadmap planning',
      'Skill development guidance',
      'Industry insights',
      'Goal setting and tracking',
      'Regular progress reviews'
    ],
    pricing: 'Starting from $200/month'
  },
  {
    id: 'project-help',
    title: 'Project Help',
    description: 'End-to-end assistance with your personal or professional projects.',
    icon: 'code',
    features: [
      'Architecture design',
      'Code implementation',
      'Testing and debugging',
      'Deployment assistance',
      'Documentation support'
    ],
    pricing: 'Custom pricing based on scope'
  }
];
