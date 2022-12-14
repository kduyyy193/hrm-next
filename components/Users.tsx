import React, { useState } from "react";
import { Data as DataType, User as UserType } from "../models/User.model";
import { handler } from "../controller/index";
import Filters from "./Filters";
import SearchComponet from "./Search";
import UserComponent from "./User";

const Users = ({ users }: DataType) => {
  let [filterUsers, setFilterUsers] = useState<UserType[]>(users);
  const [valueSearch, setValueSearch] = useState<string>("");
  const [valueFilterSex, setValueFilterSex] = useState<string>("all");
  const [valueFilterAddress, setValueFilterAddress] = useState<string>("all");
  const [valueFilterGroup, setValueFilterGroup] = useState<string>("all");
  const [sortTypeName, setSortTypeName] = useState("asc");
  const [sortTypeSalary, setSortTypeSalary] = useState("asc");
  const [sortTypeID, setSortTypeID] = useState("asc");

  return (
    <>
      <div className="flex justify-between py-4 pt-8">
        <h3 className="text-2xl font-semibold">Menbers</h3>
        <SearchComponet
          funcHandler={(value: string) => {
            handler.handleSearch(users, value, setFilterUsers);
          }}
          value={valueSearch}
          setValue={setValueSearch}
        />
      </div>
      <div className="flex mt-4 p-2  justify-between relative  items-center border border-gray-500p-2 rounded-lg shadow hover:shadow-md cursor-pointer">
        <div
          onClick={() => {
            handler.handleSortByNumber(
              "id",
              sortTypeID,
              setSortTypeID,
              filterUsers,
              setFilterUsers
            );
          }}
          className=" justify-center text-center capitalize flex items-center "
        >
          ID
          <svg width="24" height="24" viewBox="0 0 15 15">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4.932 5.432a.45.45 0 1 0 .636.636L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0l-2.25 2.25Zm5.136 4.136a.45.45 0 0 0-.636-.636L7.5 10.864L5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0l2.25-2.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
          <div
          onClick={() => {
            handler.handleSortByString(
              "name",
              sortTypeName,
              setSortTypeName,
              filterUsers,
              setFilterUsers
            );
          }}
          className=" mx-2 w-2/12  text-center capitalize flex justify-center items-center"
        >
          Name
          <svg width="24" height="24" viewBox="0 0 15 15">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4.932 5.432a.45.45 0 1 0 .636.636L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0l-2.25 2.25Zm5.136 4.136a.45.45 0 0 0-.636-.636L7.5 10.864L5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0l2.25-2.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <div className=" mx-2 w-1/12  text-center capitalize flex items-center  justify-center">
          Birthday
          <svg width="24" height="24" viewBox="0 0 15 15">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4.932 5.432a.45.45 0 1 0 .636.636L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0l-2.25 2.25Zm5.136 4.136a.45.45 0 0 0-.636-.636L7.5 10.864L5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0l2.25-2.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
        <Filters.Sex
          funcHandler={(value: string, name: string) => {
            handler.handleFilters(users, value, name, setFilterUsers);
          }}
          value={valueFilterSex}
          setValue={setValueFilterSex}
        />
        <Filters.Address
          funcHandler={(value: string, name: string) => {
            handler.handleFilters(users, value, name, setFilterUsers);
          }}
          value={valueFilterAddress}
          setValue={setValueFilterAddress}
        />
        <div className=" mx-2 w-1/12 text-center flex justify-center">
          DateJoined
        </div>
        <Filters.Group
          funcHandler={(value: string, name: string) => {
            handler.handleFilters(users, value, name, setFilterUsers);
          }}
          value={valueFilterGroup}
          setValue={setValueFilterGroup}
        />
        <div
          onClick={() => {
            handler.handleSortByNumber(
              "salary",
              sortTypeSalary,
              setSortTypeSalary,
              filterUsers,
              setFilterUsers
            );
          }}
          className=" mx-2 w-1/12  text-center capitalize flex items-center  justify-center"
        >
          Salary
          <svg width="24" height="24" viewBox="0 0 15 15">
            <path
              fill="currentColor"
              fillRule="evenodd"
              d="M4.932 5.432a.45.45 0 1 0 .636.636L7.5 4.136l1.932 1.932a.45.45 0 0 0 .636-.636l-2.25-2.25a.45.45 0 0 0-.636 0l-2.25 2.25Zm5.136 4.136a.45.45 0 0 0-.636-.636L7.5 10.864L5.568 8.932a.45.45 0 0 0-.636.636l2.25 2.25a.45.45 0 0 0 .636 0l2.25-2.25Z"
              clipRule="evenodd"
            />
          </svg>
        </div>
      </div>
      {filterUsers.length ? (
        filterUsers.map((user, idx) => <UserComponent {...user} key={idx} />)
      ) : (
        <p className="mt-5 text-center font-semibold">No User Found</p>
      )}
    </>
  );
};

export default Users;
