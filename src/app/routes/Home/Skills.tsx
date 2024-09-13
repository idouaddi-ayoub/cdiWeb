import CDI_logo from "../../../assets/images/logo/CDI_PNG.png";

const Skills = () => {
  return (
    <div className="p-12">
      <h1 className="font-montserrat text-4xl leading-normal font-medium text-white text-center pb-10">
        SKILLS
      </h1>
      <div className="flex">
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img src={CDI_logo} width={80} alt="CDICLUB" className="m-auto" />
            <h1 className="text-center text-white pt-8">Coding</h1>
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img src={CDI_logo} width={80} alt="CDICLUB" className="m-auto" />
            <h1 className="text-center text-white pt-8">E-Commerce</h1>
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img src={CDI_logo} width={80} alt="CDICLUB" className="m-auto" />
            <h1 className="text-center text-white pt-8">Design</h1>
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img src={CDI_logo} width={80} alt="CDICLUB" className="m-auto" />
            <h1 className="text-center text-white pt-8">Video Editing</h1>
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img src={CDI_logo} width={80} alt="CDICLUB" className="m-auto" />
            <h1 className="text-center text-white pt-8">Freelance</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
