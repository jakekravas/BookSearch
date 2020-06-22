import React from 'react'

const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><i className="fas fa-book-reader"/> BookSearch</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <form className="form-inline mx-auto">
              <input type="text" className="form-control mr-2" placeholder="Search"/>
              <button className="btn btn-outline-secondary">Search</button>
            </form>
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="nav-link" href="#">Create An Account</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Log In</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  )
}

export default Navbar
