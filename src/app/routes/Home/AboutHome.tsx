import CDI from "../../../assets/images/background/CDI_logo.png";

const AboutHome = () => {
  return (
    <div className="p-12">
      <h1 className="font-montserrat text-4xl leading-normal font-medium text-white text-center pb-10">
        ABOUT US
      </h1>
      <div className="items-center justify-center flex">
        <div className="mr-5 w-1/2 text-white text-justify text-xl leading-8 xl:text-3xl">
          <b>CDI ENCG Agadir</b> is a community of individuals who share a
          common interest in the digital world. They come together to share
          their experiences, collaborate on projects, and learn from one
          another.
          <br /> This group is focused on fostering a collaborative and
          supportive environment where members can work together to explore new
          digital technologies, develop new skills, and advance their careers.
          <br />
          Whether you're a seasoned professional or just starting out in the
          digital world, this is a great place to connect with like-minded
          individuals and grow your network.
        </div>
        <div className="ml-5 w-1/2">
          <img src={CDI} />
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
