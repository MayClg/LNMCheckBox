import React from "react";
import CategorySelect from "./pages/categoryselect/categoryselect";
import StudentLogin from "./pages/studentlogin/studentlogin";
import FacultyLogin from "./pages/facultylogin/facultylogin";
import DeanLogin from "./pages/deanlogin/deanlogin";
import { useSelector } from "react-redux";
import { USERTYPE } from "./features/user/userSlice";
import StudentSignup from "./pages/studentsignup/studentsignup";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Dashboard from "./pages/dashboard/dashboard";

function App() {
  const type = useSelector((state) => state.user.usertype);
  const log = useSelector((state) => state.user.loggedin);
  const login = () => {
    if (type === USERTYPE.NULL) {
      return <CategorySelect />;
    } else if (type === USERTYPE.STUDENT) {
      return <StudentLogin />;
    } else if (type === USERTYPE.FACULTY) {
      return <FacultyLogin />;
    } else if (type === USERTYPE.DEAN) {
      return <DeanLogin />;
    } else {
      return <div>hello</div>;
    }
  };
  return (
    // <BrowserRouter>
    //   <Routes>
    //     <Route
    //       path="/"
    //       element={
    //         <div>
    //           {login()}
    //           {/* <StudentSignup/> */}
    //         </div>
    //       }
    //     />
    //     <Route path="/dashboard" element={<StudentDashboard/>}/>
    //   </Routes>
    // </BrowserRouter>
    <div>{log ? <Dashboard /> : login()}</div>
  );
}

export default App;
