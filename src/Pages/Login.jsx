import { useContext, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const Login = () => {
  const { userLogin, setUser } = useContext(AuthContext);
  const [err, setErr] = useState("");
  const location = useLocation();
  // console.log("LOGIN PAGE --", location);

  const navigate = useNavigate();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const email = form.get("email");
    const password = form.get("password");
    // console.log({ email, password });

    userLogin(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        // state thakle data load hbe na hole home page e pathiye dibe
        navigate(location?.state ? location.state : "/");
        // console.log(result.user);
      })
      .catch((error) => {
        // alert(error.message);
        setErr(error.message);
        // console.log("ERROR from LOGIN --", error.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none p-3">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-xl font-semibold text-center">
            Login your account
          </h1>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email address</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email address"
              className="input rounded-none  bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-bold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input rounded-none bg-[#F3F3F3]"
              required
            />
            {<label className="label text-sm text-red-600">{err}</label>}
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-active bg-gray-500 text-white rounded-none">
              Login
            </button>
          </div>
        </form>
        <p className="text-sm text-center text-gray-500 mt-2">
          Dont’t Have An Account ?{" "}
          <Link to="/auth/register" className="text-red-500">
            Register
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
