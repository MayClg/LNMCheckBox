import { Link } from "react-router-dom";
import "./dashboard.css";
import { logout } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import axios from "axios";

const GiveFeed = () => {
  return (
    <div className="body">
      <main className="form-signin w-100 m-auto text-center">
        <button className="w-100 btn btn-lg btn-primary" type="button">
          Give Feedback
        </button>
        <button className="w-100 btn btn-lg btn-primary" type="button">
          Review Feedback
        </button>
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

export default GiveFeed;
