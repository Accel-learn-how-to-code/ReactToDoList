import React, { Component } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import TaskForm from "./components/TaskForm";
import Control from "./components/Control";
import TaskList from "./components/TaskList";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: [],
      isDisplayForm: false,
      taskEditing: null,
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse(localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks,
      });
    }
  }

  onGenerateData = () => {
    const tasks = [
      {
        id: this.generateID(),
        name: "Ăn sáng",
        status: false,
      },
      {
        id: this.generateID(),
        name: "Ngủ trưa",
        status: true,
      },
      {
        id: this.generateID(),
        name: "Đi học",
        status: true,
      },
    ];
    this.setState({
      tasks: tasks,
    });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onSubmitTask = (data) => {
    const { tasks } = this.state;
    if (data.id) {
      let index = tasks.findIndex((task) => task.id === data.id);
      data.status = data.status === "true" ? true : false;
      tasks[index] = data;
    } else {
      data.id = this.generateID();
      tasks.push(data);
    }
    this.setState({
      tasks: tasks,
      taskEditing: null,
    });

    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onEditTask = (id) => {
    let { tasks } = this.state;
    let index = tasks.findIndex((task) => task.id === id);
    this.setState({
      taskEditing: tasks[index],
      isDisplayForm: true,
    });
  };

  onChangeStatus = (id) => {
    let { tasks } = this.state;
    let index = tasks.findIndex((task) => task.id === id);
    if (index || index === 0) {
      tasks[index].status = !tasks[index].status;
    }
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  onDeleteTask = (id) => {
    let { tasks } = this.state;
    let index = tasks.findIndex((task) => task.id === id);
    if (index || index === 0) {
      tasks.splice(index, 1);
    }
    this.setState({ tasks: tasks });
    localStorage.setItem("tasks", JSON.stringify(tasks));
  };

  s4 = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
      .toString(16)
      .substring(1);
  };

  generateID = () => {
    return this.s4() + this.s4();
  };

  onToggleForm = () => {
    const { isDisplayForm, taskEditing } = this.state;
    if (isDisplayForm && taskEditing) {
      this.setState({
        taskEditing: null,
      });
    } else {
      this.setState({
        isDisplayForm: !this.state.isDisplayForm,
        taskEditing: null,
      });
    }
  };

  onCloseForm = () => {
    this.setState({
      isDisplayForm: false,
      taskEditing: null,
    });
  };

  render() {
    const { tasks, isDisplayForm, taskEditing } = this.state;
    return (
      <div className="container mt-3">
        <h1 className="d-flex justify-content-center my-5">To Do List</h1>
        <hr />
        <div className="row">
          <div className={isDisplayForm ? "col-4" : ""}>
            {isDisplayForm ? (
              <TaskForm
                onSubmitTask={this.onSubmitTask}
                onToggleForm={this.onToggleForm}
                onCloseForm={this.onCloseForm}
                taskEditing={taskEditing}
              />
            ) : (
              ""
            )}
          </div>

          <div className={isDisplayForm ? "col-8" : "col-12"}>
            <button
              type="button"
              className="btn btn-primary mx-1 mb-2"
              onClick={this.onToggleForm}
            >
              Thêm công việc
            </button>
            <button
              type="button"
              className="btn btn-danger mx-1 mb-2"
              onClick={this.onGenerateData}
            >
              Generate
            </button>
            <div className="row mx-1 mb-2">
              <Control />
            </div>

            <TaskList
              tasks={tasks}
              onChangeStatus={this.onChangeStatus}
              onDeleteTask={this.onDeleteTask}
              onEditTask={this.onEditTask}
            />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
