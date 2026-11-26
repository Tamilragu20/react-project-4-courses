import './Navbar.css';

function Navbar({ enrolledCount }) {
  return (
    <header className="academy-navbar">
      <div className="academy-nav-inner">
        <a href="#courses" className="academy-brand">
          <span className="academy-mark">LC</span>
          <span className="academy-name">LearnCraft Academy</span>
        </a>

        <nav className="academy-links" aria-label="Academy Navigation">
          <a href="#courses">Courses</a>
          <a href="#instructors">Instructors</a>
          <span className="enrolled-pill">
            Enrolled: <strong>{enrolledCount}</strong>
          </span>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
