import { Github, ExternalLink } from 'lucide-react';

export function ProjectCard({ title, description, tags, image, github, demo }) {
  return (
    <div className="group bg-gray-900 rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300">
      <div className="relative overflow-hidden">
        <img 
          src={image} 
          alt={title}
          className="w-full h-48 object-cover transform transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-0 group-hover:opacity-90 transition-opacity duration-300">
          <div className="absolute bottom-4 left-4 flex space-x-4">
            <a 
              href={github}
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors"
            >
              <Github className="h-5 w-5 text-white" />
            </a>
            <a 
              href={demo}
              className="p-2 bg-gray-800 rounded-full hover:bg-blue-500 transition-colors"
            >
              <ExternalLink className="h-5 w-5 text-white" />
            </a>
          </div>
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-semibold mb-2 text-white">{title}</h3>
        <p className="text-gray-400 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {tags.map((tag, index) => (
            <span 
              key={index}
              className="px-3 py-1 bg-blue-500/10 text-blue-400 rounded-full text-sm"
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}