import React, { useState, Fragment } from 'react';
import { withRouter } from "react-router-dom";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../actions/auth";
import { getSearch } from "../../actions/search";

const Navbar = ({ auth: { isAuthenticated, loading }, logout, getSearch, history }) => {
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

  const [search, setSearch] = useState("");

  const onChange = e => setSearch(e.target.value);

  const onSubmit = e => {
    e.preventDefault();
    getSearch(search, history);
  }

  return (
    <div>
      <nav className="navbar navbar-expand navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="#"><i className="fas fa-book-reader"/> BookSearch</a>
          <button className="navbar-toggler" data-toggle="collapse" data-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            {/* hide form when on home page */}
            <form onSubmit={onSubmit} className="form-inline mx-auto" id="search-inp-cont-nav">
              <input
                type="text"
                name="search"
                onChange={onChange}
                value={search}
                className="search-inp"
                placeholder="Search"
              />
              <button className="btn">
                <i class="fas fa-search"/>
              </button>
              {/* <button className="btn btn-outline-secondary search-btn">
                <i class="fas fa-search search-icon search-icon-nav"/>
              </button> */}
            </form>
            {/* <form className="form-inline mx-auto">
              <input type="text" className="form-control mr-2" placeholder="Search"/>
              <button className="btn btn-outline-secondary">Search</button>
            </form> */}
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

export default connect(mapStateToProps, { logout, getSearch })(withRouter(Navbar))
