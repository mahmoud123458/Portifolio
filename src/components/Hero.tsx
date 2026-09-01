import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section id="home" className="min-h-screen pt-20 px-6 flex items-center justify-center bg-bg-primary">
      <div className="max-w-6xl mx-auto text-center py-20 animate-fade-in-up">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="flex flex-col justify-start items-start text-left">
            {/* Label */}
            <div className="mb-6">
              <span className="text-text-secondary text-sm font-mono tracking-widest">FRONT-END DEVELOPER</span>
            </div>

            {/* Main Heading */}
            <h1 className="text-5xl md:text-5xl font-bold mb-6 text-text-primary leading-tight">
              Hi, I'm Mahmoud Nabil.
            </h1>

            {/* Subheading */}
            <p className="text-xl md:text-2xl text-text-secondary mb-8">
              I build modern, responsive web experiences.
            </p>

            {/* Description */}
            <p className="text-lg text-text-muted mb-12 leading-relaxed">
              Front-End Developer focused on building clean, responsive, and user-friendly web applications using modern frontend technologies. I transform designs into functional, accessible, and performant digital experiences.
            </p>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row gap-4 mb-16">
              <a
                href="#projects"
                className="px-8 py-3 bg-text-primary text-bg-primary rounded-lg font-semibold hover:bg-text-secondary transition flex items-center justify-center gap-2 group"
              >
                View My Projects
                <ArrowRight className="group-hover:translate-x-1 transition" size={20} />
              </a>
              <a
                href="#contact"
                className="px-8 py-3 bg-bg-card text-text-primary border border-border-color rounded-lg font-semibold hover:bg-border-color transition"
              >
                Contact Me
              </a>
            </div>

            {/* Social Links */}
            <div className="flex gap-6">
              <a
                href="https://github.com/mahmoud123458"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition transform hover:scale-110"
                title="GitHub"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.6.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v 3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/mahmoud-nabil-2705b420b"
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-secondary hover:text-text-primary transition transform hover:scale-110"
                title="LinkedIn"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.475-2.236-1.986-2.236-1.081 0-1.722.732-2.004 1.438-.103.25-.129.599-.129.948v5.419h-3.554s.05-8.736 0-9.637h3.554v1.364c.429-.663 1.197-1.608 2.905-1.608 2.121 0 3.714 1.386 3.714 4.369v5.512zM5.337 8.855c-1.144 0-1.915-.759-1.915-1.708 0-.955.77-1.708 1.963-1.708 1.192 0 1.925.753 1.949 1.708 0 .949-.757 1.708-1.997 1.708zm-1.6 11.597h3.191V9.815H3.737v10.637zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
                </svg>
              </a>
              <a
                href="mailto:mahmoud@example.com"
                className="text-text-secondary hover:text-text-primary transition transform hover:scale-110"
                title="Email"
              >
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </a>
            </div>
          </div>

          {/* Right Profile Image */}
          <div className="hidden md:flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-r from-text-primary to-text-secondary rounded-full opacity-20 blur-2xl"></div>
              <img 
                src={new URL('../assets/me.png', import.meta.url).href}
                alt="Mahmoud Nabil" 
                className="relative w-96 h-96 rounded-full object-cover border-2 border-text-primary shadow-2xl hover:scale-105 transition duration-300"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
