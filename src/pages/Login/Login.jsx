import { useEffect, useRef, useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { FaEye } from "react-icons/fa";
import "./Login.css";
import { Link } from "react-router-dom";
import axios from "../../server/axios";
import { Context } from "../../store/AppContext";

const LOGIN_URL = "/login";

const Login = () => {
  const { isAuth, setisAuth, login } = useContext(Context);
  console.log("is auth ??? login ", isAuth);
  const navigate = useNavigate();
  const emailRef = useRef();
  const pwdRef = useRef();
  const errRef = useRef();
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    console.log("click log in");
    e.preventDefault();

    //TODO : call Login post api
    const email = emailRef.current.value;
    const pwd = pwdRef.current.value;
    if (email == " " || pwd == "") {
      setErrMsg("Please provide email & password");
    } else {
      try {
        const response = await axios.post(
          LOGIN_URL,
          JSON.stringify({
            email,
            password: pwd,
          }),
          {
            headers: { "content-type": "application/json" },
          }
        );

        console.log(JSON.stringify(response?.data), "after resp : ");
        setSuccess(true);
        setisAuth(true);
      } catch (error) {
        console.error("Login error:", error);
      }
    }
  };

  useEffect(() => {
    console.log("isAuth inside Login component:", isAuth);
  }, [isAuth]);

  return (
    <>
      {success ? (
        navigate("/")
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
                Sign In
              </button>
            </form>

            <p>
              {/* Footer */}
              <p>
                <a href="#">Forgot Password ?</a>
                <br />
                Not registered?
                <br />
                <span className="line">
                  {/*put router link here*/}
                  <Link to="/register">Register</Link>
                </span>
              </p>
            </p>
          </section>
        </center>
      )}
    </>
  );
};

export default Login;
