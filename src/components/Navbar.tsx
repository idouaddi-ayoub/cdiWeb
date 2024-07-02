import { cdiLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navlink } from "../constants/";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";

const Navbar = () => {
  const clerk = useClerk();
  return (
    <nav className="w-full h-32 bg-transparent flex justify-center items-center absolute px-10 z-50">
      {/* <Link to="/" className="">
        <img src={cdiLogo} width={125} alt="CDICLUB" className="m-0" />
      </Link> */}
      <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden text-white-400">
        {navlink.map((item) => (
          <li key={item.label}>
            <Link
              to={item.href}
              className="font-montserrat leading-normal text-lg text-Gray-5"
            >
              {item.label}
            </Link>
          </li>
        ))}
      </ul>
      <SignedOut>
        <ul className="space-x-5 text-white-400 flex">
          <li className=" px-5 py-2 border-2 border-white rounded-lg">
            <button onClick={() => clerk.openSignIn({})}>SIGN IN</button>
          </li>
          <li className="bg-white px-5 py-2 border-2 border-white rounded-lg text-black">
            <button onClick={() => clerk.openSignUp({})}>SIGN UP</button>
          </li>
        </ul>
      </SignedOut>
      <SignedIn>
        <UserButton afterSignOutUrl="/"></UserButton>
      </SignedIn>
      <div className="hidden max-lg:block">
        <img src={hamburger} alt="menu" width={25} height={25} />
      </div>
    </nav>
  );
};

export default Navbar;
