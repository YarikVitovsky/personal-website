import React from 'react'
import ProjectCard from './components/ProjectCard'
import './App.css'

// Your real projects
const projects = [
    {
        id: 1,
        title: "Keeper App",
        description: "React-based note-taking app for organizing thoughts and ideas with a clean interface",
        link: "https://stupendous-treacle-9f774e.netlify.app/",
        isLive: true,
        color: "#4F46E5" // Indigo
    },
    {
        id: 2,
        title: "To-Do App",
        description: "Interactive task management application built with React for tracking daily goals",
        link: "https://grand-cannoli-84eaed.netlify.app",
        isLive: true,
        color: "#059669" // Emerald
    },
    {
        id: 3,
        title: "Share Secrets Site",
        description: "Full-stack authentication platform for sharing secured secrets with verified users",
        link: "https://github.com/YarikVitovsky/Secrets",
        isLive: false,
        color: "#7C3AED" // Violet
    },
    {
        id: 4,
        title: "Cat Meme Generator",
        description: "Fun web app that generates hilarious cat jokes with random cat images using public APIs",
        link: "https://cat-meme-generator-z780.onrender.com/",
        isLive: true,
        color: "#EA580C" // Orange
    },
    {
        id: 5,
        title: "Book Review Platform",
        description: "RESTful API application for writing and sharing book reviews and thoughts",
        link: "https://github.com/YarikVitovsky/Book-Review",
        isLive: false,
        color: "#DC2626" // Red
    },
    {
        id: 6,
        title: "Dice Race Game",
        description: "Interactive frontend dice game where highest score moves the car - built with vanilla JS",
        link: "https://yarikvitovsky.github.io/DiceGame/dice.html",
        isLive: true,
        color: "#0891B2" // Cyan
    },
    {
        id: 7,
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
                    <div className="projects-grid">
                        {projects.map(project => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                            />
                        ))}
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