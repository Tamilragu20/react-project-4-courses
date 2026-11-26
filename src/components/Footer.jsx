import './Footer.css';

const CURRENT_YEAR = new Date().getFullYear();

function Footer({ totalCourses, enrolledCount }) {
  return (
    <footer className="academy-footer">
      <div className="academy-footer-inner">
        <div>
          <strong className="academy-footer-title">LearnCraft Academy</strong>
          <p className="academy-footer-copy">
            {totalCourses} industry-focused courses available · {enrolledCount} currently enrolled.
          </p>
        </div>
        <span className="academy-footer-year">
          &copy; {CURRENT_YEAR} LearnCraft Academy.
        </span>
      </div>
    </footer>
  );
}

export default Footer;
