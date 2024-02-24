import 'bootstrap/dist/css/bootstrap.css';
import { Link, useLocation } from "react-router-dom";
import "./index.css";
import { FaTachometerAlt, FaRegUserCircle, FaBook, FaRegCalendarAlt, FaInbox, FaClock, FaTv, FaArrowCircleRight } from "react-icons/fa";
function KanbasNavigation() {
  const links = [
    { label: "Account",   icon: <FaRegUserCircle className="fs-3" style={{color: "gray"}} />  },
    { label: "Dashboard", icon: <FaTachometerAlt className="fs-3" style={{color: "red"}}/>  },
    { label: "Courses",   icon: <FaBook className="fs-3" style={{color: "red"}}/>           },
    { label: "Calendar",  icon: <FaRegCalendarAlt className="fs-3" style={{color: "red"}}/> },
    { label: "Inbox",     icon: <FaInbox className="fs-3" style={{color: "red"}}/> },
    { label: "History",   icon: <FaClock className="fs-3" style={{color: "red"}}/> },
    { label: "Studio",    icon: <FaTv className="fs-3" style={{color: "red"}}/> },
    { label: "Commons",   icon: <FaArrowCircleRight className="fs-3" style={{color: "red"}}/> }
  ];
  const { pathname } = useLocation();
  return (
    <div className="d-none d-md-block">
    <ul className="wd-kanbas-navigation" style={{height: "100%"}}>
    <li><a href="http://northeastern.edu"><img src="/images/neu_icon.png" /></a></li>
      {links.map((link, index) => (
        <li key={index} className={pathname.includes(link.label) ? "wd-active" : ""}>
          <Link to={`/Kanbas/${link.label}`}> {link.icon} {link.label} </Link>
        </li>
      ))}
    </ul>
    </div>
  );
}
export default KanbasNavigation;