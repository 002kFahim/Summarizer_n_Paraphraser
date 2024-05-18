import { NextPageContext } from "next";
import { getSession } from "next-auth/react";
import NavbarForSummary from "@/components/NavbarForSummary";
import IOSummary from "@/components/IOSummary";

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
        <NavbarForSummary />
      </div>
      <div>
        <IOSummary placeholder="Enter your input here" />
      </div>
    </div>
  );
};

export default Summary;
