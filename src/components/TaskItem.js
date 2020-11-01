import React from "react";
import { Button, Badge, ButtonGroup } from "reactstrap";

function ActiveTask() {
  return (
    <Badge className="d-flex justify-content-center p-1" color="success">
      Kích hoạt
    </Badge>
  );
}

function UnActiveTask() {
  return (
    <Badge className="d-flex justify-content-center p-1" color="danger">
      Chưa kích hoạt
    </Badge>
  );
}

export default function TaskItem({ task, index }) {
  console.log("Trang thai " + task.status);
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{task.name}</td>
      <td>{task.status ?  <ActiveTask /> : <UnActiveTask />}</td>
      <td>
        <ButtonGroup className="d-flex justify-content-center" size="sm">
          <Button color="warning">Sửa</Button>
          <Button color="danger ml-1">Xóa</Button>
        </ButtonGroup>
      </td>
    </tr>
  );
}
