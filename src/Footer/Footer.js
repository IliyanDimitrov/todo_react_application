import React from 'react';

import './Footer.css';

function MainSection() {
    return (
        <div className="container">
            <hr/>
            <footer>
            <div className="row">
                <div className="col-md-6">
                    <p>Copyright &copy; 2020 ID</p>
                </div>
                <div className="col-md-6 text-md-right">
                    <a href="foo" className="text-dark">Terms of Use</a>
                    <span className="text-muted mx-2">|</span>
                    <a href="foo" className="text-dark">Privacy Policy</a>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default MainSection;
