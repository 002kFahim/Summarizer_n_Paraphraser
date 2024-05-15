import Navbar from "@/components/Navbar";
import Summary from "./summary";
import { NextPageContext } from "next";
import { getSession, signOut } from "next-auth/react";

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

export default function Home() {
  return (
    <div>
      <Summary />
      <button className="h-10 w-full bg-white" onClick={() => signOut()}>
        Logout
      </button>
    </div>
  );
}
