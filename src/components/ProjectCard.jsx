import React from 'react'
import './ProjectCard.css'

const ProjectCard = ({ project }) => {
    const handleCardClick = () => {
        window.open(project.link, '_blank')
    }

    return (
        <div
            className="project-card"
            onClick={handleCardClick}
            style={{ '--card-color': project.color }}
        >
            <div className="card-content">
                <div className="card-header">
                    <h3 className="project-title">{project.title}</h3>
                    <div className="project-badge">
                        {project.isLive ? (
                            <span className="badge live">Live Demo</span>
                        ) : (
                            <span className="badge github">GitHub</span>
                        )}
                    </div>
                </div>

                <p className="project-description">{project.description}</p>

                <div className="card-footer">
                    <div className="click-indicator">
                        <span>Click to view</span>
                        <svg
                            width="16"
                            height="16"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                        >
                            <path d="M7 17L17 7M17 7H7M17 7V17" />
                        </svg>
                    </div>
                </div>
            </div>

            <div className="card-gradient"></div>
        </div>
    )
}

export default ProjectCard