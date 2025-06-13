'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Calendar, MapPin, ExternalLink } from 'lucide-react';

const Experience = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Software Developer",
      company: "Technische Universität Berlin",
      period: "Sep 2024 – Present",
      location: "Berlin, Germany",
      type: "Part-time, On-site",
      description: "Working as a student software developer contributing to academic research and university operations. Developing cutting-edge software solutions for academic research and collaborating with international research teams.",
      achievements: [
        "Implementing scalable systems for university operations",
        "Contributing to open-source educational tools",
        "Mentoring students in software development practices",
        "Developing research-oriented applications using modern technologies",
        "Collaborating with international research teams on innovative projects"
      ],
      technologies: ["Python", "FastAPI", "C++", "Rust"],
      color: "from-blue-500 to-cyan-500"
    },
    {
      title: "Lead Developer",
      company: "LRCAR Services",
      period: "Nov 2021 – Apr 2024",
      location: "Remote",
      type: "Freelance",
      description: "Led the development of a comprehensive ride-sharing platform, managing both technical architecture and team coordination using modern full-stack technologies.",
      achievements: [
        "Architected and developed a scalable ride-sharing platform from scratch",
        "Implemented real-time GPS tracking and route optimization",
        "Built comprehensive admin dashboard and mobile applications",
        "Managed a team of 3 developers and coordinated with stakeholders",
        "Achieved 99.9% uptime and handled 10,000+ daily active users"
      ],
      technologies: ["ASP.NET Core", "React.js", "Node.js", "GCP"],
      color: "from-green-500 to-emerald-500"
    },
    {
      title: "Full Stack Engineer",
      company: "Fiverr",
      period: "Feb 2020 – Apr 2024",
      location: "Remote",
      type: "Freelance",
      description: "Delivered 300+ successful projects for clients worldwide, specializing in web applications, e-commerce solutions, and custom software development with cutting-edge technologies.",
      achievements: [
        "Completed 300+ projects with 5-star ratings",
        "Developed e-commerce platforms generating $1M+ in sales",
        "Created custom ERP systems for multiple businesses",
        "Built responsive web applications for various industries",
        "Maintained 100% client satisfaction rate"
      ],
      technologies: ["Next.js", "Node.js", "ASP.NET Core", "Python", "MySQL", "MSSQL", "Firestore", "GCP", "AWS", "React Native"],
      color: "from-purple-500 to-pink-500"
    },
    {
      title: "Full Stack Engineer",
      company: "National University of Sciences and Technology (NUST)",
      period: "Aug 2022 – Nov 2023",
      location: "Pakistan",
      type: "Contract, Hybrid",
      description: "Contributed to academic projects and research initiatives while developing enterprise-level applications for the university.",
      achievements: [
        "Developed research-oriented software solutions",
        "Built enterprise applications for university operations",
        "Created educational web applications and portals",
        "Collaborated on machine learning and AI projects",
        "Mentored junior students in programming and software development"
      ],
      technologies: ["ASP.NET Core", "React.js", "MySQL"],
      color: "from-orange-500 to-red-500"
    },
    {
      title: "Full Stack and Software Developer",
      company: "Various Companies",
      period: "Jul 2018 – Feb 2020",
      location: "Pakistan",
      type: "Full-time",
      description: "Started professional journey developing desktop and web applications using various technologies and frameworks.",
      achievements: [
        "Developed desktop applications using WinForms and WPF",
        "Built responsive web applications with React.js",
        "Created backend APIs using ASP.NET Core",
        "Gained expertise in full-stack development",
        "Established foundation for freelance career"
      ],
      technologies: ["WinForms", "WPF", "React.js", "ASP.NET Core"],
      color: "from-indigo-500 to-purple-500"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100
      }
    }
  };

  return (
    <div ref={sectionRef} className="min-h-screen flex items-center py-20">
      <div className="container mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={itemVariants} className="text-center space-y-4">
            <h2 className="text-5xl lg:text-6xl font-bold gradient-text">Experience</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              My professional journey building innovative solutions and leading development teams
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>

          {/* Experience Timeline */}
          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-purple-500 to-pink-500 hidden lg:block" />

            <div className="space-y-12">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="relative"
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  {/* Timeline dot */}
                  <div className="absolute left-6 w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hidden lg:block" />
                  
                  <div className="lg:ml-20">
                    <div className="glass p-8 rounded-2xl hover:bg-white/10 transition-all duration-300">
                      <div className="grid lg:grid-cols-3 gap-8">
                        {/* Left column - Basic info */}
                        <div className="space-y-4">
                          <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-white">{exp.title}</h3>
                            <div className="flex items-center space-x-2 text-lg">
                              <span className={`bg-gradient-to-r ${exp.color} bg-clip-text text-transparent font-semibold`}>
                                {exp.company}
                              </span>
                              <ExternalLink className="w-4 h-4 text-gray-400" />
                            </div>
                          </div>

                          <div className="space-y-2 text-sm text-gray-400">
                            <div className="flex items-center space-x-2">
                              <Calendar className="w-4 h-4" />
                              <span>{exp.period}</span>
                            </div>
                            <div className="flex items-center space-x-2">
                              <MapPin className="w-4 h-4" />
                              <span>{exp.location} • {exp.type}</span>
                            </div>
                          </div>

                          {/* Technologies */}
                          <div className="space-y-2">
                            <h4 className="text-sm font-semibold text-gray-300">Technologies</h4>
                            <div className="flex flex-wrap gap-2">
                              {exp.technologies.map((tech, techIndex) => (
                                <span
                                  key={techIndex}
                                  className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                                >
                                  {tech}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        {/* Right column - Description and achievements */}
                        <div className="lg:col-span-2 space-y-6">
                          <p className="text-gray-300 leading-relaxed">
                            {exp.description}
                          </p>

                          <div className="space-y-3">
                            <h4 className="text-lg font-semibold text-white">Key Achievements</h4>
                            <ul className="space-y-2">
                              {exp.achievements.map((achievement, achIndex) => (
                                <motion.li
                                  key={achIndex}
                                  className="flex items-start space-x-3 text-gray-300"
                                  initial={{ opacity: 0, x: 20 }}
                                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 20 }}
                                  transition={{ duration: 0.5, delay: (index * 0.2) + (achIndex * 0.1) }}
                                >
                                  <div className={`w-2 h-2 bg-gradient-to-r ${exp.color} rounded-full mt-2 flex-shrink-0`} />
                                  <span className="text-sm leading-relaxed">{achievement}</span>
                                </motion.li>
                              ))}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Call to action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Ready to work together?
            </h3>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 glow-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Let&apos;s Connect
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Experience;