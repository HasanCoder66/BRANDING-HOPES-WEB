import "./login.css";
import { Link } from "react-router-dom";
import { getAuth,signInWithEmailAndPassword } from "../../firebase/config";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function Login() {
  const navigate = useNavigate()
  const auth = getAuth();
  const email = useRef();
  const password = useRef();
  
  const loginHandler = () => {
    console.log("login handler is working");
    signInWithEmailAndPassword(
      auth,
      email?.current?.value,
      password?.current?.value
    )
      .then((userCredential) => {
        // Signed in
        console.log('sign in user');
        const user = userCredential.user;
        // ...
        if(user) {
          toast.success("user Login successfully");
          setTimeout(() => {
            navigate("/");
          }, 5000);
        }else{
          toast.failed("user not Login successfully");
        }
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log(errorCode)
        console.log(errorMessage)
      });
  };
  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <div className="loginLogo">
            <img src="https://scontent.fkhi4-2.fna.fbcdn.net/v/t39.30808-6/398660730_122101832408097808_826848894669553659_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=5f2048&_nc_eui2=AeGrelL9W6J_b9xYgU3COfTN0hp7JW5DNXvSGnslbkM1e8YW5XioFmQubbZ709Jp0k8PRfsGpU4DvlaRLWytxRUT&_nc_ohc=u5jwRQCQKIYAX8Nu6tl&_nc_zt=23&_nc_ht=scontent.fkhi4-2.fna&oh=00_AfBOT6N9bGpmSEj3ADMoHKndffkjr6QNaj5Ox9wbll77YQ&oe=654C2319" alt="" />
          </div>
          {/* <span className="loginDesc">Connect with us to see new blogs.</span> */}
        </div>
        <div className="loginRight">
          <div className="loginBox">
            <input
              placeholder="Email Address"
              type="email"
              className="loginInput"
              ref={email}
              />
            <input
              ref={password}
              placeholder=" Password"
              type="password"
              className="loginInput"
            />
            
            <button className="loginButton" onClick={loginHandler} >
              {" "}
              Log In
            </button>
            <span className="loginForgot">Forgot Password</span>
            <Link to={"/signup"}>
            <button className="loginRegisterButton">
              Create a new Account
            </button>
            </Link>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
}