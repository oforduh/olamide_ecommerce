import React, { useState } from "react";
import styles from "./register.module.scss";
import { AiOutlineEyeInvisible, AiOutlineEye } from "react-icons/ai";
import { Link } from "react-router-dom";

const Register = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [password2, setpassword2] = useState("");
  const [fullName, setfullName] = useState("");
  const [passwordType, setPasswordType] = useState({
    password1: "password",
    password2: "password",
  });
  const togglePassword = (id) => {
    const newObj = { ...passwordType };
    newObj[id] = passwordType[id] === "password" ? "text" : "password";
    setPasswordType(newObj);
  };
  return (
    <div className={styles.registerParentDiv}>
      <div className={styles.registerContainerDiv}>
        <div className={styles.registerForm}>
          <div className={styles.formContentDiv}>
            <div className={styles.logoDiv}>Logo</div>
            <div className={styles.formContainer}>
              <p>
                <h1>Create an account</h1>
                <span>Tell us a little about yourself</span>
              </p>
              <form>
                <div className={styles.formGroup}>
                  <label>Full Name</label>
                  <input
                    required
                    type="text"
                    className={styles.formControl}
                    value={fullName}
                    placeholder="enter full name"
                    onChange={(event) => {
                      setfullName(event.target.value);
                    }}
                  />
                </div>
                <div className={styles.formGroup}>
                  <label>Email</label>
                  <input
                    required
                    type="email"
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
                <div className={styles.formGroup}>
                  <label>Confirm Password</label>
                  <div className={styles.inputParentDiv}>
                    <div className={styles.inputParentCont}>
                      <input
                        className={styles.passwordInput}
                        type={passwordType.password2}
                        required
                        placeholder="******"
                        value={password2}
                        onChange={(event) => {
                          setpassword2(event.target.value);
                        }}
                      />
                      <div
                        className={styles.eyeIcon}
                        onClick={() => togglePassword("password2")}
                      >
                        {passwordType.password2 === "password" ? (
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
                  Already have an account?
                  <span>
                    {" "}
                    <Link to="/login">Sign in</Link>
                  </span>
                </div>
              </form>
            </div>
          </div>
        </div>
        <div className={styles.registerWallpaper}>
          <div className={styles.registerWallpaperCont}>
            <div className={styles.mainDiv}>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div></div>
              <div>
                <div>
                  <img
                    src="https://images.unsplash.com/file-1636585210491-f28ca34ea8ecimage"
                    alt="landingPage"
                    height={600}
                    width={600}
                  />
                </div>
              </div>
              <div></div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
