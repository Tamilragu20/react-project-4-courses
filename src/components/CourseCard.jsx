import './CourseCard.css';

function CourseCard({ course, isEnrolled, onToggleEnroll }) {
  const { title, instructor, duration, price, level, category, lessons, description, accent } =
    course;

  return (
    <article className="course-card">
      <div className="course-accent-bar" style={{ backgroundColor: accent }} />
      <div className="course-body">
        <div className="course-badges">
          <span className="course-category">{category}</span>
          <span className="course-level">{level}</span>
        </div>

        <h3 className="course-title">{title}</h3>
        <p className="course-desc">{description}</p>

        <div className="course-meta-grid">
          <div>
            <span className="meta-label">Instructor</span>
            <strong className="meta-val">{instructor}</strong>
          </div>
          <div>
            <span className="meta-label">Duration</span>
            <strong className="meta-val">{duration}</strong>
          </div>
          <div>
            <span className="meta-label">Curriculum</span>
            <strong className="meta-val">{lessons} Lessons</strong>
          </div>
        </div>

        <div className="course-footer">
          <span className="course-price">${price}</span>
          <button
            type="button"
            className={`enroll-btn ${isEnrolled ? 'is-enrolled' : ''}`}
            onClick={() => onToggleEnroll(course.id)}
          >
            {isEnrolled ? 'Enrolled' : 'Enroll Now'}
          </button>
        </div>
      </div>
    </article>
  );
}

export default CourseCard;
