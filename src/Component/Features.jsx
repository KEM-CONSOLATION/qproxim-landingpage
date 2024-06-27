import Authentication from "../assets/authentication.svg";
import Onboarding from "../assets/onboarding.svg";
import AdminDashboard from "../assets/AdminDashboard.svg";
import Dashboard from "../assets/dashboard.svg";

const Features = () => {
  return (
    <div className="bg-[#F8F8F8]" id="features" data-aos="fade-up">
      <div className="max-w-5xl mx-5 lg:max-w-full lg:mx-[70px] py-[60px] lg:py-[170px]">
        <div className="max-w-[710px] mx-auto text-center">
          <p className="text-[#595959] font-[500] text-[26px] lg:text-[40px]">
            Key Features of Q-Proxim
          </p>
        </div>
        <div
          className="overflow-x-scroll mt-[40px]"
          style={{
            scrollbarWidth: "none",
            msOverflowStyle: "none",
          }}
        >
          <div className="flex gap-[20px] items-start">
            <div className="border border-[#D0D0D0] w-[273px] h-[374px] rounded-[10px] px-[12px] py-[43px] text-center flex-shrink-0">
              <div className="max-w-[50px] mx-auto mb-[29px]">
                <img src={Dashboard} alt="" className="w-full" />
              </div>
              <p className="font-[500] text-[20px] text-[#2A2A2A]">
                Patient Dashboard
              </p>
              <p className="font-[400] text-[16px] text-[#717171] mt-[8px] leading-[24px]">
                Access to benefits, current plan details, treatment history,
                diagnoses, lab reports, prescribed medications, and admission
                status.
              </p>
              <p className="mt-[40px] text-center text-[14px] border border-[#297CEE] font-[500] inline-grid text-white py-[8px] px-[24px] rounded-[5px] bg-[#297CEE]">
                Explore Feature
              </p>
            </div>
            <div className="border border-[#D0D0D0] w-[273px] h-[374px] rounded-[10px] px-[12px] py-[43px] text-center flex-shrink-0">
              <div className="max-w-[50px] mx-auto mb-[29px]">
                <img src={AdminDashboard} alt="" className="w-full" />
              </div>
              <p className="font-[500] text-[20px] text-[#2A2A2A]">
                Admin Dashboard
              </p>
              <p className="font-[400] text-[16px] text-[#717171] mt-[8px] leading-[24px]">
                Comprehensive tools for hospitals, healthcare providers, and
                HMOs to manage operations, staff onboarding, and compliance.
              </p>
              <p className="mt-[40px] text-center text-[14px] border border-[#297CEE] font-[500] inline-grid text-white py-[8px] px-[24px] rounded-[5px] bg-[#297CEE]">
                Explore Feature
              </p>
            </div>
            <div className="border border-[#D0D0D0] w-[273px] h-[374px] rounded-[10px] px-[12px] py-[43px] text-center flex-shrink-0">
              <div className="max-w-[50px] mx-auto mb-[29px]">
                <img src={Authentication} alt="" className="w-full" />
              </div>
              <p className="font-[500] text-[20px] text-[#2A2A2A]">
                User Authentication
              </p>
              <p className="font-[400] text-[16px] text-[#717171] mt-[8px] leading-[24px]">
                Secure and straightforward registration and login processes for
                enrollees and agents.
              </p>
              <p className="mt-[40px] text-center text-[14px] border border-[#297CEE] font-[500] inline-grid text-white py-[8px] px-[24px] rounded-[5px] bg-[#297CEE]">
                Explore Feature
              </p>
            </div>
            <div className="border border-[#D0D0D0] w-[273px] h-[374px] rounded-[10px] px-[12px] py-[43px] text-center flex-shrink-0">
              <div className="max-w-[50px] mx-auto mb-[24px]">
                <img src={Onboarding} alt="" className="w-full" />
              </div>
              <p className="font-[500] text-[20px] text-[#2A2A2A]">
                Onboarding
              </p>
              <p className="font-[400] text-[16px] text-[#717171] mt-[8px] leading-[24px]">
                Smooth onboarding process for enrollees and agents to capture
                essential personal and health information.
              </p>
              <p className="mt-[40px] text-center text-[14px] border border-[#297CEE] font-[500] inline-grid text-white py-[8px] px-[24px] rounded-[5px] bg-[#297CEE]">
                Explore Feature
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Features;
