import { useCallback, useState, useEffect } from "react";
import MobileMenu from "./MobileMenu";
import NavbarItem from "./NavbarItem";
import { BsChevronDown } from "react-icons/bs";
import AccountMenu from "./AccountMenu";
import Link from "next/link";
import useCurrentUser from "@/hooks/useCurrentUser";

const TOP_OFFSET = 66;

const Navbar = () => {
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

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full z-40">
      <div
        className={`
          px-4
          md:px-16
          py-6
          flex
          flex-row
          items-center
          transition
          duration-500
          ${showBackground ? "bg-zinc-900 bg-opacity-90" : ""}`}
      >
        <div className="h-4 lg:h-7 font-semibold text-xl text-white">
          <Link href="/">LearnIt</Link>
        </div>
        <div
          className="
            flex-row
            ml-8
            gap-7
            hidden
            lg:flex"
        >
          <Link href="/summary">
            <NavbarItem label="Summary" />
          </Link>
          <Link href="/paraphrase">
            <NavbarItem label="Paraphrase" />
          </Link>
        </div>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <BsChevronDown
            className={`text-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div
          onClick={toggleAccountMenu}
          className="flex flex-row ml-auto gap-7 items-center"
        >
          <div className="flex flex-row items-center gap-2 cursor-pointer relative">
            <div className="w-6 h-6 lg:w-10 lg:h-10 rounded-md overflow-hidden">
              {user?.image ? (
                <img src={user?.image} alt="" />
              ) : (
                <img src="/images/smiley.png" alt="" />
              )}
            </div>
            <BsChevronDown
              className={`text-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
