import { Github, ExternalLink } from 'lucide-react';
import { ProjectCard } from './ProjectCard';

export function Projects() {
  const projects = [
    {
      title: "Enterprise System Management",
      description: "Implemented and managed large-scale system infrastructure for a corporate environment.",
      tags: ["Django", "React", "Next", "Tailwind CSS", "Django Admin"],
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=2000",
      github: "https://github.com/jv-maroto/Portal-Employes ",
      demo: "#"
    },
    {
      title: "E-commerce Platform",
      description: "Full-stack e-commerce solution built with Django and React.",
      tags: ["Windows", "Python", "Monitoring", "Redis"],
      image: "https://images.unsplash.com/photo-1557821552-17105176677c?auto=format&fit=crop&q=80&w=2000",
      github: "https://github.com/jv-maroto/cleaning-as-fk",
      demo: "#"
    },
   
  ];

  return (
    <section id="projects" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Featured Projects</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <ProjectCard key={index} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}