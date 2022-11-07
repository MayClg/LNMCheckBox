import logo from "./images/logo.jpg";
import "./studentlogin.css";
import { useState } from "react";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {login,logout} from "../../features/user/userSlice";

const StudentLogin = () => {

  // const type = useSelector((state) => state.user.usertype);
  // axios.post("http://localhost:5000/",{type}).then((res)=>console.log(res.data));

  const dispatch = useDispatch();
  const [student, setStudent] = useState({
    username: "",
    password: "",
  });
  const handelInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    // console.log(name+" "+value)
    setStudent({ ...student, [name]: value });
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    const user = { ...student };

    // console.log(user);

    let res = await axios.post("http://localhost:5000/student/login", user);
    // console.log(res);

    // console.log(res.data);
    // console.log(res.status);
    dispatch(login(res.data));
    setStudent({
      username: "",
      password: "",
    });
  };

  return (
    <div className="body">
      <main className="form-signin w-100 m-auto text-center">
        <form data-bitwarden-watching="1" onSubmit={onSubmit}>
          <img className="mb-4" src={logo} alt="" width="216" height="171" />
          <h1 className="h3 mb-3 fw-normal">Login As : STUDENT</h1>

          <div className="form-floating">
            <input
              type="text"
              name="username"
              className="form-control top"
              id="floatingInput1"
              placeholder="Roll. No"
              required={true}
              onChange={handelInput}
              value={student.username}
            />
            <label htmlFor="floatingInput">Roll Number</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              name="password"
              className="form-control bottom"
              id="floatingInput2"
              placeholder="example@mail.com"
              required={true}
              onChange={handelInput}
              value={student.password}
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            Login
          </button>
          <p className="mt-5 mb-3 text-muted">© LNMCheckBox</p>
        </form>
      </main>
    </div>
  );
};

export default StudentLogin;
