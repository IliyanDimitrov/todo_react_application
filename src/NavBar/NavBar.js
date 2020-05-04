import React from 'react';

import './NavBar.css';

function NavBar() {
    return (
        <header>
            <nav className="navbar navbar-expand-md navbar-light bg-light mb-3">
                <div className="container-fluid">
                    <a href="#top" className="navbar-brand mr-3">
                        <img src="" width="30" height="30"
                            className="d-inline-block align-top" alt="" />
                    Todo Application
                </a>
                    <button type="button" className="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarCollapse">
                        <div className="navbar-nav">
                            <a href="#top" className="nav-item nav-link active">Pending</a>
                            <a href="#top" className="nav-item nav-link">Completed</a>
                        </div>
                        <div className="navbar-nav ml-auto">
                            <a href="#top" className="nav-item nav-link">Register</a>
                            <a href="#top" className="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
