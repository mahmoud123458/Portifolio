export interface Skill {
  category: string;
  items: string[];
}

export const skills: Skill[] = [
  {
    category: 'Core Technologies',
    items: ['HTML5', 'CSS3', 'JavaScript ES6+', 'TypeScript']
  },
  {
    category: 'Frameworks & Libraries',
    items: ['React.js', 'Redux']
  },
  {
    category: 'CSS & UI',
    items: ['Tailwind CSS', 'Material UI', 'Bootstrap']
  },
  {
    category: 'Development Tools',
    items: ['Git', 'GitHub', 'Vercel']
  },
  {
    category: 'Concepts & APIs',
    items: ['Responsive Design', 'Mobile-First', 'REST APIs', 'JSON', 'AJAX', 'CRUD Operations', 'DOM Manipulation', 'Local Storage', 'Reusable Components', 'State Management']
  }
];
