import React, { Component } from "react";
import { Button, ButtonGroup, Form, FormGroup, Label, Input } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

class TaskForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      id: "",
      name: "",
      status: false,
      count: 1,
    };
  }

  componentDidMount() {
    const { taskEditing } = this.props;
    //console.log("task Form" + JSON.stringify(taskEditing));
    if (taskEditing) {
      this.setState({
        id: taskEditing.id,
        name: taskEditing.name,
        status: taskEditing.status,
      });
    }
  }

  //componentDidUpdate nhận vào 2 tham số prevProps, prevState
  //trong hàm dưới đây khi App truyền vào 1 props taskEditing mới
  //componentDidUpdate sẽ so sánh 2 props prev và after
  //nếu khác thì nhận thằng props mới vào và set State
  componentDidUpdate(prevProps, prevState) {
    const { taskEditing } = this.props;

    //chỉ được setState trong hàm if này, nếu ko sẽ trigger lỗi MaximumDepth
    if (prevProps.taskEditing !== taskEditing)
      if (taskEditing) {
        this.setState({
          id: taskEditing.id,
          name: taskEditing.name,
          status: taskEditing.status,
        });
      } else {
        this.setState({
          id: "",
          name: "",
          status: false,
        });
      }

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
      id: "",
      name: "",
      status: false,
    });
    this.props.onToggleForm();
  };

  render() {
    const { id } = this.state;
    return (
      <>
        <Form onSubmit={this.onSubmitTask}>
          <FormGroup>
            <div className="d-flex justify-content-between align-items-center mb-2 p-2 pr-3 badgeForm">
              <span>{id ? "Cập nhập công việc" : "Thêm công việc"}</span>
              <FontAwesomeIcon
                icon={faTimes}
                cursor="pointer"
                onClick={this.props.onCloseForm}
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
            <Button color="danger ml-1" onClick={this.props.onCloseForm}>
              Cancel
            </Button>
          </ButtonGroup>
        </Form>
      </>
    );
  }
}

export default TaskForm;
