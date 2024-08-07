import Register from "../assets/register.svg";
import Onboarding from "../assets/onboarding2.svg";
import Access from "../assets/access.svg";
import Engage from "../assets/engage.svg";
import Icon1 from "../assets/frame1.svg";
import Icon2 from "../assets/Frame2.svg";
import Icon3 from "../assets/frame3.svg";
import Icon4 from "../assets/frame4.svg";

const HowItWorks = () => {
  return (
    <div className="bg-[#F8F8F8]" id="how" data-aos="fade-up">
      <div className="max-w-5xl mx-5 lg:max-w-full lg:mx-[70px] py-[60px] lg:py-[170px]">
        <div className="max-w-[710px] mx-auto text-center">
          <p className="text-[#595959] font-[500] text-[26px] lg:text-[40px]">
            How KURENODE Works
          </p>

          <p className="text-[#414141] font-[400] text-[18px] lg:text-[20px] mt-[10px] lg:mt-[32px]">
            Steps:
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-[20px] mt-[40px] place-items-center">
          <div className="relative border border-[#D0D0D0] w-[90%] h-[281px] rounded-[10px] px-[11px] pt-[50px] pb-[73px] text-center flex-shrink-0">
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-10">
              <img src={Icon1} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div className="max-w-[50px] mx-auto mb-[8px] ">
              <img src={Register} alt="" className="w-full" />
            </div>
            <p className="font-[500] text-[20px] text-[#2A2A2A]">Register</p>
            <p className="font-[400] text-[16px] text-[#717171] mt-[8px] leading-[24px]">
              Easily sign up and create your account as an enrollee or agent.
            </p>
          </div>

          <div className="relative border border-[#D0D0D0] w-[90%] h-[281px] rounded-[10px] px-[11px] pt-[50px] pb-[73px] text-center flex-shrink-0">
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-10">
              <img src={Icon2} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div className="max-w-[56px] mx-auto mb-[8px] ">
              <img src={Onboarding} alt="" className="w-full" />
            </div>
            <p className="font-[500] text-[20px] text-[#2A2A2A]">Onboard</p>
            <p className="font-[400] text-[16px] text-[#717171] mt-[8px] leading-[24px]">
              Provide or capture personal and health information to complete the
              onboarding process.
            </p>
          </div>

          <div className="relative border border-[#D0D0D0] w-[90%] h-[281px] rounded-[10px] px-[11px] pt-[50px] pb-[73px] text-center flex-shrink-0">
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-10">
              <img src={Icon3} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div className="max-w-[56px] mx-auto mb-[8px] ">
              <img src={Access} alt="" className="w-full" />
            </div>
            <p className="font-[500] text-[20px] text-[#2A2A2A]">Access</p>
            <p className="font-[400] text-[16px] text-[#717171] mt-[8px] leading-[24px]">
              Use the intuitive dashboard to manage health records, benefits,
              and billing.
            </p>
          </div>

          <div className="relative border border-[#D0D0D0] w-[90%] h-[281px] rounded-[10px] px-[11px] pt-[50px] pb-[73px] text-center flex-shrink-0">
            <div className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 z-10">
              <img src={Icon4} alt="" className="w-[40px] h-[40px]" />
            </div>
            <div className="max-w-[56px] mx-auto mb-[8px] ">
              <img src={Engage} alt="" className="w-full" />
            </div>
            <p className="font-[500] text-[20px] text-[#2A2A2A]">Engage</p>
            <p className="font-[400] text-[16px] text-[#717171] mt-[8px] leading-[24px]">
              Stay informed with real-time updates and notifications about your
              health and insurance status.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HowItWorks;
