import React, { Component } from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchKeyWord: "",
    };
  }
  onChangeInput = (event) => {
    let target = event.target;
    let name = target.name;
    let value = target.value;
    this.setState({
      [name]: value,
    });
  };

  searchKeyword = () => {
    this.props.searchKeyword(this.state.searchKeyWord);
  };

  render() {
    let { searchKeyWord } = this.state;
    return (
      <div className="col-xs-6">
        <InputGroup>
          <Input
            name="searchKeyWord"
            value={searchKeyWord}
            onChange={this.onChangeInput}
          />
          <InputGroupAddon addonType="append">
            <Button color="primary" onClick={this.searchKeyword}>
              <FontAwesomeIcon icon={faSearch} />
              &nbsp; Tìm
            </Button>
          </InputGroupAddon>
        </InputGroup>
      </div>
    );
  }
}
