import Link from "next/link";
import React from "react";
import { date } from "yup";
import { User as typeUser } from "../models/User.model";
import { ViewList } from "../models/ViewList.enum";

const User = (props: typeUser) => {
  
let getDateFromProps = new Date(props.date)
const month = getDateFromProps?.getUTCMonth() + 1; 
const day = getDateFromProps?.getUTCDate();
const year = getDateFromProps?.getUTCFullYear();
const newDate = year + "/" + month + "/" + day;

let getDateJoinedFromProps = new Date(props.dateJoined)
const monthJoined = getDateJoinedFromProps?.getUTCMonth() + 1;
const dayJoined = getDateJoinedFromProps?.getUTCDate();
const yearJoined = getDateJoinedFromProps?.getUTCFullYear();
const newDateJoined = yearJoined + "/" + monthJoined + "/" + dayJoined;


  const getClass = (
    container: string,
    typeView: keyof typeof ViewList
  ): string => {
    if (container === "user") {
      if (typeView === ViewList.default)
        return "flex mt-4 p-2  justify-between relative  items-center border border-gray-500p-2 rounded-lg shadow hover:shadow-md cursor-pointer hover:border-blue-500/80 capitalize";
    }

    return "";
  };
  return (
    <Link href={"/users/" + props.id} title="Detail Employee" className={getClass("user", ViewList.default)}>
      {props.id && <p className="mx-4">{props.id} .</p>}
      <div className=" mx-2 w-2/12 flex justify-center items-center  text-center capitalize">{props.name}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">{newDate}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">{props.sex}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">{props.address}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">{newDateJoined}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center uppercase">{props.group}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">${props.salary}</div>
    </Link>
  );
};

export default User;
