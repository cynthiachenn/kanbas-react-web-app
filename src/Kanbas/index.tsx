import 'bootstrap/dist/css/bootstrap.css';
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import "./styles.css"
function Kanbas() {
  return (
    <div className="d-flex"  style={{height: "100%"}}>
      <KanbasNavigation />
      <div className="d-flex flex-column" style={{ flexGrow: 1, width: "100%" }}>

      <Routes>
          <Route path="/" element={<Navigate to="Dashboard" />} />
          <Route path="Account" element={<h1>Account</h1>} />
          <Route path="Dashboard" element={<Dashboard />} />
          <Route path="Courses/:courseId/*" element={<Courses />} />
        </Routes>

      </div>
    </div>
  );
}

  export default Kanbas;