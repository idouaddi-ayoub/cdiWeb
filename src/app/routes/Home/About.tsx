import CDI from "../../../assets/images/background/CDI_logo.png";

const About = () => {
  return (
    <div className="p-12">
      <h1 className="font-montserrat text-4xl leading-normal font-medium text-white text-center pb-10">
        ABOUT US
      </h1>
      <div className="items-center justify-center flex">
        <div className="mr-10 w-1/2 text-white ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
          mollitia, molestiae quas vel sint commodi repudiandae consequuntur
          voluptatum laborum numquam blanditiis harum quisquam eius sed odit
          fugiat iusto fuga praesentium optio, eaque rerum! Provident similique
          accusantium nemo autem.Lorem ipsum dolor sit amet consectetur
          adipisicing elit. Maxime mollitia, molestiae quas vel sint commodi
          repudiandae consequuntur voluptatum laborum numquam blanditiis harum
          quisquam eius sed odit fugiat iusto fuga praesentium optio, eaque
          rerum! Provident similique accusantium nemo autem.
        </div>
        <div className="ml-10 w-1/2">
          <img src={CDI} />
        </div>
      </div>
    </div>
  );
};

export default About;
