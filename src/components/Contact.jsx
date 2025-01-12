import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

export function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-900">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Get In Touch</h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {[
              { icon: <Mail className="h-8 w-8" />, title: "Email", info: "javidominguez060@gmail.com" },
              { icon: <Phone className="h-8 w-8" />, title: "Phone", info: "+34 696 33 92 72" },
              { icon: <MapPin className="h-8 w-8" />, title: "Location", info: "Santa Cruz Tenerife , Canary Island , Spain" }
            ].map((item, index) => (
              <div 
                key={index}
                className="group bg-gray-800 p-6 rounded-xl text-center hover:bg-gradient-to-br hover:from-blue-500/10 hover:to-cyan-500/10 transition-colors"
              >
                <div className="inline-block p-4 bg-blue-500/10 rounded-full text-blue-400 mb-4 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-lg font-semibold mb-2 text-white">{item.title}</h3>
                <p className="text-gray-400">{item.info}</p>
              </div>
            ))}
          </div>
          
         
        </div>
      </div>
    </section>
  );
}

