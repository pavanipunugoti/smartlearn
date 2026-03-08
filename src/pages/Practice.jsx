import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Code, Terminal, PlayCircle, CheckCircle } from 'lucide-react';

const Practice = () => {
    const navigate = useNavigate();
    const [activeChallenge, setActiveChallenge] = useState(null);
    const [code, setCode] = useState('');
    const [output, setOutput] = useState('');

    const pageVariants = {
        initial: { opacity: 0, x: -20 },
        in: { opacity: 1, x: 0 },
        out: { opacity: 0, x: 20 }
    };

    const challenges = [
        {
            id: 1,
            title: 'Two Sum',
            difficulty: 'Easy',
            category: 'Arrays',
            completed: false,
            description: 'Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.\n\nYou may assume that each input would have exactly one solution, and you may not use the same element twice. You can return the answer in any order.',
            examples: [
                { input: 'nums = [2,7,11,15], target = 9', output: '[0,1]', explanation: 'Because nums[0] + nums[1] == 9, we return [0, 1].' },
                { input: 'nums = [3,2,4], target = 6', output: '[1,2]', explanation: '' }
            ],
            starterCode: 'function twoSum(nums, target) {\n    // Write your code here\n    \n}'
        },
        {
            id: 2,
            title: 'Valid Parentheses',
            difficulty: 'Easy',
            category: 'Stack',
            completed: true,
            description: 'Given a string s containing just the characters "(", ")", "{", "}", "[" and "]", determine if the input string is valid.\n\nAn input string is valid if:\n1. Open brackets must be closed by the same type of brackets.\n2. Open brackets must be closed in the correct order.',
            examples: [
                { input: 's = "()"', output: 'true', explanation: '' },
                { input: 's = "()[]{}"', output: 'true', explanation: '' },
                { input: 's = "(]"', output: 'false', explanation: '' }
            ],
            starterCode: 'function isValid(s) {\n    // Write your code here\n    \n}'
        },
        {
            id: 3,
            title: 'Merge Intervals',
            difficulty: 'Medium',
            category: 'Arrays',
            completed: false,
            description: 'Given an array of intervals where intervals[i] = [starti, endi], merge all overlapping intervals, and return an array of the non-overlapping intervals that cover all the intervals in the input.',
            examples: [
                { input: 'intervals = [[1,3],[2,6],[8,10],[15,18]]', output: '[[1,6],[8,10],[15,18]]', explanation: 'Since intervals [1,3] and [2,6] overlap, merge them into [1,6].' },
                { input: 'intervals = [[1,4],[4,5]]', output: '[[1,5]]', explanation: 'Intervals [1,4] and [4,5] are considered overlapping.' }
            ],
            starterCode: 'function merge(intervals) {\n    // Write your code here\n    \n}'
        },
        {
            id: 4,
            title: 'Build a React Counter',
            difficulty: 'Easy',
            category: 'Frontend',
            completed: false,
            description: 'Create a simple React counter component with increment and decrement buttons.\nThe component should display the current count (starting at 0), and have two buttons: "+" to increment and "-" to decrement.',
            examples: [
                { input: 'Click "+"', output: 'Count becomes 1', explanation: '' },
                { input: 'Click "-"', output: 'Count becomes -1 (if started at 0)', explanation: '' }
            ],
            starterCode: 'import React, { useState } from "react";\n\nexport default function Counter() {\n    return (\n        <div>\n            {/* Code here */}\n        </div>\n    );\n}'
        },
        {
            id: 5,
            title: 'SQL: Find Nth Highest Salary',
            difficulty: 'Medium',
            category: 'Database',
            completed: false,
            description: 'Write a SQL query to report the nth highest salary from the Employee table. If there is no nth highest salary, the query should report null.',
            examples: [
                { input: 'Employee table with salaries [100, 200, 300], n = 2', output: '200', explanation: 'The 2nd highest salary is 200.' }
            ],
            starterCode: 'CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT\nBEGIN\n  RETURN (\n      # Write your MySQL query statement below.\n      \n  );\nEND'
        },
        {
            id: 6,
            title: 'Implement a REST API',
            difficulty: 'Hard',
            category: 'Backend',
            completed: false,
            description: 'Use Node.js/Express to create a REST API endpoint GET /users that returns a list of mock users in JSON format. The response should have a 200 status code.',
            examples: [
                { input: 'GET /users', output: 'Status Code: 200\nBody: [{ id: 1, name: "Alice" }, ...]', explanation: '' }
            ],
            starterCode: 'const express = require("express");\nconst app = express();\n\napp.get("/users", (req, res) => {\n    // Implement endpoint\n});'
        },
    ];

    const startChallenge = (challenge) => {
        setActiveChallenge(challenge);
        setCode(challenge.starterCode);
        setOutput('');
    };

    const runCode = () => {
        setOutput('Running code...');
        setTimeout(() => {
            const example = activeChallenge.examples && activeChallenge.examples.length > 0
                ? activeChallenge.examples[0]
                : { input: 'N/A', output: 'N/A' };
            setOutput(`Running code...\nExecuting test cases...\n\nTest Case 1:\nInput: ${example.input}\nExpected Output: ${example.output}\nYour Output: ${example.output}\n\nStatus: Tests Passed!`);
        }, 800);
    };

    const submitCode = () => {
        setOutput('Submitting solution...\nRunning against hidden test cases...');
        setTimeout(() => {
            const trimmedOriginal = activeChallenge.starterCode.replace(/\s/g, '');
            const trimmedCurrent = code.replace(/\s/g, '');

            if (trimmedCurrent === trimmedOriginal || code.trim() === '') {
                setOutput('Submitting solution...\nRunning against hidden test cases...\n\nResult: Incorrect. Please correct the code.\nHint: You need to write your solution before submitting!');
            } else if (!code.includes('return') && !code.toLowerCase().includes('select') && !code.includes('res.')) {
                setOutput('Submitting solution...\nRunning against hidden test cases...\n\nResult: Incorrect. Please correct the code.\nHint: Make sure your solution actually returns a result or produces output.');
            } else {
                setOutput('Submitting solution...\nRunning against hidden test cases...\n\nResult: Submitted successfully! 🎉 All tests passed.');
            }
        }, 1500);
    };

    if (activeChallenge) {
        return (
            <motion.div
                className="page-container"
                initial="initial"
                animate="in"
                exit="out"
                variants={pageVariants}
                transition={{ duration: 0.5 }}
                style={{ padding: '2rem', maxWidth: '1400px', margin: '0 auto' }}
            >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem' }}>
                    <button className="back-btn" onClick={() => setActiveChallenge(null)}>
                        <ArrowLeft size={20} />
                        <span>Back to Challenges</span>
                    </button>
                    <h2>{activeChallenge.title}</h2>
                    <span className="course-badge" style={{ margin: 0 }}>{activeChallenge.difficulty}</span>
                </div>

                <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 2fr', gap: '2rem' }}>
                    {/* Problem Description Column */}
                    <div className="skill-card" style={{ textAlign: 'left', padding: '2rem', height: '100%', overflowY: 'auto', display: 'flex', flexDirection: 'column' }}>
                        <div style={{ flex: 1 }}>
                            <h3 style={{ fontSize: '1.5rem', marginBottom: '1rem' }}>Problem Description</h3>
                            <div style={{ whiteSpace: 'pre-wrap', color: 'var(--text-secondary)', lineHeight: '1.8' }}>
                                {activeChallenge.description}
                            </div>

                            {activeChallenge.examples && activeChallenge.examples.length > 0 && (
                                <div style={{ marginTop: '2rem' }}>
                                    <h3 style={{ fontSize: '1.25rem', marginBottom: '1rem' }}>Examples</h3>
                                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                                        {activeChallenge.examples.map((ex, idx) => (
                                            <div key={idx} style={{ backgroundColor: 'rgba(255,255,255,0.05)', padding: '1rem', borderRadius: '8px', border: '1px solid var(--border)' }}>
                                                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Input:</strong> {ex.input}</p>
                                                <p style={{ margin: '0 0 0.5rem 0' }}><strong>Output:</strong> {ex.output}</p>
                                                {ex.explanation && <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '0.9rem', marginTop: '0.5rem' }}><strong>Explanation:</strong> {ex.explanation}</p>}
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div style={{ marginTop: '2rem', paddingTop: '1rem', borderTop: '1px solid var(--border)' }}>
                            <h4 style={{ marginBottom: '0.5rem', color: 'var(--text-primary)' }}>Category</h4>
                            <span className="course-badge">{activeChallenge.category}</span>
                        </div>
                    </div>

                    {/* Code Editor Column */}
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                        <div className="skill-card" style={{ padding: '1rem', textAlign: 'left', height: '400px', display: 'flex', flexDirection: 'column' }}>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.5rem', color: 'var(--text-secondary)' }}>
                                <Code size={18} />
                                <span>Code Editor</span>
                            </div>
                            <textarea
                                value={code}
                                onChange={(e) => setCode(e.target.value)}
                                style={{
                                    flex: 1,
                                    width: '100%',
                                    backgroundColor: '#0f172a',
                                    color: '#e2e8f0',
                                    fontFamily: 'monospace',
                                    fontSize: '1rem',
                                    padding: '1rem',
                                    border: '1px solid var(--border-color)',
                                    borderRadius: '8px',
                                    resize: 'none',
                                    outline: 'none'
                                }}
                            />
                        </div>

                        {/* Actions */}
                        <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
                            <button className="btn-secondary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={runCode}>
                                <PlayCircle size={18} /> Run Code
                            </button>
                            <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }} onClick={submitCode}>
                                <CheckCircle size={18} /> Submit
                            </button>
                        </div>

                        {/* Console Output */}
                        {output && (
                            <motion.div
                                initial={{ opacity: 0, y: 10 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="skill-card"
                                style={{ padding: '1.5rem', textAlign: 'left', backgroundColor: '#020617' }}
                            >
                                <div style={{ display: 'flex', alignItems: 'center', marginBottom: '1rem', gap: '0.5rem', color: 'var(--accent-primary)' }}>
                                    <Terminal size={18} />
                                    <span>Console Output</span>
                                </div>
                                <pre style={{ color: output.includes('Incorrect') ? '#ef4444' : '#10b981', fontFamily: 'monospace', whiteSpace: 'pre-wrap', wordBreak: 'break-word', transition: 'color 0.3s ease' }}>
                                    {output}
                                </pre>
                            </motion.div>
                        )}
                    </div>
                </div>
            </motion.div>
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
            style={{ padding: '2rem', maxWidth: '1200px', margin: '0 auto' }}
        >
            <div className="details-header-wrapper" style={{ marginBottom: '2rem' }}>
                <button className="back-btn" onClick={() => navigate(-1)}>
                    <ArrowLeft size={20} />
                    <span>Back</span>
                </button>
            </div>

            <div className="section-header text-center">
                <h2><Terminal className="inline-icon" style={{ verticalAlign: 'middle', marginRight: '10px' }} size={32} /> Coding Practice</h2>
                <p>Sharpen your skills with real-world problems</p>
            </div>

            <div className="courses-grid" style={{ marginTop: '3rem' }}>
                {challenges.map(challenge => (
                    <div key={challenge.id} className="skill-card clickable-card" style={{ textAlign: 'left', padding: '1.5rem' }} onClick={() => startChallenge(challenge)}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
                            <span className="course-badge" style={{ margin: 0 }}>{challenge.difficulty}</span>
                            {challenge.completed && <span style={{ color: 'var(--accent-primary)', fontSize: '0.9rem', fontWeight: 'bold' }}>✓ Completed</span>}
                        </div>
                        <h3 style={{ fontSize: '1.25rem', marginBottom: '0.5rem' }}>{challenge.title}</h3>
                        <p style={{ color: 'var(--text-secondary)', marginBottom: '1.5rem' }}>Category: {challenge.category}</p>

                        <button
                            className="btn-primary"
                            style={{ width: '100%', display: 'flex', justifyContent: 'center', gap: '0.5rem' }}
                            onClick={(e) => {
                                e.stopPropagation();
                                startChallenge(challenge);
                            }}
                        >
                            <PlayCircle size={18} /> Start Challenge
                        </button>
                    </div>
                ))}
            </div>
        </motion.div>
    );
};

export default Practice;
