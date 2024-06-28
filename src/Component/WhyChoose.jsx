const WhyChoose = () => {
  return (
    <div className="bg-[#297CEE]" id="about" data-aos="fade-up">
      <div className="max-w-5xl  mx-5 lg:max-w-full lg:mx-[70px] py-[60px] lg:py-[120px]">
        <div className=" max-w-[710px] mx-auto text-center">
          <p className="text-[#FFFFFF] font-[500] text-[26px] lg:text-[44px]">
            Why Choose Q-Proxim?
          </p>
        </div>
        {/* <div
          className="overflow-x-auto mt-[40px]"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        > */}
        <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 2xl:grid-cols-5 gap-[20px] mt-[40px] place-items-center justify-items-center">
          <div className="hover:bg-[#478FF0] border border-[#85B4F5] w-[90%] h-[238px] rounded-[10px] px-[12px] 2xl:py-[57px] py-[30px] text-center flex-shrink-0">
            <p className="font-[500] text-[20px] text-[#FFFFFF]">
              Improved Patient Care
            </p>
            <p className="font-[400] text-[14px] text-[#FFFFFF] mt-[12px]">
              Integrate patient records and streamline care coordination to
              enhance the quality of healthcare services.
            </p>
          </div>
          <div className="hover:bg-[#478FF0] border border-[#85B4F5] w-[90%] h-[238px] rounded-[10px] px-[12px] 2xl:py-[57px] py-[30px] text-center flex-shrink-0">
            <p className="font-[500] text-[20px] text-[#FFFFFF]">
              Operational Efficiency
            </p>
            <p className="font-[400] text-[14px] text-[#FFFFFF] mt-[12px]">
              Automate administrative tasks and reduce costs to improve service
              delivery.
            </p>
          </div>
          <div className="hover:bg-[#478FF0] border border-[#85B4F5] w-[90%] h-[238px] rounded-[10px] px-[12px] 2xl:py-[57px] py-[30px] text-center flex-shrink-0">
            <p className="font-[500] text-[20px] text-[#FFFFFF]">
              Enhanced Patient Experience
            </p>
            <p className="font-[400] text-[14px] text-[#FFFFFF] mt-[12px]">
              Provide a seamless and user-friendly experience for patients
              throughout their healthcare journey.
            </p>
          </div>
          <div className="hover:bg-[#478FF0] border border-[#85B4F5] w-[90%] h-[238px] rounded-[10px] px-[12px] 2xl:py-[57px] py-[30px] text-center flex-shrink-0">
            <p className="font-[500] text-[20px] text-[#FFFFFF]">
              Compliance & Security
            </p>
            <p className="font-[400] text-[14px] text-[#FFFFFF] mt-[12px]">
              Maintain adherence to healthcare regulations and standards to
              protect patient information and ensure legal compliance.
            </p>
          </div>
          <div className="hover:bg-[#478FF0] border border-[#85B4F5] w-[90%] h-[238px] rounded-[10px] px-[12px] 2xl:py-[57px] py-[30px] text-center flex-shrink-0">
            <p className="font-[500] text-[20px] text-[#FFFFFF]">
              Revenue Optimization
            </p>
            <p className="font-[400] text-[14px] text-[#FFFFFF] mt-[12px]">
              Optimize billing processes and reduce revenue leakage to enhance
              the financial performance of healthcare providers.
            </p>
          </div>
        </div>

        {/* </div> */}
      </div>
    </div>
  );
};

export default WhyChoose;
