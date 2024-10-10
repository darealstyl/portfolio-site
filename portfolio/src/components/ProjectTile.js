import React from 'react';

function ProjectTile({ title, content, link, linkText = 'View Project', image }) {
    return (
        <div className="project-tile">
            <div className="image-tile">
                {image && <img src={image} alt={title} />}
                <div className="image-overlay"></div>
            </div>
            <div className="project-content">
                <div className="project-header">
                    <h2>{title}</h2>
                </div>
                <p>{content}</p>
                <a href={link}>{linkText}</a>
            </div>
        </div>
    );
}

export default ProjectTile;
