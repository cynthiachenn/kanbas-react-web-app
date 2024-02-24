import 'bootstrap/dist/css/bootstrap.css';
import { Link, useLocation } from "react-router-dom";
import "./index.css"; 
function CourseNavigation() {
  const links = ["Home", "Modules", "Piazza", "Zoom", "Assignments", "Quizzes", "Grades", "People"];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-sm-block">
    <ul className="wd-navigation">
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link) ? "wd-active" : ""}>
          <Link to={link}>{link}</Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default CourseNavigation;