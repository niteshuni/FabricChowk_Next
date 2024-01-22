"use client";

import React, { useState } from "react";

const FAQ = () => {
  return (
    <section className="relative mt-40 z-20 overflow-hidden bg-white pb-12 pt-10 lg:pb-[90px] lg:pt-[50px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[600px] text-center lg:mb-20">
              <span className="mb-2 block text-lg font-semibold text-primary">
                FAQ
              </span>
              <h2 className="mb-4 text-3xl font-bold text-dark sm:text-[40px]/[48px]">
                Any Questions? Look Here
              </h2>
              <p className="text-base text-body-color">
                Explore our FAQ section to find quick answers on fabric trading,
                platform usage, and more. Simplifying queries for a seamless
                fabric buying and selling experience.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex px-2 flex-wrap">
          <div className="w-full px-4">
            <AccordionItem
              header="How do I register as Wholesaler with FabricChowk?"
              text="Kindly follow the instructions provided for the account registration process. Alternatively, if you have any queries or need assistance, feel free to reach out to us through the designated query section."
            />
            <AccordionItem
              header="How do I register as retailer with Fabric Chowk?"
              text="Kindly follow the instructions provided for the account registration process. Alternatively, if you have any queries or need assistance, feel free to reach out to us through the designated query section."
            />
            <AccordionItem
              header="Does FabricChowk charges any membership fees for registration as wholesaler or retailer?"
              text="As of now, FabricChowk does not impose any charges for membership."
            />
          </div>
          <div className="w-full px-4">
            <AccordionItem
              header="How do I get details of products available with FabricChowk?"
              text="Kindly reach out to us through our provided contact number or submit a query. We will promptly get back to you to arrange a quick discussion."
            />
            <AccordionItem
              header="Will fabricChowk provide assistance with product selection?"
              text="Certainly! Once you are on-board with us, our team is committed to assisting you throughout the entire process, from order placement to fulfillment and payment. Your satisfaction is our priority."
            />
            <AccordionItem
              header="What documents are required to get registered with FabricChowk?"
              text="Upon logging in as a retailer or wholesaler, you will have access to a comprehensive list of documents required for the respective sections. We strive to make the onboarding process as seamless as possible for you."
            />
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 right-0 z-[-1]">
        <svg
          width="1440"
          height="886"
          viewBox="0 0 1440 886"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.5"
            d="M193.307 -273.321L1480.87 1014.24L1121.85 1373.26C1121.85 1373.26 731.745 983.231 478.513 729.927C225.976 477.317 -165.714 85.6993 -165.714 85.6993L193.307 -273.321Z"
            fill="url(#paint0_linear)"
          />
          <defs>
            <linearGradient
              id="paint0_linear"
              x1="1308.65"
              y1="1142.58"
              x2="602.827"
              y2="-418.681"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#3056D3" stop-opacity="0.36" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0" />
              <stop offset="1" stop-color="#F5F2FD" stop-opacity="0.096144" />
            </linearGradient>
          </defs>
        </svg>
      </div>
    </section>
  );
};

export default FAQ;

const AccordionItem = ({ header, text }: {header: string, text: string}) => {
  const [active, setActive] = useState(false);

  const handleToggle = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    setActive(!active);
  };
  return (
    <div className="mb-8 w-full rounded-lg bg-white p-4 shadow-[0px_20px_95px_0px_rgba(201,203,204,0.30)] sm:p-8 lg:px-6 xl:px-8">
      <button
        className={`faq-btn flex w-full text-left`}
        onClick={handleToggle}
      >
        <div className="mr-5 flex h-10 w-full max-w-[40px] items-center justify-center rounded-lg bg-primary/5 text-primary">
          <svg
            className={`fill-primary stroke-primary duration-200 ease-in-out ${
              active ? "rotate-180" : ""
            }`}
            width="17"
            height="10"
            viewBox="0 0 17 10"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M7.28687 8.43257L7.28679 8.43265L7.29496 8.43985C7.62576 8.73124 8.02464 8.86001 8.41472 8.86001C8.83092 8.86001 9.22376 8.69083 9.53447 8.41713L9.53454 8.41721L9.54184 8.41052L15.7631 2.70784L15.7691 2.70231L15.7749 2.69659C16.0981 2.38028 16.1985 1.80579 15.7981 1.41393C15.4803 1.1028 14.9167 1.00854 14.5249 1.38489L8.41472 7.00806L2.29995 1.38063L2.29151 1.37286L2.28271 1.36548C1.93092 1.07036 1.38469 1.06804 1.03129 1.41393L1.01755 1.42738L1.00488 1.44184C0.69687 1.79355 0.695778 2.34549 1.0545 2.69659L1.05999 2.70196L1.06565 2.70717L7.28687 8.43257Z"
              fill=""
              stroke=""
            />
          </svg>
        </div>

        <div className="w-full">
          <h4 className="mt-1 text-lg font-semibold text-dark">
            {header}
          </h4>
        </div>
      </button>

      <div
        className={`pl-[62px] duration-200 ease-in-out ${
          active ? "block" : "hidden"
        }`}
      >
        <p className="py-3 text-base leading-relaxed text-body-color ">
          {text}
        </p>
      </div>
    </div>
  );
};
