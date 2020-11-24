import React, { Component } from "react";
import {
  ButtonDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from "reactstrap";

export default class Sort extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dropdownOpen: false,
    };
  }

  toggle = () => {
    this.setState({
      dropdownOpen: !this.state.dropdownOpen,
    });
  };

  sortItem = (sortName, sortValue) => {
    this.props.onSort(sortName, sortValue)
  };

  render() {
    let { dropdownOpen } = this.state;
    return (
      <div className="col-xs-6 ml-3">
        <ButtonDropdown isOpen={dropdownOpen} toggle={this.toggle}>
          <DropdownToggle color="primary" caret>
            Sắp xếp
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem onClick={() => this.sortItem("name", 1)}>
              Từ A - Z
            </DropdownItem>
            <DropdownItem onClick={() => this.sortItem("name", -1)}>
              Từ Z - A
            </DropdownItem>
            <DropdownItem divider />
            <DropdownItem onClick={() => this.sortItem("status", 1)}>
              Trạng thái kích hoạt
            </DropdownItem>
            <DropdownItem onClick={() => this.sortItem("status", -1)}>
              Trạng thái ẩn
            </DropdownItem>
          </DropdownMenu>
        </ButtonDropdown>
      </div>
    );
  }
}
