import { InferGetStaticPropsType } from "next";
import { useRouter } from "next/router";
import React from "react";
import UserDetailsComponent from "../../components/UserDetails";
import { Params, User } from "../../models/User.model";

export async function getStaticPaths() {
  const response = await fetch("http://localhost:3004/users");
  const data = await response.json();
  const paths = data.map((item: User) => {
    return {
      params: { userId: item.id },
    };
  });

  return {
    paths: paths,
    fallback: true,
  };
}

export async function getStaticProps({ params }: Params) {
  let response;
  if (params) {
    response = await fetch(`http://localhost:3004/users/${params.userId}`);
  }
  const data = await response?.json();
  console.log(data)

  if (!data.id) {
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
    return <div>Loading...</div>;
  }

  return (
    <>
      <UserDetailsComponent {...user} />
    </>
  );
};

export default UserDetailsPage;
