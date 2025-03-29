import { useState, useEffect } from "react";
import {
  Terminal,
  Github,
  Database,
  Cloud,
  Brain,
  Code,
  Briefcase,
  GraduationCap,
  Mail,
  Award,
  ExternalLink,
  FerrisWheel,
  X,
} from "lucide-react";
import { Project, projects } from "../data/projects";
import { experiences } from "../data/experiences";
import { profiles } from "../data/profiles";
import { educations, skills, social } from "../data/personal_data";
import { useNavigate } from "react-router-dom";

const PortfolioPage = () => {
  const [text, setText] = useState("");
  const [currentCommand, setCurrentCommand] = useState(0);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [activeSection, setActiveSection] = useState("projects");
  const navigate = useNavigate();

  const commands = [
    "Loading profile...",
    "Initializing skills database...",
    "Connecting to experience server...",
    "Jayant Gupta | Full Stack Backend Developer | Competitive Coder | Java | MERN | GenAI",
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
            setTimeout(() => setCurrentCommand((c) => c + 1), 1000);
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
              {skills.languages.map((tool, i) => (
                <li key={i}>- {tool}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <Brain className="w-4 h-4" /> Tools & Technologies
            </div>
            <ul className="pl-6 space-y-1 text-gray-300">
              {skills.tools.map((tool, i) => (
                <li key={i}>- {tool}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <FerrisWheel className="w-4 h-4" /> Frameworks
            </div>
            <ul className="pl-6 space-y-1 text-gray-300">
              {skills.frameworks.map((tool, i) => (
                <li key={i}>- {tool}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <Database className="w-4 h-4" /> Databases
            </div>
            <ul className="pl-6 space-y-1 text-gray-300">
              {skills.databases.map((tool, i) => (
                <li key={i}>- {tool}</li>
              ))}
            </ul>
          </div>
          <div className="space-y-2">
            <div className="flex items-center gap-2 text-green-400">
              <Cloud className="w-4 h-4" /> Cloud & DevOps
            </div>
            <ul className="pl-6 space-y-1 text-gray-300">
              {skills.cloud.map((tool, i) => (
                <li key={i}>- {tool}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    ),
    coding: (
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
                <span className="text-green-400">
                  {exp.role} @ {exp.company}
                </span>
              </div>
              <div className="pl-6 space-y-2 text-gray-300">
                <p className="text-yellow-400">{exp.duration}</p>
                <div className="flex flex-wrap gap-2 mb-2">
                  {exp.technologies.map((tech, i) => (
                    <span key={i} className="text-blue-400">
                      #{tech}
                    </span>
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
        <div className=" grid grid-cols-1 md:grid-cols-2 gap-4">
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
                  <span key={i} className="text-blue-400">
                    #{tech}
                  </span>
                ))}
                {project.technologies.length > 3 && (
                  <span className="text-blue-400">
                    +{project.technologies.length - 3}
                  </span>
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
        {educations.map((edu, idx) => (
          <div
            key={idx}
            className="pl-4 border border-green-400/30 p-4 rounded"
          >
            <div className="flex items-center gap-2 mb-4">
              <GraduationCap className="w-4 h-4 text-green-400" />
              <span className="text-green-400">{edu.degree}</span>
            </div>
            <div className="pl-6 space-y-2 text-gray-300">
              <p>Major: {edu.major}</p>
              <p>Institution: {edu.university}</p>
              <p>Graduation: {edu.graduation_year}</p>
              <p>CGPA: {edu.cgpa}</p>
            </div>
          </div>
        ))}
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
            <form
              className="pl-6 space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                alert("This service is not working. Please consider email.");
              }}
            >
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
              {social
                .filter((item) => item.name !== "Email")
                .map((social, index) => (
                  <div className="flex" key={index} title={social.url}>
                    <a
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-blue-400 hover:underline"
                    >
                      <ExternalLink className="w-3 h-3" />
                      {social.name}
                    </a>
                  </div>
                ))}
            </div>
            <div className="pl-6 mt-2">
              <span
                onClick={() =>
                  window.open(
                    `mailto:${social[social.length - 1].url}`,
                    "_blank"
                  )
                }
                rel="noopener noreferrer"
                className="cursor-pointer flex items-center gap-2 text-blue-400 hover:underline"
              >
                <ExternalLink className="w-3 h-3" />
                {social[social.length - 1].name}
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
  };

  return (
    <div className="min-h-screen bg-black text-green-400 md:p-8 p-4 font-mono">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex items-center gap-2 mb-8">
          <Terminal className="w-6 h-6" />
          <span className="text-xl">portfolio@jayant:~$</span>
          <span
            onClick={(e) => {
              e.preventDefault();
              navigate("themes");
            }}
            className="opacity-0"
          >
            Hello
          </span>
        </div>

        {/* Navigation */}
        <div className="mb-8 flex flex-wrap gap-4">
          {Object.keys(sections).map((section) => (
            <button
              key={section}
              onClick={() => setActiveSection(section)}
              className={`px-4 py-2 rounded cursor-pointer ${
                activeSection === section
                  ? "bg-green-400/20 border border-green-400"
                  : "border border-green-400/30 hover:border-green-400/60"
              }`}
            >
              {section}
            </button>
          ))}
        </div>

        {/* Content */}
        <div className="border border-green-400/30 rounded-lg p-6">
          <p className="mb-4">
            {text}
            <span className="animate-pulse">_</span>
          </p>

          {currentCommand >= commands.length - 1 &&
            sections[activeSection as keyof typeof sections]}
        </div>
      </div>

      {/* Project Modal */}
      {selectedProject && (
        <div className="fixed inset-0 bg-black/90 z-50 flex items-center justify-center p-4">
          <div className="bg-black border border-green-400/30 rounded max-w-4xl w-full max-h-[90vh] overflow-y-auto">
            <div className="sticky top-0 bg-black border-b border-green-400/30 p-4 flex justify-between items-center">
              <h2 className="text-xl font-bold">
                Project: {selectedProject.title}
              </h2>
              <button
                onClick={() => setSelectedProject(null)}
                className="text-green-400 hover:text-green-300 cursor-pointer"
              >
                {/* <ExternalLink className="w-5 h-5" /> */}
                <X />
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
                <p className="text-gray-300 pl-4">
                  {selectedProject.description}
                </p>
              </div>
              <div>
                <h3 className="text-yellow-400 mb-2">$ ls technologies/</h3>
                <div className="pl-4 flex flex-wrap gap-2">
                  {selectedProject.technologies.map((tech, index) => (
                    <span key={index} className="text-blue-400">
                      #{tech}
                    </span>
                  ))}
                </div>
              </div>
              <div>
                <h3 className="text-yellow-400 mb-2">$ cat features.txt</h3>
                <ul className="pl-4 space-y-2">
                  {selectedProject.features.map((feature, index) => (
                    <li key={index} className="text-gray-300">
                      $ {feature}
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

export default PortfolioPage;
