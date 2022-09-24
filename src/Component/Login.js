import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Form, Alert } from "react-bootstrap";
import { Button } from "react-bootstrap";
import GoogleButton from "react-google-button";
import { useUserAuth } from "../Context/UserAuthContext";
import styles from "./login.module.css";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const { logIn, googleSignIn } = useUserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await logIn(email, password);
      navigate("./MovieCard");
    } catch (err) {
      setError(err.message);
    }
  };

 

  return (
    <>
      <div className={styles.App}>
        <div className={styles.appAside}></div>
        <div className={styles.appForm}>
        <h2 className={styles.formTitle}>IPL App Login</h2>
        {error && <Alert variant="danger">{error}</Alert>}
        <Form onSubmit={handleSubmit}>
          <Form.Group controlId="formBasicEmail">
            <Form.Control className={styles.pageSwitcherItem} 
              type="email"
              placeholder="Email address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>

          <Form.Group controlId="formBasicPassword">
            <Form.Control className={styles.pageSwitcherItem} 
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>

          <div>
            <Button className={styles.formFieldButton} type="Submit">
              Log In
            </Button>
          </div>
        </Form>
        <div className={styles.signupTxt}>
        Don't have an account? <Link to="/Signup" className={styles.signupBtn}>Sign up</Link>
      </div>
      </div>
      
      </div>
    </>
  );
};

export default Login;