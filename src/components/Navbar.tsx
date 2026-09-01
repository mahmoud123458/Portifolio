import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  const navLinks = [
    { label: 'Home', href: '#home' },
    { label: 'About', href: '#about' },
    { label: 'Skills', href: '#skills' },
    { label: 'Projects', href: '#projects' },
    { label: 'Contact', href: '#contact' }
  ];

  // Detect active section
  useEffect(() => {
    const handleScroll = () => {
      const sections = navLinks.map(link => link.href.substring(1));
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-bg-primary border-b border-border-color backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo with Profile Image */}
        <a href="#home" className="flex items-center gap-2 hover:opacity-80 transition">
          <img 
            src={new URL('../assets/me.png', import.meta.url).href}
            alt="Profile" 
            className="w-8 h-8 rounded-full object-cover border border-text-primary"
          />
          <span className="text-2xl font-bold text-text-primary">Mahmoud Nabil</span>
        </a>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className={`transition duration-300 font-medium relative group ${
                activeSection === link.href.substring(1)
                  ? 'text-text-primary'
                  : 'text-text-secondary hover:text-text-primary'
              }`}
            >
              {link.label}
              {activeSection === link.href.substring(1) && (
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-text-primary rounded-full"></span>
              )}
              {activeSection !== link.href.substring(1) && (
                <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-text-primary rounded-full group-hover:left-0 group-hover:w-full transition-all duration-300"></span>
              )}
            </a>
          ))}
        </div>

        {/* CTA and Social */}
        <div className="hidden md:flex items-center gap-4">
          <a
            href="https://github.com/mahmoud123458"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition"
            title="GitHub"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/mahmoud-nabil-2705b420b"
            target="_blank"
            rel="noopener noreferrer"
            className="text-text-secondary hover:text-text-primary transition"
            title="LinkedIn"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.637h3.554v1.364c.429-.663 1.197-1.608 2.905-1.608 2.121 0 3.714 1.386 3.714 4.369v5.512zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.708 0-.955.77-1.708 1.963-1.708 1.192 0 1.925.753 1.949 1.708 0 .949-.757 1.708-1.997 1.708zm-1.6 11.597h3.191V9.815H3.737v10.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
          <a
            href="#contact"
            className="px-4 py-2 bg-text-primary text-bg-primary rounded-lg font-semibold hover:bg-text-secondary transition"
          >
            Contact
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-text-primary"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-bg-secondary border-t border-border-color">
          <div className="px-6 py-4 space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className={`block transition duration-300 font-medium ${
                  activeSection === link.href.substring(1)
                    ? 'text-text-primary pl-4 border-l-2 border-text-primary'
                    : 'text-text-secondary hover:text-text-primary'
                }`}
                onClick={() => setIsOpen(false)}
              >
                {link.label}
              </a>
            ))}
            <a
              href="#contact"
              className="block px-4 py-2 bg-text-primary text-bg-primary rounded-lg font-semibold text-center hover:bg-text-secondary transition"
            >
              Contact
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
