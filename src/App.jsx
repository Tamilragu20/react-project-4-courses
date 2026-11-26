import { useMemo, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import CourseList from './components/CourseList';
import Instructor from './components/Instructor';
import Footer from './components/Footer';
import { courseLevels, coursesData, instructorsData } from './data/coursesData';

function App() {
  const [selectedLevel, setSelectedLevel] = useState('All');
  const [enrolledIds, setEnrolledIds] = useState(['crs-1']);

  const filteredCourses = useMemo(() => {
    if (selectedLevel === 'All') {
      return coursesData;
    }
    return coursesData.filter((course) => course.level === selectedLevel);
  }, [selectedLevel]);

  const handleToggleEnroll = (courseId) => {
    setEnrolledIds((prev) =>
      prev.includes(courseId)
        ? prev.filter((id) => id !== courseId)
        : [...prev, courseId],
    );
  };

  return (
    <div className="academy-app">
      <Navbar enrolledCount={enrolledIds.length} />

      <main className="academy-main">
        <section className="academy-banner" aria-label="Academy Overview">
          <div>
            <span className="banner-eyebrow">Structured Tech Learning</span>
            <h1 className="banner-title">Build Real Engineering Skills Step by Step</h1>
            <p className="banner-copy">
              Hands-on courses led by practicing engineers covering React, algorithms, UI systems, and DevOps workflows.
            </p>
          </div>

          <div className="banner-stats">
            <div className="stat-tile">
              <span className="stat-num">{coursesData.length}</span>
              <span className="stat-label">Active Courses</span>
            </div>
            <div className="stat-tile">
              <span className="stat-num">{instructorsData.length}</span>
              <span className="stat-label">Lead Mentors</span>
            </div>
          </div>
        </section>

        <CourseList
          courses={filteredCourses}
          levels={courseLevels}
          selectedLevel={selectedLevel}
          onSelectLevel={setSelectedLevel}
          enrolledIds={enrolledIds}
          onToggleEnroll={handleToggleEnroll}
        />

        <Instructor instructors={instructorsData} />
      </main>

      <Footer
        totalCourses={coursesData.length}
        enrolledCount={enrolledIds.length}
      />
    </div>
  );
}

export default App;
