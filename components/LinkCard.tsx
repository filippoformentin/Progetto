import React from 'react';

interface LinkCardProps {
    title: string;
    description: string;
    url: string;
}

const LinkCard: React.FC<LinkCardProps> = ({ title, description, url }) => {
    return (
        <div style={{ border: '1px solid #ccc', borderRadius: '8px', padding: '16px', maxWidth: '300px' }}>
            <h3>{title}</h3>
            <p>{description}</p>
            <a href={url} target="_blank" rel="noopener noreferrer">Go to Link</a>
        </div>
    );
};

export default LinkCard;