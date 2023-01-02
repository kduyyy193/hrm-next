import { InferGetStaticPropsType } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import React from "react";
import UserDetailsComponent from "../../components/UserDetails";
import { Params, User } from "../../models/User.model";

export async function getStaticPaths() {
  const res = await fetch(process.env.NEXT_PUBLIC_API_ENDPOINT!);
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
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_ENDPOINT}/${params.userId}`);
  const data = await res.json();

  if (!data) {
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

const UserDetailsPage = ({
  user,
}: InferGetStaticPropsType<typeof getStaticProps>) => {
  const router = useRouter();

  if (router.isFallback) {
    return <>
      <svg className="animate-spin h-5 w-5 mr-3" viewBox="0 0 24 24">
      </svg>
      <h2 className="mx-auto text-2xl">Loading...</h2>
    </>
  }

  return (
    <>
      <Head>
        <title>Menber Detail</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <UserDetailsComponent {...user} />
    </>
  );
};

export default UserDetailsPage;
