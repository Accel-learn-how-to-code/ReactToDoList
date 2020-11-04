import React, { Component } from "react";
import { Button, Badge, ButtonGroup } from "reactstrap";

export default class TaskItem extends Component {
  showId = (id) => {
    console.log("Id: " + id);
  };
  render() {
    const {
      task,
      index,
      onChangeStatus,
      onDeleteTask,
      onEditTask,
    } = this.props;
    return (
      <>
        <tr>
          <td>{index + 1}</td>
          <td>{task.name}</td>
          <td>
            {task.status ? (
              <Badge
                className="d-flex justify-content-center p-1"
                color="success"
                onClick={() => onChangeStatus(task.id)}
              >
                Kích hoạt
              </Badge>
            ) : (
              <Badge
                className="d-flex justify-content-center p-1"
                color="danger"
                onClick={() => onChangeStatus(task.id)}
              >
                Ẩn
              </Badge>
            )}
          </td>
          <td>
            <ButtonGroup className="d-flex justify-content-center" size="sm">
              <Button color="warning" onClick={() => onEditTask(task.id)}>
                Sửa
              </Button>
              <Button
                color="danger ml-D1"
                onClick={() => onDeleteTask(task.id)}
              >
                Xóa
              </Button>
            </ButtonGroup>
          </td>
        </tr>
      </>
    );
  }
}
