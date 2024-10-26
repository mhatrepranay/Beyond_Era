// src/LandingPage.js
import React from 'react';
import './landing.css';
import { FaCameraRetro, FaUpload, FaCube, FaPenNib, FaVolumeUp, FaMapMarkerAlt, FaUniversity, FaQuestionCircle } from 'react-icons/fa';
import ImageCarousel from './ImageCarousel';
import ImageCardSwiper from './ImageCardSwiper';

const images = [
    { src: '/Screenshot 2024-10-26 022431.png', alt: 'Temple 1', title: 'Temple 1' },
    { src: '/Screenshot 2024-10-26 022431.png', alt: 'Temple 2', title: 'Temple 2' },
    { src: '/Screenshot 2024-10-26 022431.png', alt: 'Temple 3', title: 'Temple 3' },
    { src: '/Screenshot 2024-10-26 022431.png', alt: 'Temple 4', title: 'Temple 4' },
    { src: '/Screenshot 2024-10-26 022431.png', alt: 'Temple 5', title: 'Temple 5' },
];

const featuresData = [
    {
        icon: <FaCameraRetro />,
        title: 'Scan Heritage',
        description: 'Scan any heritage site to see its evolution over time.',
    },
    {
        icon: <FaUpload />,
        title: 'Upload & Analyze',
        description: 'Upload heritage images to see their historical transformation.',
    },
    {
        icon: <FaCube />,
        title: 'Explore 3D Models',
        description: 'Dive into interactive 3D models of historic sites.',
    },
    {
        icon: <FaPenNib />,
        title: 'Generate Descriptions',
        description: 'Automatically generate historical descriptions for any artifact or site.',
    },
    {
        icon: <FaVolumeUp />,
        title: 'Text to Speech',
        description: 'Experience narrated descriptions of each heritage site.',
    },
    {
        icon: <FaMapMarkerAlt />,
        title: 'Discover Places',
        description: 'Search for your favorite historical places and explore.',
    },
    {
        icon: <FaUniversity />,
        title: 'Learn with AR',
        description: 'Engage with history through AR extensions and immersive content.',
    },
    {
        icon: <FaQuestionCircle />,
        title: 'Interactive Quizzes',
        description: 'Take fun quizzes related to each model and historical site.',
    },
];

const LandingPage = () => {
    return (
        <div className="landing-page">
            {/* Header Section */}
            <header className="header">
                <div className="logo">Beyond-Era</div>
                <nav className="nav">
                    <a href="#home">Home</a>
                    <a href="#about">About</a>
                    <a href="#features">Features</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            {/* Hero Section */}
            <section id='herroo' className="hero">
                <div className="hero-text">
                    <h1 className='sty'>Reviving Heritage Through <span>AI</span></h1>
                    <p>Can AI undo the effects of time on India's vibrant art?</p>
                    <button className="get-started-button">Get Started</button>
                </div>
            </section>

            <br />
            <br />
            <div className='pad'>
                <ImageCardSwiper />
            </div>

            {/* Content Section */}
            <section className="content">
                <h2>Our Mission</h2>
                <p>
                    India's heritage is rich with art and culture, but many pieces have suffered degradation over time.
                    We aim to leverage the power of AI to restore and preserve these invaluable artworks for future generations.
                </p>
            </section>

            {/* Features Section */}
            <section className="features" id="features">
                <h2>Our Features</h2>
                <div className="features-grid">
                    {featuresData.map((feature, index) => (
                        <div key={index} className="feature-item">
                            <div className="feature-icon">{feature.icon}</div>
                            <h3>{feature.title}</h3>
                            <p>{feature.description}</p>
                        </div>
                    ))}
                </div>
            </section>

            {/* Footer Section */}
            <footer className="footer" id="contact">
                <p>&copy; 2024 Beyond-Era. All rights reserved.</p>
                <p>Contact: info@beyond-era.com</p>
            </footer>
        </div>
    );
};

export default LandingPage;
