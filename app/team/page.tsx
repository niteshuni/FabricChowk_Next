import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="mt-10 pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              {/* <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team
              </span> */}
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-primary text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
              Meet our exceptional team of experts dedicated to fueling your success. 
              Through their diverse expertise and unwavering commitment, they strive to provide tailored solutions, 
              innovative strategies, and unparalleled support, ensuring your business thrives in today&apos;s competitive landscape.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Amit Shukla"
            profession="Co-Founder"
            imageSrc="/assets/team/t1.jpeg"
            desc="Packed with business acumen, managerial style, and stong professional trajectory.
            Stiches software product knowledge, business fundamentals, and leads by example"
          />
          <TeamCard
            name="Digant Goel"
            profession="Co-Founder"
            imageSrc="/assets/team/t27.jpeg"
            desc="Passionate about building business. Expert in execution, operations and strategy. 
            Strong network and expertise in trading and finance"
          />
          <TeamCard
            name="Akshay Kumar"
            profession="CTO"
            imageSrc="/assets/team/t3.jpeg"
            desc="Innovator who is seasoned in product strategy, Product Market Fitment and Solution Architecture .
            Talks about products, features and user experiance"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

const TeamCard = ({ imageSrc, name, profession, desc }:{imageSrc:string, name:string, profession:string, desc:string}) => {
  return (
    <>
      <div className="group w-full px-4 md:w-1/2 xl:w-1/4">
        <div className="mx-auto mb-10 w-full max-w-[370px]">
          <div className="relative overflow-hidden rounded-lg w-full">
            <Image
              src={imageSrc}
              alt=""
              height={450}
              width={370}
              className="inset-0 transition-opacity group-hover:opacity-50"
            />
            <div className="absolute p-4 sm:p-6 lg:p-8 top-0 ">
              <p className="text-sm font-medium uppercase tracking-widest text-pink">
                {profession}
              </p>
              <p className="text-xl font-bold text-white sm:text-2xl">
                {name}
              </p>
            </div>
            <div className="absolute bottom-5 p-2 w-full text-center">
              <div className="mt-32 sm:mt-48 lg:mt-64">
                <div className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100">
                  <p className="text-sm text-midnightblue">
                    {desc}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
