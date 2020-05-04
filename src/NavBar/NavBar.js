import React from 'react';

import './NavBar.css';

function NavBar(props) {
    return (
        <header>
            <nav class="navbar navbar-expand-md navbar-light bg-light mb-3">
                <div class="container-fluid">
                    <a href="foo" class="navbar-brand mr-3">
                        <img src="" width="30" height="30"
                            class="d-inline-block align-top" alt="" />
                    Todo Application
                </a>
                    <button type="button" class="navbar-toggler" data-toggle="collapse" data-target="#navbarCollapse">
                        <span class="navbar-toggler-icon"></span>
                    </button>

                    <div class="collapse navbar-collapse" id="navbarCollapse">
                        <div class="navbar-nav">
                            <a href="foo" class="nav-item nav-link active">Pending</a>
                            <a href="foo" class="nav-item nav-link">Completed</a>
                        </div>
                        <div class="navbar-nav ml-auto">
                            <a href="foo" class="nav-item nav-link">Register</a>
                            <a href="foo" class="nav-item nav-link">Login</a>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    );
}

export default NavBar;
