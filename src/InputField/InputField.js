import React from 'react';

import './InputField.css';

function InputField() {
    return (
        <div class="input-group">
            <input type="text" class="form-control" placeholder="Task Description" aria-label="Task Description"
                aria-describedby="basic-addon2" />
            <div class="input-group-append">
                <button class="btn btn-outline-secondary" type="button">Add</button>
                <button class="btn btn-outline-secondary" type="button">Clear</button>
            </div>
        </div>
    );
}

export default InputField;
