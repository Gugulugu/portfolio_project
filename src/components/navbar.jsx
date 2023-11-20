import React from 'react';
/*
function Navbar() {
        return <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand" href="/">MyWebPage</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="/">Home</a>
              <a className="nav-link" href="/">AboutMe</a>
              <a className="nav-link" href="/">Projects</a>
              <a className="nav-link" href="/">Contact Me</a>
            </div>
          </div>
        </div>
      </nav>;
    }

 */

function Navbar() {
  return <React.Fragment>
  <nav id="navbar" class="navbar navbar-dark bg-dark px-3">
    <a className="navbar-brand" href="/">MyPage</a>
    <ul className="nav nav-pills">
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading1">About Me</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading2">Projects</a>
      </li>
      <li className="nav-item">
        <a className="nav-link" href="#scrollspyHeading2">Contact Me</a>
      </li>
    </ul>
    </nav>
  </React.Fragment>;
}
export default Navbar;