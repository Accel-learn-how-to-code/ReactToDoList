import React from "react";

import Search from "./Search";
import Sort from "./Sort";

export default function Control({searchKeyword}) {
  return (
    <>
      <Search searchKeyword={searchKeyword}/>
      <Sort />
    </>
  );
}
