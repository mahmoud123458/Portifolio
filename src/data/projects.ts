export interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  image: string;
  github: string;
  liveDemo: string;
  category: string[];
}

export const projects: Project[] = [
  {
    id: 6,
    title: "SHOP.CO - E-Commerce Platform",
    description:
      "A modern and responsive e-commerce platform built with Next.js and TypeScript, featuring product browsing, category-based filtering, search, shopping cart, authentication, orders, reviews, and a seamless user experience.",
    technologies: [
      "Next.js",
      "TypeScript",
      "React.js",
      "Tailwind CSS",
      "MUI",
      "REST API",
      "Vercel",
    ],
    image: new URL("../assets/hero.png", import.meta.url).href,
    github: "https://github.com/mahmoud123458/SHOP.CO",
    liveDemo: "https://shop-co-y9c6.vercel.app/",
    category: ["Next.js", "E-Commerce"],
  },
  {
    id: 1,
    title: "Zaptro - E-Commerce Platform",
    description:
      "A modern e-commerce platform built with React and Vite, featuring responsive design, product listings, shopping cart functionality, and fast performance with HMR.",
    technologies: [
      "React.js",
      "Vite",
      "JavaScript",
      "Responsive Design",
      "Vercel",
    ],
    image: new URL("../assets/Zaptro.jpg", import.meta.url).href,
    github: "https://github.com/mahmoud123458/Zaptro",
    liveDemo: "https://zaptro-zeta.vercel.app/",
    category: ["React", "E-Commerce"],
  },
  {
    id: 7,
    title: "Weather App",
    description:
      "A modern weather app built with Next.js and Tailwind CSS, powered by the Meteoblue API. Features city search with autocomplete and fuzzy matching for misspelled names, a 7-day forecast, and an automatic night mode with a starry black background when it is night in the searched city.",
    technologies: [
      "Next.js",
      "React.js",
      "Tailwind CSS",
      "shadcn/ui",
      "Lucide React",
      "Meteoblue API",
      "Vercel",
    ],
    image: new URL("../assets/weather.jpg", import.meta.url).href,
    github: "https://github.com/mahmoud123458/weather",
    liveDemo: "https://weather-alpha-blush-20.vercel.app",
    category: ["Next.js", "API"],
  },
  {
    id: 2,
    title: "Cara E-Commerce",
    description:
      "A full-featured e-commerce application with product shop, shopping cart, checkout process, user profiles, admin panel, and blog functionality built with HTML, CSS, and JavaScript.",
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript",
      "FontAwesome",
      "Responsive Design",
    ],
    image: new URL("../assets/Cara.jpg", import.meta.url).href,
    github: "https://github.com/mahmoud123458/Cara_E-commerce",
    liveDemo: "https://cara-e-commerce-mu.vercel.app/",
    category: ["E-Commerce", "JavaScript"],
  },

  {
    id: 4,
    title: "Responsive Coffee Website",
    description:
      "A beautiful and responsive coffee shop website showcasing products and services with smooth scrolling, modern design, and interactive elements built with HTML, CSS, SCSS, and JavaScript.",
    technologies: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript",
      "FontAwesome",
      "Responsive Design",
    ],
    image: new URL("../assets/coffee.jpg", import.meta.url).href,
    github: "https://github.com/mahmoud123458/Responsive-Coffee-website",
    liveDemo: "#",
    category: ["UI/UX", "JavaScript"],
  },
  {
    id: 5,
    title: "CRUD System",
    description:
      "A complete CRUD (Create, Read, Update, Delete) application with a user-friendly interface for managing data. Built with HTML, CSS, SCSS, and JavaScript with local storage persistence.",
    technologies: [
      "HTML5",
      "CSS3",
      "SCSS",
      "JavaScript",
      "LocalStorage",
      "FontAwesome",
    ],
    image: new URL("../assets/Crud-System.jpg", import.meta.url).href,
    github: "https://github.com/mahmoud123458/CRUD-System",
    liveDemo: "https://crud-system-tau-two.vercel.app/",
    category: ["JavaScript", "UI"],
  },
  {
    id: 3,
    title: "Multiple Web Projects",
    description:
      "A collection of various web projects including Bakery, Devfolio, Fokir, Mealify, Quote Generator, and Signup/Login systems. All built with HTML, CSS, SCSS, and JavaScript with responsive design.",
    technologies: ["HTML5", "CSS3", "SCSS", "JavaScript", "Responsive Design"],
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?w=500&h=400&fit=crop",
    github: "https://github.com/mahmoud123458/HTML-CSS-JS",
    liveDemo: "#",
    category: ["UI/UX", "JavaScript"],
  },
];