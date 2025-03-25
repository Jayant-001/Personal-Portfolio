export interface Project {
  id: number;
  title: string;
  shortDescription: string;
  description: string;
  image: string;
  technologies: string[];
  features: string[];
  demoUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    id: 1,
    title: "AI-Powered Code Review System",
    shortDescription:
      "Automated code analysis tool using machine learning for code quality assessment",
    description:
      "An intelligent system that leverages machine learning algorithms to analyze code quality, detect potential bugs, and suggest improvements. The system integrates with popular version control platforms and CI/CD pipelines.",
    image:
      "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Java",
      "Spring Boot",
      "Python",
      "TensorFlow",
      "Docker",
      "PostgreSQL",
      "Redis",
    ],
    features: [
      "Real-time code analysis and feedback",
      "Integration with GitHub and GitLab",
      "Custom rule engine for code style and best practices",
      "Performance optimization suggestions",
      "Security vulnerability detection",
    ],
    demoUrl: "https://example.com/demo",
    githubUrl: "https://github.com/yourusername/code-review",
  },
  {
    id: 2,
    title: "Distributed Task Scheduler",
    shortDescription:
      "Scalable job scheduling system with fault tolerance and real-time monitoring",
    description:
      "A robust distributed task scheduling system designed to handle millions of concurrent jobs with fault tolerance and real-time monitoring capabilities.",
    image:
      "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Node.js",
      "Redis",
      "MongoDB",
      "RabbitMQ",
      "Docker",
      "Express.js",
    ],
    features: [
      "Distributed job scheduling",
      "Real-time job status monitoring",
      "Automatic failover and recovery",
      "Priority-based job execution",
      "REST API for job management",
    ],
  },
  {
    id: 3,
    title: "Cloud-Native Microservices Platform",
    shortDescription:
      "Scalable microservices architecture with service mesh and monitoring",
    description:
      "A modern cloud-native platform built using microservices architecture, featuring service discovery, load balancing, and comprehensive monitoring.",
    image:
      "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80",
    technologies: [
      "Java",
      "Spring Cloud",
      "Kubernetes",
      "Istio",
      "Prometheus",
      "Grafana",
    ],
    features: [
      "Service mesh architecture",
      "Automated scaling and deployment",
      "Distributed tracing",
      "Circuit breaking and fault tolerance",
      "Comprehensive metrics and monitoring",
    ],
    githubUrl: "https://github.com/yourusername/cloud-platform",
  },
  {
    id: 4,
    title: "Redis Clone",
    shortDescription:
      "Build my own Redis (client + server) with basic key-value store and data snapshoting functionality.",
    description:
      "A lightweight Redis clone built using Node.js with basic key-value store functionality. The project aims to demonstrate the core concepts of Redis and key-value stores.",
    image: "",
    technologies: ["Node.js", "JavaScript", "http server"],
    features: [
      "In-memory key-value store",
      "Support for strings, lists, and sets",
      "Basic Redis commands",
      "Persistence using JSON file storage",
    ],
    githubUrl: "https://github.com",

  },
];
