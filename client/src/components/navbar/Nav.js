import React from "react";
import './Styles.css';

const Nav = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark sticky-top font-weight-bold blue-gradient">
        <a className="navbar-brand" href="/">Navbar</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <a className="nav-item nav-link active" href="/">Home <span className="sr-only">current</span></a>
            <a className="nav-item nav-link" href="/chat">Chat</a>
            <a className="nav-item nav-link" href="/profile">Profile</a>
            <a className="nav-item nav-link" href="/dashboard">Dashboard</a>
            <a className="nav-item nav-link" href="/login">Login</a>
            <a className="nav-item nav-link" href="/register">Register</a>
          </div>
        </div>
      </nav>

    </div>
  );
}

export default Nav;