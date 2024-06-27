import { useEffect, useState } from "react";
import { CloseLineIcon, Menu1LineIcon } from "../assets/icons";
import Logo from "../assets/LogoMain.svg";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [isSticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      if (offset > 100) {
        setSticky(true);
      } else {
        setSticky(false);
      }
    };

    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setOpen(true);
      } else {
        setOpen(true);
      }
    };

    handleResize();

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      className={`py-[28px] z-[9999999] transition-all duration-300 ease-in-out  ${
        !open ? "h-screen bg-#FFFFFF" : " bg-[#ffffff]"
      } ${
        isSticky
          ? "fixed top-0 left-0 right-0 shadow-md bg-#FFFFFF  "
          : "bg-[#ffffff]"
      }`}
    >
      <div className="max-w-5xl  mx-5 lg:max-w-full lg:mx-[70px]">
        <div className="flex flex-col gap-[20px] lg:flex lg:flex-row justify-between lg:items-center">
          <div className="flex flex-col lg:flex lg:flex-row gap-[20px] lg:gap-[50px]  lg:items-center mt-5  lg:mb-0 lg:mt-0">
            <div className="w-[150px]  ">
              <a href="#" onClick={() => setOpen(true)}>
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div
              className={`lg:flex lg:items-center ${
                !open ? "text-[#061C60]" : "text-white"
              } font-[400] ${!open ? "block h-full" : "hidden lg:block"}`}
            >
              <ul className="text-[#595959] font-[400] grid lg:flex gap-5 lg:gap-10 list-none text-[18px]  ">
                <li className=" " onClick={() => setOpen(true)}>
                  <a href="#about">About Us</a>
                </li>
                <li className="  " onClick={() => setOpen(true)}>
                  <a href="#services">Services</a>
                </li>

                <li className="  " onClick={() => setOpen(true)}>
                  <a href="#clients">Clients</a>
                </li>

                <li className="  " onClick={() => setOpen(true)}>
                  <a href="#portfolio">Portfolio</a>
                </li>
              </ul>
            </div>
          </div>

          <div
            className={`lg:flex lg:items-center ${
              !open ? "text-[#061C60]" : "text-white"
            } font-[400] ${!open ? "block h-full" : "hidden lg:block"}`}
          >
            <ul className=" grid  lg:flex items-center gap-5 lg:gap-[8px] list-none text-[14px]  ">
              <li
                className=" inline-grid text-center font-[400] text-[#126AE3]  py-[8px] px-[24px] border rounded-[5px] border-[#105CC4]"
                onClick={() => setOpen(true)}
              >
                <a href="#">Log in</a>
              </li>
              <li
                className="text-center border border-[#297CEE] font-[500] inline-grid text-white py-[8px] px-[24px]  rounded-[5px] bg-[#297CEE]"
                onClick={() => setOpen(true)}
              >
                <a href="#">Sign up for free</a>
              </li>
            </ul>
          </div>
          {open === true ? (
            <div
              className={`absolute top-[40px] right-4 lg:hidden cursor-pointer ${
                !open ? "text-[#061C60]" : "text-[#297CEE]"
              }`}
              onClick={() => setOpen(false)}
            >
              <Menu1LineIcon />
            </div>
          ) : (
            <div
              className={`absolute top-[40px] right-4 lg:hidden cursor-pointer ${
                !open && "text-[#297CEE]"
              }`}
              onClick={() => setOpen(true)}
            >
              <CloseLineIcon />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;