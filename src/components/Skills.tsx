import { skills } from '../data/skills';

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-6 bg-bg-secondary">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary text-center">
          Technical Skills
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          A comprehensive set of modern technologies and tools I use to build exceptional web experiences
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-bg-card border border-border-color rounded-lg p-6 hover:border-text-primary transition"
            >
              <h3 className="text-xl font-bold text-text-primary mb-4">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-3 py-1 bg-bg-primary border border-border-color text-text-secondary text-sm rounded-full hover:border-text-primary hover:text-text-primary transition"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional highlights */}
        <div className="grid md:grid-cols-3 gap-4 mt-12">
          <div className="bg-bg-card border border-border-color rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-text-primary mb-2">Responsive Design</div>
            <p className="text-text-secondary">Mobile-first approach</p>
          </div>
          <div className="bg-bg-card border border-border-color rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-text-primary mb-2">Clean Code</div>
            <p className="text-text-secondary">Best practices & standards</p>
          </div>
          <div className="bg-bg-card border border-border-color rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-text-primary mb-2">Performance</div>
            <p className="text-text-secondary">Optimized & fast</p>
          </div>
        </div>
      </div>
    </section>
  );
}
