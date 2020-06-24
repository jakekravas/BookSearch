import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { connect } from "react-redux";
import { login } from "../../actions/auth";

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  
  const onChange = e => setFormData({...formData, [e.target.name]: e.target.value});

  const onSubmit = () => {
    login(formData.email, formData.password);
  };

  if (isAuthenticated) {
    return <Redirect to="/"/>
  }

  return (
    <div className="col-4 mx-auto mt-5">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title pb-3 form-title">
            Login to your account
          </h4>
          <div className="form-group pt-3">
            <input
              onChange={onChange}
              type="text"
              name="email"
              className="form-control auth-inp"
              placeholder="Email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={onChange}
              type="password"
              name="password"
              className="form-control auth-inp"
              placeholder="Password"
            />
          </div>
        </div>
        <button className="auth-btn py-3" onClick={onSubmit}>
          Login
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, { login })(Login);
