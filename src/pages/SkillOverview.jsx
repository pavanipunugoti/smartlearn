import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, CheckCircle2, Globe, Database, Cpu, BrainCircuit, Layout, BookOpen, Terminal, Coffee, Palette, FileJson, Server, GraduationCap, ChevronDown } from 'lucide-react';
import { courses } from '../data/courses';
import CourseCard from '../components/CourseCard';
import frontendImg from '../assets/frontend.jpeg';
import backendImg from '../assets/backend.jpeg';
import htmlRoadmapImg from '../assets/html_roadmap.png';
import cssRoadmapImg from '../assets/css_roadmap.png';
import jsRoadmapImg from '../assets/js_roadmap.png';
import nodejsRoadmapImg from '../assets/nodejs_roadmap.png';

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
    },
    html: {
        title: "HTML Architecture",
        description: "HTML is the standard markup language for documents designed to be displayed in a web browser. It defines the meaning and structure of web content.",
        outcomes: ["Build semantic document structures", "Implement SEO best practices", "Embed media and SVGs", "Understand web accessibility"],
        icon: Layout,
        roadmap: {
            beginner: ["HTML Syntax & Tags", "Text Formatting", "Links & Images", "Lists & Tables"],
            intermediate: ["Semantic HTML5", "Forms & Inputs", "Media Elements", "Iframes"],
            advanced: ["Web Accessibility (a11y)", "SEO Basics", "SVG Graphics", "Microdata & SEO"]
        }
    },
    css: {
        title: "CSS & Styling",
        description: "Cascading Style Sheets (CSS) is a stylesheet language used to describe the presentation of a document written in HTML. It controls layout, colors, and typography.",
        outcomes: ["Create responsive layouts", "Master Flexbox & Grid", "Build complex animations", "Write maintainable SCSS"],
        icon: Palette,
        roadmap: {
            beginner: ["CSS Selectors & Specificity", "Box Model", "Colors & Typography", "Basic Positioning"],
            intermediate: ["Flexbox Fundamentals", "CSS Grid Layout", "Responsive Media Queries", "Transforms & Transitions"],
            advanced: ["CSS Animations & Keyframes", "SASS/SCSS Architecture", "CSS Variables", "Modern Frameworks (Tailwind)"]
        }
    },
    javascript: {
        title: "JavaScript Programming",
        description: "JavaScript is the programming language of the Web. It is used to add interactivity, complex logic, and dynamic content to web applications.",
        outcomes: ["Master modern ES6+ syntax", "Manipulate the DOM", "Handle asynchronous operations", "Understand closures & scopes"],
        icon: FileJson,
        roadmap: {
            beginner: ["JS Variables & Data Types", "Functions & Scope", "Arrays & Objects", "DOM Manipulation"],
            intermediate: ["ES6+ Features", "Promises & Async/Await", "Event Loop & Callbacks", "Fetch API & AJAX"],
            advanced: ["Closures & Prototypes", "Design Patterns", "Modules & Tooling (Vite/Webpack)", "Testing (Jest)"]
        }
    },
    nodejs: {
        title: "Node.js Backend",
        description: "Node.js is an open-source, cross-platform JavaScript runtime environment that executes JavaScript code outside a web browser, perfect for scalable servers.",
        outcomes: ["Build REST APIs with Express", "Manage asynchronous I/O", "Perform database integration", "Implement authentication"],
        icon: Server,
        roadmap: {
            beginner: ["Node.js Basics & NPM", "Core Modules (fs, path)", "Setting up Express.js", "Basic Routing"],
            intermediate: ["Middleware & Error Handling", "REST API Architecture", "MongoDB & Mongoose", "JWT Authentication"],
            advanced: ["WebSockets / Socket.io", "Microservices Concepts", "Performance Profiling", "Deployment & CI/CD"]
        }
    }
};

const skillDisplayImages = {
    frontend: frontendImg,
    backend: backendImg,
    ai: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=800&q=80",
    "data-analytics": "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
    ml: "https://images.unsplash.com/photo-1518932945647-7a3c96946bef?auto=format&fit=crop&w=800&q=80",
    figma: "https://images.unsplash.com/photo-1611162617474-5b21e879e113?auto=format&fit=crop&w=800&q=80",
    django: "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?auto=format&fit=crop&w=800&q=80",
    python: "https://images.unsplash.com/photo-1515879218367-8466d910aaa4?auto=format&fit=crop&w=800&q=80",
    java: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=800&q=80",
    sql: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=800&q=80",
    html: htmlRoadmapImg,
    css: cssRoadmapImg,
    javascript: jsRoadmapImg,
    nodejs: nodejsRoadmapImg,
};

const SkillOverview = () => {
    const { name } = useParams();
    const navigate = useNavigate();

    let normalizedName = name.toLowerCase();
    if (normalizedName === 'node.js') normalizedName = 'nodejs';
    const skill = skillsContent[normalizedName];

    // Find courses related to this skill
    const relatedCourses = courses.filter(course => {
        const n = normalizedName;
        const original = name.toLowerCase();
        return course.tags.some(t => {
            const tag = t.toLowerCase();
            if (tag === n || tag === original) return true;
            if (n === 'nodejs' && (tag === 'node.js' || tag === 'nodejs' || tag === 'express')) return true;
            if (n === 'html' && (tag === 'html5' || tag === 'html')) return true;
            if (n === 'css' && (tag === 'css3' || tag === 'sass' || tag === 'scss' || tag === 'css')) return true;
            if (n === 'javascript' && (tag === 'javascript' || tag === 'js' || tag === 'es6')) return true;
            if (n === 'frontend' && (tag === 'frontend' || tag === 'react' || tag === 'nextjs')) return true;
            if (n === 'backend' && (tag === 'backend' || tag === 'api' || tag === 'deployment')) return true;
            if (n === 'ai' && (tag === 'ai' || tag === 'deep learning' || tag === 'nlp' || tag === 'llm')) return true;
            if (n === 'ml' && (tag === 'machine learning' || tag === 'data science')) return true;
            if (n === 'data-analytics' && (tag === 'data analysis' || tag === 'data science' || tag === 'sql')) return true;
            if (n === 'python' && tag === 'python') return true;
            if (n === 'django' && (tag === 'django' || tag === 'python')) return true;
            if (n === 'java' && tag === 'java') return true;
            if (n === 'sql' && (tag === 'sql' || tag === 'mysql' || tag === 'database')) return true;
            if (n === 'figma' && (tag === 'figma' || tag === 'design' || tag === 'ui' || tag === 'ux')) return true;
            return false;
        }) || course.category.toLowerCase().includes(original);
    });

    if (!skill) {
        return (
            <div className="error-container">
                <h2>Skill not found</h2>
                <button className="btn-secondary" onClick={() => navigate('/')}>Return Home</button>
            </div>
        );
    }

    const Icon = skill.icon;
    const displayImage = skillDisplayImages[normalizedName] || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=800&q=80";

    const scrollToCourses = () => {
        document.getElementById('related-courses').scrollIntoView({ behavior: 'smooth' });
    };

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
            className="skill-page-wrapper"
        >
            {/* ===== FIRST SCREEN: Roadmap with Image (fills viewport) ===== */}
            <section className="skill-roadmap-screen">
                <div className="skill-roadmap-inner">
                    <div className="details-header-wrapper">
                        <button className="back-btn" onClick={() => navigate(-1)}>
                            <ArrowLeft size={20} />
                            <span>Back</span>
                        </button>
                    </div>

                    {/* Hero Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2 }}
                        className="skill-hero-header"
                    >
                        <div className="category-tag">Skill Overview</div>
                        <h1 className="course-hero-title" style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
                            <Icon size={42} className="icon-blue" style={{ marginBottom: 0 }} />
                            {skill.title}
                        </h1>
                        <p className="course-hero-description" style={{ fontSize: '1.1rem', marginBottom: 0 }}>
                            {skill.description}
                        </p>
                    </motion.div>

                    {/* Side-by-side: Left = Image, Right = Timeline */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.35 }}
                        className="skill-split-layout"
                    >
                        {/* LEFT: Image */}
                        <div className="skill-split-left">
                            <div className="roadmap-img-wrapper">
                                <img
                                    src={displayImage}
                                    alt={`${skill.title} Learning Roadmap`}
                                    className="roadmap-infographic-img"
                                />
                            </div>
                        </div>

                        {/* RIGHT: Learning Timeline */}
                        <div className="skill-split-right">
                            {skill.roadmap && (
                                <div className="skill-timeline-card">
                                    <h3 style={{ marginBottom: '1.2rem', fontSize: '1.2rem', color: 'var(--text-primary)' }}>Learning Timeline</h3>
                                    <div style={{ position: 'relative', paddingLeft: '2rem' }}>
                                        <div style={{ position: 'absolute', left: '0', top: '8px', bottom: '8px', width: '3px', background: 'linear-gradient(to bottom, #10b981, #3b82f6, #8b5cf6)', borderRadius: '2px' }}></div>
                                        
                                        {['beginner', 'intermediate', 'advanced'].map((level, i) => (
                                            <motion.div
                                                key={level}
                                                initial={{ opacity: 0, x: 15 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                transition={{ delay: 0.4 + (i * 0.12) }}
                                                className="timeline-level-card"
                                            >
                                                <div className="timeline-dot" style={{
                                                    background: level === 'beginner' ? '#10b981' : level === 'intermediate' ? '#3b82f6' : '#8b5cf6',
                                                }}></div>
                                                <div className="timeline-connector"></div>
                                                <h4 style={{
                                                    color: level === 'beginner' ? '#10b981' : level === 'intermediate' ? '#3b82f6' : '#8b5cf6',
                                                    textTransform: 'capitalize',
                                                    marginBottom: '0.6rem',
                                                    fontSize: '0.95rem',
                                                    marginTop: 0
                                                }}>{level} Level</h4>
                                                <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
                                                    {skill.roadmap[level].map((item, idx) => (
                                                        <li key={idx} style={{ margin: '0.35rem 0', display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--text-secondary)', fontSize: '0.85rem' }}>
                                                            <div style={{ width: '5px', height: '5px', borderRadius: '50%', background: 'var(--text-secondary)', flexShrink: 0 }}></div>
                                                            {item}
                                                        </li>
                                                    ))}
                                                </ul>
                                            </motion.div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </motion.div>

                    {/* Scroll Down Indicator */}
                    <motion.div
                        className="scroll-indicator"
                        onClick={scrollToCourses}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.8 }}
                    >
                        <span>Swipe down for related courses</span>
                        <motion.div
                            animate={{ y: [0, 8, 0] }}
                            transition={{ repeat: Infinity, duration: 1.5 }}
                        >
                            <ChevronDown size={24} />
                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* ===== SECOND SCREEN: Related Courses (appears on scroll) ===== */}
            <section id="related-courses" className="skill-courses-screen">
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.6 }}
                    className="skill-courses-inner"
                >
                    <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '0.5rem' }}>
                        <GraduationCap size={32} style={{ color: 'var(--accent-primary)' }} />
                        <h2 style={{ margin: 0, fontSize: '2rem' }}>Related Courses</h2>
                    </div>
                    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem' }}>
                        Recommended courses to master {skill.title}
                    </p>
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
                </motion.div>
            </section>
        </motion.div>
    );
};

export default SkillOverview;
