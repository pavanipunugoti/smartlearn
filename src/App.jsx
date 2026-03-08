import React from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Home from './pages/Home';
import CourseDetails from './pages/CourseDetails';
import Login from './pages/Login';
import SqlCourse from './pages/SqlCourse';
import PaidCourses from './pages/PaidCourses';
import SkillOverview from './pages/SkillOverview';
import Practice from './pages/Practice';
import Jobs from './pages/Jobs';
import JobDetails from './pages/JobDetails';
import Navbar from './components/Navbar';

const AnimatedRoutes = () => {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes location={location} key={location.pathname}>
        <Route path="/" element={<Home />} />
        <Route path="/course/:id" element={<CourseDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/courses/sql" element={<SqlCourse />} />
        <Route path="/paid-courses" element={<PaidCourses />} />
        <Route path="/skill/:name" element={<SkillOverview />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/jobs" element={<Jobs />} />
        <Route path="/jobs/:id" element={<JobDetails />} />
      </Routes>
    </AnimatePresence>
  );
};

const App = () => {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <AnimatedRoutes />
      </div>
    </Router>
  );
};

export default App;
