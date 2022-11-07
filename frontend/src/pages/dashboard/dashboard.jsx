import { Link } from "react-router-dom";
import "./dashboard.css";
import { logout,USERTYPE } from "../../features/user/userSlice";
import { useDispatch,useSelector } from "react-redux";
import axios from "axios";
import StudentDashboard from "./student/dashboard";
import FacultyDashboard from "./faculty/dashboard";
import DeanDashboard from "./dean/dashboard";

const Dashboard = () => {
  const type = useSelector((state) => state.user.usertype);
  const dispatch = useDispatch();
  const Logout = async (e) => {
    let res = await axios.get("http://localhost:5000/logout");
    // console.log(res);
    dispatch(logout());
  };
  const dash = ()=>{
    if (type === USERTYPE.STUDENT) {
      return <StudentDashboard />;
    } else if (type === USERTYPE.FACULTY) {
      return <FacultyDashboard />;
    } else if (type === USERTYPE.DEAN) {
      return <DeanDashboard />;
    } else {
      return <div>hello</div>;
    }
  }
  return (
    <div className="body">
      <main className="form-signin w-100 m-auto text-center">
        {dash()}
        <button
          className="w-100 btn btn-lg btn-primary"
          type="button"
          onClick={Logout}
        >
          logout
        </button>
      </main>
    </div>
  );
};

export default Dashboard;
