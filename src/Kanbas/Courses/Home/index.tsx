import ModuleList from "../Modules/List";
import 'bootstrap/dist/css/bootstrap.css';
import "./index.css";
import { FaCaretDown, FaCheck, FaEllipsisV, FaBan, FaFileImport, FaSignOutAlt, FaBullseye, FaChartBar, FaBullhorn, FaBell, FaTimes, FaCalendar } from "react-icons/fa";
import ModalNav from "../ModalNav";
import { courses } from "../../Database";
import { useParams } from "react-router";
import { assignments } from "../../Database";

function Home() {
  const { courseId } = useParams();
  const course = courses.find(
    (course) => course._id === courseId);
  const { asgnId } = useParams();
  const asgn = assignments.find((asgn) => asgn.course === courseId)
  return (
    <>
      <div className="flex-fill">
        <ModalNav />
        <div className="buttons-collection">
          <button>Collapse All</button>
          <button>View Progress</button>
          <button><FaCheck style={{ color: "green" }} /> Publish All <FaCaretDown /></button>
          <button id="mod-btn">+ Module</button>
          <button><FaEllipsisV /></button>
          <hr />
        </div>
        <ModuleList />
      </div>
      <div className="flex-grow-0 me-2 d-none d-lg-block" style={{ width: "250px" }}>
        <h3>Status</h3>
        <div className="buttons-collection" style={{ textAlign: "left" }}>
          <button style={{ width: "121px", marginRight: "0px" }} ><FaBan /> Unpublish</button>
          <button style={{ width: "120px", margin: "0px", backgroundColor: "#7fba8e", color: "white" }}><FaCheck /> Publish</button>
        </div>
        <div className="buttons-collection" style={{ textAlign: "left" }}>
          <button className="course-btn"><FaFileImport /> Import Existing Content</button><br />
          <button className="course-btn"><FaSignOutAlt /> Import From Commons</button><br />
          <button className="course-btn"><FaBullseye /> Choose Home Page</button><br />
          <button className="course-btn"><FaChartBar /> View Course Stream</button><br />
          <button className="course-btn"><FaBullhorn /> New Announcement</button><br />
          <button className="course-btn"><FaChartBar /> New Analytics</button><br />
          <button className="course-btn"><FaBell /> View Course Notifications</button>
        </div>
        <div className="course-status-text">
          <b className="course-status-header">To Do</b>
          <hr />
          <a href="#">Grade {asgn?.title}</a><FaTimes style={{ color: "slategray", marginLeft: "20px" }} /><br />
          <p>100 points • {asgn?.due}</p>
        </div>
        <div className="course-status-text">
          <b className="course-status-header">Coming Up</b>
          <hr />
          <a href="#"><FaCalendar /> Lecture 1</a><br />
          <p>{course?._id}<br />Feb 7 at 6:00 PM</p>
          <a href="#"><FaCalendar /> Lecture 2</a><br />
          <p>{course?._id}<br />Feb 14 at 6:00 PM</p>
        </div>
      </div>
    </>
  );
}
export default Home;