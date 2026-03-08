import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import RecommendationList from '../components/RecommendationList';
import { ArrowLeft, Star, Clock, User, CheckCircle2, Award, BookOpen } from 'lucide-react';

const CourseDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const course = useMemo(() => {
        return courses.find(c => c.id === parseInt(id));
    }, [id]);

    const pageVariants = {
        initial: { opacity: 0, x: 20 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: -20 }
    };

    const pageTransition = {
        type: "tween",
        ease: "anticipate",
        duration: 0.5
    };

    if (!course) {
        return (
            <div className="error-container">
                <h2>Course not found</h2>
                <button className="btn-secondary" onClick={() => navigate('/')}>Return Home</button>
            </div>
        );
    }

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
            className="details-page"
        >
            <div className="details-header-wrapper">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
            </div>

            <div className="course-hero">
                <motion.div
                    className="course-hero-content"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    <div className="category-tag">{course.category}</div>
                    <h1 className="course-hero-title">{course.title}</h1>
                    <p className="course-hero-description">{course.description}</p>

                    <div className="course-stats-container">
                        <div className="stat-item">
                            <Star className="stat-icon yellow" />
                            <div className="stat-text">
                                <span className="stat-value">{course.rating}</span>
                                <span className="stat-label">Rating</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <User className="stat-icon blue" />
                            <div className="stat-text">
                                <span className="stat-value">{course.instructor}</span>
                                <span className="stat-label">Instructor</span>
                            </div>
                        </div>
                        <div className="stat-item">
                            <Award className="stat-icon purple" />
                            <div className="stat-text">
                                <span className="stat-value">{course.difficulty}</span>
                                <span className="stat-label">Level</span>
                            </div>
                        </div>
                    </div>
                </motion.div>

                <motion.div
                    className="course-hero-image-wrapper"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.3 }}
                >
                    <img src={course.image} alt={course.title} className="course-hero-image" />
                    <div className="enroll-card">
                        <div className="enroll-price">${course.price}</div>
                        <motion.button
                            className="btn-primary enroll-btn"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                        >
                            Enroll Now
                        </motion.button>
                        <p className="enroll-guarantee">30-Day Money-Back Guarantee</p>
                    </div>
                </motion.div>
            </div>

            <div className="course-body">
                <div className="course-main-info">
                    <h2>Overview</h2>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', lineHeight: '1.8' }}>
                        {course.overview}
                    </p>

                    <h2>What you'll learn</h2>
                    <div className="learning-grid">
                        {course.learningOutcomes?.map((outcome, idx) => (
                            <div key={idx} className="learning-item">
                                <CheckCircle2 size={20} className="check-icon" />
                                <span>{outcome}</span>
                            </div>
                        ))}
                    </div>

                    <div className="tags-container">
                        <h3>Related Tags</h3>
                        <div className="tags-list">
                            {course.tags.map(tag => (
                                <span key={tag} className="tag-pill">{tag}</span>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            <div className="divider details-divider" />

            <div className="recommendation-wrapper">
                <RecommendationList
                    selectedCategory={course.category}
                    searchKeyword={course.tags[0]}
                    currentCourseId={course.id}
                />
            </div>
        </motion.div>
    );
};

export default CourseDetails;
