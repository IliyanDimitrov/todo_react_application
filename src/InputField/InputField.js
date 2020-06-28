import React, { Fragment, useState } from 'react';

import './InputField.css';

function InputField(props) {

    const [text, setText] = useState();
    const [due_date, setDueDate] = useState();

    const handleTextChange = (event) => {
        setText(event.target.value);
    
    }

    const handleDateChange = (event) => {
        
        setDueDate(event.target.value);
    
    }

    const handleAaddTaskClick = () => {
        props.addTask(text, due_date);
    }

    const handleClearTaskClick = () => {
        setText("");
        setDueDate("");
    }

    return (
        <Fragment>
            <div className="input-group">
                <input
                    type="text"
                    className="form-control task-description"
                    placeholder="Task Description"
                    aria-label="Task Description"
                    aria-describedby="basic-addon2"
                    onChange={handleTextChange}
                    value={text} />
                <input
                    type="date"
                    className="form-control task-date"
                    onChange={handleDateChange}
                    value={due_date} />
                <div className="input-group-append">
                    <button className="btn btn-outline-secondary" type="button" onClick={handleAaddTaskClick}>Add</button>
                    <button className="btn btn-outline-secondary" type="button" onClick={handleClearTaskClick}>Clear</button>
                </div>
            </div>
        </Fragment>
    );
}

export default InputField;
