import React from 'react';
import './Form.css'
const SignUpForm = () => {
  return (
    <div id="container">
      <div className="form-wrap">
        <h1>Sign Up</h1>
        <p>It's free and only takes a minute</p>
        <form>
          <div className="form-group">
            <label htmlFor="first-name">First Name</label>
            <input type="text" name="firstName" id="first-name" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last Name</label>
            <input type="text" name="lastName" id="last-name" />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input type="email" name="email" id="email" />
          </div>
          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input type="password" name="password" id="password" />
          </div>
          <div className="form-group">
            <label htmlFor="password2">Confirm Password</label>
            <input type="password" name="password2" id="password2" />
          </div>
          <button type="submit" className="btn">Sign Up</button>
          <p className="bottom-text">
            By clicking the Sign Up button, you agree to our
            <a href="#">Terms & Conditions</a> and
            <a href="#">Privacy Policy</a>
          </p>
        </form>
      </div>
      <footer>
        <p>Already have an account? <a href="#">Login Here</a></p>
      </footer>
    </div>
  );
};

export default SignUpForm;
