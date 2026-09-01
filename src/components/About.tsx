export default function About() {
  return (
    <section id="about" className="py-20 px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-text-primary text-center">
          About Me
        </h2>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-6">
            <p className="text-lg text-text-secondary leading-relaxed">
              I'm a Front-End Developer passionate about creating modern and responsive web applications. I enjoy transforming ideas and designs into functional user interfaces while focusing on usability, performance, and clean code.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              My development journey has given me experience with modern frontend technologies such as React.js, TypeScript, Tailwind CSS, Redux, Material UI, and Bootstrap. I'm continuously learning and improving my skills by building projects and exploring new technologies.
            </p>

            <p className="text-lg text-text-secondary leading-relaxed">
              I graduated from the Faculty of Computers and Information at Menoufia University and have been building web applications since then. My focus is on creating beautiful, responsive, and performant digital experiences.
            </p>

            {/* Quick Stats */}
            <div className="grid grid-cols-3 gap-4 pt-6">
              <div className="bg-bg-card border border-border-color rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-text-primary mb-1">5+</div>
                <div className="text-sm text-text-muted">Projects Completed</div>
              </div>
              <div className="bg-bg-card border border-border-color rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-text-primary mb-1">1+</div>
                <div className="text-sm text-text-muted">Years Experience</div>
              </div>
              <div className="bg-bg-card border border-border-color rounded-lg p-4 text-center">
                <div className="text-2xl font-bold text-text-primary mb-1">100%</div>
                <div className="text-sm text-text-muted">Client Satisfaction</div>
              </div>
            </div>
          </div>

          {/* Education & Journey */}
          <div className="space-y-6">
            <div className="bg-bg-card border border-border-color rounded-lg p-6">
              <h3 className="text-xl font-bold text-text-primary mb-3">Education</h3>
              <div className="space-y-3">
                <div>
                  <p className="font-semibold text-text-primary">Faculty of Computers and Information</p>
                  <p className="text-text-secondary">Menoufia University</p>
                  <p className="text-sm text-text-muted mt-1">Completed</p>
                </div>
              </div>
            </div>

            {/* Development Journey */}
            <div className="bg-bg-card border border-border-color rounded-lg p-6">
              <h3 className="text-xl font-bold text-text-primary mb-4">Development Journey</h3>
              <div className="space-y-3">
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-text-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-text-primary">Foundation</p>
                    <p className="text-sm text-text-secondary">HTML → CSS → JavaScript</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-text-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-text-primary">Modern Frontend</p>
                    <p className="text-sm text-text-secondary">React → JavaScript → TypeScript</p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-text-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-text-primary">Advanced UI</p>
                    <p className="text-sm text-text-secondary">BootStrap → Tailwind CSS → MUI </p>
                  </div>
                </div>
                <div className="flex gap-3">
                  <div className="w-2 h-2 rounded-full bg-text-primary mt-2 flex-shrink-0"></div>
                  <div>
                    <p className="font-semibold text-text-primary">Application Development</p>
                    <p className="text-sm text-text-secondary">Redux → REST APIs → Deployment</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
