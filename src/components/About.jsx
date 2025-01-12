import { Code, Server, Database } from 'lucide-react';

export function About() {
  return (
    <section id="about" className="py-20 bg-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">About Me</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-blue-400">
              Systems Administrator & Full Stack Developer
            </h3>
            <p className="text-gray-300 leading-relaxed">
              With extensive experience in both systems administration and software development,
              I bring a unique perspective to technical challenges. My expertise spans across
              infrastructure management, cloud solutions, and full-stack development.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <Server className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300">Infrastructure & Cloud Solutions</span>
              </div>
              <div className="flex items-center space-x-4">
                <Code className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300">Medium Backend Development and Beginner  Frontent Development </span>
              </div>
              <div className="flex items-center space-x-4">
                <Database className="h-6 w-6 text-blue-400" />
                <span className="text-gray-300">Database Management</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl space-y-6">
            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Experience Highlights</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>2+ years in Systems Administration</span>
                </li>
               
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>2+ years Database Management</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Security Implementation</span>
                </li>
              </ul>
            </div>

            <div className="space-y-4">
              <h4 className="text-xl font-semibold text-white">Education</h4>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>G.S Administracion de Sistemas Informaticos en Red (Instituo Perez Minik Tenerife Canarias)</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>Multiple Technical Certifications</span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>1+ years with Django & React I learned by myself. </span>
                </li>
                <li className="flex items-center space-x-2">
                  <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                  <span>B1 level English, but no certificate. </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}