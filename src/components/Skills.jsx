import { Code2, Database, Cloud, Server, Globe, Shield } from 'lucide-react';
import { SkillCard } from './SkillCard';

export function Skills() {
  const skills = [
    {
      icon: <Server className="h-8 w-8" />,
      title: "Systems Administration",
      description: "Linux, Windows Server, Network Management, Security",
      color: "from-blue-500 to-cyan-500"
    },
    {
      icon: <Code2 className="h-8 w-8" />,
      title: "Backend Development",
      description: "Django, Python, RESTful APIs, Database Design , PHP vanilla",
      color: "from-indigo-500 to-purple-500"
    },
    {
      icon: <Globe className="h-8 w-8" />,
      title: "Frontend Development",
      description: "React, Tailwind CSS, Modern JavaScript, CSS3",
      color: "from-pink-500 to-rose-500"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Database Management",
      description: "MySQL, SQLite, PHPMyAdmin",
      color: "from-amber-500 to-orange-500"
    },
    {
      icon: <Cloud className="h-8 w-8" />,
      title: "Cloud Services",
      description: "VMWARE, Docker, Acens, CI/CD",
      color: "from-emerald-500 to-teal-500"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Security",
      description: "Cybersecurity Best Practices, Firewall Configuration",
      color: "from-red-500 to-rose-500"
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Technical Skills</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skill, index) => (
            <SkillCard key={index} {...skill} />
          ))}
        </div>
      </div>
    </section>
  );
}