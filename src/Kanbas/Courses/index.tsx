import { courses } from "../../Kanbas/Database";
import { Navigate, Route, Routes, useParams, useLocation } from "react-router-dom";
import { HiMiniBars3 } from "react-icons/hi2";
import CourseNavigation from "./Navigation";
import Modules from "./Modules";
import Home from "./Home";
import Assignments from "./Assignments";


function Courses() {
  const { courseId } = useParams();
  const course = courses.find((course) => course._id === courseId);
  const location = useLocation();
  const paths = location.pathname.split('/').filter(x => x);

  return (
    <div>
      <h1 style={{ fontSize: "25px" }}><HiMiniBars3 style={{ color: "red", marginLeft: "20px"}}/> 
      <span style={{ color: "red", marginLeft: "20px"}}>{course?.name}</span> 
          {' > '}
          {paths[paths.length - 1]} </h1>
      <hr style={{ marginLeft: "20px", marginRight: "20px" }}/>
      <CourseNavigation />
      <div>
        <div
          className="overflow-y-scroll position-fixed bottom-0 end-0"
          style={{ left: "320px", top: "50px" }} >
          <Routes>
            <Route path="/" element={<Navigate to="Home" />} />
            <Route path="Home" element={<Home/>} />
            <Route path="Modules" element={<Modules/>} />
            <Route path="Piazza" element={<h1>Piazza</h1>} />
            <Route path="Assignments" element={<Assignments/>} />
            <Route path="Assignments/:assignmentId" element={<h1>Assignment Editor</h1>} />
            <Route path="Grades" element={<h1>Grades</h1>} />
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default Courses;