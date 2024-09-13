import { Link } from "react-router-dom";
import { SignedIn, SignedOut, UserButton, useClerk } from "@clerk/clerk-react";
import { useState } from "react";
import { motion } from "framer-motion";
// import { useLocalStorage } from "usehooks-ts";

const svgPath = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      duration: 2,
      ease: "easeInOut",
    },
  },
};

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
    <nav className="w-full h-24 bg-primary flex justify-between items-center px-10 z-50 fixed">
      {/* <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>
        toggle
      </button> */}
      <div>
        <Link to="/">
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 100 100"
            width={80}
            height={80}
            initial="hidden"
            animate="visible"
          >
            <defs>
              <style>{".cls-1{fill:#fff;}"}</style>
            </defs>
            <g id="Layer_2" data-name="Layer 2">
              <g id="Layer_1-2" data-name="Layer 1">
                <motion.path
                  fill="none"
                  d="M62.5 20 H34 L10 68.5 L67 68.5 L71 60 L25 60 L39.5 29 L59 29Z"
                  animate="visible"
                  initial="hidden"
                  variants={svgPath}
                  strokeWidth={0.5}
                  stroke="white"
                />
                <motion.path
                  fill="none"
                  d="M57.9 40 H47.9 L43.5 49 L53.5 49Z"
                  animate="visible"
                  initial="hidden"
                  variants={svgPath}
                  strokeWidth={0.5}
                  stroke="white"
                />
                <motion.path
                  fill="none"
                  d="M75 20 H66.6 L61 33 L41.5 33 L30.5 57 L59 57Z"
                  animate="visible"
                  initial="hidden"
                  variants={svgPath}
                  strokeWidth={0.5}
                  stroke="white"
                />

                <motion.path
                  fill="none"
                  d="M90 20 H80 L75.5 29 L85.5 29Z"
                  animate="visible"
                  initial="hidden"
                  variants={svgPath}
                  strokeWidth={0.5}
                  stroke="white"
                />
                <motion.path
                  fill="none"
                  d="M83.25 32.75 H73.5 L62.25 57 L72.25 57Z"
                  animate="visible"
                  initial="hidden"
                  variants={svgPath}
                  strokeWidth={0.5}
                  stroke="white"
                />
              </g>
            </g>
          </motion.svg>
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
          <div className="mr-4 ml-4 m">
            <UserButton />
          </div>
        </SignedIn>
      </div>
      {/* <div className="hidden max-lg:block ">
        <img src={hamburger} alt="menu" width={25} height={25} />
      </div> */}
    </nav>
  );
};

export default Navbar;
