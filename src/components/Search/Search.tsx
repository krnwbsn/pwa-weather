import React, { Fragment } from "react";
import { ISearch } from "../../interfaces";
import { Input } from "antd";

const Search = (props: ISearch) => {
  return (
    <Fragment>
      <Input
        type="text"
        className="search"
        placeholder="Search location..."
        value={props.query}
        onChange={props.onChange}
        onKeyPress={props.onSearch}
      />
    </Fragment>
  );
};

export default Search;
