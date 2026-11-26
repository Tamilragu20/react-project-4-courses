import './Instructor.css';

function InstructorCard({ instructor }) {
  return (
    <article className="instructor-card">
      <div className="instructor-top">
        <img
          src={instructor.avatar}
          alt={instructor.name}
          className="instructor-avatar"
        />
        <div>
          <h3 className="instructor-name">{instructor.name}</h3>
          <p className="instructor-role">{instructor.role}</p>
          <span className="instructor-specialty">{instructor.specialty}</span>
        </div>
      </div>

      <p className="instructor-bio">{instructor.bio}</p>

      <div className="instructor-metrics">
        <span><strong>{instructor.students}</strong> Learners</span>
        <span><strong>{instructor.coursesCount}</strong> Courses</span>
      </div>
    </article>
  );
}

function Instructor({ instructors }) {
  return (
    <section id="instructors" className="instructors-section">
      <div className="instructors-header">
        <span className="section-tag">Expert Mentors</span>
        <h2 className="section-heading">Meet Your Instructors</h2>
      </div>

      <div className="instructors-grid">
        {instructors.map((person) => (
          <InstructorCard key={person.id} instructor={person} />
        ))}
      </div>
    </section>
  );
}

export default Instructor;
