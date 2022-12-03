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
          props.funcHandler(e.target.value, "address")
        }}
        defaultValue="all"
      >
        <option  value="all">Address</option>
        <option value="vietnam">Vietname</option>
        <option value="singapore">Singapore</option>
        <option value="france">France</option>
        <option value="switzerland">Switzerland</option>
      </select>
    </div>
  );
};

export default SexFilter;
