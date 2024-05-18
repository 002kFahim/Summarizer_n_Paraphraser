import { useCallback, useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";
import AccountMenu from "./AccountMenu";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";
import { GiHamburgerMenu } from "react-icons/gi";
import { Disclosure, DisclosureButton } from "@headlessui/react";
import { LuScrollText } from "react-icons/lu";
import { PiClipboardText } from "react-icons/pi";
import { MdOutlineLogout } from "react-icons/md";
import { signOut } from "next-auth/react";

const TOP_OFFSET = 66;

const NavbarForSummary = () => {
  const { data: user } = useCurrentUser();

  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // const toggleMobileMenu = useCallback(() => {
  //   setShowMobileMenu((current) => !current);
  // }, []);

  // const toggleAccountMenu = useCallback(() => {
  //   setShowAccountMenu((current) => !current);
  // }, []);

  return (
    // <nav className="w-full z-40">
    //   <div
    //     className={`
    //       px-4
    //       md:px-16
    //       py-6
    //       flex
    //       flex-row
    //       items-center
    //       transition
    //       duration-500
    //       ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}`}
    //   >
    //     <div className="h-4 lg:h-7 font-semibold text-xl text-white">
    //       <Link href="/">LearnIt</Link>
    //     </div>
    //     <div
    //       className="
    //         flex-row
    //         ml-8
    //         gap-7
    //         hidden
    //         lg:flex"
    //     >
    //       <Link href="/summary">
    //         <NavbarItem label="Summary" />
    //       </Link>
    //       <Link href="/paraphrase">
    //         <NavbarItem label="Paraphrase" />
    //       </Link>
    //     </div>
    //     <div
    //       onClick={toggleMobileMenu}
    //       className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
    //     >
    //       <p className="text-white text-sm">Browse</p>
    //       <BsChevronDown
    //         className={`text-white transition ${
    //           showMobileMenu ? "rotate-180" : "rotate-0"
    //         }`}
    //       />
    //       <MobileMenu visible={showMobileMenu} />
    //     </div>
    //     <div
    //       onClick={toggleAccountMenu}
    //       className="flex flex-row ml-auto gap-7 items-center"
    //     >
    //       <div className="flex flex-row items-center gap-2 cursor-pointer relative">
    //         <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
    //           {user?.image ? (
    //             <img src={user?.image} alt="" />
    //           ) : (
    //             <img src="/images/smiley.png" alt="" />
    //           )}
    //         </div>
    //         <BsChevronDown
    //           className={`text-white transition ${
    //             showAccountMenu ? "rotate-180" : "rotate-0"
    //           }`}
    //         />
    //         <AccountMenu visible={showAccountMenu} />
    //       </div>
    //     </div>
    //   </div>
    // </nav>
    <div>
      <Disclosure as="nav">
        <DisclosureButton className="absolute top-4 right-4 inline-flex items-center peer justify-center rounded-md p-2 text-white hover:text-black focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white group hover:bg-white transition">
          <GiHamburgerMenu
            className="block md:hidden h-6 w-6"
            aria-hidden="true"
          />
        </DisclosureButton>
        <div className="p-6 w-1/2 h-screen bg-zinc-700 z-20 fixed top-0 -left-96 lg:w-60 lg:left-0 peer-focus:left-0 peer:transition ease-out delay-150 duration-200">
          <div className="flex flex-col justify-start items-center">
            <h1 className="text-xl px-5 cursor-pointer font-bold text-white border-b border-gray-100 pb-4 w-full">
              <Link href="/">LearnIt</Link>
            </h1>
            <div className="my-4 border-gray-100 pb-4">
              <div className="flex mb-4 justify-start items-center gap-4 px-5 bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto transition">
                <LuScrollText className="text-2xl text-black" />
                <h3 className="text-base text-black font-semibold">
                  <Link href="/summary">
                    <NavbarItem label="Summary" />
                  </Link>
                </h3>
              </div>

              <div className="flex mb-4 justify-start items-center gap-4 px-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto transition">
                <PiClipboardText className="text-2xl text-white group-hover:text-black" />
                <h3 className="text-base text-white group-hover:text-black font-semibold">
                  <Link href="/paraphrase">
                    <NavbarItem label="Paraphrase" />
                  </Link>
                </h3>
              </div>
            </div>

            <div className="my-4 border-gray-100 w-full absolute bottom-4">
              <div className="flex justify-start items-center gap-4 px-5 p-2 rounded-md group m-auto transition">
                {user?.image ? (
                  <img className="w-8 rounded-md" src={user?.image} alt="" />
                ) : (
                  <img
                    className="w-8 rounded-md"
                    src="/images/smiley.png"
                    alt=""
                  />
                )}
                <p className="text-white text-base">{user?.name}</p>
              </div>
              <div
                onClick={() => signOut()}
                className="flex justify-start items-center gap-4 px-5 hover:bg-white p-2 rounded-md group cursor-pointer hover:shadow-lg m-auto transition"
              >
                <MdOutlineLogout className="text-2xl text-white group-hover:text-black" />
                <h3 className="text-base text-white group-hover:text-black font-semibold">
                  Logout
                </h3>
              </div>
            </div>
          </div>
        </div>
      </Disclosure>
    </div>
  );
};

export default NavbarForSummary;
