import React from "react";
import "./Form.css";
import Input from "./Input";

const From = () => {
  return (
    <form>
      <Input />
      <Input />
      <input type="radio" id="remember-me" />
      <label htmlFor="remember-me"></label>
      <button className="log-in-button">Log in</button>
    </form>
  );
};

export default From;
