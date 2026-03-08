import React from 'react';
import { motion } from 'framer-motion';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import { ArrowLeft, Award } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const PaidCourses = () => {
    const navigate = useNavigate();
    const paidCourses = courses.filter(course => course.isPaid);

    const pageVariants = {
        initial: { opacity: 0, x: -20 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: 20 }
    };

    return (
        <motion.div
            className="page-container"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
        >
            <button className="back-btn mb-4" onClick={() => navigate(-1)}>
                <ArrowLeft size={20} />
                <span>Back</span>
            </button>
            <div className="section-header">
                <div>
                    <h2 style={{ display: 'flex', alignItems: 'center', gap: '10px' }}><Award color="#FFD700" /> Premium Courses</h2>
                    <p>Upgrade your skills with our top-tier expert courses</p>
                </div>
                <p>{paidCourses.length} courses available</p>
            </div>

            <div className="courses-grid">
                {paidCourses.map((course, index) => (
                    <CourseCard key={course.id} course={course} index={index} />
                ))}
            </div>
        </motion.div>
    );
};

export default PaidCourses;
