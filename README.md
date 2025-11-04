# Personal Portfolio Website

A modern, elegant React portfolio website featuring project cards with unique colors and smooth animations. Perfect for showcasing your work to HR professionals and potential employers.

## Features

- **Single Page Design** - Clean, focused layout that's easy to navigate
- **Elegant Project Cards** - Each project gets a unique color with hover effects
- **Responsive Design** - Looks great on all devices
- **Modern UI** - Glass-morphism effects and smooth animations
- **Easy to Customize** - Simple data structure for adding your projects

## Quick Start

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. Open your browser and visit the URL shown in the terminal (usually `http://localhost:5173`)

## Customization

### Adding Your Information

Edit `src/App.jsx` and update:

- **Your Name**: Change "Your Name" in the header
- **Your Title**: Change "Full Stack Developer" to your role
- **Your Bio**: Update the bio text to describe yourself

### Adding Your Projects

In `src/App.jsx`, modify the `projects` array:

```javascript
const projects = [
  {
    id: 1,
    title: "Your Project Name",
    description: "Brief description of what this project does",
    link: "https://your-demo-link.com", // or GitHub URL
    isLive: true, // true for live demos, false for GitHub repos
    color: "#4F46E5" // Unique color for this card
  },
  // Add more projects...
]
```

### Available Colors

Use these hex colors for variety:
- `#4F46E5` (Indigo)
- `#059669` (Emerald) 
- `#DC2626` (Red)
- `#7C3AED` (Violet)
- `#EA580C` (Orange)
- `#0891B2` (Cyan)
- `#C2410C` (Orange-Red)
- `#7C2D12` (Brown)

## Project Structure

```
src/
├── components/
│   ├── ProjectCard.jsx      # Individual project card component
│   └── ProjectCard.css      # Project card styles
├── App.jsx                  # Main app component
├── App.css                  # Main app styles
├── index.css               # Global styles
└── main.jsx                # App entry point
```

## Deployment

Build for production:
```bash
npm run build
```

The `dist` folder will contain your optimized website ready for deployment to any static hosting service like Netlify, Vercel, or GitHub Pages.

## Technologies Used

- React 18
- Vite (for fast development)
- Modern CSS with animations
- Responsive design principles

Perfect for impressing HR teams with a professional, easy-to-navigate showcase of your work!