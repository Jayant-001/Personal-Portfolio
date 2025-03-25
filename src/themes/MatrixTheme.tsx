import React, { useEffect, useRef, useState } from 'react';
import { Terminal, Database, Cloud, Cpu, Code, Briefcase, GraduationCap, Mail, Github, Award, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { Project, projects } from '../data/projects';
import { experiences } from '../data/experiences';
import { profiles } from '../data/profiles';

const MatrixTheme = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    const fontSize = 16;
    const columns = canvas.width / fontSize;
    const drops: number[] = [];

    for (let i = 0; i < columns; i++) {
      drops[i] = 1;
    }

    const draw = () => {
      ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      ctx.fillStyle = '#0F0';
      ctx.font = fontSize + 'px monospace';

      for (let i = 0; i < drops.length; i++) {
        const text = chars[Math.floor(Math.random() * chars.length)];
        ctx.fillText(text, i * fontSize, drops[i] * fontSize);

        if (drops[i] * fontSize > canvas.height && Math.random() > 0.975) {
          drops[i] = 0;
        }
        drops[i]++;
      }
    };

    const interval = setInterval(draw, 33);
    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', resizeCanvas);
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-black">
      <canvas ref={canvasRef} className="fixed inset-0" />
      
      <div className="relative z-10">
        {/* Navigation */}
        <nav className="fixed top-0 left-0 right-0 bg-black/80 backdrop-blur-sm border-b border-green-400/30 p-4">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="text-green-400 font-mono text-xl">[DEV.SYSTEM]</span>
            <div className="flex gap-6">
              {['About', 'Skills', 'Experience', 'Projects', 'Education', 'Contact'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  className="text-green-400 hover:text-green-300 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        </nav>

        <div className="max-w-6xl mx-auto px-8 pt-24">
          {/* Introduction */}
          <section id="about" className="min-h-screen flex items-center">
            <div className="space-y-8">
              <div className="bg-black/80 p-8 rounded-lg border border-green-400/30">
                <h1 className="text-5xl font-bold text-green-400 mb-4 animate-pulse">
                  [System.Backend.Developer]
                </h1>
                <p className="text-green-300 text-xl mb-6">
                  Backend Developer with 1 year of experience specializing in Java, MERN Stack, and Cloud Technologies.
                  Passionate about building scalable systems and implementing AI solutions.
                </p>
                <div className="flex gap-4">
                  <button className="bg-green-400/20 border border-green-400 px-6 py-3 rounded-lg text-green-400 hover:bg-green-400/30 transition-colors">
                    View Projects
                  </button>
                  <button className="bg-transparent border border-green-400 px-6 py-3 rounded-lg text-green-400 hover:bg-green-400/10 transition-colors">
                    Contact Me
                  </button>
                </div>
              </div>
            </div>
          </section>

          {/* Technical Skills */}
          <section id="skills" className="min-h-screen py-20">
            <h2 className="text-3xl font-bold text-green-400 mb-12">[Technical.Skills]</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  icon: <Code className="w-6 h-6" />,
                  title: "Languages",
                  skills: ["Java", "JavaScript", "TypeScript", "Python", "SQL"]
                },
                {
                  icon: <Terminal className="w-6 h-6" />,
                  title: "Backend",
                  skills: ["Spring Boot", "Node.js", "Express", "REST APIs", "GraphQL"]
                },
                {
                  icon: <Database className="w-6 h-6" />,
                  title: "Databases",
                  skills: ["MongoDB", "PostgreSQL", "Redis", "Elasticsearch"]
                },
                {
                  icon: <Cloud className="w-6 h-6" />,
                  title: "Cloud & DevOps",
                  skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Jenkins"]
                },
                {
                  icon: <Cpu className="w-6 h-6" />,
                  title: "Tools & Technologies",
                  skills: ["Kafka", "RabbitMQ", "Git", "JIRA", "Swagger"]
                }
              ].map((category, index) => (
                <div
                  key={index}
                  className="bg-black/80 p-6 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-all"
                >
                  <div className="flex items-center gap-3 mb-4 text-green-400">
                    {category.icon}
                    <h3 className="text-xl font-bold">{category.title}</h3>
                  </div>
                  <ul className="space-y-2">
                    {category.skills.map((skill, i) => (
                      <li key={i} className="text-green-300 flex items-center gap-2">
                        <span className="text-green-400">→</span> {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </section>

          {/* Coding Profiles */}
          <section id="profiles" className="py-20">
            <h2 className="text-3xl font-bold text-green-400 mb-12">[Coding.Profiles]</h2>
            <div className="space-y-6">
              {profiles.map((profile, index) => (
                <div
                  key={index}
                  className="bg-black/80 p-6 rounded-lg border border-green-400/30 hover:border-green-400/60 transition-all"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-4">
                      <Award className="w-8 h-8 text-green-400" />
                      <div>
                        <h3 className="text-xl font-bold text-green-400">{profile.platform}</h3>
                        <p className="text-green-300">Rank: {profile.rank}</p>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-green-300">Problems Solved: {profile.problemsSolved}</p>
                      <a
                        href={profile.profileUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-green-400 hover:text-green-300 flex items-center gap-2"
                      >
                        @{profile.handle} <ExternalLink className="w-4 h-4" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Experience */}
          <section id="experience" className="py-20">
            <h2 className="text-3xl font-bold text-green-400 mb-12">[Work.Experience]</h2>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div
                  key={index}
                  className="bg-black/80 p-6 rounded-lg border border-green-400/30"
                >
                  <div className="flex items-start gap-4">
                    <Briefcase className="w-6 h-6 text-green-400 mt-1" />
                    <div>
                      <h3 className="text-xl font-bold text-green-400">{exp.role}</h3>
                      <p className="text-green-300 mb-2">{exp.company} | {exp.duration}</p>
                      <div className="flex flex-wrap gap-2 mb-4">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="bg-green-400/10 text-green-400 px-3 py-1 rounded-full text-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                      <ul className="space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="text-green-300 flex items-start gap-2">
                            <span className="text-green-400 mt-1">→</span>
                            <span>{highlight}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Projects */}
          <section id="projects" className="py-20">
            <h2 className="text-3xl font-bold text-green-400 mb-12">[Featured.Projects]</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-black/80 rounded-lg border border-green-400/30 overflow-hidden hover:border-green-400/60 transition-all cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-green-400 mb-2">{project.title}</h3>
                    <p className="text-green-300 mb-4 line-clamp-2">{project.shortDescription}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech, i) => (
                        <span
                          key={i}
                          className="bg-green-400/10 text-green-400 px-2 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="bg-green-400/10 text-green-400 px-2 py-1 rounded-full text-sm">
                          +{project.technologies.length - 3}
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Education */}
          <section id="education" className="py-20">
            <h2 className="text-3xl font-bold text-green-400 mb-12">[Education.Details]</h2>
            <div className="bg-black/80 p-8 rounded-lg border border-green-400/30">
              <div className="flex items-start gap-4">
                <GraduationCap className="w-8 h-8 text-green-400" />
                <div>
                  <h3 className="text-2xl font-bold text-green-400">Bachelor of Technology</h3>
                  <p className="text-xl text-green-300">Computer Science & Engineering</p>
                  <p className="text-green-300 mt-2">Your College Name</p>
                  <div className="mt-4 flex gap-8">
                    <div>
                      <p className="text-green-400">Graduation Year</p>
                      <p className="text-green-300">2022</p>
                    </div>
                    <div>
                      <p className="text-green-400">CGPA</p>
                      <p className="text-green-300">8.5</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          {/* Contact */}
          <section id="contact" className="py-20">
            <h2 className="text-3xl font-bold text-green-400 mb-12">[Contact.Connect]</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-black/80 p-8 rounded-lg border border-green-400/30">
                <div className="flex items-center gap-3 mb-6">
                  <Mail className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-green-400">Get in Touch</h3>
                </div>
                <form className="space-y-4">
                  <div>
                    <label className="block text-green-400 mb-2">Name</label>
                    <input
                      type="text"
                      className="w-full bg-black border border-green-400/30 rounded-lg px-4 py-2 text-green-300 focus:outline-none focus:border-green-400"
                    />
                  </div>
                  <div>
                    <label className="block text-green-400 mb-2">Email</label>
                    <input
                      type="email"
                      className="w-full bg-black border border-green-400/30 rounded-lg px-4 py-2 text-green-300 focus:outline-none focus:border-green-400"
                    />
                  </div>
                  <div>
                    <label className="block text-green-400 mb-2">Message</label>
                    <textarea
                      rows={4}
                      className="w-full bg-black border border-green-400/30 rounded-lg px-4 py-2 text-green-300 focus:outline-none focus:border-green-400"
                    ></textarea>
                  </div>
                  <button
                    type="submit"
                    className="w-full bg-green-400/20 border border-green-400 py-2 rounded-lg text-green-400 hover:bg-green-400/30 transition-colors"
                  >
                    Send Message
                  </button>
                </form>
              </div>
              
              <div className="bg-black/80 p-8 rounded-lg border border-green-400/30">
                <div className="flex items-center gap-3 mb-6">
                  <Github className="w-6 h-6 text-green-400" />
                  <h3 className="text-xl font-bold text-green-400">Social Links</h3>
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
                      className="flex items-center gap-3 text-green-300 hover:text-green-400 transition-colors"
                    >
                      <ExternalLink className="w-5 h-5" />
                      {social.platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <ProjectModal project={selectedProject} onClose={() => setSelectedProject(null)} />
      )}
    </div>
  );
};

export default MatrixTheme;