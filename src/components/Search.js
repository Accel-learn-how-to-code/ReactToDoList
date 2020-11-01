import React from "react";
import { InputGroup, InputGroupAddon, Button, Input } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


export default function Search(props) {
  return (
    <div className="col-xs-6">
      <InputGroup>
        <Input />
        <InputGroupAddon addonType="append">
          <Button color="primary">
            <FontAwesomeIcon icon={faSearch} />
            &nbsp; Tìm
          </Button>
        </InputGroupAddon>
      </InputGroup>
    </div>
  );
}


