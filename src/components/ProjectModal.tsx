import React from 'react';
import { X } from 'lucide-react';
import { Project } from '../data/projects';

interface ProjectModalProps {
  project: Project;
  onClose: () => void;
}

const ProjectModal: React.FC<ProjectModalProps> = ({ project, onClose }) => {
  return (
    <div className="fixed inset-0 bg-black/90 backdrop-blur-sm z-50 flex items-center justify-center p-4">
      <div className="bg-black/95 border border-green-400/30 rounded-lg max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-black/95 border-b border-green-400/30 p-4 flex justify-between items-center">
          <h2 className="text-2xl font-bold text-green-400">{project.title}</h2>
          <button
            onClick={onClose}
            className="text-green-400 hover:text-green-300 transition-colors"
          >
            <X className="w-6 h-6" />
          </button>
        </div>
        
        <div className="p-6">
          <img
            src={project.image}
            alt={project.title}
            className="w-full h-64 object-cover rounded-lg mb-6"
          />
          
          <div className="space-y-6">
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Description</h3>
              <p className="text-green-300">{project.description}</p>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Technologies Used</h3>
              <div className="flex flex-wrap gap-2">
                {project.technologies.map((tech, index) => (
                  <span
                    key={index}
                    className="bg-green-400/10 text-green-400 px-3 py-1 rounded-full"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            <div>
              <h3 className="text-xl font-bold text-green-400 mb-2">Key Features</h3>
              <ul className="space-y-2">
                {project.features.map((feature, index) => (
                  <li key={index} className="flex items-start gap-2 text-green-300">
                    <span className="text-green-400 mt-1">→</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            {project.demoUrl && (
              <div className="flex gap-4">
                <a
                  href={project.demoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-400/20 border border-green-400 px-6 py-2 rounded-lg text-green-400 hover:bg-green-400/30 transition-colors inline-flex items-center gap-2"
                >
                  Live Demo
                </a>
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-transparent border border-green-400 px-6 py-2 rounded-lg text-green-400 hover:bg-green-400/10 transition-colors inline-flex items-center gap-2"
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
  );
};

export default ProjectModal;