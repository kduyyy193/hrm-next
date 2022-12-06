import Image from "next/image";
import Link from "next/link";
import React from "react";
import { User as typeUser } from "../models/User.model";
import { ViewList } from "../models/ViewList.enum";

const User = (props: typeUser) => {

  const getClass = (
    container: string,
    typeView: keyof typeof ViewList
  ): string => {
    if (container === "user") {
      if (typeView === ViewList.default)
        return "flex mt-4 p-2  justify-between relative  items-center border border-gray-500p-2 rounded-lg shadow hover:shadow-md cursor-pointer hover:bg-blue-500/80 capitalize";
    }

    return "";
  };
  return (
    <Link href={"/users/" + props.id} title="Detail Employee" className={getClass("user", ViewList.default)}>
      {props.id && <p className="mx-4">{props.id} .</p>}
      <Image
        width="200"
        height="200"
        className=" rounded-full mx-2 w-0 sm:w-10 h-12  "
        src={props.image}
        alt={props.name}
      />
      <div className=" mx-2 w-1/12 flex justify-center items-center  text-center capitalize">{props.name}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">{props.date}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">{props.sex}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">{props.address}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">{props.dateJoined}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center uppercase">{props.group}</div>
      <div className=" mx-2 w-1/12 flex justify-center items-center text-center">${props.salary}</div>
    </Link>
  );
};

export default User;
