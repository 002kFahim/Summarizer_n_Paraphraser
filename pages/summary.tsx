import InputOutputFields from "@/components/InputOutputFields";
import Navbar from "@/components/Navbar";
import React from "react";
import { NextPageContext } from "next";
import { getSession } from "next-auth/react";

export async function getServerSideProps(context: NextPageContext) {
  const session = await getSession(context);

  if (!session) {
    return {
      redirect: {
        destination: "/auth",
        permanent: false,
      },
    };
  }

  return {
    props: {},
  };
}

const Summary = () => {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div>
        <InputOutputFields placeholder="Enter your input here" />
      </div>
    </div>
  );
};

export default Summary;
