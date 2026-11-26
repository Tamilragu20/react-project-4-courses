import CourseCard from './CourseCard';
import './CourseList.css';

function CourseList({
  courses,
  levels,
  selectedLevel,
  onSelectLevel,
  enrolledIds,
  onToggleEnroll,
}) {
  return (
    <section id="courses" className="courses-section">
      <div className="courses-header">
        <div>
          <span className="section-tag">Course Catalog</span>
          <h2 className="section-heading">Explore Learning Tracks</h2>
        </div>

        <div className="level-tabs" role="group" aria-label="Filter courses by level">
          {levels.map((level) => (
            <button
              key={level}
              type="button"
              className={`level-tab ${selectedLevel === level ? 'is-active' : ''}`}
              onClick={() => onSelectLevel(level)}
            >
              {level}
            </button>
          ))}
        </div>
      </div>

      <div className="courses-grid">
        {courses.map((course) => (
          <CourseCard
            key={course.id}
            course={course}
            isEnrolled={enrolledIds.includes(course.id)}
            onToggleEnroll={onToggleEnroll}
          />
        ))}
      </div>
    </section>
  );
}

export default CourseList;
