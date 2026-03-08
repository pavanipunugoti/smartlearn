import React from 'react';
import { motion } from 'framer-motion';
import CourseCard from './CourseCard';
import { getRecommendations } from '../utils/recommend';
import { courses } from '../data/courses';

const RecommendationList = ({ selectedCategory, searchKeyword, currentCourseId }) => {
    const recommendations = getRecommendations(courses, selectedCategory, searchKeyword, currentCourseId);

    if (recommendations.length === 0) return null;

    return (
        <motion.section
            className="recommendation-section"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
        >
            <div className="section-header">
                <h2>Recommended For You</h2>
                <p>Based on your current interests</p>
            </div>

            <div className="courses-grid">
                {recommendations.map((course, index) => (
                    <CourseCard key={`rec-${course.id}`} course={course} index={index} />
                ))}
            </div>
        </motion.section>
    );
};

export default RecommendationList;
