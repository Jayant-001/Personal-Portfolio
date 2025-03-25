import React, { useState, useEffect } from 'react';
import { Terminal, Github, Database, Cloud, Pocket as Docker, Brain, Code, Briefcase, GraduationCap, Mail, Award, ExternalLink } from 'lucide-react';
import ProjectModal from './ProjectModal';
import { Project, projects } from '../data/projects';
import { experiences } from '../data/experiences';
import { profiles } from '../data/profiles';

const TerminalTheme = () => {
  const [text, setText] = useState('');
  const [currentCommand, setCurrentCommand] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState('about');
  
  const commands = [
    'Loading profile...',
    'Initializing skills database...',
    'Connecting to experience server...',
    'Backend Developer | Java | MERN | GenAI',
  ];

  useEffect(() => {
    const typeCommand = () => {
      if (currentCommand < commands.length) {
        let i = 0;
        const interval = setInterval(() => {
          setText(commands[currentCommand].substring(0, i));
          i++;
          if (i > commands[currentCommand].length) {
            clearInterval(interval);
            setTimeout(() => setCurrentCommand(c => c + 1), 1000);
          }
        }, 50);
        return () => clearInterval(interval);
      }
    };
    typeCommand();
  }, [currentCommand]);

  const sections = {
    about: (
      <div className="space-y-4">
        <p className="text-yellow-400">$ whoami</p>
        <div className="pl-4">
          <p className="mb-4">Backend Developer with expertise in:</p>
          <ul className="space-y-2 text-green-400">
            <li>• Java & Spring Boot Development</li>
            <li>• MERN Stack Applications</li>
            <li>• Cloud Infrastructure & DevOps</li>
            <li>• AI/ML Integration</li>
          </ul>
        </div>
      </div>
    ),
    skills: (
      <div className="space-y-6">
        <p className="text-yellow-400">$ cat skills.txt</p>
        <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <Code className="w-4 h-4" /> Languages
            </div>
            <ul className="pl-6 space-y-1 text-gray-300">
              <li>- Java</li>
              <li>- JavaScript/TypeScript</li>
              <li>- Python</li>
              <li>- SQL</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <Database className="w-4 h-4" /> Databases
            </div>
            <ul className="pl-6 space-y-1 text-gray-300">
              <li>- MongoDB</li>
              <li>- PostgreSQL</li>
              <li>- Redis</li>
              <li>- Elasticsearch</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <Cloud className="w-4 h-4" /> Cloud & DevOps
            </div>
            <ul className="pl-6 space-y-1 text-gray-300">
              <li>- AWS/Azure</li>
              <li>- Docker/K8s</li>
              <li>- CI/CD</li>
              <li>- Jenkins</li>
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <Brain className="w-4 h-4" /> Tools & Technologies
            </div>
            <ul className="pl-6 space-y-1 text-gray-300">
              <li>- Kafka</li>
              <li>- RabbitMQ</li>
              <li>- Git</li>
              <li>- JIRA</li>
            </ul>
          </div>
        </div>
      </div>
    ),
    profiles: (
      <div className="space-y-6">
        <p className="text-yellow-400">$ ls coding-profiles/</p>
        <div className="pl-4 space-y-4">
          {profiles.map((profile, index) => (
            <div key={index} className="border border-green-400/30 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Award className="w-4 h-4 text-green-400" />
                <span className="text-green-400">{profile.platform}</span>
              </div>
              <div className="pl-6 space-y-1 text-gray-300">
                <p>Handle: @{profile.handle}</p>
                <p>Rank: {profile.rank}</p>
                <p>Problems: {profile.problemsSolved}</p>
                <a
                  href={profile.profileUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline flex items-center gap-1"
                >
                  View Profile <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    experience: (
      <div className="space-y-6">
        <p className="text-yellow-400">$ cat experience.log</p>
        <div className="pl-4 space-y-6">
          {experiences.map((exp, index) => (
            <div key={index} className="border border-green-400/30 p-4 rounded">
              <div className="flex items-center gap-2 mb-2">
                <Briefcase className="w-4 h-4 text-green-400" />
                <span className="text-green-400">{exp.role} @ {exp.company}</span>
              </div>
              <div className="pl-6 space-y-2 text-gray-300">
                <p className="text-yellow-400">{exp.duration}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="text-blue-400">#{tech}</span>
                  ))}
                </div>
                <ul className="space-y-1">
                  {exp.highlights.map((highlight, i) => (
                    <li key={i}>$ {highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    projects: (
      <div className="space-y-6">
        <p className="text-yellow-400">$ ls projects/</p>
        <div className="pl-4 grid grid-cols-1 md:grid-cols-2 gap-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="border border-green-400/30 p-4 rounded cursor-pointer hover:border-green-400 transition-colors"
              onClick={() => setSelectedProject(project)}
            >
              <h3 className="text-green-400 font-bold mb-2">{project.title}</h3>
              <p className="text-gray-300 mb-2">{project.shortDescription}</p>
              <div className="flex flex-wrap gap-2">
                {project.technologies.slice(0, 3).map((tech, i) => (
                  <span key={i} className="text-blue-400">#{tech}</span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-blue-400">+{project.technologies.length - 3}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    ),
    education: (
      <div className="space-y-6">
        <p className="text-yellow-400">$ cat education.txt</p>
        <div className="pl-4 border border-green-400/30 p-4 rounded">
          <div className="flex items-center gap-2 mb-4">
            <GraduationCap className="w-4 h-4 text-green-400" />
            <span className="text-green-400">Bachelor of Technology</span>
          </div>
          <div className="pl-6 space-y-2 text-gray-300">
            
            <p>Major: Computer Science & Engineering</p>
            <p>Institution: Your College Name</p>
            <p>Graduation: 2022</p>
            <p>CGPA: 8.5</p>
          </div>
        </div>
      </div>
    ),
    contact: (
      <div className="space-y-6">
        <p className="text-yellow-400">$ contact --help</p>
        <div className="pl-4 space-y-6">
          <div className="border border-green-400/30 p-4 rounded">
            <div className="flex items-center gap-2 mb-4">
              <Mail className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Contact Form</span>
            </div>
            <form className="pl-6 space-y-4">
              <div>
                <label className="block text-gray-300 mb-1">Name:</label>
                <input
                  type="text"
                  className="w-full bg-black border border-green-400/30 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Email:</label>
                <input
                  type="email"
                  className="w-full bg-black border border-green-400/30 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-green-400"
                />
              </div>
              <div>
                <label className="block text-gray-300 mb-1">Message:</label>
                <textarea
                  rows={4}
                  className="w-full bg-black border border-green-400/30 rounded px-3 py-2 text-gray-300 focus:outline-none focus:border-green-400"
                ></textarea>
              </div>
              <button
                type="submit"
                className="bg-green-400/20 border border-green-400 px-4 py-2 rounded text-green-400 hover:bg-green-400/30 transition-colors"
              >
                Send Message
              </button>
            </form>
          </div>
          
          <div className="border border-green-400/30 p-4 rounded">
            <div className="flex items-center gap-2 mb-4">
              <Github className="w-4 h-4 text-green-400" />
              <span className="text-green-400">Social Links</span>
            </div>
            <div className="pl-6 space-y-2">
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
                  className="flex items-center gap-2 text-blue-400 hover:underline"
                >
                  <ExternalLink className="w-3 h-3" />
                  {social.platform}
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    )
  };

  return (
    <div className="min-h-screen bg-black text-green-400 p-8 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Terminal className="w-6 h-6" />
          <span className="text-xl">portfolio@developer:~$</span>
        </div>
        
        {/* Navigation */}
        <div className="mb-8 flex flex-wrap gap-4">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded ${
                activeSection === section
                  ? 'bg-green-400/20 border border-green-400'
                  : 'border border-green-400/30 hover:border-green-400/60'
              }`}
            >
              {section}
            </button>
          ))}
        </div>
        
        {/* Content */}
        <div className="border border-green-400/30 rounded-lg p-6">
          <p className="mb-4">{text}<span className="animate-pulse">_</span></p>
          
          {currentCommand >= commands.length && sections[activeSection as keyof typeof sections]}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-black border border-green-400/30 rounded max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-black border-b border-green-400/30 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">Project: {selectedProject.title}</h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-green-400 hover:text-green-300"
              >
                <ExternalLink className="w-5 h-5" />
              </button>
            </div>
            <div className="p-6 space-y-6">
              <img
                src={selectedProject.image}
                alt={selectedProject.title}
                className="w-full h-64 object-cover rounded"
              />
              <div>
                <h3 className="text-yellow-400 mb-2">$ cat description.txt</h3>
                <p className="text-gray-300 pl-4">{selectedProject.description}</p>
              </div>
              <div>
                <h3 className="text-yellow-400 mb-2">$ ls technologies/</h3>
                <div className="pl-4 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="text-blue-400">#{tech}</span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-yellow-400 mb-2">$ cat features.txt</h3>
                <ul className="pl-4 space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="text-gray-300">$ {feature}</li>
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
                      className="bg-green-400/20 border border-green-400 px-4 py-2 rounded text-green-400 hover:bg-green-400/30 transition-colors"
                    >
                      View Demo
                    </a>
                  )}
                  {selectedProject.githubUrl && (
                    <a
                      href={selectedProject.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="border border-green-400/30 px-4 py-2 rounded text-green-400 hover:border-green-400 transition-colors"
                    >
                      View Source
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TerminalTheme;