import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Layout from "./app/layout/Layout";
import Home from "./app/routes/Home/Home";
import Aboutus from "./app/routes/About/About";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
import Faq from "./app/routes/Faq";
import Projects from "./app/routes/Projects";
import Events from "./app/routes/Events";
import Contact from "./app/routes/About/Contact";
import Nomatch from "./app/routes/Nomatch";

const clerkPubKey = import.meta.env.VITE_REACT_APP_CLERK_PUBLISHABLE_KEY;

const App = () => {
  const [theme] = useLocalStorage("theme", "dark");

  useEffect(() => {
    document.body.removeAttribute("class");
    document.body.classList.add(theme);
  }, [theme]);
  return (
    <ClerkProvider
      publishableKey={clerkPubKey}
      afterSignOutUrl={"/"}
      appearance={{
        variables: {
          colorPrimary: "green",
          colorBackground: "black",
          colorText: "white",
          colorNeutral: "white",
        },
      }}
    >
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />}></Route>
            <Route path="/about-us" element={<Aboutus />}></Route>
            <Route path="/faq" element={<Faq />}></Route>
            <Route path="/projects" element={<Projects />}></Route>
            <Route path="/events" element={<Events />}></Route>
            <Route path="/contact-us" element={<Contact />}></Route>
            <Route path="*" element={<Nomatch />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
};

export default App;
