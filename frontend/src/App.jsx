import React from "react";
// import Homepage from './pages/homepage/homepage';
import CategorySelect from "./pages/categoryselect/categoryselect";
import StudentLogin from "./pages/studentlogin/studentlogin";
import FacultyLogin from "./pages/facultylogin/facultylogin";
import DeanLogin from "./pages/deanlogin/deanlogin";
import { useSelector } from "react-redux";
import { USERTYPE } from "./features/user/userSlice";

function App() {
  const type = useSelector((state) => state.user.usertype);
  const login = ()=> {
    if(type===USERTYPE.NULL){return (<CategorySelect/>)}
    else if(type===USERTYPE.STUDENT){return(<StudentLogin/>)}
    else if(type===USERTYPE.FACULTY){return(<FacultyLogin/>)}
    else if(type===USERTYPE.DEAN){return(<DeanLogin/>)}
    else{return(<div>hello</div>)}
  }
  return (
    <div>
      {login()}
    </div>
  );
}

export default App;
