import "./signup.css";
import { Link } from "react-router-dom";
// import React, { useRef } from "react";
// import { getAuth, createUserWithEmailAndPassword } from "../../firebase/config";
// import { useNavigate } from "react-router-dom";
// import { ToastContainer, toast } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

export default function Signup() {
//   const auth = getAuth();
// const navigate = useNavigate()
//   const userName = useRef();
//   const email = useRef();
//   const password = useRef();
//   const cPassword = useRef();

//   const signupHandler = () => {
//     console.log("signup handler is working");
//     createUserWithEmailAndPassword(
//       auth,
//       email?.current?.value,
//       password?.current?.value
//     )
//       .then((userCredential) => {
//         // Signed up
//         const user = userCredential.user;
//         console.log(user);

//         if (user) {
//           toast.success("user signup successfully");
//           setTimeout(() => {
//             navigate("/login");
//           }, 5000);
        
//         } else {
//           toast.failed("user not registered");
//         }
//         // ...
//       })
//       .catch((error) => {
//         const errorCode = error.code;
//         const errorMessage = error.message;
//         console.log(errorCode);
//         console.log(errorMessage);
//         // ..
//       });
//   };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
        <div className="loginLogo">
            <img src="https://scontent.fkhi4-2.fna.fbcdn.net/v/t39.30808-6/398660730_122101832408097808_826848894669553659_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrelL9W6J_b9xYgU3COfTN0hp7JW5DNXvSGnslbkM1e8YW5XioFmQubbZ709Jp0k8PRfsGpU4DvlaRLWytxRUT&_nc_ohc=u5jwRQCQKIYAX8Nu6tl&_nc_zt=23&_nc_ht=scontent.fkhi4-2.fna&oh=00_AfBOT6N9bGpmSEj3ADMoHKndffkjr6QNaj5Ox9wbll77YQ&oe=654C2319" alt="" />
          </div>
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="UserName"
              type="text"
              className="loginInput"
            //   ref={userName}
            />
            <input
              placeholder="Email Address"
              type="email"
              className="loginInput"
            //   ref={email}
            />
            <input
              placeholder=" Password"
              type="password"
              className="loginInput"
            //   ref={password}
            />
            <input
              placeholder="Confirm Password "
              type="password"
              className="loginInput"
            //   ref={cPassword}
            />

            {/* onClick={signupHandler} */}
            <button className="loginButton" >
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
      {/* <ToastContainer /> */}
    </div>
  );
}