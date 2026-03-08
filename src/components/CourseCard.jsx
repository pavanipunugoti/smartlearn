import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { Star, Clock, BookOpen, User } from 'lucide-react';

const CourseCard = ({ course, index }) => {
    const navigate = useNavigate();

    const handleDisplay = () => {
        if (course.actionRoute) {
            navigate(course.actionRoute);
        } else {
            navigate(`/course/${course.id}`);
        }
    };

    return (
        <motion.div
            className="course-card"
            key={course.id}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.03, translateY: -5 }}
            onClick={handleDisplay}
        >
            <div className="card-image-wrapper">
                <img src={course.image} alt={course.title} className="card-image" />
                <span className="course-badge">{course.isPaid ? 'Paid' : 'Free'} | {course.difficulty}</span>
            </div>
            <div className="card-content">
                <span className="course-category">{course.category}</span>
                <h3 className="course-title">{course.title}</h3>
                <p className="course-instructor">
                    <User size={14} /> {course.instructor}
                </p>

                <div className="course-meta">
                    <div className="rating">
                        <Star size={16} fill="#FFD700" color="#FFD700" />
                        <span>{course.rating}</span>
                    </div>
                    <div className="tags-flex">
                        <BookOpen size={16} />
                        <span>{course.tags.length} modules</span>
                    </div>
                </div>

                <div className="card-footer">
                    <span className="course-price">${course.price}</span>
                    <motion.button
                        whileTap={{ scale: 0.95 }}
                        className="btn-primary"
                    >
                        View Details
                    </motion.button>
                </div>
            </div>
        </motion.div>
    );
};

export default CourseCard;
