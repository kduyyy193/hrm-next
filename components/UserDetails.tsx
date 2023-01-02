import React, { useState } from "react";
import { User } from "../models/User.model";
import axios from "axios";
import router from "next/router";
import UpdateUser from '../components/UpdateUser'
import NotifiModal from "./NotifiModal";

const UserDetails = (props: User) => {
  /*  */
  const _newDate = new Date(props.date);
  const _newDateJoined = new Date(props.dateJoined);
  const month = _newDate?.getUTCMonth() + 1;
  const day = _newDate?.getUTCDate();
  const year = _newDate?.getUTCFullYear();
  const newDate = year + "/" + month + "/" + day;
  const monthJoined = _newDateJoined?.getUTCMonth() + 1;
  const dayJoined = _newDateJoined?.getUTCDate();
  const yearJoined = _newDateJoined?.getUTCFullYear();
  const newDateJoined = yearJoined + "/" + monthJoined + "/" + dayJoined;
  /*  */

  const [showHandleUser, setShowHanldeUser] = useState(false)
  const [showUpdateUser, setShowUpdateUser] = useState(false)
  const [showNotifiModal, setShowNotifiModal] = useState(false)

  const deleteUser = async (id: string) => {
    try {
      const res = await axios.delete(
        `${process.env.NEXT_PUBLIC_API_ENDPOINT!}/${id}`
      );
      if (res) {
        router.push("/users")
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleDeleteUser = (id: string) => {
    console.log(id)
    let isDel = confirm(`Are you sure to delete this item?`)
    if (isDel) {
      deleteUser(id)
    }
    return
  }

  return (
    <div className="relative text-white capitalize max-w-xl mx-auto my-8 tracking-wider  ">
      {
        showNotifiModal && <NotifiModal top="-top-20" />
      }
      {
        showHandleUser &&
        <div className="absolute bg-gray-600 top-6 -right-8 text-black w-20 p-1 rounded-md text-center">
          <div onClick={() => {
            setShowUpdateUser(true)
          }} className="mb-1 text-xs active:bg-red-600 active:text-white hover:cursor-pointer font-semibold uppercase px-1 bg-white rounded-sm">
            Edit
          </div>
          <div onClick={() => { handleDeleteUser(props._id) }} className=" text-xs active:bg-red-600 active:text-white hover:cursor-pointer font-semibold uppercase px-1 bg-white rounded-sm">
            Delete
          </div>
        </div>
      }
      {
        showUpdateUser &&
        <UpdateUser setShowHanldeUser={setShowHanldeUser} setShowUpdateUser={setShowUpdateUser} setShowNotifiModal={setShowNotifiModal} oldUserData={props} />
      }
      <div className="flex justify-end">
        <div onClick={(e) => {
          setShowHanldeUser(!showHandleUser)
        }} className="text-center mt-1 -mr-12 p-1 pt-0 rounded-sm w-8 text-gray-50 text-sm font-bold hover:cursor-pointer hover:opacity-80 hover:bg-white hover:text-black  ">
          ...
        </div>
      </div>
      <div className="flex justify-between">
        {props.sex === "male" ? (
          <img
            src={"/assets/male.png"}
            className="w-44 h-44  rounded-full border-4 border-blue-400"
            alt="ERROR"
          />
        ) : (
          <img
            src={"/assets/female.png"}
            className="w-44 h-44  rounded-full border-4 border-blue-400"
            alt="ERROR"
          />
        )}
        <div className="flex flex-col justify-center grow ml-8 ">
          <p className="mb-1">
            <span className="underline mr-2">Name: </span>
            {props.name}
          </p>
          <p className="mb-1">
            <span className="underline mr-2">Sex: </span>
            {props.sex}
          </p>
          <p className="mb-1">
            <span className="underline mr-2">Date: </span> {newDate}
          </p>
          <p className="mb-1">
            {" "}
            <span className="underline  mr-2">Address: </span>{" "}
            <span className="capitalize">{props.address}</span>
          </p>
          <p className="mb-1">
            <span className="underline mr-2">Salary: </span>{" "}
            <span className="uppercase">{props.salary}$</span>
          </p>
          <p className="mb-1">
            <span className="underline mr-2">Group: </span>{" "}
            <span className="uppercase">{props.group}</span>
          </p>
          <p className="mb-1">
            <span className="underline mr-2">DateJoined: </span> {newDateJoined}
          </p>
        </div>
      </div>
      <div className="mt-8">
        <p className="normal-case mb-1 ">
          <span className="underline">Description:</span> {props.description}
        </p>
        <p className="normal-case mb-1 ">
          <span className="underline">Hobby:</span> {props.hobby}
        </p>
      </div>
    </div>
  );
};

export default UserDetails;
