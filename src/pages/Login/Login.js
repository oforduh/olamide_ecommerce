import React, { useState } from "react";
import styles from "./login.module.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [passwordType, setPasswordType] = useState({
    password1: "password",
  });
  const togglePassword = (id) => {
    const newObj = { ...passwordType };
    newObj[id] = passwordType[id] === "password" ? "text" : "password";
    setPasswordType(newObj);
  };
  return (
    <div className={styles.loginParentDiv}>
      <div className={styles.loginContainerDiv}>
        <div className={styles.loginForm}>
          <div className={styles.formContentDiv}>
            <div className={styles.logoDiv}>Logo</div>
            <div className={styles.formContainer}>
              <p>
                <h1>Log in</h1>
                <span>
                  Log in with your data that you entered during registration
                </span>
              </p>
              <form>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    required
                    type="text"
                    className={styles.formControl}
                    value={email}
                    placeholder="enter email address"
                    onChange={(event) => {
                      setemail(event.target.value);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Password</label>
                  <div className={styles.inputParentDiv}>
                    <div className={styles.inputParentCont}>
                      <input
                        className={styles.passwordInput}
                        type={passwordType.password1}
                        required
                        placeholder="******"
                        value={password}
                        onChange={(event) => {
                          setpassword(event.target.value);
                        }}
                      />
                      <div
                        className={styles.eyeIcon}
                        onClick={() => togglePassword("password1")}
                      >
                        {passwordType.password1 === "password" ? (
                          <AiOutlineEyeInvisible />
                        ) : (
                          <AiOutlineEye />
                        )}
                      </div>
                    </div>
                  </div>
                </div>
                <button>Enter</button>

                <div className={styles.signInDiv}>
                  Don't have an account?
                  <span>
                    {" "}
                    <Link to="/register">Sign up</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.loginWallpaper}>
        <div className={styles.loginWallpaperCont}>
        <div></div>
        <img
          src="https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage"
          alt="landingPage"
          height={600}
          width={600}
        />
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12,13].map((_, idx) => {
          return <div key={idx}></div>;
        })}
      </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
