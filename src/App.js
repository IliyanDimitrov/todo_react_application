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
    { text: "Task 1", completed: false, dueDate: "2020-01-10", id: '0' },
    { text: "Task 2 Task 2", completed: false, dueDate: "2020-01-10", id: '1' },
    { text: "Task 3 Task 3 Task 3", completed: true, dueDate: "2020-01-10", id: '2' },
    { text: "Task 4 Task 4 Task 4 Task 4", completed: false, dueDate: "2020-01-10", id: '3' },
    { text: "Task 5 Task 5 Task 5 Task 5 Task 5", completed: false, dueDate: "2020-01-10", id: '' }
  ]);

  const activeTasks = tasks.filter(task => !task.completed);

  const completedTasks = tasks.filter(task => task.completed);

  //const completedTasksLength =tasks.length - activeTasks.length;

  return (
    <div className="App" id="app">
      <NavBar />
      <div className="container">
        <div className=" jumbotron">

          <h1>Add New Task</h1>
          <hr />
          <InputField />
        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">

            <RemainingTasks text="Active: " count={activeTasks.length} />
            <ul className="list-group">
              {activeTasks.map(task => <TaskItem key={task.id} text={task.text} completed={task.completed} dueDate={tasks.dueDate} />)}
            </ul>

            <br />

            <ul className="list-group">
              <RemainingTasks text="Comleted: " count={completedTasks.length} />
              {completedTasks.map(task => <TaskItem key={task.id} text={task.text} completed={task.completed} dueDate={tasks.dueDate} />)}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
