import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { setUserType,USERTYPE,printUserType} from "../../features/user/userSlice";
import "./categoryselect.css";
import logo from "./images/logo.jpg";

const CategorySelect = () => {
    const dispatch = useDispatch();

  return (
    <div className="body">
      <main className="form-signin w-100 m-auto text-center">
          <img className="mb-4" src={logo} alt="" width="216" height="171" />
          <h1 className="h3 mb-3 fw-normal">Login As :</h1>
          <div className="container text-center">
            <div className="choice btn btn-primary" onClick={()=>dispatch(setUserType(USERTYPE.STUDENT))}>
                Student
            </div>
            <div className="choice btn btn-primary" onClick={()=>dispatch(setUserType(USERTYPE.FACULTY))}>
                Faculty
            </div>
            <div className="choice btn btn-primary" onClick={()=>dispatch(setUserType(USERTYPE.DEAN))}>
                Dean
            </div>
          </div>
          <p className="mt-5 mb-3 text-muted">© LNMCheckBox</p>
      </main>
    </div>
  );
};

export default CategorySelect;
