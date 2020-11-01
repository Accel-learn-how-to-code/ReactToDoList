import React from "react";
import { Button, Card, CardBody, ButtonGroup } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

function TaskForm(props) {
  return (
    <Card>
      <CardBody>
        <div className="d-flex justify-content-between align-items-center p-2 badgeForm">
          <span>Thêm công việc</span>
          <FontAwesomeIcon icon={faTimes} />
        </div>
        <div className="form-group">
          <label className="mb-1 pl-1">Tên công việc</label>
          <input
            type="text"
            name=""
            id=""
            className="form-control"
            placeholder=""
          />
          <label className="mb-1 pl-1">Trạng thái</label>
          <select className="custom-select mb-3">
            <option value="0">Sắp xếp</option>
            <option value="1">One</option>
            <option value="2">Two</option>
            <option value="3">Three</option>
          </select>
          <ButtonGroup className="d-flex justify-content-center" size="sm">
            <Button color="warning">Save</Button>
            <Button color="danger ml-1">Cancel</Button>
          </ButtonGroup>
        </div>
      </CardBody>
    </Card>
  );
}

export default TaskForm;
