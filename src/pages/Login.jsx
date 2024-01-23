import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import axios from "axios";

import backHome from "../assets/back-to-home.svg";
import welcomeImg from "../assets/welcomeImg.png";
import alertTriangle from "../assets/alert-triangle.svg";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: "",
    password: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const validationErrors = {};
    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "Password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 characters long!";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const data = {
        username: formData.username,
        password: formData.password,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .post("http://localhost:8080/api/v1/auth/sign-in", data, { headers })
        .then((response) => {
          alert("Login successful");
          navigate("/");
        })
        .catch((error) => {
          console.error(error);
        });
    }
  };
  return (
    <main className="flex h-svh w-full overflow-hidden bg-[#020386] ">
      <div className="absolute">
        <Link to={"/welcome"}>
          <img src={backHome} alt="" />
        </Link>
      </div>
      <div className="flex w-5/12 flex-col justify-center rounded-br-2xl rounded-tr-2xl bg-[#020386]">
        <img className=" pl-40" src={welcomeImg} alt="" />
      </div>
      <div className="flex w-7/12 flex-col items-center justify-center">
        <div className=" min-w-[440px] rounded-3xl bg-white px-14 py-12">
          <form onSubmit={handleSubmit}>
            <h2 className="mb-5 text-center text-2xl font-bold">Sign In</h2>

            <div className="flex flex-col space-y-5">
              <div>
                <input
                  className="w-full rounded-lg border-2 bg-[#E9E9E9] p-2 outline-none"
                  type="text"
                  name="username"
                  placeholder="Username"
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.username && (
                  <span className="flex text-sm text-red-500 ">
                    <img src={alertTriangle} alt="" /> {errors.username}
                  </span>
                )}
              </div>
              <div>
                <input
                  className="w-full rounded-lg border-2 bg-[#E9E9E9] p-2 outline-none"
                  type="password"
                  name="password"
                  placeholder="Password"
                  onChange={handleChange}
                />
                {errors.password && (
                  <span className="flex text-sm text-red-500 ">
                    <img src={alertTriangle} alt="" /> {errors.password}
                  </span>
                )}
              </div>
            </div>
            <div className="mt-8 flex items-center justify-between text-sm font-medium text-[#020386CC]">
              <div>
                <a href="">
                  <input className="mr-1" type="checkbox" name="" id="" />
                  Remember password
                </a>
              </div>
              <div>
                <a href="">Forgot password ?</a>
              </div>
            </div>

            <button
              className="my-10 w-full rounded-xl bg-[#020386] py-2 text-center text-xl font-semibold text-white"
              type="submit"
            >
              Sign in
            </button>
          </form>
          <div className=" text-center text-sm font-medium text-black text-opacity-70">
            Don’t have an account?
            <Link
              className="ml-1 text-sm font-semibold text-[#020386CC]"
              to={"/signup"}
            >
              Sign Up
            </Link>
          </div>
        </div>
        <div></div>
      </div>
    </main>
  );
};

export default Login;
