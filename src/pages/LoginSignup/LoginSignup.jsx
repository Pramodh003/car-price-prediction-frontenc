import React, { useState } from 'react'
import styles from "./styles.module.css"
import email_icon from "../../Assets/email.png"
import password_icon from "../../Assets/password.png"
import { useNavigate } from 'react-router-dom'


const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up")
  const navigate = useNavigate()
  function login() {
    navigate("/predict")
  }
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <div className={styles.text}>{action}</div>
        <div className={styles.underline}></div>
      </div>
      <div className={styles.inputs}>
        <div className={styles.input}>
          <img src={email_icon} alt="" />
          <input type="email" placeholder='Email Id'/>
        </div>
        <div className={styles.input}>
          <img src={password_icon} alt="" />
          <input type="password" placeholder='Password'/>
        </div>
      </div>
      <div className={styles.btn_container}>
        <div className={styles.submit} onClick={() => {setAction("Sign Up")}}>Sign Up</div>
        <div className={styles.submit} onClick={login}>Login</div>
      </div>
    </div>
  )
}

export default LoginSignup