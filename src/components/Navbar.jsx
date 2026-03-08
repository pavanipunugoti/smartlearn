import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate, useLocation } from 'react-router-dom';
import { Book } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const location = useLocation();

    const handleLoginClick = () => {
        navigate('/login');
    };

    const handleScroll = (id) => {
        if (location.pathname !== '/') {
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(id);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 300);
        } else {
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav className="smartlearn-navbar">
            <div className="navbar-container">
                <div className="navbar-left">
                    <motion.div
                        className="brand-logo"
                        onClick={() => handleScroll('home')}
                        whileHover={{ scale: 1.05 }}
                    >
                        <Book size={24} className="brand-icon" />
                        <span className="brand-text">SmartLearn</span>
                    </motion.div>
                </div>

                <div className="nav-links desktop-only">
                    <span onClick={() => handleScroll('home')} className="nav-item">Home</span>
                    <span onClick={() => handleScroll('about')} className="nav-item">About</span>
                    <span onClick={() => handleScroll('courses')} className="nav-item">Courses</span>
                    <span onClick={() => handleScroll('skills')} className="nav-item">Skills</span>
                    <span onClick={() => navigate('/practice')} className="nav-item">Practice</span>
                    <span onClick={() => navigate('/jobs')} className="nav-item">Jobs</span>
                </div>

                <div className="navbar-right">
                    <motion.button
                        className="btn-paid-courses"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={() => navigate('/paid-courses')}
                    >
                        Paid Courses
                    </motion.button>

                    <motion.button
                        className="btn-primary"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        onClick={handleLoginClick}
                    >
                        Sign Up
                    </motion.button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
