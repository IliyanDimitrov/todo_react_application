import React from 'react';

import './Footer.css';

function MainSection() {
    return (
        <div class="container">
            <hr/>
            <footer>
            <div class="row">
                <div class="col-md-6">
                    <p>Copyright &copy; 2020 Coffee&Code</p>
                </div>
                <div class="col-md-6 text-md-right">
                    <a href="foo" class="text-dark">Terms of Use</a>
                    <span class="text-muted mx-2">|</span>
                    <a href="foo" class="text-dark">Privacy Policy</a>
                </div>
            </div>
        </footer>
        </div>
    );
}

export default MainSection;
