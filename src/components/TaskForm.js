import React, { Component } from "react";
import { Button, ButtonGroup, Form, FormGroup, Label, Input } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      status: false,
    };
  }

  onChangeData = (event) => {
    let taskEvent = event.target;
    let name = taskEvent.name;
    let value = taskEvent.value;
    this.setState({
      [name]: value,
    });
  };

  onSubmitTask = (event) => {
    event.preventDefault();
    this.props.onSubmitTask(this.state);
    this.setState({
      name: "",
      status: false,
    });
  };

  render() {
    return (
      <>
        <Form onSubmit={this.onSubmitTask}>
          <FormGroup>
            <div className="d-flex justify-content-between align-items-center mb-2 p-2 pr-3 badgeForm">
              <span>Thêm công việc</span>
              <FontAwesomeIcon
                icon={faTimes}
                cursor="pointer"
                onClick={this.props.onToggleForm}
              />
            </div>
          </FormGroup>
          <FormGroup>
            <Label>Tên công việc</Label>
            <Input
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.onChangeData}
              placeholder="Nhập công việc"
            />
          </FormGroup>
          <FormGroup>
            <Label for="exampleSelect">Select</Label>
            <Input
              type="select"
              onChange={this.onChangeData}
              name="status"
              value={this.state.status}
            >
              <option value={true}>Kích hoạt</option>
              <option value={false}>Ẩn</option>
            </Input>
          </FormGroup>
          <ButtonGroup className="d-flex justify-content-center" size="sm">
            <Button color="warning">Save</Button>
            <Button color="danger ml-1" onClick={this.props.onToggleForm}>
              Cancel
            </Button>
          </ButtonGroup>
        </Form>
      </>
    );
  }
}

export default TaskForm;
