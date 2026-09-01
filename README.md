# Mahmoud Nabil - Front-End Developer Portfolio

A modern, responsive portfolio website built with React, TypeScript, and Tailwind CSS to showcase frontend development skills, projects, and professional experience.

## Features

- **Responsive Design** - Mobile-first approach with support for all device sizes
- **Dark Mode** - Premium dark theme with black and white color scheme
- **Modern Components** - Reusable React components with TypeScript
- **Project Showcase** - Featured projects with filtering capabilities
- **Skills Section** - Categorized technical skills and expertise
- **Contact Form** - Interactive form for inquiries and collaborations
- **SEO Optimized** - Meta tags and semantic HTML for better search engine visibility
- **Performance** - Optimized for fast loading and smooth interactions
- **Accessibility** - WCAG compliant with proper heading hierarchy and keyboard navigation

## Tech Stack

- **Frontend**: React 18 with TypeScript
- **Styling**: Tailwind CSS
- **Build Tool**: Vite
- **Icons**: Lucide React
- **Deployment**: Vercel-ready

## Project Structure

```
src/
├── components/           # React components
│   ├── Navbar.tsx       # Navigation bar with mobile menu
│   ├── Hero.tsx         # Hero section with CTAs
│   ├── About.tsx        # About section with journey
│   ├── Skills.tsx       # Technical skills showcase
│   ├── Projects.tsx     # Featured projects with filtering
│   ├── Services.tsx     # Services offered
│   ├── Contact.tsx      # Contact form
│   └── Footer.tsx       # Footer section
├── data/                # Data files
│   ├── projects.ts      # Project information
│   └── skills.ts        # Skills information
├── App.tsx              # Main App component
├── main.tsx             # React entry point
└── index.css            # Tailwind and global styles
```

## Installation

1. Install dependencies:
```bash
npm install
```

2. Start the development server:
```bash
npm run dev
```

3. Open [http://localhost:5173](http://localhost:5173) in your browser

## Building for Production

```bash
npm run build
```

The build output will be in the `dist` folder, ready for deployment.

## Customization

### Update Personal Information
- **Navbar**: Modify links and social media URLs in `src/components/Navbar.tsx`
- **Hero**: Update title, description, and CTAs in `src/components/Hero.tsx`
- **About**: Edit biography and education in `src/components/About.tsx`

### Add/Modify Projects
Edit `src/data/projects.ts`:
```typescript
{
  id: 1,
  title: "Project Name",
  description: "Project description",
  technologies: ["Tech1", "Tech2"],
  image: "image-url",
  github: "github-link",
  liveDemo: "demo-link",
  category: ["React", "JavaScript"]
}
```

### Add/Modify Skills
Edit `src/data/skills.ts` to add or modify skill categories.

### Customize Colors
Update the Tailwind color configuration in `tailwind.config.js`:
```javascript
colors: {
  'bg-primary': '#050505',
  'bg-secondary': '#0A0A0A',
  // ... other colors
}
```

## Social Links

- **GitHub**: https://github.com/mahmoud123458
- **LinkedIn**: https://www.linkedin.com/in/mahmoud-nabil-2705b420b

## Deployment

### Deploy to Vercel

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Vercel will automatically detect and build your React app
4. Your site will be live at `your-domain.vercel.app`

## SEO

The portfolio includes:
- Meta description and keywords
- Open Graph tags for social sharing
- Semantic HTML structure
- Sitemap and robots.txt ready
- Proper heading hierarchy

## Performance

- Lighthouse Performance: Optimized for 90+
- Optimized images and lazy loading ready
- Minimal JavaScript bundle
- Smooth scrolling and animations

## Accessibility

- Keyboard navigation support
- Proper heading hierarchy
- Alt text for images
- Sufficient color contrast
- Semantic HTML elements

## License

© 2026 Mahmoud Nabil. All rights reserved.

## Support

For questions or issues, please reach out through:
- Email: mahmoud@example.com
- GitHub: https://github.com/mahmoud123458
- LinkedIn: https://www.linkedin.com/in/mahmoud-nabil-2705b420b
