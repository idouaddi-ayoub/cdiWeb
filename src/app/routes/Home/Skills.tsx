import code from "../../../assets/icons/png/code.png";
import ecom from "../../../assets/icons/png/mobile-shopping.png";
import freelance from "../../../assets/icons/png/self-employed.png";
import design from "../../../assets/icons/png/setting.png";
import editing from "../../../assets/icons/png/video-editing.png";

const Skills = () => {
  return (
    <div className="p-12">
      <h1 className="font-montserrat text-4xl leading-normal font-medium text-white text-center pb-10">
        SKILLS
      </h1>
      <div className="flex">
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img
              src={code}
              width={80}
              alt="CDICLUB"
              className="m-auto invert"
            />
            <h1 className="text-center text-white pt-6">Coding</h1>
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img
              src={ecom}
              width={80}
              alt="CDICLUB"
              className="m-auto invert"
            />
            <h1 className="text-center text-white pt-6">E-Commerce</h1>
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img
              src={design}
              width={80}
              alt="CDICLUB"
              className="m-auto invert"
            />
            <h1 className="text-center text-white pt-6">Design</h1>
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img
              src={editing}
              width={80}
              alt="CDICLUB"
              className="m-auto invert"
            />
            <h1 className="text-center text-white pt-6">Video Editing</h1>
          </div>
        </div>
        <div className="w-1/5 flex justify-center items-center">
          <div>
            <img
              src={freelance}
              width={80}
              alt="CDICLUB"
              className="m-auto invert"
            />
            <h1 className="text-center text-white pt-6">Freelance</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
