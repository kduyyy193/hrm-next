import React, { Dispatch, SetStateAction } from "react";

import * as yup from "yup";
import { useFormik } from "formik";
import { useRouter } from "next/router";
import { User } from "../models/User.model";
import axios from "axios";

const UpdateUser = ({
    setShowUpdateUser,
    setShowNotifiModal,
    setShowHanldeUser,
    oldUserData,
}: {
    setShowUpdateUser: Dispatch<SetStateAction<boolean>>;
    setShowNotifiModal: Dispatch<SetStateAction<boolean>>;
    setShowHanldeUser:Dispatch<SetStateAction<boolean>>;
    oldUserData: User;
}) => {

    const router = useRouter();

    const updateUser = async (data: User, id: string) => {
        try {
            const res = await axios.put(`${process.env.NEXT_PUBLIC_API_ENDPOINT!}/${id}`, data)
            if (res) {
                setShowHanldeUser(false)
                setShowNotifiModal(false)
                router.reload()
            }
        } catch (error) {
            console.log(error);

        }
    }

    const UserSchema = yup.object({
        name: yup.string().required("Field is required!"),
        date: yup.string().required("Field is required!"),
        salary: yup.string().required("Field is required!"),
        description: yup.string().required("Field is required!"),
        hobby: yup.string().required("Field is required!"),
    });

    const formik = useFormik({
        initialValues: oldUserData,
        validationSchema: UserSchema,
        onSubmit: async (values: User) => {
            setShowUpdateUser(false);
            setShowNotifiModal(true)
            await updateUser(values, oldUserData._id);
        },
    });

    return (
        <div className=" absolute w-[624px] top-2 right-0 left-0 rounded-lg bg-gray-100 p-6 text-gray-800">
            <h2 className="text-xl mb-4 text-center uppercase font-semibold">
                add new user 😎
            </h2>
            <div
                onClick={() => {
                    setShowUpdateUser(false);
                }}
                className="hover:bg-red-600 hover:text-white hover:cursor-pointer absolute top-0 right-0 px-2 py-1 w-16 text-center text-black"
            >
                x
            </div>
            <form onSubmit={formik.handleSubmit}>
                <div className="flex justify-center items-center">
                    <label className="mr-4 w-20 capitalize" htmlFor="name">
                        Name
                    </label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        className="grow mb-2 bg-white outline-none border-gray-800/50 rounded-lg  border py-1 pl-2"
                        name="name"
                        id="name"
                    />
                </div>
                {formik.touched.name && formik.errors.name ? (
                    <p className="text-red-500 mb-1 text-sm text-center  ">
                        {formik.errors.name}
                    </p>
                ) : null}
                <div className="flex justify-center items-center">
                    <label className="mr-4 w-20 capitalize" htmlFor="sex">
                        Sex
                    </label>
                    <select
                        onChange={formik.handleChange}
                        value={formik.values.sex}
                        className="grow mb-2 bg-white outline-none border-gray-800/50 rounded-lg  border py-1 pl-2"
                        name="sex"
                        id="sex"
                    >
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                    </select>
                </div>
                <div className="flex justify-center items-center">
                    <label className="mr-4 w-20 capitalize" htmlFor="date">
                        date
                    </label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.date}
                        className="grow mb-2 bg-white outline-none border-gray-800/50 rounded-lg  border py-1 pl-2"
                        type="date"
                        name="date"
                        id="date"
                    />
                </div>
                {formik.touched.date && formik.errors.date ? (
                    <p className="text-red-500 mb-1 text-sm text-center  ">
                        {formik.errors.date}
                    </p>
                ) : null}
                <div className="flex justify-center items-center">
                    <label className="mr-4 w-20 capitalize" htmlFor="address">
                        Address
                    </label>
                    <select
                        onChange={formik.handleChange}
                        value={formik.values.address}
                        className="grow mb-2 bg-white outline-none border-gray-800/50 rounded-lg  border py-1 pl-2"
                        name="address"
                        id="address"
                    >
                        <option value="vietnam">Vietnam</option>
                        <option value="singapore">Singapore</option>
                        <option value="france">France</option>
                        <option value="switzerland">Switzerland</option>
                    </select>
                </div>
                <div className="flex justify-center items-center">
                    <label className="mr-4 w-20 capitalize" htmlFor="salary">
                        Salary ($)
                    </label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.salary}
                        className="grow mb-2 bg-white outline-none border-gray-800/50 rounded-lg  border py-1 pl-2"
                        name="salary"
                        id="salary"
                    />
                </div>
                {formik.touched.salary && formik.errors.salary ? (
                    <p className="text-red-500 mb-1 text-sm text-center  ">
                        {formik.errors.salary}
                    </p>
                ) : null}
                <div className="flex justify-center items-center">
                    <label className="mr-4 w-20 capitalize" htmlFor="group">
                        Group
                    </label>
                    <select
                        onChange={formik.handleChange}
                        value={formik.values.group}
                        className="grow mb-2 bg-white outline-none border-gray-800/50 rounded-lg  border py-1 pl-2"
                        name="group"
                        id="group"
                    >
                        <option value="pm">PM</option>
                        <option value="it">IT</option>
                        <option value="design">Design</option>
                    </select>
                </div>
                <div className="flex justify-center items-center">
                    <label className="mr-4 w-20 capitalize " htmlFor="description">
                        Descripion
                    </label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.description}
                        className="grow mb-2  bg-white outline-none border-gray-800/50 rounded-lg  border py-1 pl-2"
                        name="description"
                        id="description"
                    />
                </div>
                {formik.touched.description && formik.errors.description ? (
                    <p className="text-red-500 mb-1 text-sm text-center">
                        {formik.errors.description}
                    </p>
                ) : null}
                <div className="flex justify-center items-center">
                    <label className="mr-4 w-20 capitalize " htmlFor="hobby">
                        Hobby
                    </label>
                    <input
                        onChange={formik.handleChange}
                        value={formik.values.hobby}
                        className="grow mb-2  bg-white outline-none border-gray-800/50 rounded-lg  border py-1 pl-2"
                        name="hobby"
                        id="hobby"
                    />
                </div>
                {formik.touched.hobby && formik.errors.hobby ? (
                    <p className="text-red-500 mb-1 text-sm text-center">
                        {formik.errors.hobby}
                    </p>
                ) : null}
                <button
                    type="submit"
                    className="bg-gray-800 py-2 px-6 w-24 mt-4 mx-auto block  rounded-lg text-white"
                >
                    Submit
                </button>
            </form>
        </div>
    );
};

export default UpdateUser;
