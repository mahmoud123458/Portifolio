import { useState } from 'react';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation
    if (formData.name && formData.email && formData.message) {
      // Simulate form submission
      console.log('Form submitted:', formData);
      setSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setFormData({ name: '', email: '', message: '' });
        setSubmitted(false);
      }, 3000);
    }
  };

  return (
    <section id="contact" className="py-20 px-6 bg-bg-primary">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 text-text-primary text-center">
          Let's Build Something Together
        </h2>
        <p className="text-center text-text-secondary mb-12 max-w-2xl mx-auto">
          Have a project, opportunity, or idea? I'd love to hear from you. Get in touch and let's create something amazing.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact Form */}
          <div>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="name" className="block text-text-primary font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-2 bg-bg-card border border-border-color text-text-primary placeholder-text-muted rounded-lg focus:outline-none focus:border-text-primary transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-text-primary font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="your@email.com"
                  className="w-full px-4 py-2 bg-bg-card border border-border-color text-text-primary placeholder-text-muted rounded-lg focus:outline-none focus:border-text-primary transition"
                  required
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-text-primary font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className="w-full px-4 py-2 bg-bg-card border border-border-color text-text-primary placeholder-text-muted rounded-lg focus:outline-none focus:border-text-primary transition resize-none"
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full px-6 py-3 bg-text-primary text-bg-primary rounded-lg font-semibold hover:bg-text-secondary transition"
              >
                {submitted ? 'Message Sent! ✓' : 'Send Message'}
              </button>

              {submitted && (
                <p className="text-center text-green-400 text-sm">
                  Thank you for reaching out! I'll get back to you soon.
                </p>
              )}
            </form>
          </div>

          {/* Contact Info */}
          <div className="space-y-8">
            {/* Email */}
            <div className="flex gap-4">
              <div className="flex-shrink-0">
                <Mail className="w-6 h-6 text-text-primary" />
              </div>
              <div>
                <h3 className="text-text-primary font-semibold mb-1">Email</h3>
                <a
                  href="mailto:mahmoudnabil11112@gmail.com"
                  className="text-text-secondary hover:text-text-primary transition"
                >
                  mahmoudnabil11112@gmail.com
                </a>
              </div>
            </div>

            {/* Social Links */}
            <div>
              <h3 className="text-text-primary font-semibold mb-4">Connect With Me</h3>
              <div className="flex gap-4">
                <a
                  href="https://github.com/mahmoud123458"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition"
                  title="GitHub"
                >
                  <Github size={20} />
                  <span>GitHub</span>
                </a>
                <a
                  href="https://www.linkedin.com/in/mahmoud-nabil-2705b420b"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 text-text-secondary hover:text-text-primary transition"
                  title="LinkedIn"
                >
                  <Linkedin size={20} />
                  <span>LinkedIn</span>
                </a>
              </div>
            </div>

            {/* Response Time */}
            <div className="bg-bg-card border border-border-color rounded-lg p-6">
              <p className="text-text-secondary">
                <span className="inline-block w-2 h-2 bg-green-400 rounded-full mr-2"></span>
                Usually responds within 24 hours
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
