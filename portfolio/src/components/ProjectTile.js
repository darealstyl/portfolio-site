import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons';

function ProjectTile({ title, content, link, linkText = 'View Project', image }) {
    const [isOpen, setIsOpen] = useState(false);

    const toggleContent = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className="project-tile">
            <div className="project-header" onClick={toggleContent}>
                <h2>{title}</h2>
                <div className='image-tile'>
                    {image && <img src={image} alt={title} />}
                </div>
                <span className="toggle-button">
                    <FontAwesomeIcon icon={isOpen ? faMinus : faPlus} />
                </span>
            </div>
            <div className={`project-content ${isOpen ? 'open' : ''}`}>
                <p>{content}</p>
                <a href={link}>{linkText}</a>
            </div>
        </div>
    );
}

export default ProjectTile;
