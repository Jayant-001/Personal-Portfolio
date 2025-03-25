export interface Experience {
  role: string;
  company: string;
  duration: string;
  technologies: string[];
  highlights: string[];
}

export const experiences: Experience[] = [
  {
    role: "Software Developer",
    company: "Unthinkable Solution (Daffodil)",
    duration: "July 2024 - Present",
    technologies: ["Node.js", "RabbitMQ", "GenAI", "ReactJS", "MessageQueue", "DotNet", "Java", "Spring Boot", "gRPC", "DynamoDB", "AWS", "Docker"],
    highlights: [
      "Designed a personalized form state recommendation feature, auto-filling values based on users' form history.",
      "Developed and maintained an event-driven microservice handling 10K+ daily requests.",
      "Implemented real-time data processing pipeline using AWS SNS, SQS and Lambda.",
      "Reduced API response time by 40% through Redis caching, efficient DB indexing and partitioning.",
      "Implemented RESTful APIs using .NET 8 Core, integrated with PostgreSQL and Entity Framework for efficient data management, and followed Test-Driven Development (TDD) to ensure high-quality, maintainable code."
    ]
  },
  {
    role: "Software Developer Intern",
    company: "Unthinkable Solution (Daffodil)",
    duration: "Jan 2024 - June 2024",
    technologies: ["DotNet", "Microservices", "gRPC", "Postgres", "MongoDB", "Elasticsearch", "Node.js", "Express", "PostgreSQL", "Redis"],
    highlights: [
      "Designed multiple microservices for a reservation system using Spring Boot and gRPC for efficient communication.",
      "Developed RESTful APIs with OpenAPI, using a multi-database ORM (SQL, MongoDB).",
      "Secured APIs with JWT, OAuth 2.0, Argon2i password hashing, and AES encryption.",
      "Increased system performance by 40% using Kafka for high-volume data handling and parallel processing.",
      "Boosted query throughput by 60% with Elasticsearch and Kafka-driven index updates."
    ]
  }
];