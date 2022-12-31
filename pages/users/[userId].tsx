import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import UserDetailsComponent from "../../components/UserDetails";
import { Params, User } from "../../models/User.model";
import { url_api } from './index'


export async function getStaticPaths() {
  const res = await fetch(url_api!);
  const data = await res.json();
  const paths = data.map((user: User) => {
    return {
      params: { userId: user._id },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: Params) {
  const res = await fetch(`${url_api}/${params.userId}`);
  const data = await res.json();

  if (!data._id) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      user: data,
    },
  };
}

const UserDetailsPage = ({ user }: InferGetStaticPropsType<typeof getStaticProps> ) => {
  const router = useRouter();

  if (router.isFallback) {
    return <h2 className="mx-auto text-2xl ">Loading...</h2>;
  }

  return (
    <>
      <UserDetailsComponent {...user} />
    </>
  );
};

export default UserDetailsPage;
