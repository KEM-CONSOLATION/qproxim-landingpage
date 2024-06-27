import HeroImage from "../assets/heroImage.png";
const HeroSection = () => {
  return (
    <div className="bg-[#F8F8F8]">
      <div className="max-w-5xl  mx-5 lg:max-w-full lg:mx-[70px] py-[19px] lg:py-[69px] ">
        <div className=" max-w-[710px] mx-auto text-center grid gap-[24px] place-items-center">
          <p className="text-[#414141] font-[500] text-[36px] lg:text-[56px]">
            Transforming Healthcare with Seamless Integration
          </p>
          <p className=" font-[400] text-[#414141] text-[20px] ">
            Elevate Patient Care, Optimize Operations, Enhance Revenue
          </p>

          <div className="">
            <ul className=" flex items-center  my-5 gap-[8px] list-none text-[18px]  ">
              <p className=" inline-grid text-center font-[400] text-[#126AE3]  py-[14px] px-[28px] border rounded-[5px] border-[#105CC4]">
                Learn More
              </p>
              <p className="text-center border border-[#297CEE] font-[500] inline-grid text-white py-[14px] px-[28px]  rounded-[5px] bg-[#297CEE]">
                Get Started
              </p>
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

export default HeroSection;
