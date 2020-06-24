import React, { Fragment } from 'react';
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const guestLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="/signup">Create An Account</Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" to="/login">Log In</Link>
      </li>
    </ul>
  );

  const authLinks = (
    <ul className="navbar-nav">
      <li className="nav-item">
        <Link className="nav-link" to="#">My Account</Link>
      </li>
      <li className="nav-item">
        <Link onClick={ logout } className="nav-link" to="/">Log Out</Link>
      </li>
    </ul>
  )

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
            {!loading && (
              <Fragment>
                { isAuthenticated ? authLinks : guestLinks }
              </Fragment>
            )}
          </div>
        </div>
      </nav>
    </div>
  )
}

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps, { logout })(Navbar)
