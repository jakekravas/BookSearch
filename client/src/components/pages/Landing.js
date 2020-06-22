import React from 'react'

const Landing = () => {
  return (
    <section id="landing-img">
    <div className="container">
      <div className="row">
        <div className="col-md-5">
          <h1 className="landing-header">Read With Us</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <p className="landing-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolores repudiandae? Molestias incidunt ea dolore autem officiis eius perspiciatis molestiae.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <button className="btn landing-li-btn">Login</button>
          <button className="btn landing-su-btn">Create an account</button>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Landing
