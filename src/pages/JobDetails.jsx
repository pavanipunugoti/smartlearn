import React, { useMemo } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Building, MapPin, DollarSign, Clock, CheckCircle2, ChevronRight } from 'lucide-react';
import { jobs } from '../data/jobs';

const JobDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const job = useMemo(() => {
        return jobs.find(j => j.id === parseInt(id));
    }, [id]);

    const pageVariants = {
        initial: { opacity: 0, x: 20 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: -20 }
    };

    if (!job) {
        return (
            <div className="error-container" style={{ textAlign: 'center', padding: '5rem 2rem' }}>
                <h2>Job not found</h2>
                <button className="btn-secondary" style={{ marginTop: '1rem' }} onClick={() => navigate('/jobs')}>Return to Jobs</button>
            </div>
        );
    }

    return (
        <motion.div
            className="page-container"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
            style={{ padding: '2rem', maxWidth: '900px', margin: '0 auto' }}
        >
            <div className="details-header-wrapper" style={{ marginBottom: '2rem' }}>
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
            </div>

            <div className="job-header" style={{ padding: '2rem', backgroundColor: 'var(--card-bg)', borderRadius: '12px', border: '1px solid var(--border)', marginBottom: '2rem' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', flexWrap: 'wrap', gap: '1rem' }}>
                    <div>
                        <span className="course-badge" style={{ margin: '0 0 1rem 0' }}>{job.type}</span>
                        <h1 style={{ fontSize: '2.5rem', margin: '0 0 1rem 0', background: 'linear-gradient(45deg, #FF6B6B, #4ECDC4)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                            {job.title}
                        </h1>
                        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1.5rem', color: 'var(--text-secondary)' }}>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Building size={18} /> {job.company}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <MapPin size={18} /> {job.location}
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', color: 'var(--text)' }}>
                                <DollarSign size={18} /> <strong>{job.salary}</strong>
                            </div>
                            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                                <Clock size={18} /> Posted {job.postedAt}
                            </div>
                        </div>
                    </div>
                    <button className="btn-primary" style={{ padding: '0.75rem 2rem', fontSize: '1.1rem' }} onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(job.company + " careers")}`, '_blank')}>
                        Apply Now
                    </button>
                </div>
            </div>

            <div className="job-body" style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Job Description</h2>
                    <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.1rem' }}>
                        {job.description}
                    </p>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Requirements</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {job.requirements.map((req, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <CheckCircle2 size={20} style={{ color: '#4ECDC4', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ lineHeight: '1.6' }}>{req}</span>
                            </div>
                        ))}
                    </div>
                </section>

                <section>
                    <h2 style={{ fontSize: '1.5rem', marginBottom: '1rem', borderBottom: '1px solid var(--border)', paddingBottom: '0.5rem' }}>Responsibilities</h2>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                        {job.responsibilities.map((resp, idx) => (
                            <div key={idx} style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem', color: 'var(--text-secondary)' }}>
                                <ChevronRight size={20} style={{ color: '#FF6B6B', flexShrink: 0, marginTop: '2px' }} />
                                <span style={{ lineHeight: '1.6' }}>{resp}</span>
                            </div>
                        ))}
                    </div>
                </section>
            </div>

            <div style={{ marginTop: '3rem', textAlign: 'center' }}>
                <button className="btn-primary" style={{ padding: '1rem 3rem', fontSize: '1.2rem', width: '100%', maxWidth: '300px' }} onClick={() => window.open(`https://www.google.com/search?q=${encodeURIComponent(job.company + " careers")}`, '_blank')}>
                    Apply for this Job
                </button>
            </div>
        </motion.div>
    );
};

export default JobDetails;
