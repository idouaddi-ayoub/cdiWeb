import CDI from "../../../assets/images/background/CDI_logo.png";

const AboutHome = () => {
  return (
    <div className="p-12">
      <div className="items-center justify-center lg:flex ">
        <div className="lg:w-1/2 lg:mr-2.5 ">
          <img src={CDI} />
        </div>

        <div className="text-white lg:w-1/2 lg:ml-20">
          <h1 className="font-montserrat text-4xl leading-normal font-medium text-center pb-10 xs:pt-10 sm:pt-10">
            ABOUT US
          </h1>
          <div className="font-montserrat lg:leading-8 lg:text-2xl xs:text-3xl sm:text-3xl md:text-3xl xl:text-3xl text-justify">
            <b>CDI ENCG Agadir</b> is a community of individuals who share a
            common interest in the digital world. They come together to share
            their experiences, collaborate on projects, and learn from one
            another. This group is focused on fostering a collaborative and
            supportive environment where members can work together to explore
            new digital technologies, develop new skills, and advance their
            careers. Whether you're a seasoned professional or just starting out
            in the digital world, this is a great place to connect with
            like-minded individuals and grow your network.
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutHome;
