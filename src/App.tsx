import { BrowserRouter, Route, Routes } from "react-router-dom";
import { ClerkProvider } from "@clerk/clerk-react";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import { useEffect } from "react";
import { useLocalStorage } from "usehooks-ts";
// import NoMatch from "./Pages/NoMatch";

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
          </Route>
        </Routes>
      </BrowserRouter>
    </ClerkProvider>
  );
};

export default App;
