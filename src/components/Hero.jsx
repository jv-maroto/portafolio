import React from 'react';
import Typewriter from 'typewriter-effect';
import { Github, Linkedin, Mail, ArrowDown } from 'lucide-react';
import { SocialLink } from './SocialLink';
import { Button } from './Button';

export function Hero() {
  return (
    <section className="relative min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white">
   
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000')] opacity-10 bg-cover bg-center" />

      <div className="relative container mx-auto px-6 pt-32 pb-20">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-6 text-center md:text-left">
            <h2 className="text-blue-400 font-mono">
              <Typewriter
                options={{
                  strings: ["Hello, I'm Javier Maroto Domínguez"],
                  autoStart: true,
                  loop: true,
                  delay: 180, 
                  cursor: '|',
                }}
              />
            </h2>

            <h1 className="text-5xl md:text-7xl font-bold mb-6 animate-fade-in">
              <span className="bg-gradient-to-r from-blue-400 to-cyan-300 text-transparent bg-clip-text">
                Systems Administrator
              </span>
              <br />& Developer
            </h1>

            <p className="text-xl text-gray-300 mb-8 md:max-w-xl">
              Crafting robust infrastructure solutions and building modern web applications 
              with Django, React and scripts to make our lives easier.
            </p>

            <div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
              <Button href="#contact" primary>
                Get in Touch
              </Button>
              <Button href="#projects">
                View Projects
              </Button>
            </div>

            <div className="flex justify-center md:justify-start space-x-6 mt-8">
              <SocialLink
                href="https://github.com/jv-maroto/portafolio"
                icon={<Github className="h-6 w-6" aria-label="GitHub" />}
              />
              <SocialLink
                href="https://www.linkedin.com/in/javier-domiguez-7a9974150/"
                icon={<Linkedin className="h-6 w-6" aria-label="LinkedIn" />}
              />
              <SocialLink
                href="mailto:javidominguez060@gmail.com"
                icon={<Mail className="h-6 w-6" aria-label="Email" />}
              />
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <ArrowDown className="h-6 w-6 text-blue-400" />
      </div>
    </section>
  );
}
