import React from "react";
import { HandleUser } from "../../models/User.model";

const SexFilter = (props: HandleUser) => {
  return (
    <div className="w-1/12 flex justify-center">
      <select
        name="user-filter"
        id="user-filter"
        className=" border border-gray-500 rounded-lg outline-none outline-offset-0 focus:outline-blue-500 py-1 px-2 "
        onChange={e => {
          props.setValue(e.target.value)
          props.funcHandler(e.target.value, "sex")
        }}
        defaultValue="all"
      >
        <option  value="all">Sex</option>
        <option value="male">Male</option>
        <option value="female">Female</option>
      </select>
    </div>
  );
};

export default SexFilter;
