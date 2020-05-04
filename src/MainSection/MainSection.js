import React from 'react';

import './MainSection.css';
import TaskItem from '../TaskItem/TaskItem';
import InputField from '../InputField/InputField';


function MainSection() {
    return (
        <div className="container">
            <div className="jumbotron">
                <h1>Add New Task</h1>
                <hr />
                <InputField />
            </div>
            <div className="row">
                <div className="col-md-12 col-lg-12 col-sm-12">
                    <h2>Task List</h2>
                    <ul className="list-group">
                        <TaskItem text="Task 1" />
                        <TaskItem text="Task 2" />
                        <TaskItem text="Task 3" />
                        <TaskItem text="Task 4" />
                        <TaskItem text="Task 5" />
                    </ul>
                </div>
            </div>
        </div>
    );
}

export default MainSection;
