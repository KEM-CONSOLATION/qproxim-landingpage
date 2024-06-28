import { FaFacebookF, FaLinkedinIn } from "react-icons/fa";
import Logo from "../assets/Qproxim logo2 1.svg";
import { MdMailOutline, MdOutlineLocalPhone } from "react-icons/md";
import { BsTwitterX } from "react-icons/bs";

const Footer = () => {
  return (
    <div className="bg-[#297CEE]">
      <div className="max-w-5xl  mx-5 lg:max-w-full lg:mx-[70px] py-[80px] ">
        <div className=" grid gap-[20px] place-items-center text-center lg:text-left lg:flex items-center lg:justify-between">
          <div className="grid gap-[20px] place-items-center text-center lg:text-left lg:flex items-center lg:gap-[60px] 2xl:gap-[100px]">
            <div className="w-[150px]  ">
              <img src={Logo} alt="Logo" className=" w-full" />
            </div>
            <div className="">
              <ul className="text-[#FFFFFF] font-[400] grid lg:flex gap-5 2xl:gap-10 list-none text-[18px]  ">
                <li className=" ">
                  <a href="#about">About</a>
                </li>
                <li className="  ">
                  <a href="#how">How it works</a>
                </li>

                <li className="  ">
                  <a href="#services">Services</a>
                </li>

                <li className="  ">
                  <a href="#features">Features</a>
                </li>
              </ul>
            </div>
          </div>

          <div className=" grid gap-[20px] place-items-center text-center lg:text-left md:flex items-center md:gap-[16px]">
            <p className=" text-white flex items-center gap-[4px] text-[16px] font-[400]">
              <span>
                <MdOutlineLocalPhone />
              </span>
              0808********
            </p>

            <p className=" text-white flex items-center gap-[4px] text-[16px] font-[400]">
              <span>
                <MdMailOutline />
              </span>
              support@qproxim.com
            </p>
          </div>
        </div>

        <hr className=" border border-[#66A1F3] my-[16px]" />

        <div className=" grid  place-items-center gap-[20px] md:flex items-center md:justify-between mt-[40px] lg:mt-0">
          <div className="order-2 lg:order-1 text-[16px] font-[400] text-[#C2DAFA]">
            <p>© 2024 Q-Proxim. All rights reserved.</p>
          </div>

          <div className="order-1 lg:order-2 flex items-center gap-[16px] text-white">
            <FaFacebookF />
            <FaLinkedinIn />
            <BsTwitterX />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
