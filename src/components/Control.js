import React from "react";

import Search from "./Search";
import Sort from "./Sort";

export default function Control({searchKeyword, onSort}) {
  return (
    <>
      <Search searchKeyword={searchKeyword}/>
      <Sort onSort={onSort} />
    </>
  );
}
