import React, { Component } from "react";
import { Input } from "reactstrap";

import TaskItem from "./TaskItem";

export default class TaskList extends Component {
  render() {
    const { tasks, onChangeStatus, onDeleteTask } = this.props;
    const taskList = tasks.map((task, index) => {
      return (
        <TaskItem
          onChangeStatus={onChangeStatus}
          onDeleteTask={onDeleteTask}
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
              <Input />
            </td>
            <td>
              <select className="custom-select">
                <option value="0">Sắp xếp</option>
                <option value="1">One</option>
                <option value="2">Two</option>
                <option value="3">Three</option>
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
