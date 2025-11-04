# Personal Portfolio Website

A modern, elegant React portfolio website featuring project cards with unique colors and smooth animations. Perfect for showcasing your work to HR professionals and potential employers.

🌐 **Live Demo**: [https://bright-melomakarona-fbe9bb.netlify.app](https://bright-melomakarona-fbe9bb.netlify.app)

## 🚀 Features

- **Single Page Design** - Clean, focused layout that's easy to navigate
- **Elegant Project Cards** - Each project gets a unique color with hover effects
- **Responsive Design** - Looks great on all devices
- **Modern UI** - Glass-morphism effects and smooth animations
- **Personal Branding** - Professional header with photo and bio
- **Real Projects** - Showcases 7 live projects with direct links
- **Fast Loading** - Deployed on Netlify for instant access

## 🛠️ Technologies Used

- **React 18** - Modern frontend framework
- **Vite** - Fast build tool and development server
- **CSS3** - Advanced styling with animations and effects
- **Netlify** - Fast, reliable hosting platform

## 🎯 Project Showcase

The portfolio features 7 real projects:
- **Keeper App** - React note-taking application
- **To-Do App** - Task management with React
- **Share Secrets Site** - Full-stack authentication platform
- **Cat Meme Generator** - Fun API-powered application
- **Book Review Platform** - RESTful API for reviews
- **Dice Race Game** - Interactive vanilla JavaScript game
- **Cats vs Dogs Classifier** - Machine learning model on Hugging Face

## 💻 Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/YarikVitovsky/personal-website.git
   cd personal-website
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser and visit `http://localhost:5173`

## 🚀 Deployment

The site is automatically deployed to Netlify from the main branch. Any push to main will trigger a new deployment.

**Build Command**: `npm run build`  
**Publish Directory**: `dist`

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

## ⚡ Performance

- **Fast Loading** - Vite-optimized build with code splitting
- **SEO Friendly** - Proper meta tags and semantic HTML
- **Lighthouse Score** - Optimized for performance and accessibility
- **Mobile First** - Responsive design that works on all devices

## 🤝 Connect

- **Portfolio**: [https://bright-melomakarona-fbe9bb.netlify.app](https://bright-melomakarona-fbe9bb.netlify.app)
- **GitHub**: [https://github.com/YarikVitovsky](https://github.com/YarikVitovsky)
- **LinkedIn**: [Yarik Vitovsky](https://linkedin.com/in/yarik-vitovsky)

---

Perfect for impressing HR teams and showcasing your development skills! 🎯