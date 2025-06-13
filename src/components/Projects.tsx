'use client';

import { useRef, useState } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ExternalLink, Github, Play, X } from 'lucide-react';
import Image from 'next/image';

const Projects = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(sectionRef, { once: true, margin: "-100px" });
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "LRCar Service",
      category: "web",
      description: "A comprehensive ride-sharing platform similar to Uber, featuring real-time GPS tracking, route optimization, and seamless user experience.",
      longDescription: "LRCar Service is a full-featured ride-sharing application that I architected and developed from the ground up. The platform includes driver and passenger mobile apps, an admin dashboard, real-time tracking, payment integration, and advanced analytics. Built with scalability in mind, it handles thousands of concurrent users and processes real-time location data efficiently.",
      image: "/lrcarserv.png",
      technologies: ["React", "Node.js", "MongoDB", "Socket.io", "React Native", "AWS", "Google Maps API"],
      features: [
        "Real-time GPS tracking and route optimization",
        "Secure payment processing with multiple gateways",
        "Advanced admin dashboard with analytics",
        "Push notifications and in-app messaging",
        "Multi-language support",
        "Driver rating and review system"
      ],
      liveUrl: "https://lrcarservice.com",
      githubUrl: "#",
      color: "from-blue-500 to-cyan-500",
      status: "Live"
    },
    {
      id: 2,
      title: "Evergo Packaging",
      category: "web",
      description: "An eco-friendly packaging platform connecting businesses with sustainable packaging solutions and environmental impact tracking.",
      longDescription: "Evergo Packaging is an innovative e-commerce platform focused on sustainable packaging solutions. The platform features a comprehensive product catalog, environmental impact calculator, custom packaging designer, and supply chain management tools. It helps businesses reduce their carbon footprint while maintaining packaging quality.",
      image: "/evergo.png",
      technologies: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Stripe", "Tailwind CSS"],
      features: [
        "Environmental impact calculator",
        "Custom packaging design tool",
        "Supply chain transparency tracking",
        "Bulk ordering and inventory management",
        "Carbon footprint reporting",
        "Sustainable material database"
      ],
      liveUrl: "https://evergopackaging.com",
      githubUrl: "#",
      color: "from-green-500 to-emerald-500",
      status: "Live"
    },
    {
      id: 3,
      title: "Truck Safety Team ERP",
      category: "enterprise",
      description: "A comprehensive ERP system for truck safety management, featuring fleet tracking, compliance monitoring, and safety analytics.",
      longDescription: "Truck Safety Team ERP is a specialized enterprise resource planning system designed for transportation companies. It manages fleet operations, driver certifications, vehicle maintenance schedules, compliance reporting, and safety analytics. The system integrates with various third-party services for comprehensive fleet management.",
      image: "/trucksafety.png",
      technologies: ["C#", "ASP.NET Core", "SQL Server", "Angular", "SignalR", "Azure"],
      features: [
        "Fleet management and tracking",
        "Driver certification management",
        "Automated compliance reporting",
        "Maintenance scheduling and alerts",
        "Safety incident tracking",
        "Real-time dashboard and analytics"
      ],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-orange-500 to-red-500",
      status: "Enterprise"
    },
    {
      id: 4,
      title: "STUZANNE ERP",
      category: "enterprise",
      description: "A modern ERP solution for retail businesses, featuring inventory management, sales tracking, and customer relationship management.",
      longDescription: "STUZANNE ERP is a comprehensive business management solution designed for retail and e-commerce businesses. It provides modules for inventory management, sales processing, customer relationship management, financial reporting, and multi-location support. The system is built with modern web technologies for optimal performance and user experience.",
      image: "/stuzanne.png",
      technologies: ["React", "Node.js", "Express", "MongoDB", "Redis", "Docker"],
      features: [
        "Multi-location inventory management",
        "Point of sale (POS) integration",
        "Customer relationship management",
        "Financial reporting and analytics",
        "Automated reorder notifications",
        "Multi-currency and tax support"
      ],
      liveUrl: "#",
      githubUrl: "#",
      color: "from-purple-500 to-pink-500",
      status: "Enterprise"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'web', name: 'Web Apps' },
    { id: 'mobile', name: 'Mobile Apps' },
    { id: 'enterprise', name: 'Enterprise' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

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
            <h2 className="text-5xl lg:text-6xl font-bold gradient-text">Featured Projects</h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              A showcase of innovative solutions I&apos;ve built, from ride-sharing platforms to enterprise ERP systems
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-purple-500 to-pink-500 mx-auto" />
          </motion.div>

          {/* Filter Tabs */}
          <motion.div variants={itemVariants} className="flex flex-wrap justify-center gap-4">
            {categories.map((category) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-6 py-3 rounded-full transition-all duration-300 ${
                  filter === category.id
                    ? 'glass bg-white/10 text-white'
                    : 'text-gray-400 hover:text-white hover:bg-white/5'
                }`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.name}
              </motion.button>
            ))}
          </motion.div>

          {/* Projects Grid */}
          <motion.div
            layout
            className="grid md:grid-cols-2 gap-8"
          >
            <AnimatePresence>
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  layout
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="glass rounded-2xl overflow-hidden group hover:bg-white/10 transition-all duration-300"
                  whileHover={{ y: -10 }}
                >
                  {/* Project Image */}
                  <div className="relative h-64 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 right-4 px-3 py-1 bg-gradient-to-r ${project.color} rounded-full text-xs font-semibold text-white`}>
                      {project.status}
                    </div>

                    {/* Overlay Actions */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="flex space-x-4">
                        <motion.button
                          onClick={() => setSelectedProject(project.id)}
                          className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                          whileHover={{ scale: 1.1 }}
                          whileTap={{ scale: 0.9 }}
                        >
                          <Play className="w-5 h-5" />
                        </motion.button>
                        {project.liveUrl !== '#' && (
                          <motion.a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <ExternalLink className="w-5 h-5" />
                          </motion.a>
                        )}
                        {project.githubUrl !== '#' && (
                          <motion.a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 bg-white/20 backdrop-blur-sm rounded-full text-white hover:bg-white/30 transition-colors"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Github className="w-5 h-5" />
                          </motion.a>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Project Info */}
                  <div className="p-6 space-y-4">
                    <div className="space-y-2">
                      <h3 className="text-2xl font-bold text-white group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:from-purple-400 group-hover:to-pink-400 group-hover:bg-clip-text transition-all duration-300">
                        {project.title}
                      </h3>
                      <p className="text-gray-400 leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.slice(0, 4).map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 4 && (
                        <span className="px-3 py-1 bg-white/10 rounded-full text-xs text-gray-300 border border-white/20">
                          +{project.technologies.length - 4} more
                        </span>
                      )}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>

          {/* Call to Action */}
          <motion.div
            variants={itemVariants}
            className="text-center space-y-6"
          >
            <h3 className="text-2xl font-semibold text-white">
              Interested in working together?
            </h3>
            <motion.a
              href="#contact"
              className="inline-block px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300 glow-hover"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Start a Project
            </motion.a>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            className="fixed inset-0 z-50 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Backdrop */}
            <motion.div
              className="absolute inset-0 bg-black/80 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            />

            {/* Modal Content */}
            <motion.div
              className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto glass rounded-2xl"
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 200 }}
            >
              {(() => {
                const project = projects.find(p => p.id === selectedProject);
                if (!project) return null;

                return (
                  <div className="p-8 space-y-6">
                    {/* Header */}
                    <div className="flex items-center justify-between">
                      <h3 className="text-3xl font-bold gradient-text">{project.title}</h3>
                      <button
                        onClick={() => setSelectedProject(null)}
                        className="p-2 text-gray-400 hover:text-white transition-colors"
                      >
                        <X className="w-6 h-6" />
                      </button>
                    </div>

                    {/* Image */}
                    <div className="relative h-64 rounded-xl overflow-hidden">
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        className="object-cover"
                      />
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 leading-relaxed">
                      {project.longDescription}
                    </p>

                    {/* Features */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Key Features</h4>
                      <ul className="grid md:grid-cols-2 gap-2">
                        {project.features.map((feature, index) => (
                          <li key={index} className="flex items-start space-x-2 text-gray-300">
                            <div className={`w-2 h-2 bg-gradient-to-r ${project.color} rounded-full mt-2 flex-shrink-0`} />
                            <span className="text-sm">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="space-y-4">
                      <h4 className="text-xl font-semibold text-white">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {project.technologies.map((tech, index) => (
                          <span
                            key={index}
                            className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300 border border-white/20"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="flex space-x-4 pt-4">
                      {project.liveUrl !== '#' && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full text-white font-semibold hover:from-purple-700 hover:to-pink-700 transition-all duration-300"
                        >
                          <ExternalLink className="w-4 h-4" />
                          <span>View Live</span>
                        </a>
                      )}
                      {project.githubUrl !== '#' && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center space-x-2 px-6 py-3 border border-white/20 rounded-full text-white font-semibold hover:bg-white/10 transition-all duration-300"
                        >
                          <Github className="w-4 h-4" />
                          <span>View Code</span>
                        </a>
                      )}
                    </div>
                  </div>
                );
              })()}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Projects;