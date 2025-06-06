import React, { useState, useEffect } from 'react';
import { Github, Linkedin, Mail, ExternalLink, Code, Smartphone, Globe, Database, ArrowRight, Menu, X } from 'lucide-react';
import me from '../assets/me.jpg'
const Portfolio = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const projects = [
    {
      title: "Chuka TradeHub",
      description: "An online platform for students to buy and sell used items.",
      tech: ["React", "Node.js", "MySql", "TailwindCss"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=500&h=300&fit=crop",
      liveDemo: "https://chuka-tradehub.vercel.app",
      github: "https://github.com/cyrus-trixie/CHUKA-Black-market.git",
      category: "Full Stack"
    },
    {
      title: "Dj Afro Movies search",
      description: "Search Any Dj Afro Movie You want, the website filters for you and make it easier.",
      tech: ["React", "TailwindCss", "YoutubeAPi"],
      image: "https://www.star1063.com.au/wp-content/uploads/sites/18/2024/12/20241216-5topmoviesof2024-feature.jpg?w=1200",
      liveDemo: "https://djmoviestore.netlify.app/",
      github: "#",
      category: "Front-end"
    },
    {
      title: "Dragon Slay Game",
      description: "This is an RPG mini Game, play when you are bored",
      tech: ["Hml", "Css", "JavaScript"],
      image: "https://www.shellyduffer.com/wp-content/uploads/2015/05/dragons.jpg",
      liveDemo: "https://dragonbycyrus.netlify.app/",
      github: "https://github.com/cyrus-trixie/RPG-Game.git",
      category: "Gaming"
    },
    {
      title: "Church website",
      description: "modern website for church",
      tech: ["React", "TailwindCss"],
      image: "https://img.texasmonthly.com/2023/07/texas-painted-churches-1.jpg?auto=compress&crop=faces&fit=fit&fm=jpg&h=0&ixlib=php-3.3.1&q=45&w=1250",
      liveDemo: "https://jplm.netlify.app/",
      github: "https://github.com/cyrus-trixie/JPLM.git",
      category: "Website"
    }
  ];

  const skills = [
  { 
    name: "Frontend", 
    icon: <Code className="w-8 h-8" />, 
    items: ["React", "HTML", "JavaScript", "Tailwind CSS"] 
  },
  { 
    name: "Backend", 
    icon: <Database className="w-8 h-8" />, 
    items: ["Node.js", "Express.js", "MySQL", "WordPress"] 
  },
  { 
    name: "Design & Media", 
    icon: <ExternalLink className="w-8 h-8" />, 
    items: ["Adobe Photoshop", "Adobe Illustrator", "Photography", "CapCut Video Editing"] 
  }
];

  return (
    <div className="min-h-screen bg-gray-900 text-white">
      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrollY > 50 ? 'bg-gray-900/95 backdrop-blur-md' : 'bg-transparent'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex-shrink-0">
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
                My Portfolio
              </span>
            </div>
            
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-8">
                <a href="#home" className="hover:text-blue-400 transition-colors">Home</a>
                <a href="#about" className="hover:text-blue-400 transition-colors">About</a>
                <a href="#projects" className="hover:text-blue-400 transition-colors">Projects</a>
                <a href="#skills" className="hover:text-blue-400 transition-colors">Skills</a>
                <a href="#contact" className="hover:text-blue-400 transition-colors">Contact</a>
              </div>
            </div>

            <div className="md:hidden">
              <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-300 hover:text-white">
                {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="md:hidden bg-gray-800 border-t border-gray-700">
            <div className="px-2 pt-2 pb-3 space-y-1">
              <a href="#home" className="block px-3 py-2 hover:text-blue-400 transition-colors">Home</a>
              <a href="#about" className="block px-3 py-2 hover:text-blue-400 transition-colors">About</a>
              <a href="#projects" className="block px-3 py-2 hover:text-blue-400 transition-colors">Projects</a>
              <a href="#skills" className="block px-3 py-2 hover:text-blue-400 transition-colors">Skills</a>
              <a href="#contact" className="block px-3 py-2 hover:text-blue-400 transition-colors">Contact</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-900/20 to-purple-900/20"></div>
        <div className="absolute inset-0">
          <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>
        
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-500 to-pink-500 bg-clip-text text-transparent animate-pulse">
             Cyrus Ngugi
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 animate-fade-in">
              Full-Stack Developer & UI/UX Enthusiast
            </p>
            <p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
              Crafting digital experiences with modern technologies. Passionate about building scalable applications and beautiful user interfaces.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a href="#projects">
           <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              View My Work
            </button></a>
           
            <a href="./public/CyrusCV,.pdf"download>
  <button className="border border-gray-600 hover:border-blue-400 px-8 py-3 rounded-full font-semibold transition-all duration-300 hover:bg-blue-400/10">
    Download CV
  </button>
</a>

          </div>

          <div className="flex justify-center space-x-6">
  <a href="https://github.com/cyrus-trixie" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
    <Github className="w-6 h-6" />
  </a>
  <a href="https://www.linkedin.com/in/cyrus-ngugi-a8079a217/" className="text-gray-400 hover:text-blue-400 transition-colors transform hover:scale-110">
    <Linkedin className="w-6 h-6" />
  </a>
  <a href="https://wa.me/254712345678" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-green-500 transition-colors transform hover:scale-110">
    <Smartphone className="w-6 h-6" />
  </a>
</div>

        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-800/50">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            About Me
          </h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-semibold mb-6 text-blue-400">Hello! I'm Cyrus Ngugi</h3>
              <p className="text-gray-300 leading-relaxed mb-6">
                I'm a passionate full-stack developer with over 5 years of experience creating digital solutions. 
                I love turning complex problems into simple, beautiful, and intuitive designs.
              </p>
              <p className="text-gray-300 leading-relaxed mb-6">
                My journey in tech started with curiosity about how websites work, and it has evolved into a 
                career where I get to work with cutting-edge technologies and solve real-world problems.
              </p>
              <div className="flex flex-wrap gap-3">
                <span className="px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-sm">3+ Years Experience</span>
                <span className="px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-sm">30+ Projects</span>
                <span className="px-3 py-1 bg-pink-600/20 text-pink-400 rounded-full text-sm">Remote Friendly</span>
              </div>
            </div>
           <div className="relative">
<div className="w-full h-96 bg-gradient-to-br from-blue-600/20 to-purple-600/20 rounded-2xl overflow-hidden">
  <img
    src={me}
    alt="Profile"
    className="w-full h-full object-cover"
  />
</div>

</div>

          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Skills & Expertise
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skill, index) => (
              <div key={index} className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-xl">
                <div className="text-blue-400 mb-4">{skill.icon}</div>
                <h3 className="text-xl font-semibold mb-4">{skill.name}</h3>
                <ul className="space-y-2">
                  {skill.items.map((item, idx) => (
                    <li key={idx} className="text-gray-300 text-sm">{item}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <h2 className="text-4xl font-bold text-center mb-16 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Featured Projects
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="group bg-gray-800/50 backdrop-blur-sm rounded-xl overflow-hidden hover:bg-gray-800/70 transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                <div className="relative overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute top-4 right-4">
                    <span className="px-3 py-1 bg-blue-600/80 text-white text-xs rounded-full">
                      {project.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-3 text-blue-400">{project.title}</h3>
                  <p className="text-gray-300 mb-4 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, idx) => (
                      <span key={idx} className="px-2 py-1 bg-gray-700/50 text-gray-300 text-xs rounded">
                        {tech}
                      </span>
                    ))}
                  </div>
                  <div className="flex space-x-4">
                    <a 
                      href={project.liveDemo} 
                      className="flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      <span>Live Demo</span>
                    </a>
                    <a 
                      href={project.github} 
                      className="flex items-center space-x-2 text-gray-400 hover:text-gray-300 transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      <span>Code</span>
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg flex items-center space-x-2 mx-auto">
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-8 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Let's Work Together
          </h2>
          <p className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, creative projects, or potential collaborations.
          </p>
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Mail className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">Email</h3>
              <p className="text-gray-400">cmuiruringugi@gmail.com</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Linkedin className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">LinkedIn</h3>
              <p className="text-gray-400">www.linkedin.com/in/cyrus-ngugi-a8079a217</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:bg-gray-800/70 transition-all duration-300">
              <Github className="w-8 h-8 text-blue-400 mx-auto mb-4" />
              <h3 className="font-semibold mb-2">GitHub</h3>
              <p className="text-gray-400">https://github.com/cyrus-trixie</p>
            </div>
          </div>
         <a
  href="https://wa.me/254742918991?text=Hey%20I%20would%20love%20to%20work%20with%20you!"
  target="_blank"
  rel="noopener noreferrer"
>
  <button className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 px-8 py-3 rounded-full font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
    Get In Touch
  </button>
</a>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-800/50 border-t border-gray-700 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Cyrus Ngugi. Built with React & Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;