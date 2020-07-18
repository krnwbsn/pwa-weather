import React, { Fragment } from "react";
import { ISearch } from "../../interfaces";

const Search = (props: ISearch) => {
  return (
    <Fragment>
      <input
        type="text"
        className="search"
        placeholder="Search..."
        value={props.query}
        onChange={props.onChange}
        onKeyPress={props.onSearch}
      />
    </Fragment>
  );
};

export default Search;
