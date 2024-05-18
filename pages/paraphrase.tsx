import InputOutputFields from "@/components/InputOutputFields";
import Navbar from "@/components/Navbar";
import NavbarForParaphrase from "@/components/NavbarForParaphrase";
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

const Paraphrase = () => {
  return (
    <div>
      <div>
        <NavbarForParaphrase />
      </div>
      <div>
        <InputOutputFields placeholder="Enter your input here" />
      </div>
    </div>
  );
};

export default Paraphrase;
