import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Briefcase, MapPin, Building, DollarSign } from 'lucide-react';
import { jobs } from '../data/jobs';

const Jobs = () => {
    const navigate = useNavigate();

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
            style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}
        >
            <div className="details-header-wrapper" style={{ marginBottom: '2rem' }}>
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
            </div>

            <div className="section-header text-center">
                <h2><Briefcase className="inline-icon" style={{ verticalAlign: 'middle', marginRight: '10px' }} size={32} /> Tech Job Board</h2>
                <p>Find your next career opportunity</p>
            </div>

            <div className="courses-grid" style={{ marginTop: '3rem', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))' }}>
                {jobs.map(job => (
                    <div
                        key={job.id}
                        className="skill-card clickable-card"
                        onClick={() => navigate(`/jobs/${job.id}`)}
                        style={{ textAlign: 'left', padding: '1.5rem', display: 'flex', flexDirection: 'column', gap: '0.75rem', cursor: 'pointer' }}
                    >
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span className="course-badge" style={{ margin: 0 }}>{job.type}</span>
                        </div>
                        <h3 style={{ fontSize: '1.25rem', margin: '0.5rem 0' }}>{job.title}</h3>

                        <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <Building size={16} /> {job.company}
                        </div>
                        <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                            <MapPin size={16} /> {job.location}
                        </div>
                        <div style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: 'bold' }}>
                            <DollarSign size={16} /> {job.salary}
                        </div>

                        <button
                            className="btn-primary"
                            style={{ marginTop: '1rem', width: '100%' }}
                            onClick={(e) => { e.stopPropagation(); navigate(`/jobs/${job.id}`); }}
                        >
                            View Details
                        </button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Jobs;
