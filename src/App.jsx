import React from 'react'
import ProjectCard from './components/ProjectCard'
import './App.css'

// Intermediate Projects
const intermediateProjects = [
    {
        id: 1,
        title: "ProjectHub - Project Manager",
        description: "Full-stack project management application with React, Node.js, and Express. Features dashboard, Kanban board, team management, and analytics",
            link: "https://yariks-project-manager.netlify.app",
        isLive: true,
        color: "#6366F1" // Indigo
    }
]

// Beginner Tutorial Projects
const beginnerProjects = [
    {
        id: 2,
        title: "Keeper App",
        description: "React-based note-taking app for organizing thoughts and ideas with a clean interface",
        link: "https://github.com/YarikVitovsky/keeper-app",
        isLive: false,
        color: "#4F46E5" // Indigo
    },
    {
        id: 3,
        title: "To-Do App",
        description: "Interactive task management application built with React for tracking daily goals",
        link: "https://github.com/YarikVitovsky/todo-app",
        isLive: false,
        color: "#059669" // Emerald
    },
    {
        id: 4,
        title: "Cat Meme Generator",
        description: "Fun web app that generates hilarious cat jokes with random cat images using public APIs",
        link: "https://hilarious-banoffee-1e3d7a.netlify.app/",
        isLive: true,
        color: "#EA580C" // Orange
    },
    {
        id: 5,
        title: "Share Secrets Site",
        description: "Full-stack authentication platform for sharing secured secrets with verified users",
        link: "https://github.com/YarikVitovsky/Secrets",
        isLive: false,
        color: "#7C3AED" // Violet
    },
    {
        id: 6,
        title: "Book Review Platform",
        description: "RESTful API application for writing and sharing book reviews and thoughts",
        link: "https://github.com/YarikVitovsky/Book-Review",
        isLive: false,
        color: "#DC2626" // Red
    },
    {
        id: 7,
        title: "Dice Race Game",
        description: "Interactive frontend dice game where highest score moves the car - built with vanilla JS",
        link: "https://github.com/YarikVitovsky/DiceGame",
        isLive: false,
        color: "#0891B2" // Cyan
    },
    {
        id: 8,
        title: "Cats vs Dogs Classifier",
        description: "Machine learning model using TensorFlow/Keras to distinguish between cat and dog images",
        link: "https://huggingface.co/spaces/YarikVitovsky/cat-vs-dog-classifier",
        isLive: true,
        color: "#C2410C" // Orange-Red
    }
]

function App() {
    return (
        <div className="app">
            {/* Header Section */}
            <header className="header">
                <div className="container">
                    <div className="header-content">
                        <div className="header-text">
                            <h1 className="name">Yarik Vitovsky</h1>
                            <p className="title">Full Stack Developer</p>
                            <p className="bio">
                                Passionate developer creating modern web applications with clean code and great user experiences.
                                Specializing in React, Node.js, and machine learning with a focus on user-friendly design.
                            </p>
                            <div className="header-links">
                                <a
                                    href="https://github.com/YarikVitovsky"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z" />
                                    </svg>
                                    GitHub
                                </a>
                                <a
                                    href="https://www.linkedin.com/in/yarik-vitovsky-3695272b2/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="social-link"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                    </svg>
                                    LinkedIn
                                </a>
                            </div>
                        </div>
                        <div className="header-image">
                            <img src="/Untitled.png" alt="Yarik Vitovsky" className="profile-photo" />
                        </div>
                    </div>
                </div>
            </header>

            {/* Projects Section */}
            <main className="main">
                <div className="container">
                    <h2 className="section-title">My Projects</h2>

                    {/* Intermediate Projects */}
                    <div className="project-section">
                        <h3 className="subsection-title">Intermediate Projects</h3>
                        <div className="section-divider"></div>
                        <div className="projects-grid">
                            {intermediateProjects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Beginner Projects */}
                    <div className="project-section">
                        <h3 className="subsection-title">Beginner Projects</h3>
                        <div className="section-divider"></div>
                        <div className="projects-grid">
                            {beginnerProjects.map(project => (
                                <ProjectCard
                                    key={project.id}
                                    project={project}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </main>

            {/* Footer */}
            <footer className="footer">
                <div className="container">
                    <p>&copy; 2024 Yarik Vitovsky. Built with React & Vite.</p>
                </div>
            </footer>
        </div>
    )
}

export default App