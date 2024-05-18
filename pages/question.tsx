import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import NavbarForQuestion from "@/components/NavbarForQuestion";
import IOQuestion from "@/components/IOQuestion";

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

const Question = () => {
  return (
    <div>
      <div>
        <NavbarForQuestion />
      </div>
      <div>
        <IOQuestion placeholder="Enter your input here" />
      </div>
    </div>
  );
};

export default Question;
