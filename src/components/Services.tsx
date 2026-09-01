import { Code2, Smartphone, Palette, Zap } from 'lucide-react';

export default function Services() {
  const services = [
    {
      icon: Smartphone,
      title: 'Responsive Websites',
      description: 'Modern websites optimized for desktop, tablet, and mobile devices.'
    },
    {
      icon: Code2,
      title: 'React Applications',
      description: 'Interactive web applications built with reusable React components.'
    },
    {
      icon: Palette,
      title: 'UI Development',
      description: 'Pixel-conscious implementation of modern user interfaces.'
    },
    {
      icon: Zap,
      title: 'API Integration',
      description: 'Connecting frontend applications with REST APIs and handling dynamic data.'
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary text-center">
          What I Can Build
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Specialized services tailored to bring your ideas to life with modern, responsive, and performant solutions
        </p>

        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div
                key={index}
                className="bg-bg-card border border-border-color rounded-lg p-8 hover:border-text-primary transition group"
              >
                <div className="mb-4">
                  <Icon
                    size={40}
                    className="text-text-primary group-hover:scale-110 transition"
                  />
                </div>
                <h3 className="text-2xl font-bold text-text-primary mb-3">
                  {service.title}
                </h3>
                <p className="text-text-secondary leading-relaxed">
                  {service.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <div className="text-center mt-12">
          <p className="text-text-secondary mb-6">Ready to start your next project?</p>
          <a
            href="#contact"
            className="inline-block px-8 py-3 bg-text-primary text-bg-primary rounded-lg font-semibold hover:bg-text-secondary transition"
          >
            Get In Touch
          </a>
        </div>
      </div>
    </section>
  );
}
