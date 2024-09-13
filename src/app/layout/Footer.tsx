import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import copyrightSign from "../../assets/icons/svg/copyright-sign.svg";
import { footerLinks, socialMedia } from "../../constants";

import CDI from "../../assets/images/logo/CDI_PNG.png";
const Footer = () => {
  return (
    <footer className="bg-black w-full p-10">
      <div className="flex justify-between items-start gap-20 flex-wrap max-lg:flex-col">
        <div className="flex flex-col items-center">
          <HashLink to="/#">
            <img
              src={CDI}
              alt="logo"
              width={100}
              className="m-0 justify-center"
            />
          </HashLink>
          <p className="mt-8 text-base leading-7 font-montserrat text-white sm:max-w-sm">
            BECOME MORE.
          </p>
          <div className="flex items-center gap-5 mt-8">
            {socialMedia.map((icon) => (
              <Link to={icon.link}>
                <div
                  className="flex justify-center items-center w-12 h-12 bg-white rounded-full"
                  key={icon.alt}
                >
                  <img src={icon.src} alt={icon.alt} width={24} height={24} />
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="flex flex-1 justify-between lg:gap-10 gap-20 flex-wrap">
          {footerLinks.map((section) => (
            <div key={section.title}>
              <h4 className="font-montserrat text-2xl leading-normal font-medium mb-6 text-white">
                {section.title}
              </h4>
              <ul>
                {section.links.map((link) => (
                  <li
                    className="mt-3 font-montserrat text-base leading-normal text-white hover:text-slate-gray"
                    key={link!.name}
                  >
                    <HashLink to={link!.link}>{link!.name}</HashLink>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="flex justify-between text-white mt-24 max-sm:flex-col max-sm:items-center">
        <div className="flex flex-1 justify-start items-center gap-2 font-montserrat cursor-pointer">
          <img
            src={copyrightSign}
            alt="copyright sign"
            width={20}
            height={20}
            className="rounded-full m-0"
          />
          <p>Copyright. All rights reserved.</p>
        </div>
        <p className="font-montserrat cursor-pointer">Terms & Conditions</p>
      </div>
    </footer>
  );
};

export default Footer;
