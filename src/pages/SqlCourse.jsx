import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, BookOpen, Database, Target, LayoutDashboard } from 'lucide-react';

const SqlCourse = () => {
    const navigate = useNavigate();

    const pageVariants = {
        initial: { opacity: 0, y: 20 },
        in: { opacity: 1, y: 0 },
        out: { opacity: 0, y: -20 }
    };

    return (
        <motion.div
            className="sql-course-page"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={{ duration: 0.5 }}
        >
            <div className="content-container">
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>

                <header className="sql-header">
                    <Database size={48} className="icon-blue" />
                    <h1>Mastering SQL</h1>
                    <p>Learn the language of databases from scratch</p>
                </header>

                <main className="sql-content-body">
                    <section className="sql-section">
                        <h2><Target size={24} /> What is SQL?</h2>
                        <p>
                            <strong>SQL</strong> stands for Structured Query Language. It is the standard language for dealing with Relational Databases.
                            SQL can be used to insert, search, update, and delete database records.
                        </p>
                    </section>

                    <section className="sql-section">
                        <h2><LayoutDashboard size={24} /> What is a Database?</h2>
                        <p>
                            A database is an organized collection of structured information, or data, typically stored electronically in a computer system.
                            A database is usually controlled by a database management system (DBMS). Together, the data and the DBMS, along with the applications that are associated with them, are referred to as a database system, often shortened to just database.
                        </p>
                    </section>

                    <div className="divider" />

                    <section className="sql-section">
                        <h2>1. The SELECT Statement</h2>
                        <p>The <code>SELECT</code> statement is used to select data from a database. The data returned is stored in a result table, called the result-set.</p>
                        <div className="code-block">
                            <pre><code>
                                SELECT column1, column2, ...{'\n'}
                                FROM table_name;
                            </code></pre>
                        </div>
                    </section>

                    <section className="sql-section">
                        <h2>2. The WHERE Clause</h2>
                        <p>The <code>WHERE</code> clause is used to filter records. It is used to extract only those records that fulfill a specified condition.</p>
                        <div className="code-block">
                            <pre><code>
                                SELECT column1, column2, ...{'\n'}
                                FROM table_name{'\n'}
                                WHERE condition;
                            </code></pre>
                        </div>
                    </section>

                    <section className="sql-section">
                        <h2>3. The ORDER BY Keyword</h2>
                        <p>The <code>ORDER BY</code> keyword is used to sort the result-set in ascending or descending order.</p>
                        <div className="code-block">
                            <pre><code>
                                SELECT column1, column2, ...{'\n'}
                                FROM table_name{'\n'}
                                ORDER BY column1, column2, ... ASC|DESC;
                            </code></pre>
                        </div>
                    </section>

                    <section className="sql-section">
                        <h2>4. INSERT, UPDATE, DELETE</h2>
                        <h4 className="sub-heading">INSERT INTO</h4>
                        <div className="code-block">
                            <pre><code>
                                INSERT INTO table_name (column1, column2, column3, ...){'\n'}
                                VALUES (value1, value2, value3, ...);
                            </code></pre>
                        </div>

                        <h4 className="sub-heading mt-4">UPDATE</h4>
                        <div className="code-block">
                            <pre><code>
                                UPDATE table_name{'\n'}
                                SET column1 = value1, column2 = value2, ...{'\n'}
                                WHERE condition;
                            </code></pre>
                        </div>

                        <h4 className="sub-heading mt-4">DELETE</h4>
                        <div className="code-block">
                            <pre><code>
                                DELETE FROM table_name WHERE condition;
                            </code></pre>
                        </div>
                    </section>

                    <div className="completion-block">
                        <BookOpen size={30} className="icon-green" />
                        <h3>Ready to test your knowledge?</h3>
                        <p>Complete the exercises related to the topics above to ensure you understand the core concepts.</p>
                        <button className="btn-primary mt-3">Start Exercises</button>
                    </div>
                </main>
            </div>
        </motion.div>
    );
};

export default SqlCourse;
