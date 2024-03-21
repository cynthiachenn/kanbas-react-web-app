import 'bootstrap/dist/css/bootstrap.css';
import { Navigate, Route, Routes, useParams } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import "./Home/index.css"
import Assignments from './Assignments';
import { useLocation } from "react-router-dom";
import { FaChevronRight, FaGlasses } from "react-icons/fa";
function Courses({ courses }: { courses: any[]; }) {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const { pathname } = useLocation();
  return (
    <div>
      <div className="course-header d-none d-md-block">
        <HiMiniBars3 style={{color:'red', marginRight:"20px"}}/> 
        {course?._id} {course?.name} <FaChevronRight className='fa-xs' style={{color: 'slategrey'}}/> {pathname.split('/').pop()}
        <button className="course-header btn"><FaGlasses/> Student View</button>
        <hr />
      </div>
      <div className="d-flex">
        <CourseNavigation />
            <Routes>
              <Route path="/" element={<Navigate to="Home" />} />
              <Route path="Home" element={<Home />} />
              <Route path="Modules" element={<Modules />} />
              <Route path="Assignments" element={<Assignments/>} />
              <Route path="Assignments/:assignmentId"
                element={<h1>Assignment Editor</h1>} />
              <Route path="Grades" element={<h1>Grades</h1>} />
            </Routes>
          </div>
    </div>
  );
}
export default Courses
