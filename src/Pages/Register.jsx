import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
const Register = () => {
  const { createNewUser, setUser, updateUserProfile } = useContext(AuthContext);
  const navigate = useNavigate();
  const [err, setErr] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = new FormData(e.target);
    const name = form.get("name");
    const photo = form.get("photo");
    const email = form.get("email");
    const password = form.get("password");
    if (password.length < 8) {
      setErr({ ...err, password: "Password must be more than 8 char." });
      return;
    }
    // console.log({ name, photo, email, password });

    createNewUser(email, password)
      .then((result) => {
        const user = result.user;
        setUser(user);
        updateUserProfile({ displayName: name, photoURL: photo })
          .then(() => {
            navigate("/");
          })
          .catch((err) => {
            // console.log("ERROR PROFILE --", err);
          });
        // console.log(user);
      })
      .catch((error) => {
        // console.log("ERROR from REGISTER--", error.message);
      });
  };
  return (
    <div className="min-h-screen flex justify-center items-center">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl rounded-none p-3">
        <form onSubmit={handleSubmit} className="card-body">
          <h1 className="text-xl font-semibold text-center">
            Register your account
          </h1>
          <hr />
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Your Name</span>
            </label>
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="input rounded-none  bg-[#F3F3F3]"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter your phot URL"
              className="input rounded-none  bg-[#F3F3F3]"
              required
            />
          </div>
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
            {err.password && (
              <label className="label text-sm text-red-600">
                {err.password}
              </label>
            )}
            {/* <label className="label">
              <a href="#" className="label-text-alt link link-hover">
                Forgot password?
              </a>
            </label> */}
          </div>
          <div className="form-control ">
            <label className="cursor-pointer label justify-start">
              <input type="checkbox" className="checkbox checkbox-success" />
              <span className="label-text ml-2 text-gray-400">
                Accept Term & Conditions
              </span>
            </label>
          </div>
          <div className="form-control mt-6">
            <button className="btn btn-active bg-gray-500 text-white rounded-none">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
