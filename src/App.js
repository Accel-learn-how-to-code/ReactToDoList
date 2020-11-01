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
      dcm: "",
    };
  }

  componentDidMount() {
    if (localStorage && localStorage.getItem("tasks")) {
      var tasks = JSON.parse( localStorage.getItem("tasks"));
      this.setState({
        tasks: tasks
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

  render() {
    const tasks = this.state.tasks;
    return (
      <div className="container mt-3">
        <h1 className="d-flex justify-content-center my-5">To Do List</h1>
        <hr />
        <div className="row">
          <div className="col-4">
            <TaskForm />
          </div>

          <div className="col-8">
            <button type="button" className="btn btn-primary mx-1 mb-2">
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

            <TaskList tasks={tasks} />

          </div>
        </div>
      </div>
    );
  }
}

export default App;
