import React, { useState, useEffect, Fragment } from 'react';
import axios from 'axios';

import NavBar from './NavBar/NavBar';
import Footer from './Footer/Footer';
import TaskItem from './TaskItem/TaskItem';
import InputField from './InputField/InputField';
import RemainingTasks from "./RemainingTasks/RemainingTasks";

import "./App.css";


function App() {

  const [tasks, setTasks] = useState();

  useEffect(() => {

   
    //GET
    axios
      .get('https://qrxi205yi8.execute-api.eu-west-1.amazonaws.com/dev/tasks')
      .then(
        
        response => {
          console.log(response.data.tasks);
          console.log("I am here");

          setTasks(response.data.tasks);
        }
      )
      .catch(
        (error) => {
          console.log('Error fetching data', error)
        }
      )
  }, []);

  const activeTasks = tasks && tasks.filter(task => !task.completed);

  const completedTasks = tasks && tasks.filter(task => task.completed);

  const timeDifference = (currentDate, due_date) => {

    let taskTimeFrame = due_date - currentDate;

    return Math.ceil(taskTimeFrame / (1000 * 60 * 60));
  };

  
  const deleteTask = (id) => {
    axios
      .delete(`https://qrxi205yi8.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`)
      .then(response => {
          const updatedTaskList = tasks.filter(task => task.task_id !== id);
          setTasks(updatedTaskList);
        })
      .catch((error) => {
        console.log('Error adding a task', error)
      })
  }
  
  //PUT - Update task state
  const completeTask = (id) => {
    const updateTask = tasks.find(task => task.task_id === id);
    updateTask.completed = 1;
    
    axios
      .put(`https://qrxi205yi8.execute-api.eu-west-1.amazonaws.com/dev/tasks/${id}`, updateTask)
      .then(response => {
        const updatedTaskList = tasks.map(task => task.task_id === id ? updateTask : task)
        setTasks(updatedTaskList);
        })
      .catch(error => {
        console.log("Error fetching data", error);
      })
  }

  //POST - Create new task
  const addTask = (text, due_date) => {
    const newTask = {
      "description": text,
      "due_date": due_date,
      "completed": 0,
      "user_id": 1
    }

    axios
      .post('https://qrxi205yi8.execute-api.eu-west-1.amazonaws.com/dev/tasks', newTask)
      .then(
        (response) => {
          newTask.task_id = response.data.task[0].task_id;
          const updatedTasks = [...tasks, newTask]
          setTasks(updatedTasks);
        })
      .catch((error) => {
        console.log("Error adding a task", error);
      });
}

const clearInputFields = (text, due_date) => {
  text = "";
  due_date = "";
}


  return (

    <div className="App" id="app">
      <NavBar />
      <div className="container-fluid">
        <div className="jumbotron">
          <h1 className="display-4">Add New Task</h1>
          <hr />
          <InputField addTask={addTask} clearInputFields={clearInputFields} />

        </div>
        <div className="row">
          <div className="col-md-12 col-lg-12 col-sm-12">
            {tasks && (
              <Fragment>
                <RemainingTasks text="Active: " count={activeTasks.length} />

                <ul className="list-group">
                  {activeTasks.map(task =>
                    <TaskItem
                      completeTask={completeTask}
                      deleteTask={deleteTask}
                      id={task.task_id}
                      key={task.task_id}
                      text={task.description}
                      due_date={timeDifference(Date.now(), new Date(task.due_date))} />
                  )}
                </ul>

                <br />

                <ul className="list-group">
                  <RemainingTasks text="Completed: " count={completedTasks.length} />
                  {completedTasks.map(task =>
                    <TaskItem
                      deleteTask={deleteTask}
                      id={task.task_id}
                      key={task.task_id}
                      text={task.description}
                      due_date={task.due_date}
                      completed={task.completed} 
                      />
                  )}
                </ul>
              </Fragment>
            )}
          </div>
        </div>
        <hr />
        <Footer />
      </div>
    </div>
  );
}

export default App;
