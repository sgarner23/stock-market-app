import React from "react";
import "./Login.css";
import Form from "./Form";

const Login = () => {
  return (
    <div className="login-container">
      <div className="picture-side">
        <div className="picture-container">
          <img
            src="https://media.istockphoto.com/photos/view-on-wall-street-yellow-traffic-light-with-black-and-white-pointer-picture-id1264351333?b=1&k=20&m=1264351333&s=170667a&w=0&h=OEyTf0IA1hYYvcj_WGjZBlSSwbBulKDFfNJGLeVnR8A="
            alt="Picture of stock graph"
          />
        </div>
        <div className="create-account-container">
          <a href="#">Create an account</a>
        </div>
      </div>
      <div className="login-credentials">
        <h2>Log In</h2>
        <Form />
      </div>
    </div>
  );
};

export default Login;
