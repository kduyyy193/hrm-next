import React from "react";
import { HandleUser } from "../models/User.model";

const Search = (props: HandleUser) => {
  return (
    <div>
      <input
        placeholder="Employee's name... "
        className="py-1 px-4 rounded-lg border border-gray-500 text-white outline-none outline-offset-0 focus:outline-blue-500 "
        type="text"
        value={props.value}
        onChange={(e) => {
            props.setValue(e.target.value)
            props.funcHandler(e.target.value)
        } }
      />
    </div>
  );
};

export default Search;
