import React, { useState } from "react";
import { Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import "./SignUp.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firebase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const [createUserWithEmailAndPassword, user] =
    useCreateUserWithEmailAndPassword(auth);

  const handleNameBlur = (event) => {
    setName(event.target.value);
  };
  const handleEmailBlur = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordBlur = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmPasswordBlur = (event) => {
    setConfirmPassword(event.target.value);
  };

  if (user) {
    navigate("/home");
  }

  const handleCreateUser = (event) => {
    event.preventDefault();

    if (password !== confirmPassword) {
      setError("Your Passwords did not match");
      return;
    }
    if (password.length < 6) {
      setError("Your Password must be more than 6 characters");
      return;
    }
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="form-container">
      <div className="container w-100 mx-auto">
        <h2 className="text-black text-center mt-4">Sign Up</h2>
        <form onSubmit={handleCreateUser}>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-black"
            >
              Your Name
            </label>
            <input
              onBlur={handleNameBlur}
              type="text"
              className="form-control"
              id="exampleInputPassword1"
              required
            />
          </div>

          <div className="mb-3">
            <label
              htmlFor="exampleInputEmail1"
              className="form-label text-black"
            >
              Email address
            </label>
            <input
              onBlur={handleEmailBlur}
              type="email"
              className="form-control"
              id="exampleInputEmail1"
              aria-describedby="emailHelp"
              required
            />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-black"
            >
              Password
            </label>
            <input
              onBlur={handlePasswordBlur}
              type="password"
              className="form-control"
              id="exampleInputPassword2"
              required
            />
          </div>
          <div className="mb-3">
            <label
              htmlFor="exampleInputPassword1"
              className="form-label text-black"
            >
              Confirm Password
            </label>
            <input
              onBlur={handleConfirmPasswordBlur}
              type="password"
              className="form-control"
              id="exampleInputPassword3"
              required
            />
          </div>
          <p style={{ color: "red" }}>{error}</p>
          <Button className="login-btn w-50 d-block mx-auto px-4" type="submit">
            Sign Up
          </Button>
          <div className="mb-3 mt-3">
            <Link
              className="form-check-label text-black form-link"
              to="/login"
              htmlFor="exampleCheck1"
            >
              Already Registered? Please Login
            </Link>
          </div>
        </form>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
