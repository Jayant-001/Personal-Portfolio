import recommendationProject from "../assets/recommendation_system.png";
import pocketLibrary from "../assets/pocket_library_project.gif";
import urlShortner from "../assets/url_shortner.avif";
import pocketCloud from "../assets/pocket-cloud.png";

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
    id: 2,
    title: "CodeClash - Online Coding Assessment Platform",
    shortDescription:
      "A comprehensive platform for conducting coding assessments and competitions with real-time code execution, secure authentication, and anti-cheat measures.",
    description: `CodeClash is an online coding assessment platform designed for coding competitions and assessments. It features secure real-time code execution, an anti-cheat system, and a leaderboard to track participant progress. The platform offers an admin portal for problem and contest management, a user platform for contest participation, and a robust code execution system with Docker isolation and queue management.`,
    image: "https://example.com/screenshot.png",
    technologies: [
      "Node.js + Express",
      "WebSockets",
      "RabbitMQ",
      "PostgreSQL",
      "Redis",
      "Docker",
      "JWT",
      "React",
      "TypeScript",
      "TailwindCSS",
      "ShadcnUI",
      "Turbo",
    ],
    features: [
      "Admin Portal for problem and contest management",
      "Contest participation with real-time status updates",
      "Support for multiple programming languages",
      "Anti-cheat system with tab detection and activity monitoring",
      "Real-time leaderboard with performance analytics",
      "Secure code execution with Docker isolation",
      "Distributed job queue with BullMQ for efficient submission processing",
    ],
    demoUrl: "https://your-demo-link.com", // Update with your actual demo URL
    githubUrl: "https://github.com/yourusername/CodeClash", // Replace with actual GitHub URL
  },
  {
    id: 0,
    title: "AI-Powered Post Recommendation System",
    shortDescription:
      "A full-stack web app that provides AI-powered post recommendations using vector embeddings for semantic search and content discovery.",
    description:
      "This project is a full-stack application that allows users to create, search, and discover related posts using AI-powered recommendations. It leverages vector embeddings to understand the semantic meaning of posts and provides similar content suggestions. The application enables users to filter content based on tags and their own preferences.",
    image: recommendationProject,
    technologies: [
      "Next.js",
      "Convex",
      "VoyageAI",
      "Langchain",
      "TypeScript",
      "TailwindCSS",
    ],
    features: [
      "Semantic Search",
      "AI-Powered Post Recommendations",
      "Real-time Post Creation",
      "Tag-based Organization",
      "User-specific Content Filtering",
    ],
    githubUrl: "https://github.com/Jayant-001/Recommendation-System-NextJS",
    demoUrl: "https://www.youtube.com/watch?v=wvp3foHJtpo",
  },
  {
    id: 4,
    title: "Redis Clone",
    shortDescription:
      "Build my own Redis (client + server) with basic key-value store and data snapshoting functionality.",
    description:
      "A lightweight Redis clone built using Node.js with basic key-value store functionality. The project aims to demonstrate the core concepts of Redis and key-value stores.",
    image: recommendationProject,
    technologies: ["Node.js", "JavaScript", "http server"],
    features: [
      "In-memory key-value store",
      "Support for strings, lists, and sets",
      "Basic Redis commands",
      "Persistence using JSON file storage",
    ],
    githubUrl: "https://github.com",
  },
  {
    id: 3,
    title: "Pocket Library - A Quiz-Based Learning Platform",
    shortDescription:
      "A learning platform that makes learning easy and more competitive with quiz-based exercises for language learning and progress tracking.",
    description: `Pocket Library is an interactive quiz-based learning platform that helps users practice and learn different languages. The platform offers features such as user authentication, performance tracking, a user leaderboard, and language preference selection. Admins can add new questions, and users can view detailed test reports to track their learning progress.`,
    image: pocketLibrary,
    technologies: [
      "Next.js",
      "React.js",
      "TanStack Query",
      "Prisma",
      "MongoDB",
      "Tailwind CSS",
      "JavaScript",
      "Toast by react-hot-toast",
      "react-icons",
    ],
    features: [
      "User authentication with JWT",
      "Admin section for adding questions",
      "Performance tracking page",
      "User leaderboard",
      "Track and reset progress from the user page",
      "Choose your favorite language",
      "Test reports for progress analysis",
    ],
    demoUrl: "https://pocket-library.vercel.app", // Link to live demo
    githubUrl: "https://github.com/Jayant-001/Language-Learning-App", // GitHub repository URL
  },
  {
    id: 4,
    title: "URL Shortener Project",
    shortDescription:
      "A URL shortener web application that generates short links, provides analytics, and utilizes Redis caching for faster performance.",
    description: `The URL Shortener project allows users to generate short URLs for long links. It features Redis caching to improve performance and provides analytics to track the usage of short URLs. The application also ensures seamless redirection from short URLs to their corresponding long URLs.`,
    image: urlShortner, // Add an image URL if available
    technologies: [
      "Next.js",
      "Tailwind CSS",
      "React.js",
      "React Query",
      "Axios",
      "IO Redis",
      "React Hot Toast",
      "Node.js",
      "nanoid",
      "MongoDB",
      "Redis",
      "ESLint",
    ],
    features: [
      "Short URL Generation",
      "Redis Caching for faster performance",
      "Seamless Redirection to long URLs",
      "Analytics for tracking clicks on short URLs",
      "Environment Variable Configuration for Redis and MongoDB",
    ],
    demoUrl: "https://shorturl-01.vercel.app", // Live demo URL
    githubUrl: "https://github.com/Jayant-001/URL-Shortener", // GitHub repository URL
  },
  {
    id: 5,
    title: "Pocket Cloud - Cloud File Manager",
    shortDescription:
      "A cutting-edge cloud file management platform that enables seamless file organization, upload, and management with Google authentication.",
    description: `Pocket Cloud is a web application designed to streamline file and folder management on the cloud. With features like folder creation, file upload, nested folder organization, Google authentication, and easy file management, Pocket Cloud provides an intuitive and efficient way to handle your digital assets.`,
    image: pocketCloud,
    technologies: [
      "Next.js",
      "React.js",
      "Firebase",
      "NextAuth",
      "Google OAuth",
      "Tailwind CSS",
      "DaisyUI",
    ],
    features: [
      "Folder Creation and File Upload",
      "Nested Folder Support",
      "Usage Limits and File Categorization",
      "Google Authentication for secure login",
      "File Management: Delete and Download files",
      "User-friendly UI designed with DailyUI principles",
    ],
    demoUrl: "https://pocket-cloud.vercel.app", // Demo link
    githubUrl: "https://github.com/Jayant-001/Cloud-File-Manager", // GitHub repository link
  },
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
  // Rapid mail
  // Bloom Filter
  // AI currency converter package
  // Load balancer nodejs
];
