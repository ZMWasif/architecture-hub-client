import React from "react";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Navigate, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import google from "../../images/Google_Logo.png";

const SocialLogin = () => {
  const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
  const navigate = useNavigate();
  let errorElement;

  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error.message}</p>
      </div>
    );
  }

  if (user) {
    navigate("/home");
  }
  return (
    <div>
      <div className="d-flex align-items-center">
        <div style={{ height: "1px" }} className="bg-black w-50"></div>
        <p className="text-black mt-2 px-2">or</p>
        <div style={{ height: "1px" }} className="bg-black w-50"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-dark w-50 d-block mx-auto"
        >
          <img style={{ width: "30px" }} src={google} alt="" />
          <span className="px-2">Google Sign In</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
