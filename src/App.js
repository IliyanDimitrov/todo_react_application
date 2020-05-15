import React, { useState } from 'react';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import TaskItem from './TaskItem/TaskItem';
import InputField from './InputField/InputField';
import RemainingTasks from "./RemainingTasks/RemainingTasks";

import "./App.css";


function App() {

  //const tasks = useState()[0];
  //const setTasks = useState()[1];

  //Destructuring method

  const [tasks, setTasks] = useState([
    { text: "Task 1", completed: false, dueDate: "2020-05-16", id: '0' },
    { text: "Task 2 Task 2", completed: false, dueDate: "2020-05-17", id: '1' },
    { text: "Task 3 Task 3 Task 3", completed: true, dueDate: "2020-05-17", id: '2' },
    { text: "Task 4 Task 4 Task 4 Task 4", completed: false, dueDate: "2020-05-17", id: '3' },
    { text: "Task 5 Task 5 Task 5 Task 5 Task 5", completed: false, dueDate: "2020-05-18", id: '' }
  ]);

  const activeTasks = tasks.filter(task => !task.completed);

  const completedTasks = tasks.filter(task => task.completed);

  const timeDifference = (currentDate, dueDate) => {

    let taskTimeFrame = Math.abs(dueDate - currentDate);

    return Math.ceil(taskTimeFrame / (1000 * 60 * 60));
  };
  

  return (

    <div className="App" id="app">
      <NavBar />
        <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-4">Add New Task</h1>
          <hr />
          <InputField />
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">

            <RemainingTasks text="Active: " count={ activeTasks.length } />
            <ul className="list-group">
              {activeTasks.map(task => <TaskItem key={ task.id } text={ task.text } completed={ task.completed } dueDate={ timeDifference(Date.now(), new Date(task.dueDate)) } />)}
            </ul>

            <br />

            <ul className="list-group">
              <RemainingTasks text="Completed: " count={ completedTasks.length } />
              {completedTasks.map(task => <TaskItem key={ task.id } text={ task.text } completed={ task.completed } dueDate={ task.dueDate } />)}
            </ul>
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
