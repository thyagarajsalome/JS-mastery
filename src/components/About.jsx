import React from "react";
import { Card } from "@/components/ui/card";

const ServiceCard = ({ title, icon }) => (
  <div className="w-full sm:w-[250px]">
    <Card className="overflow-hidden transition-all duration-300 hover:-translate-y-2 hover:shadow-xl">
      <div className="bg-gradient-to-r from-purple-500 to-pink-500 p-px rounded-lg">
        <div className="bg-slate-900 rounded-lg py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <img
            src={icon}
            alt={`${title} icon`}
            className="w-16 h-16 object-contain"
          />
          <h3 className="text-white text-xl font-bold text-center">{title}</h3>
        </div>
      </div>
    </Card>
  </div>
);

const About = () => {
  // Sample services data (replace with your actual services)
  const services = [
    {
      title: "Web Development",
      icon: "/api/placeholder/64/64",
    },
    {
      title: "React Development",
      icon: "/api/placeholder/64/64",
    },
    {
      title: "Three.js Development",
      icon: "/api/placeholder/64/64",
    },
    {
      title: "Backend Development",
      icon: "/api/placeholder/64/64",
    },
  ];

  return (
    <div className="w-full min-h-screen flex flex-col items-start">
      <div className="w-full">
        <div
          className="animate-fade-in"
          style={{
            animation: "fadeIn 1s ease-out",
          }}
        >
          <p className="text-blue-400 text-lg sm:text-xl">Introduction</p>
          <h2 className="text-white font-black text-3xl sm:text-5xl mt-2">
            Overview.
          </h2>
        </div>

        <p className="mt-4 text-gray-400 text-base sm:text-lg max-w-3xl leading-relaxed animate-fade-in">
          I'm a skilled software developer with experience in TypeScript and
          JavaScript, and expertise in frameworks like React, Node.js, and
          Three.js. I'm a quick learner and collaborate closely with clients to
          create efficient, scalable, and user-friendly solutions that solve
          real-world problems. Let's work together to bring your ideas to life!
        </p>

        <div className="mt-20 flex flex-wrap gap-10 justify-center sm:justify-start">
          {services.map((service, index) => (
            <ServiceCard key={service.title} {...service} />
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fade-in {
          animation: fadeIn 1s ease-out;
        }
      `}</style>
    </div>
  );
};

export default About;
