import CDI_logo from "../../assets/images/logo/CDI_logo_crop.png";
import hamburger from "../../assets/icons/svg/hamburger.svg";
import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import { useState } from "react";
import { motion } from "framer-motion";
// import { useLocalStorage } from "usehooks-ts";

const Navbar = () => {
  const navlink = [
    { href: "/", label: "Home" },
    { href: "/about-us", label: "About Us" },
    { href: "/", label: "Test" },
    { href: "/", label: "Bruh" },
  ];
  const [activeNav, setActiveNav] = useState(navlink[0].label);

  const clerk = useClerk();
  // const [darkMode, setDarkMode] = useState(false);
  // const toggleDarkMode = () => {
  //   setDarkMode(!darkMode);
  //   document.documentElement.classList.toggle("dark");
  // };

  // const [theme, setTheme] = useLocalStorage("theme", "dark");
  // useEffect(() => {
  //   // console.log(theme);
  // }, [theme]);

  const renderNavLinks = navlink.map((item) => (
    <Link
      to={item.href}
      key={item.label}
      onClick={() => setActiveNav(item.label)}
      className="relative rounded-full px-3 py-1.5 m-5 font-medium transition focus-visible:outline-2 font-montserrat leading-normal text-lg text-tertiary"
    >
      {activeNav === item.label && (
        <motion.span
          layoutId="bubble"
          className="absolute inset-0 z-10 bg-tertiary mix-blend-difference"
          style={{ borderRadius: 9999 }}
          transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
        />
      )}
      {item.label}
    </Link>
  ));
  return (
    <nav className="w-full h-32 bg-primary flex justify-between items-center px-10 z-50 fixed">
      {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        toggle
      </button> */}
      <div>
        <Link to="/">
          <img src={CDI_logo} width={80} alt="CDICLUB" />
        </Link>
      </div>
      <div className="justify-center">{renderNavLinks}</div>
      <div>
        <SignedOut>
          <ul className="space-x-5 flex">
            <li className="px-5 py-2 border-2 rounded-lg text-tertiary">
              <button onClick={() => clerk.openSignIn({})}>SIGN IN</button>
            </li>
            <li className="px-5 py-2 border-2 rounded-lg text-tertiary">
              <button onClick={() => clerk.openSignUp({})}>SIGN UP</button>
            </li>
          </ul>
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
      <div className="hidden max-lg:block ">
        <img src={hamburger} alt="menu" width={25} height={25} />
      </div>
    </nav>
  );
};

export default Navbar;
