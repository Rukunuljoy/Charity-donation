import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const Registration = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const { createUser, updateUser } = useContext(AuthContext);
  const { providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();

  const from = location.state?.from?.pathname || "/";

  const diffToast = () => {
    alert("registration successful");
  };

  const handleSignUp = (data) => {
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("Registration successfully done");
        const userInfo = {
          displayName: data.name,
        };
        updateUser(userInfo)
          .then(() => {
            Navigate(from, { replace: true });
            
          })
          .catch((err) => console.log(err));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  const googleProvider = new GoogleAuthProvider();

  const handleGoogleSignIn = () => {
    providerLogin(googleProvider)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Navigate(from, { replace: true });
      })
      .catch((err) => console.error(err));
  };

  return (
    <div className="flex h-screen mb-12 justify-center flex-col md:flex-row lg:flex-row items-center gap-12">
      <div>
        <img
          className="h-[600px]"
          src="https://i.ibb.co/XxqDcj2/Mobile-login-pana.png"
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-center items-center rounded-lg ">
          <div className="w-96 p-7 my-5 shadow-2xl">
            <h1 className="text-2xl text-center font-bold">Sign Up</h1>
            <form onSubmit={handleSubmit(handleSignUp)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">your name</span>
                </label>
                <input
                  type="name"
                  {...register("name", {
                    required: "name is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.name && (
                  <p className="text-red-600">{errors.name.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">your email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "email is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">your password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "password is required",
                    minLength: {
                      value: 6,
                      message: "password must be 6 characters long",
                    },
                    pattern: {
                      value: /(?=.*[0-9])(?=.*[A-Z])/,
                      message: "password must be strong",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.password && (
                  <p className="text-red-600">{errors.password.message}</p>
                )}
              </div>
              <ToastContainer />
              <input
              onClick={diffToast}
                className="btn btn-accent mt-5 w-full"
                value="Register"
                type="submit"
              />
            </form>
            <p className="mt-5">
              Already Have an Account?{" "}
              <Link className="text-primary" to="/login">
                Please Login!
              </Link>
            </p>
            <div className="divider">OR</div>
            <Link to="/">
              <button
                onClick={handleGoogleSignIn}
                className="btn btn-outline w-full"
              >
                CONTINUE WITH GOOGLE
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;
