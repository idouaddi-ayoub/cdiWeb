import { Link } from "react-router-dom";
import { HashLink } from "react-router-hash-link";
import copyrightSign from "../../assets/icons/svg/copyright-sign.svg";
import { footerLinks } from "../../constants";

import CDI from "../../assets/images/logo/CDI_PNG.png";
import { motion } from "framer-motion";
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
            <Link
              to="https://web.facebook.com/cdi.encga/?_rdc=1&_rdr"
              target="_blank"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M17.5648 1.00458L14.7875 1C11.6674 1 9.65099 3.12509 9.65099 6.41423V8.91055H6.85857C6.61728 8.91055 6.42188 9.1115 6.42188 9.35937V12.9763C6.42188 13.2241 6.6175 13.4249 6.85857 13.4249H9.65099V22.5514C9.65099 22.7993 9.84639 23 10.0877 23H13.731C13.9723 23 14.1677 22.799 14.1677 22.5514V13.4249H17.4327C17.674 13.4249 17.8694 13.2241 17.8694 12.9763L17.8707 9.35937C17.8707 9.24036 17.8246 9.12638 17.7428 9.04215C17.661 8.95793 17.5496 8.91055 17.4338 8.91055H14.1677V6.79439C14.1677 5.77727 14.4036 5.26094 15.6935 5.26094L17.5643 5.26025C17.8054 5.26025 18.0008 5.0593 18.0008 4.81166V1.45317C18.0008 1.20576 17.8056 1.00504 17.5648 1.00458Z"
                    fill="black"
                  />
                </motion.svg>
              </div>
            </Link>
            <Link
              to="https://www.instagram.com/cdi_encgagadir/"
              target="_blank"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <motion.svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    fill-rule="evenodd"
                    clip-rule="evenodd"
                    d="M2 12C2 7.80863 2 5.71294 3.05041 4.26718C3.38964 3.80026 3.80026 3.38964 4.26718 3.05041C5.71294 2 7.80863 2 12 2C16.1914 2 18.2871 2 19.7328 3.05041C20.1997 3.38964 20.6104 3.80026 20.9496 4.26718C22 5.71294 22 7.80863 22 12C22 16.1914 22 18.2871 20.9496 19.7328C20.6104 20.1997 20.1997 20.6104 19.7328 20.9496C18.2871 22 16.1914 22 12 22C7.80863 22 5.71294 22 4.26718 20.9496C3.80026 20.6104 3.38964 20.1997 3.05041 19.7328C2 18.2871 2 16.1914 2 12ZM12.0011 6.70312C9.07747 6.70312 6.70703 9.07357 6.70703 11.9972C6.70703 14.9209 9.07747 17.2914 12.0011 17.2914C14.9248 17.2914 17.2953 14.9209 17.2953 11.9972C17.2953 9.07357 14.9248 6.70312 12.0011 6.70312ZM12.0011 15.3061C10.1773 15.3061 8.69233 13.8211 8.69233 11.9972C8.69233 10.1721 10.1773 8.68842 12.0011 8.68842C13.825 8.68842 15.31 10.1721 15.31 11.9972C15.31 13.8211 13.825 15.3061 12.0011 15.3061ZM18.3953 6.307C18.3953 6.69661 18.0794 7.01244 17.6898 7.01244C17.3002 7.01244 16.9844 6.69661 16.9844 6.307C16.9844 5.9174 17.3002 5.60156 17.6898 5.60156C18.0794 5.60156 18.3953 5.9174 18.3953 6.307Z"
                    fill="black"
                  />
                </motion.svg>
              </div>
            </Link>
            <Link
              to="https://www.linkedin.com/company/cdi-encg-agadir/"
              target="_blank"
            >
              <div className="flex justify-center items-center w-12 h-12 bg-white rounded-full">
                <motion.svg
                  width="30"
                  height="30"
                  viewBox="0 0 1024 1024"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <motion.path
                    d="M385.024 706.368V406.72H285.376v299.68h99.616zM335.2 365.76c34.72 0 56.384-23.04 56.384-51.808-0.64-29.376-21.664-51.744-55.68-51.744-34.144 0-56.384 22.4-56.384 51.744 0 28.8 21.632 51.84 55.072 51.84z m409.024 340.608v-171.808c0-92.064-49.152-134.912-114.656-134.912-52.928 0-76.608 29.12-89.792 49.504v-42.496h-99.616c1.312 28.16 0 299.712 0 299.712h99.616v-167.36c0-8.96 0.64-17.92 3.264-24.256 7.168-17.92 23.584-36.448 51.072-36.448 36.064 0 50.56 27.456 50.56 67.744v160.352h99.584zM512 64c247.424 0 448 200.544 448 448 0 247.424-200.576 448-448 448-247.456 0-448-200.576-448-448C64 264.544 264.544 64 512 64z"
                    fill="black"
                  />
                </motion.svg>
              </div>
            </Link>
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
