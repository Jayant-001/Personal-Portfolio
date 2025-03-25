import React, { useState } from 'react';
import { Binary, Box, Layers, Workflow, Zap, Code, Database, Cloud, Cpu, Briefcase, GraduationCap, Mail, Github, Award, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { Project, projects } from '../data/projects';
import { experiences } from '../data/experiences';
import { profiles } from '../data/profiles';

const FuturisticTheme = () => {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-900 via-purple-900 to-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-black/30 backdrop-blur-md border-b border-purple-500/20 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
              DEV.PORTFOLIO
            </div>
            <div className="flex gap-8">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-6">
        {/* Hero Section */}
        <section id="about" className="min-h-screen flex items-center pt-20">
          <div className="w-full">
            <div className="relative">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-lg blur opacity-75"></div>
              <div className="relative bg-black p-8 rounded-lg border border-purple-500/20">
                <h1 className="text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400 mb-6">
                  Backend Developer
                </h1>
                <p className="text-xl text-gray-300 mb-8 max-w-2xl">
                  Experienced backend developer specializing in Java, MERN Stack, and Cloud Technologies.
                  Building scalable systems and implementing AI solutions.
                </p>
                <div className="flex gap-4">
                  <a href="#projects" className="px-6 py-3 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors">
                    View Projects
                  </a>
                  <a href="#contact" className="px-6 py-3 border border-purple-500 rounded-lg text-purple-400 hover:bg-purple-500/10 transition-colors">
                    Contact Me
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Technical Expertise
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                icon: <Code className="w-8 h-8" />,
                title: "Languages",
                skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"]
              },
              {
                icon: <Box className="w-8 h-8" />,
                title: "Backend",
                skills: ["Spring Boot", "Node.js", "Express", "REST APIs", "GraphQL"]
              },
              {
                icon: <Database className="w-8 h-8" />,
                title: "Databases",
                skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]
              },
              {
                icon: <Cloud className="w-8 h-8" />,
                title: "Cloud & DevOps",
                skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins"]
              },
              {
                icon: <Layers className="w-8 h-8" />,
                title: "Tools & Technologies",
                skills: ["Kafka", "RabbitMQ", "Git", "JIRA", "Swagger"]
              }
            ].map((category, index) => (
              <div
                key={index}
                className="group relative bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-3 mb-6 text-purple-400">
                    {category.icon}
                    <h3 className="text-2xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-3">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="flex items-center gap-2 text-gray-300">
                        <Zap className="w-4 h-4 text-purple-400" />
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Coding Profiles */}
        <section id="profiles" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Coding Profiles
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="group relative bg-black/30 backdrop-blur-sm p-6 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-center gap-4 mb-4">
                    <Award className="w-10 h-10 text-purple-400" />
                    <div>
                      <h3 className="text-xl font-bold text-white">{profile.platform}</h3>
                      <p className="text-purple-400">{profile.rank}</p>
                    </div>
                  </div>
                  <div className="space-y-2">
                    <p className="text-gray-300">Problems Solved: {profile.problemsSolved}</p>
                    <a
                      href={profile.profileUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-purple-400 hover:text-purple-300 transition-colors"
                    >
                      @{profile.handle}
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Experience */}
        <section id="experience" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Work Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="group relative bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <div className="flex items-start gap-4">
                    <Briefcase className="w-8 h-8 text-purple-400 mt-1" />
                    <div>
                      <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
                      <p className="text-purple-400 mb-4">{exp.company} | {exp.duration}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-gray-300">
                            <Zap className="w-4 h-4 text-purple-400 mt-1" />
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="group relative bg-black/30 backdrop-blur-sm rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all overflow-hidden cursor-pointer"
                onClick={() => setSelectedProject(project)}
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <div className="relative">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                    <p className="text-gray-300 mb-4 line-clamp-2">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-2 py-1 bg-purple-500/10 text-purple-400 rounded-full text-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Education */}
        <section id="education" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Education
          </h2>
          <div className="group relative bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20 hover:border-purple-500/40 transition-all">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
            <div className="relative flex items-start gap-6">
              <GraduationCap className="w-12 h-12 text-purple-400" />
              <div>
                <h3 className="text-2xl font-bold text-white">Bachelor of Technology</h3>
                <p className="text-xl text-purple-400">Computer Science & Engineering</p>
                <p className="text-gray-300 mt-2">Your College Name</p>
                <div className="mt-6 flex gap-12">
                  <div>
                    <p className="text-purple-400 font-semibold">Graduation Year</p>
                    <p className="text-gray-300">2022</p>
                  </div>
                  <div>
                    <p className="text-purple-400 font-semibold">CGPA</p>
                    <p className="text-gray-300">8.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section id="contact" className="py-20">
          <h2 className="text-4xl font-bold text-center mb-16 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-400">
            Get in Touch
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="group relative bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Send Message</h3>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-gray-300 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    />
                  </div>
                  <div>
                    <label className="block text-gray-300 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-black/50 border border-purple-500/30 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-purple-500"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-purple-600 py-2 rounded-lg text-white hover:bg-purple-700 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>

            <div className="group relative bg-black/30 backdrop-blur-sm p-8 rounded-xl border border-purple-500/20">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 to-pink-600/20 rounded-lg blur opacity-0 group-hover:opacity-100 transition-opacity"></div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-6">
                  <Github className="w-6 h-6 text-purple-400" />
                  <h3 className="text-xl font-bold text-white">Social Links</h3>
                </div>
                <div className="space-y-4">
                  {[
                    { platform: 'GitHub', url: 'https://github.com/yourusername' },
                    { platform: 'LinkedIn', url: 'https://linkedin.com/in/yourusername' },
                    { platform: 'Twitter', url: 'https://twitter.com/yourusername' }
                  ].map((social, index) => (
                    <a
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 text-gray-300 hover:text-purple-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-black/95 border border-purple-500/30 rounded-xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-black/95 border-b border-purple-500/30 p-4 flex justify-between items-center">
              <h2 className="text-2xl font-bold text-white">{selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-gray-400 hover:text-white transition-colors"
              >
                <ExternalLink className="w-6 h-6" />
              </button>
            </div>
            <div className="p-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded-lg mb-6"
              />
              <div className="space-y-6">
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Description</h3>
                  <p className="text-gray-300">{selectedProject.description}</p>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Technologies</h3>
                  <div className="flex flex-wrap gap-2">
                    {selectedProject.technologies.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-purple-500/10 text-purple-400 rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
                <div>
                  <h3 className="text-xl font-bold text-purple-400 mb-2">Key Features</h3>
                  <ul className="space-y-2">
                    {selectedProject.features.map((feature, index) => (
                      <li key={index} className="flex items-start gap-2 text-gray-300">
                        <Zap className="w-4 h-4 text-purple-400 mt-1" />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                {(selectedProject.demoUrl || selectedProject.githubUrl) && (
                  <div className="flex gap-4">
                    {selectedProject.demoUrl && (
                      <a
                        href={selectedProject.demoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 bg-purple-600 rounded-lg text-white hover:bg-purple-700 transition-colors"
                      >
                        Live Demo
                      </a>
                    )}
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="px-6 py-2 border border-purple-500 rounded-lg text-purple-400 hover:bg-purple-500/10 transition-colors"
                      >
                        GitHub Repo
                      </a>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default FuturisticTheme;