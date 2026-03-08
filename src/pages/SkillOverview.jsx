import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Globe, Database, Cpu, BrainCircuit, Layout, BookOpen, Terminal, Coffee } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import frontendImg from '../assets/frontend.jpeg';
import backendImg from '../assets/backend.jpeg';

const skillsContent = {
    frontend: {
        title: "Frontend Architecture",
        description: "Frontend development is all about crafting the visual elements a user interacts with within a web application. It requires mastering languages like HTML, CSS, JavaScript alongside robust frameworks (React, Next.js).",
        outcomes: ["Build responsive web layouts", "Manage complex application state", "Optimize web performance", "Implement accessibility standards"],
        icon: Globe,
        roadmap: {
            beginner: ["HTML5 & CSS3 Basics", "JavaScript Fundamentals", "Responsive Design", "Basic Git & GitHub"],
            intermediate: ["React.js Core Concepts", "State Management", "CSS Frameworks", "API Integration"],
            advanced: ["Next.js & SSR", "Performance Optimization", "Web Accessibility", "Advanced Testing"]
        }
    },
    backend: {
        title: "Backend Development",
        description: "Backend architecture involves managing server logic, APIs, and databases. It is the powerhouse that feeds the frontend and ensures data is stored, processed, and served reliably using Python, Node, or Java.",
        outcomes: ["Design RESTful APIs", "Manage Database ORMs", "Implement JWT Authentication", "Deploy scalable cloud servers"],
        icon: Database,
        roadmap: {
            beginner: ["Basic Server Setup", "HTTP & REST API Concepts", "SQL Basics", "Authentication"],
            intermediate: ["Advanced ORM", "JWT Integration", "Middleware & Error Handling", "Docker Containerization"],
            advanced: ["Microservices", "Caching (Redis)", "CI/CD Pipelines", "GraphQL & WebSockets"]
        }
    },
    ai: {
        title: "Artificial Intelligence",
        description: "Artificial Intelligence is the simulation of human intelligence by machines. This encompasses deep learning, generative AI, natural language processing, and neural network architectures.",
        outcomes: ["Train deep learning models", "Integrate LLM APIs", "Implement computer vision", "Perform Natural Language Processing"],
        icon: BrainCircuit,
        roadmap: {
            beginner: ["Python for AI", "Probability & Statistics", "Intro to AI Concepts", "LLM API Usage"],
            intermediate: ["Neural Networks", "Natural Language Processing", "Computer Vision Fundamentals", "TensorFlow Basics"],
            advanced: ["Deep Learning Models", "Generative AI & GANs", "Model Deployment", "Custom Transformer Models"]
        }
    },
    "data-analytics": {
        title: "Data Analytics",
        description: "Data analytics is the science of analyzing raw datasets to pull out insights and trends. It involves using SQL and visualization libraries (matplotlib) to make data-driven decisions.",
        outcomes: ["Perform advanced SQL queries", "Visualize data streams", "Clean unstructured data", "Generate business reports"],
        icon: Cpu,
        roadmap: {
            beginner: ["Excel Advanced functions", "Basic SQL queries", "Python/Pandas basics", "Data Cleaning"],
            intermediate: ["Advanced SQL & Window Functions", "Data Visualization", "Exploratory Data Analysis", "Statistical Analysis"],
            advanced: ["Predictive Analytics", "Machine Learning for Data Analysis", "Big Data Tools", "Data Storytelling"]
        }
    },
    ml: {
        title: "Machine Learning (ML)",
        description: "A specialized branch of AI, Machine Learning focuses on the use of data and algorithms to imitate the way that humans learn, gradually improving analytical accuracy.",
        outcomes: ["Implement supervised learning", "Train regression models", "Deploy models to production", "Handle scikit-learn ecosystems"],
        icon: Cpu,
        roadmap: {
            beginner: ["Python Data Structures", "Numpy & Pandas", "Basic Scikit-Learn", "Linear & Logistic Regression"],
            intermediate: ["Decision Trees & Random Forests", "Hyperparameter Tuning", "Cross-Validation", "Unsupervised Learning"],
            advanced: ["Deep Learning integration", "Time Series Forecasting", "Model Deployment", "ML Pipelines"]
        }
    },
    figma: {
        title: "Figma & Design",
        description: "Figma is the industry-leading collaborative interface design tool. It's used by UX/UI designers to plan out responsive layouts, components, and interactive prototypes for apps and websites.",
        outcomes: ["Build reusable components", "Implement auto-layout systems", "Create interactive prototypes", "Export assets for developers"],
        icon: Layout,
        roadmap: {
            beginner: ["Figma Interface Navigation", "Basic Typography", "Color Theory Basics", "Frames & Groups"],
            intermediate: ["Auto-layout & Constraints", "Creating Components", "Basic Prototyping", "Design Systems"],
            advanced: ["Advanced Animations", "Variables & Tokens", "Interactive Prototypes", "Developer Handoff"]
        }
    },
    django: {
        title: "Django Framework",
        description: "Django is a high-level Python web framework that encourages rapid development and clean, pragmatic design. Built by experienced developers, it takes care of much of the hassle of web development.",
        outcomes: ["Set up Django applications", "Master Django templates", "Navigate the Django ORM", "Deploy securely to WSGI"],
        icon: BookOpen,
        roadmap: {
            beginner: ["Python Refresher", "Django Setup & Views", "URL Routing", "Basic Models"],
            intermediate: ["Django Forms & Validation", "Advanced ORM", "Django REST Framework", "Authentication & Permissions"],
            advanced: ["Custom User Models", "Celery & Background Tasks", "Testing Applications", "Production Deployment"]
        }
    },
    python: {
        title: "Python Programming",
        description: "Python is a high-level, interpreted programming language with elegant syntax and dynamic typing, making it an ideal language for scripting, web development, and data science.",
        outcomes: ["Write clean, Pythonic code", "Understand Object-Oriented Programming", "Create automation scripts", "Handle file operations"],
        icon: Terminal,
        roadmap: {
            beginner: ["Variables & Data Types", "Control Flow & Loops", "Functions & Modules", "Error Handling"],
            intermediate: ["Object-Oriented Programming", "File Handling & I/O", "List Comprehensions", "Working with APIs"],
            advanced: ["Decorators & Context Managers", "Multithreading", "Advanced Data Structures", "Unit Testing"]
        }
    },
    java: {
        title: "Java Programming",
        description: "Java is a heavily typed, object-oriented programming language designed to have as few implementation dependencies as possible. It is widely used in enterprise applications.",
        outcomes: ["Master Object-Oriented Design", "Work with Java Collections", "Build robust enterprise software", "Understand memory management"],
        icon: Coffee,
        roadmap: {
            beginner: ["Java Syntax Basics", "Control Structures", "Arrays & Strings", "Basic OOP Concepts"],
            intermediate: ["Advanced OOP", "Exception Handling", "Java Collections", "Generics"],
            advanced: ["Multithreading & Concurrency", "Java Streams & Lambdas", "JVM Architecture", "Spring Boot Basics"]
        }
    },
    sql: {
        title: "SQL & Databases",
        description: "SQL is a domain-specific language used to manage data, especially in a relational database management system. It is particularly useful in handling structured data.",
        outcomes: ["Design efficient schemas", "Write complex joins", "Optimize database performance", "Handle database transactions"],
        icon: Database,
        roadmap: {
            beginner: ["Basic SELECT queries", "Filtering & Sorting Data", "Basic Functions", "Creating Tables"],
            intermediate: ["Complex JOIN operations", "Subqueries & CTEs", "Data Modification", "Index Creation"],
            advanced: ["Window Functions", "Stored Procedures & Triggers", "Query Optimization", "Database Normalization"]
        }
    }
};

const skillImages = {
    frontend: frontendImg,
    backend: backendImg,
    ai: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    "data-analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    ml: "https://images.unsplash.com/photo-1518932945647-7a3c96946bef?auto=format&fit=crop&w=800&q=80",
    figma: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    django: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    python: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    java: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    sql: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80"
};

const SkillOverview = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    const skill = skillsContent[name.toLowerCase()];

    // Find courses related to this skill based on tags or category roughly mapping
    const relatedCourses = courses.filter(course =>
        course.category.toLowerCase().includes(name.toLowerCase()) ||
        course.tags.some(t => t.toLowerCase().includes(name.toLowerCase()) || t.toLowerCase() === name.replace("-", " "))
    );

    if (!skill) {
        return (
            <div className="error-container">
                <h2>Skill not found</h2>
                <button className="btn-secondary" onClick={() => navigate('/')}>Return Home</button>
            </div>
        );
    }

    const Icon = skill.icon;

    const pageVariants = {
        initial: { opacity: 0, x: 20 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: -20 }
    };

    return (
        <motion.div
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
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
                    <div className="category-tag">Skill Overview</div>
                    <h1 className="course-hero-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                        <Icon size={48} className="icon-blue" style={{ marginBottom: 0 }} />
                        {skill.title}
                    </h1>
                    <p className="course-hero-description" style={{ fontSize: '1.15rem' }}>
                        {skill.description}
                    </p>

                    <div className="skill-image-wrapper" style={{ marginTop: '2.5rem' }}>
                        <img
                            src={skillImages[name.toLowerCase()] || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80"}
                            alt={skill.title}
                            style={{
                                width: '100%',
                                height: 'auto',
                                maxHeight: '350px',
                                objectFit: 'cover',
                                borderRadius: '16px',
                                boxShadow: 'var(--shadow-md)'
                            }}
                        />
                    </div>
                </motion.div>

                {skill.roadmap && (
                    <div className="course-hero-roadmap" style={{ position: 'relative', paddingLeft: '2.5rem' }}>
                        <h3 style={{ marginBottom: '2rem' }}>Learning Timeline</h3>

                        <div style={{ position: 'absolute', left: '0', top: '70px', bottom: '20px', width: '4px', background: 'var(--border-color)', borderRadius: '2px' }}></div>

                        {['beginner', 'intermediate', 'advanced'].map((level, i) => (
                            <motion.div
                                key={level}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ delay: 0.3 + (i * 0.2), type: 'spring' }}
                                style={{
                                    background: 'var(--bg-primary)',
                                    padding: '1.5rem',
                                    borderRadius: '12px',
                                    border: '1px solid var(--border-color)',
                                    boxShadow: 'var(--shadow-md)',
                                    marginBottom: i !== 2 ? '2rem' : '0',
                                    position: 'relative'
                                }}
                            >
                                <div style={{ position: 'absolute', left: '-2.5rem', top: '24px', width: '2.5rem', height: '4px', background: 'var(--border-color)' }}></div>

                                <div style={{
                                    position: 'absolute',
                                    left: '-3rem',
                                    top: '16px',
                                    width: '20px',
                                    height: '20px',
                                    borderRadius: '50%',
                                    background: level === 'beginner' ? '#10b981' : level === 'intermediate' ? '#3b82f6' : '#8b5cf6',
                                    border: '4px solid var(--bg-primary)'
                                }}></div>

                                <h4 style={{
                                    color: level === 'beginner' ? '#10b981' : level === 'intermediate' ? '#3b82f6' : '#8b5cf6',
                                    textTransform: 'capitalize',
                                    marginBottom: '1rem',
                                    fontSize: '1.1rem',
                                    marginTop: 0
                                }}>{level} Level</h4>

                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                    {skill.roadmap[level].map((item, idx) => (
                                        <li key={idx} style={{
                                            margin: '0.5rem 0',
                                            display: 'flex',
                                            alignItems: 'center',
                                            gap: '8px',
                                            color: 'var(--text-secondary)',
                                            fontSize: '0.9rem'
                                        }}>
                                            <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--text-secondary)' }}></div>
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>

            <div className="course-body">
                <div className="course-main-info">
                    <h2>Key Competencies</h2>
                    <div className="learning-grid">
                        {skill.outcomes.map((outcome, idx) => (
                            <div key={idx} className="learning-item">
                                <CheckCircle2 size={20} className="check-icon" />
                                <span>{outcome}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            <div className="divider details-divider" />

            <div className="recommendation-wrapper">
                <div className="section-header">
                    <h2>Related Courses</h2>
                    <p>Courses matching {skill.title}</p>
                </div>
                {relatedCourses.length > 0 ? (
                    <div className="courses-grid">
                        {relatedCourses.map((course, idx) => (
                            <CourseCard key={course.id} course={course} index={idx} />
                        ))}
                    </div>
                ) : (
                    <div className="empty-state">
                        <p>No related courses found right now. Check back soon!</p>
                        <button className="btn-primary" onClick={() => navigate('/')}>Browse All</button>
                    </div>
                )}
            </div>
        </motion.div>
    );
};

export default SkillOverview;
