import { useState } from 'react';
import ProfileHeader from './components/ProfileHeader';
import LinkCard from './components/LinkCard';
import './styles.css';

const HomePage = () => {
    const [darkMode, setDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
    };

    return (
        <div className={darkMode ? 'dark-mode' : 'light-mode'}>
            <header>
                <ProfileHeader toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            </header>
            <main>
                <LinkCard title="Project 1" link="https://example.com/project1" />
                <LinkCard title="Project 2" link="https://example.com/project2" />
                <LinkCard title="Project 3" link="https://example.com/project3" />
            </main>
        </div>
    );
};

export default HomePage;