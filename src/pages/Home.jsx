import React, { useState, useMemo } from 'react';
import { useSearchParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import SearchBar from '../components/SearchBar';
import FilterBar from '../components/FilterBar';
import { Sparkles, Code, Database, Globe, BrainCircuit, LineChart, FileJson, PenTool, Terminal, Coffee } from 'lucide-react';
import learningImg from '../assets/leraning_img.jpeg';
import aboutImg from '../assets/about_img.png';
const Home = () => {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();
    const searchKeyword = searchParams.get('query') || '';

    const setSearchKeyword = (val) => {
        if (val) {
            setSearchParams({ query: val });
        } else {
            setSearchParams({});
        }
    };

    const [selectedCategory, setSelectedCategory] = useState('');

    const categories = useMemo(() => {
        return Array.from(new Set(courses.map(c => c.category)));
    }, []);

    const filteredCourses = useMemo(() => {
        return courses.filter((course) => {
            const matchCategory = selectedCategory ? course.category === selectedCategory : true;
            const matchSearch = searchKeyword
                ? course.title.toLowerCase().includes(searchKeyword.toLowerCase()) ||
                course.tags.some(tag => tag.toLowerCase().includes(searchKeyword.toLowerCase()))
                : true;
            return matchCategory && matchSearch;
        });
    }, [searchKeyword, selectedCategory]);

    const pageVariants = {
        initial: { opacity: 0, scale: 0.98 },
        in: { opacity: 1, scale: 1 },
        out: { opacity: 0, scale: 1.02 }
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
            className="home-page-layout container"
        >
            {/* HERO SECTION */}
            <section id="home" className="home-section hero-section">
                <div className="hero-content">
                    <motion.div
                        className="hero-badge"
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <span>SmartLearn Interactive</span>
                    </motion.div>

                    <motion.h1
                        className="hero-title"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.3 }}
                    >
                        Learn The Best <span>Skills For The Future</span>
                    </motion.h1>
                    <p className="hero-subtitle mt-3">
                        Your ultimate destination to discover, learn, and master modern web and data skills.
                        Join SmartLearn and start building your real-world portfolio today.
                    </p>
                    <div className="hero-actions">
                        <button className="btn-primary" onClick={() => document.getElementById('courses').scrollIntoView({ behavior: 'smooth' })}>Explore Courses</button>
                    </div>
                </div>
                <div className="hero-image-wrapper">
                    <img src={learningImg} alt="E-Learning" className="hero-image" />
                </div>
            </section>

            <div className="divider" />

            {/* ABOUT SECTION */}
            <section id="about" className="home-section">
                <div className="section-header text-center">
                    <h2>About SmartLearn</h2>
                    <p style={{ marginTop: '0.5rem' }}>Empowering developers and data scientists</p>
                </div>
                <div className="about-grid">
                    <div className="about-image-wrapper">
                        <img src={aboutImg} alt="About SmartLearn" className="about-img" />
                    </div>
                    <div className="about-content">
                        <p>
                            SmartLearn is a revolutionary learning platform created to bridge the gap between traditional education and modern industry demands. We specialize in providing high-quality, practical content that directly translates into real-world skills.
                        </p>
                        <p style={{ marginTop: '1rem' }}>
                            Our mission is to empower professionals worldwide by making premium education accessible, interactive, and engaging. Whether you're starting from scratch or looking to upskill to a senior level, SmartLearn has all the tools you need. By focusing exclusively on actionable skills and hands-on portfolio completion, we ensure our graduates are production-ready.
                        </p>
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* SKILLS SECTION */}
            <section id="skills" className="home-section">
                <div className="section-header text-center">
                    <h2>Skills You Will Master</h2>
                    <p style={{ marginTop: '0.5rem' }}>Technologies taught by industry experts</p>
                </div>

                <div className="skills-grid">
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/frontend')}>
                        <Globe size={32} className="skill-icon blue" />
                        <h3>Frontend</h3>
                        <p>Master React.js, Next.js, and modern CSS frameworks.</p>
                    </div>
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/backend')}>
                        <Database size={32} className="skill-icon green" />
                        <h3>Backend</h3>
                        <p>Build powerful robust APIs, servers, and microservices.</p>
                    </div>
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/ai')}>
                        <BrainCircuit size={32} className="skill-icon purple" />
                        <h3>AI</h3>
                        <p>Dive deep into artificial intelligence and neural networks.</p>
                    </div>
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/data-analytics')}>
                        <LineChart size={32} className="skill-icon blue" />
                        <h3>Data Analytics</h3>
                        <p>Analyze and visualize massive datasets efficiently.</p>
                    </div>
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/ml')}>
                        <Code size={32} className="skill-icon green" />
                        <h3>Machine Learning</h3>
                        <p>Build and train predictive regression and classification models.</p>
                    </div>
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/figma')}>
                        <PenTool size={32} className="skill-icon purple" />
                        <h3>Figma</h3>
                        <p>Create stunning user interfaces with modern design tools.</p>
                    </div>
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/django')}>
                        <FileJson size={32} className="skill-icon blue" />
                        <h3>Django</h3>
                        <p>Deploy secure applications using Python's leading framework.</p>
                    </div>
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/python')}>
                        <Terminal size={32} className="skill-icon yellow" />
                        <h3>Python</h3>
                        <p>Learn the world's most versatile programming language.</p>
                    </div>
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/java')}>
                        <Coffee size={32} className="skill-icon red" />
                        <h3>Java</h3>
                        <p>Master robust object-oriented programming for enterprise apps.</p>
                    </div>
                    <div className="skill-card clickable-card" onClick={() => navigate('/skill/sql')}>
                        <Database size={32} className="skill-icon blue" />
                        <h3>SQL</h3>
                        <p>Design efficient schemas and write complex database queries.</p>
                    </div>
                </div>
            </section>

            <div className="divider" />

            {/* COURSES SECTION */}
            <section id="courses" className="home-section courses-container">
                <div className="section-header text-center">
                    <h2>Explore Our Courses</h2>
                    <p style={{ marginTop: '0.5rem' }}>Find the perfect curriculum for your goals</p>
                </div>

                <div className="discovery-controls inline-discovery">
                    <SearchBar searchKeyword={searchKeyword} setSearchKeyword={setSearchKeyword} />
                    <FilterBar
                        categories={categories}
                        selectedCategory={selectedCategory}
                        setSelectedCategory={setSelectedCategory}
                    />
                </div>

                <div className="section-header">
                    <h4>{filteredCourses.length} results matching criteria</h4>
                </div>

                {filteredCourses.length > 0 ? (
                    <div className="courses-grid responsive-grid">
                        {filteredCourses.map((course, index) => (
                            <CourseCard key={course.id} course={course} index={index} />
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <p>No courses match your search criteria. Try a different term or category.</p>
                        <button className="btn-secondary" onClick={() => { setSearchKeyword(''); setSelectedCategory(''); }}>
                            Clear Filters
                        </button>
                    </div>
                )}
            </section>
        </motion.div>
    );
};

export default Home;
