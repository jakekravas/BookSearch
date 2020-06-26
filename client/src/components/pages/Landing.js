import React from 'react';
import { Link } from "react-router-dom";

const Landing = () => {
  const onSubmit = () => {

  }
  
  return (
    <section id="landing-img">
    <div className="container">
      <h1 className="landing-header text-center">Millions of books <br/> at your fingertips</h1>
      <div id="sicc" className="text-center">
        <form id="search-inp-cont">
          <input className="search-inp" type="text" placeholder="Search"/>
          <Link to="/searchresult">
            <button onSubmit={onSubmit} type="submit" className="search-btn">
              <i class="fas fa-search search-icon"/>
            </button>
          </Link>
        </form>
      </div>
      {/* <div className="row">
        <div className="col-md-5">
          <p className="landing-text">Lorem ipsum dolor sit amet, consectetur adipisicing elit. At, dolores repudiandae? Molestias incidunt ea dolore autem officiis eius perspiciatis molestiae.</p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-5">
          <button className="btn landing-li-btn">Login</button>
          <button className="btn landing-su-btn">Create an account</button>
        </div>
      </div> */}
    </div>
  </section>
  )
}

export default Landing
