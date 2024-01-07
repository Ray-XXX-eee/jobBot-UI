import { useEffect, useRef, useState } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye } from "react-icons/fa";
import "./Login.css";
import { Link } from "react-router-dom";

const Register = () => {
  const emailRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    //TODO : call Login post api
    if (emailRef.current.value == " " || pwdRef.current.value == "") {
      setErrMsg("Please provide email & password");
    } else {
    }
  };

  return (
    <>
      {success ? (
        <section>
          <h1>Success!</h1>
          <p>
            <Link to="#">Sign In</Link>
          </p>
        </section>
      ) : (
        <center>
          <section className="d-inline-flex p-2 m-5">
            <p ref={errRef} className={errMsg ? "errmsg" : "offscreen"} aria-live="assertive">
              {errMsg}
            </p>
            <h1>Login</h1>
            <form onSubmit={handleSubmit}>
              <label htmlFor="email">Email:</label>
              <input name="email" className="form-control" type="text" id="email" ref={emailRef} autoComplete="off" required />

              <label htmlFor="password">Password:</label>
              <div id="password" className="input-group mb-3">
                <input className="form-control" type="password" id="password" ref={pwdRef} required />
                <span className="custIinput input-group-text" id="basic-addon2">
                  <FaEye />
                </span>
              </div>

              <button type="submit" className="btn btn-primary">
                Sign Up
              </button>
            </form>

            <p>
              <a href="#">Forgot Password ?</a>
            </p>
          </section>
        </center>
      )}
    </>
  );
};

export default Register;
