import React from "react";
import SupportSVG from "../svg/SupportSVG";
import EaseOfUse from "../svg/EaseOfUse";
import AiSVG from "../svg/AiSVG";
import ValueSVG from "../svg/ValueSVG";

const Service = () => {
  return (
    <section className="pt-15 dark:bg-dark lg:pt-[90px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-12 max-w-[650px] text-center lg:mb-20">
              <h2 className="mb-3 shrink-0 text-4xl font-bold text-black sm:text-6xl lg:text-7xl leading-[1.2] text-dark">
                What Sets us Apart!
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                Discover the difference in our fabric solutions. We blend
                quality, innovation, and sustainability, offering a diverse
                range of premium materials. Our commitment to excellence extends
                to personalized service, ensuring your vision is woven
                seamlessly into reality. Experience our fabric, feel the
                difference.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap">
          <ServiceCard
            title="Ease-Of-Use"
            details="Enhanced discovery|Unmatched range of product|Easy Billing solution|End to end tracking of shipment & payment"
            icon={<EaseOfUse />}
          />
          <ServiceCard
            title="Value"
            details="Satisfaction guaranteed|Pocket friendly|Assured quality|Data-driven decisions|Transperancy"
            icon={<ValueSVG />}
          />
          <ServiceCard
            title="Support Services"
            details="Trade financing|Product & Shipping Insurance|Priority assistance|Chatbot assistance|Yearly engagement report"
            icon={<SupportSVG />}
          />
          <ServiceCard
            title="AI Recomendations "
            details="Trending in your region|Season based recommendation|Advanced Product Search and Filtering"
            icon={<AiSVG />}
          />
        </div>
      </div>
    </section>
  );
};

export default Service;

const ServiceCard = ({ icon, title, details } : {icon: React.ReactNode, title: string, details: string}) => {
  const detailList = details.split('|');
  return (
    <>
      <div className="w-full px-4 md:w-1/2 lg:w-1/4">
        <div className="mb-9 rounded-[20px] bg-white p-10 shadow-2 hover:shadow-lg  md:px-2 xl:px-10">
          <div className="mb-8 flex h-[70px] w-[70px] items-center justify-center rounded-2xl bg-kellygreen">
            {icon}
          </div>
          <h4 className="mb-[14px] text-2xl font-semibold text-dark">
            {title}
          </h4>
          <ul>
          {detailList.map((text, index)=> (
            <li key={index} className="text-body-color"><strong className="mr-2 text-xl text-primary">&#8227;</strong>{text}</li>
          ))}
          </ul>
          
        </div>
      </div>
    </>
  );
};
