import 'bootstrap/dist/css/bootstrap.css';
import KanbasNavigation from "./Navigation";
import Dashboard from "./Dashboard";
import { Routes, Route, Navigate } from "react-router-dom";
import Courses from "./Courses";
import "./styles.css"
import { useState } from 'react';
import { courses as database_courses } from "./Database"
import store from "./store";
import { Provider } from "react-redux";
function Kanbas() {
  const [courses, setCourses] = useState(database_courses);
  const [course, setCourse] = useState({
    _id: "0", name: "New Course", number: "New Number",
    startDate: "2023-09-10", endDate: "2023-12-15",
    image: "blue.jpg"
  });
  const addNewCourse = () => {
    const newCourse = {
      ...course,
      _id: new Date().getTime().toString()
    };
    setCourses([...courses, { ...course, ...newCourse }]);
  };
  const deleteCourse = (courseId: string) => {
    setCourses(courses.filter((course) => course._id !== courseId));
  };
  const updateCourse = () => {
    setCourses(
      courses.map((c) => {
        if (c._id === course._id) {
          return course;
        } else {
          return c;
        }
      })
    );
  };



  return (
    <Provider store={store}>
      <div className="d-flex" style={{ height: "100%" }}>
        <KanbasNavigation />
        <div className="d-flex flex-column" style={{ flexGrow: 1, width: "100%" }}>

          <Routes>
            <Route path="/" element={<Navigate to="Dashboard" />} />
            <Route path="Account" element={<h1>Account</h1>} />
            <Route path="Dashboard" element={<Dashboard
              courses={courses}
              course={course}
              setCourse={setCourse}
              addNewCourse={addNewCourse}
              deleteCourse={deleteCourse}
              updateCourse={updateCourse} />
            } />
            <Route path="Courses/:courseId/*" element={
              <Courses courses={courses} />} />

          </Routes>

        </div>
      </div>
    </Provider>
  );
}

export default Kanbas;