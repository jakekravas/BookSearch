import React from 'react'

const Landing = () => {
  return (
    <section id="landing-img">
    <div className="container">
      <h1 className="landing-header text-center">Millions of books <br/> at your fingertips</h1>
      <div id="sicc" className="text-center">
        <form id="search-inp-cont">
          <input id="landing-search" type="text" placeholder="Search"/>
          <button type="submit" id="search-btn">
            <i class="fas fa-search" id="search-icon"/>
          </button>
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
