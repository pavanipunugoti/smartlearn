import React, { useState } from 'react';
import { motion } from 'framer-motion';

const LoginPanel = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = (e) => {
        e.preventDefault();
        alert('Logged in successfully!');
    };

    return (
        <motion.div
            className="login-panel"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
        >
            <div className="login-panel-header">
                <h2>Sign In to SmartLearn</h2>
                <p>Access your favorite courses</p>
            </div>

            <form className="login-panel-form" onSubmit={handleLogin}>
                <div className="input-group">
                    <label>Email Address</label>
                    <input
                        type="email"
                        placeholder="name@email.com"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                </div>

                <div className="input-group">
                    <label>Password</label>
                    <input
                        type="password"
                        placeholder="Enter password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>

                <motion.button
                    type="submit"
                    className="btn-primary login-submit-btn"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                >
                    Sign In
                </motion.button>
            </form>
        </motion.div>
    );
};

export default LoginPanel;
