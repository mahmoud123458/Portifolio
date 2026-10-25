import { useState } from 'react';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState('All');

  const categories = ['All', 'React','Next.js', 'JavaScript', 'UI'];

  const filteredProjects = selectedCategory === 'All'
    ? projects
    : projects.filter(project => project.category.includes(selectedCategory));

  return (
    <section id="projects" className="py-20 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary text-center">
          Featured Projects
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          A selection of projects I've built showcasing my skills in frontend development, UI design, and web technologies
        </p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full font-semibold transition ${
                selectedCategory === category
                  ? 'bg-text-primary text-bg-primary'
                  : 'bg-bg-card text-text-secondary border border-border-color hover:border-text-primary'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-bg-card border border-border-color rounded-lg overflow-hidden hover:border-text-primary transition group"
            >
              {/* Image */}
              <a
                href={project.liveDemo && project.liveDemo !== '#' ? project.liveDemo : project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="h-48 overflow-hidden bg-bg-secondary block cursor-pointer"
              >
                <img
                  
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-300"
                />
              </a>

              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-text-primary mb-2">
                  {project.title}
                </h3>
                <p className="text-text-secondary text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.slice(0, 3).map((tech, index) => (
                    <span
                      key={index}
                      className="text-xs px-2 py-1 bg-bg-primary border border-border-color text-text-muted rounded"
                    >
                      {tech}
                    </span>
                  ))}
                  {project.technologies.length > 3 && (
                    <span className="text-xs px-2 py-1 text-text-muted">
                      +{project.technologies.length - 3}
                    </span>
                  )}
                </div>

                {/* Links */}
                <div className="flex gap-3">
                  <a
                    href={project.liveDemo}
                    className="flex-1 px-3 py-2 bg-text-primary text-bg-primary rounded font-semibold text-sm hover:bg-text-secondary transition flex items-center justify-center gap-2"
                  >
                    <span>Demo</span>
                    <ExternalLink size={14} />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-2 bg-bg-primary border border-border-color text-text-secondary rounded font-semibold text-sm hover:border-text-primary hover:text-text-primary transition flex items-center justify-center"
                    title="GitHub"
                  >
                    <Github size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* View More CTA */}
        <div className="text-center mt-12">
          <a
            href="https://github.com/mahmoud123458"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-8 py-3 bg-bg-card text-text-primary border border-border-color rounded-lg font-semibold hover:border-text-primary hover:bg-border-color transition"
          >
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
}
