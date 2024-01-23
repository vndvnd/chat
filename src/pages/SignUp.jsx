import React, { useState } from "react";

import { Link } from "react-router-dom";

import welcomeImg from "../assets/welcome.png";
import backHome from "../assets/back-to-home.svg";
import alertTriangle from "../assets/alert-triangle.svg";

import axios from "axios";
const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    birthDay: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
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
    if (!formData.firstName.trim()) {
      validationErrors.firstName = "FirstName is required";
    }
    if (!formData.lastName.trim()) {
      validationErrors.lastName = "LastName is required";
    }

    if (!formData.birthDay.trim()) {
      validationErrors.birthDay = "BirthDay is required";
    } else {
      const currentDate = new Date();
      const inputDate = new Date(formData.birthDay);

      if (isNaN(inputDate.getTime()) || inputDate >= currentDate) {
        validationErrors.birthDay = "Invalid birthDay";
      }
    }

    if (!formData.email.trim()) {
      validationErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = "The email address is not correctly formatted!";
    }

    if (!formData.username.trim()) {
      validationErrors.username = "Username is required";
    }

    if (!formData.password.trim()) {
      validationErrors.password = "password is required";
    } else if (formData.password.length < 8) {
      validationErrors.password =
        "Password must be at least 8 characters long!";
    }

    if (!formData.confirmPassword.trim()) {
      validationErrors.confirmPassword = "Confirm password is required";
    } else if (formData.confirmPassword !== formData.password) {
      validationErrors.confirmPassword = "Password mismatch. Please try again!";
    }

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      const formatDate = (date) => {
        const [year, month, day] = date.split("-");
        return `${day}-${month}-${year}`;
      };

      const data = {
        firstname: formData.firstName,
        lastname: formData.lastName,
        username: formData.username,
        dob: formatDate(formData.birthDay),
        email: formData.email,
        password: formData.password,
      };

      const headers = {
        "Content-Type": "application/json",
      };

      axios
        .post(`http://localhost:8080/api/v1/auth/sign-up`, data, { headers })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.error(error);
        });

      alert("Form Submitted successfully");
    }
  };

  return (
    <main className="flex h-svh w-full  overflow-hidden bg-[#020386]">
      <div className="absolute">
        <Link to={"/welcome"}>
          <img src={backHome} alt="" />
        </Link>
      </div>
      <div className="flex w-7/12 flex-col items-center justify-center">
        <div className=" max-w-[440px] rounded-3xl bg-white px-14 py-5">
          <form className="w-full" onSubmit={handleSubmit}>
            <h2 className="mb-5 text-center text-2xl font-bold">Sign Up</h2>

            <div className="flex flex-col space-y-4">
              <div className="flex justify-between space-x-4 ">
                <div className="">
                  <input
                    className="w-full rounded-lg border-2 bg-[#E9E9E9] p-2 outline-none "
                    type="text"
                    name="firstName"
                    placeholder="First Name"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.firstName && (
                    <span className="flex text-sm text-red-500 ">
                      <img src={alertTriangle} alt="" /> {errors.firstName}
                    </span>
                  )}
                </div>

                <div className=" ">
                  <input
                    className="w-full rounded-lg border-2 bg-[#E9E9E9] p-2  outline-none"
                    type="text"
                    name="lastName"
                    placeholder="Last Name"
                    autoComplete="off"
                    onChange={handleChange}
                  />
                  {errors.lastName && (
                    <span className="flex text-sm text-red-500 ">
                      <img src={alertTriangle} alt="" /> {errors.lastName}
                    </span>
                  )}
                </div>
              </div>
              <div className="">
                <input
                  className="w-full rounded-lg border-2 bg-[#E9E9E9] p-2  outline-none"
                  type="date"
                  placeholder="Day of birth"
                  name="birthDay"
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.birthDay && (
                  <span className="flex text-sm text-red-500 ">
                    <img src={alertTriangle} alt="" /> {errors.birthDay}
                  </span>
                )}
              </div>
              <div>
                <input
                  className="w-full rounded-lg border-2 bg-[#E9E9E9] p-2  outline-none"
                  type="email"
                  name="email"
                  placeholder="Email"
                  autoComplete="off"
                  onChange={handleChange}
                />
                {errors.email && (
                  <span className="flex text-sm text-red-500 ">
                    <img src={alertTriangle} alt="" /> {errors.email}
                  </span>
                )}
              </div>
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
              <div>
                <input
                  className="w-full rounded-lg border-2 bg-[#E9E9E9] p-2 outline-none"
                  type="password"
                  name="confirmPassword"
                  placeholder="Confirm password"
                  onChange={handleChange}
                />
                {errors.confirmPassword && (
                  <span className="flex text-sm text-red-500 ">
                    <img src={alertTriangle} alt="" /> {errors.confirmPassword}
                  </span>
                )}
              </div>
            </div>

            <button
              className="mt-12 w-full rounded-xl bg-[#020386] py-2 text-center text-xl font-semibold text-white"
              type="submit"
            >
              Sign Up
            </button>
          </form>
          <div className="mt-3 text-center  font-medium text-black text-opacity-70">
            Already have an account?
            <Link
              className="ml-1  font-semibold text-[#020386CC]"
              to={"/login"}
            >
              Sign In
            </Link>
          </div>
        </div>
        <div></div>
      </div>
      <div className="flex w-5/12 flex-col justify-center rounded-bl-2xl rounded-tl-2xl">
        <img className="w-10/12 object-contain px-16" src={welcomeImg} alt="" />
      </div>
    </main>
  );
};

export default SignUp;
