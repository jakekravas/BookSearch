import React, { useEffect, useState } from 'react';
import { Alert } from 'reactstrap';
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { register } from "../../actions/auth";

const Signup = ({ auth: {isAuthenticated, errors, loading}, register }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });
  const [displayErr, setDisplayErr] = useState(false);

  useEffect(() => {
    if (errors) {
      setDisplayErr(true);
      setTimeout(() => {{ setDisplayErr(false) }}, 3000);
    }
  }, [errors]);

  const { email, password } = formData;

  const onChange = e => {
    setFormData({...formData, [e.target.name]: e.target.value});
  }

  const onSubmit = () => {
    register(email, password);
  }

  if (isAuthenticated) {
    return <Redirect to="/"/>
  }

  return (
    <div className="col-4 mx-auto mt-5">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title pb-3 form-title">
            Create your account
          </h4>
          {errors && (
            errors.map(err => (
              <Alert color="danger" isOpen={displayErr}>{err.msg}</Alert>
            ))
          )}
          <div className="form-group pt-3">
            <input
              onChange={onChange}
              type="text"
              className="form-control auth-inp"
              placeholder="Email"
              name="email"
            />
          </div>
          <div className="form-group">
            <input
              onChange={onChange}
              type="password"
              className="form-control auth-inp"
              placeholder="Password"
              name="password"
              />
          </div>
        </div>
        <button onClick={onSubmit} className="auth-btn py-3">
          Sign Up
        </button>
      </div>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { register })(Signup)
