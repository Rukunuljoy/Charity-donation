import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../../context/AuthProvider";
import { GoogleAuthProvider } from "firebase/auth";

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const { signIn } = useContext(AuthContext);
  const { providerLogin } = useContext(AuthContext);
  const location = useLocation();
  const Navigate = useNavigate();

  const from = location.state?.from?.pathName || "/";

  const handleLogin = (data) => {
    signIn(data.email, data.password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        Navigate("/");
      })
      .catch((err) => {
        console.error(err.message);
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
    <div className="flex h-screen justify-center flex-col md:flex-row lg:flex-row items-center gap-8">
      <div>
        <img
          className="w-[500px]"
          src="https://i.ibb.co/XxqDcj2/Mobile-login-pana.png"
          alt=""
        />
      </div>
      <div>
        <div className="flex justify-center items-center rounded-lg ">
          <div className="w-96 p-7 my-5 shadow-2xl">
            <h1 className="text-2xl text-center font-bold">Login!!!</h1>
            <form onSubmit={handleSubmit(handleLogin)}>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">your email</span>
                </label>
                <input
                  type="email"
                  {...register("email", {
                    required: "Email Address is required",
                  })}
                  className="input input-bordered w-full max-w-xs"
                />
                {errors.email && (
                  <p className="text-red-600">{errors.email?.message}</p>
                )}
              </div>
              <div className="form-control w-full max-w-xs">
                <label className="label">
                  <span className="label-text">your password</span>
                </label>
                <input
                  type="password"
                  {...register("password", {
                    required: "password id required",
                    minLength: {
                      value: 6,
                      message: "password must be at least 6 characters",
                    },
                  })}
                  className="input input-bordered w-full max-w-xs"
                />

                <label className="label">
                  <span className="label-text">Forget password</span>
                </label>
                {errors.password && (
                  <p className="text-red-600">{errors.password?.message}</p>
                )}
              </div>
              <input
                className="btn btn-accent w-full"
                value="login"
                type="submit"
              />
            </form>
            <p className="mt-5">
              New to course register?{" "}
              <Link className="text-primary" to="/registration">
                Create a new account
              </Link>
            </p>
            <div className="divider">OR</div>
            <button
              onClick={handleGoogleSignIn}
              className="btn btn-outline w-full"
            >
              CONTINUE WITH GOOGLE
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
