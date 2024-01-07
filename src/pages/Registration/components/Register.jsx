import { useEffect, useRef, useState } from "react";
import { faCheck, faTimes, faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { FaEye } from "react-icons/fa";
import "../css/Register.css";
import { Link } from "react-router-dom";

const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const REGISTER_URL = "/register";

const Register = () => {
  const userRef = useRef();
  const errRef = useRef();
  const fnameRef = useRef();
  const lnameRef = useRef();

  const [userEmail, setuserEmail] = useState("");
  const [validEmail, setValidEmail] = useState(false);
  const [emailFocus, setEmailFocus] = useState(false);

  const [pwd, setPwd] = useState("");
  const [validPwd, setValidPwd] = useState(false);
  const [pwdFocus, setPwdFocus] = useState(false);

  const [matchPwd, setMatchPwd] = useState("");
  const [validMatch, setValidMatch] = useState(false);
  const [matchFocus, setMatchFocus] = useState(false);

  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setValidEmail(EMAIL_REGEX.test(userEmail));
  }, [userEmail]);

  useEffect(() => {
    setValidPwd(PWD_REGEX.test(pwd));
    setValidMatch(pwd === matchPwd);
  }, [pwd, matchPwd]);

  useEffect(() => {
    setErrMsg("");
  }, [userEmail, pwd, matchPwd]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const v1 = EMAIL_REGEX.test(userEmail);
    const v2 = PWD_REGEX.test(pwd);

    console.log(fnameRef.current.value, "   ", lnameRef.current.value, " ", userEmail, " ", pwd);

    //To-DO : Call user  POST API

    if (!v1 || !v2 || fnameRef.current.value == " " || lnameRef.current.value == "") {
      setErrMsg("Please Fill all fields");
      return;
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
            <h1>Register</h1>
            <form onSubmit={handleSubmit} autoComplete="off">
              {/* first name */}
              <label htmlFor="firstName">First Name:</label>
              <input className="form-control" type="text" id="firstName" ref={fnameRef} />

              {/* last name */}
              <label htmlFor="firstName">First Name:</label>
              <input className="form-control" type="text" id="lastName" ref={lnameRef} />

              {/* email */}
              <label htmlFor="email">
                Email:
                <FontAwesomeIcon icon={faCheck} className={validEmail ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validEmail || !userEmail ? "hide" : "invalid"} />
              </label>
              <input
                className="form-control"
                type="text"
                id="email"
                ref={userRef}
                onChange={(e) => setuserEmail(e.target.value)}
                value={userEmail}
                required
                aria-invalid={validEmail ? "false" : "true"}
                aria-describedby="uidnote"
                onFocus={() => setEmailFocus(true)}
                onBlur={() => setEmailFocus(false)}
              />
              <p id="uidnote" className={emailFocus && userEmail && !validEmail ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Enter a valid email ID
              </p>

              {/* password */}
              <label htmlFor="password">
                Password:
                <FontAwesomeIcon icon={faCheck} className={validPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validPwd || !pwd ? "hide" : "invalid"} />
              </label>
              <div id="password" class="input-group mb-3">
                <input
                  className="form-control"
                  type="password"
                  id="password"
                  onChange={(e) => setPwd(e.target.value)}
                  value={pwd}
                  required
                  aria-invalid={validPwd ? "false" : "true"}
                  aria-describedby="pwdnote"
                  onFocus={() => setPwdFocus(true)}
                  onBlur={() => setPwdFocus(false)}
                />
                <span className="custIinput input-group-text" id="basic-addon2">
                  <FaEye />
                </span>

                <p id="pwdnote" className={pwdFocus && !validPwd ? "instructions" : "offscreen"}>
                  <FontAwesomeIcon icon={faInfoCircle} />
                  8 to 24 characters.
                  <br />
                  Must include uppercase and lowercase letters, a number and a special character.
                  <br />
                  Allowed special characters: <span aria-label="exclamation mark">!</span> <span aria-label="at symbol">@</span> <span aria-label="hashtag">#</span> <span aria-label="dollar sign">$</span> <span aria-label="percent">%</span>
                </p>
              </div>

              {/* cnf pwd */}
              <label htmlFor="confirm_pwd">
                Confirm Password:
                <FontAwesomeIcon icon={faCheck} className={validMatch && matchPwd ? "valid" : "hide"} />
                <FontAwesomeIcon icon={faTimes} className={validMatch || !matchPwd ? "hide" : "invalid"} />
              </label>
              <div id="password" class="input-group mb-3">
                <input
                  className="form-control"
                  type="password"
                  id="confirm_pwd"
                  onChange={(e) => setMatchPwd(e.target.value)}
                  value={matchPwd}
                  required
                  aria-invalid={validMatch ? "false" : "true"}
                  aria-describedby="confirmnote"
                  onFocus={() => setMatchFocus(true)}
                  onBlur={() => setMatchFocus(false)}
                />
                <span className="custIinput input-group-text" id="basic-addon2">
                  <FaEye />
                </span>
              </div>
              <p id="confirmnote" className={matchFocus && !validMatch ? "instructions" : "offscreen"}>
                <FontAwesomeIcon icon={faInfoCircle} />
                Must match the first password input field.
              </p>
              <br />

              {/* Submit */}
              <button className="btn btn-primary" disabled={!validEmail || !validPwd || !validMatch ? true : false}>
                Sign Up
              </button>
            </form>

            {/* Footer */}
            <p>
              Already registered?
              <br />
              <span className="line">
                {/*put router link here*/}
                <Link to="/login">Sign In</Link>
              </span>
            </p>
          </section>
        </center>
      )}
    </>
  );
};

export default Register;
