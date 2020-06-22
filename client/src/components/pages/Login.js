import React from 'react'

const Login = () => {
  return (
    <div className="col-4 mx-auto mt-5">
      <div className="card">
        <div className="card-body">
          <h4 className="card-title pb-3 form-title">
            Login to your account
          </h4>
          <div className="form-group pt-3">
            <input type="text" className="form-control auth-inp" placeholder="Username"/>
          </div>
          <div className="form-group">
            <input type="password" className="form-control auth-inp" placeholder="Password"/>
          </div>
        </div>
        <button className="auth-btn py-3">Login</button>
      </div>
    </div>
  )
}

export default Login
