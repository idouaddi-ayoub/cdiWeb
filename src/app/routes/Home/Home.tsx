import About from "./About";
import Carousel from "./Carousel";
import Hero from "./Hero";
import Overview from "./Overview";
import Skills from "./Skills";

const Home = () => {
  return (
    <>
      <Hero />
      <Overview />
      <Carousel />
      <Skills />
      <About />
    </>
  );
};

export default Home;
