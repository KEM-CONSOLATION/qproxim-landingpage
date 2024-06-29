import HeroImage from "../assets/usingqproxim device.png";
const Transform = () => {
  return (
    <div className="bg-[#E9F2FF]">
      <div className="max-w-5xl  mx-5 lg:max-w-full lg:mx-[70px] pt-[69px] ">
        <div className=" max-w-[710px] mx-auto text-center grid gap-[24px] place-items-center">
          <p className="text-[#073F8A] font-[500] text-[26px] lg:text-[40px]">
            Ready to Transform Your Healthcare Experience?
          </p>
          <p className="max-w-[604px] mx-auto  font-[400] text-[#414141] text-[20px] ">
            Join the Q-Proxim community today and start enhancing your
            healthcare delivery and management.
          </p>

          <div className="">
            <ul className=" flex items-center gap-5 my-5 lg:gap-[8px] list-none text-[18px]  ">
              <p className=" inline-grid text-center font-[400] text-[#126AE3]  py-[14px] px-[28px] border rounded-[5px] border-[#105CC4]">
                Contact Us
              </p>
              <a href="https://qproxim-app.netlify.app/signup" target="_blank">
                <p className="text-center border border-[#297CEE] font-[500] inline-grid text-white py-[14px] px-[28px]  rounded-[5px] bg-[#297CEE]">
                  Sign Up Now
                </p>
              </a>
            </ul>
          </div>
        </div>

        <div className=" rounded-[20px] max-h-[664px] overflow-hidden mt-[50px] lg:mt-[90px]">
          <img src={HeroImage} alt="" className=" w-full object-fill h-auto" />
        </div>
      </div>
    </div>
  );
};

export default Transform;
