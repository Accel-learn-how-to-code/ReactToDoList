import React, { Component } from "react";
import { Input } from "reactstrap";

import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterName: "",
      //-1 All
      //1 Active
      //0 InActive
      filterStatus: -1,
    };
  }
  onFilter = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    const { filterName, filterStatus } = this.state;
    this.props.onFilter(
      name === "filterName" ? value : filterName,
      name === "filterStatus" ? value : filterStatus
    );
    this.setState({
      [name]: value,
    });
  };

  render() {
    const { filterName, filterStatus } = this.state;
    const { tasks, onChangeStatus, onDeleteTask, onEditTask } = this.props;
    const taskList = tasks.map((task, index) => {
      return (
        <TaskItem
          onChangeStatus={onChangeStatus}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
          task={task}
          key={task.id}
          index={index}
        />
      );
    });

    return (
      <table className="table">
        <thead>
          <tr>
            <th>STT</th>
            <th>Tên</th>
            <th>Trạng thái</th>
            <th>Hành động</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td></td>
            <td>
              <Input
                name="filterName"
                value={filterName}
                onChange={this.onFilter}
              />
            </td>
            <td>
              <select
                name="filterStatus"
                className="custom-select"
                onChange={this.onFilter}
                value={filterStatus}
              >
                <option value={-1}>Toàn bộ</option>
                <option value={1}>Kích Hoạt</option>
                <option value={0}>Ẩn</option>
              </select>
            </td>
            <td></td>
          </tr>
          {taskList}
        </tbody>
      </table>
    );
  }
}
