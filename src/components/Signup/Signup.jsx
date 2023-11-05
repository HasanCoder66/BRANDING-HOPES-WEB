import "./signup.css";
import { Link } from "react-router-dom";
import React, { useRef } from "react";
import { getAuth, createUserWithEmailAndPassword } from "../../firebase/config";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Footer from "../Footer/Footer";

export default function Signup() {
  const auth = getAuth();
const navigate = useNavigate()
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const cPassword = useRef();

  const signupHandler = () => {
    console.log("signup handler is working");
    createUserWithEmailAndPassword(
      auth,
      email?.current?.value,
      password?.current?.value
    )
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;
        console.log(user);

        if (user) {
          toast.success("user signup successfully");
          setTimeout(() => {
            navigate("/login");
          }, 5000);
        
        } else {
          toast.failed("user not registered");
        }
        // ...
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode);
        console.log(errorMessage);
        // ..
      });
  };
  return (
    <>
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <div className="loginLogo">
            <img src="../../src/assets/BH_Logo_AI-01.png" alt="" />
          </div>
        </div>
        <div className="loginRight">
          <div className="signupBox">
            <input
              placeholder="UserName"
              type="text"
              className="loginInput"
              ref={userName}
            />
            <input
              placeholder="Email Address"
              type="email"
              className="loginInput"
              ref={email}
            />
            <input
              placeholder=" Password"
              type="password"
              className="loginInput"
              ref={password}
            />
            <input
              placeholder="Confirm Password "
              type="password"
              className="loginInput"
              ref={cPassword}
            />

            
            <button className="loginButton" onClick={signupHandler}>
              {" "}
              Sign Up
            </button>
            <Link to={"/login"}>
            <button className="loginRegisterButton">
              Login into Account
            </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>

    {/* <Footer/> */}
    </>
  );
}