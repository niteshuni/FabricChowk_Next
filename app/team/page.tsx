import Image from "next/image";
import React from "react";

const Team = () => {
  return (
    <section className="mt-10 pb-10 pt-5 lg:pb-20 lg:pt-[50px]">
      <div className="container px-5 py-16 mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-full text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-primary sm:text-4xl md:text-[40px]">
                Our Awesome Team
              </h2>
              <p className="text-base text-body-color">
                Meet our exceptional team of experts dedicated to fueling your
                success. Through their diverse expertise and unwavering
                commitment, they strive to provide tailored solutions,
                innovative strategies, and unparalleled support, ensuring your
                business thrives in today&apos;s competitive landscape.
              </p>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap -m-4">
        <TeamCard
            name="Amit Shukla"
            profession="Co-Founder"
            imageSrc="/assets/team/tf1.jpeg"
            desc="Packed with business acumen, managerial style, and stong professional trajectory.
            Stiches software product knowledge, business fundamentals, and leads by example"
          />
          <TeamCard
            name="Digant Goel"
            profession="Co-Founder"
            imageSrc="/assets/team/tf22.jpeg"
            desc="Passionate about building business. Expert in execution, operations and strategy.
            Strong network and expertise in trading and finance"
          />
          <TeamCard
            name="Akshay Kumar"
            profession="CTO"
            imageSrc="/assets/team/tf3.jpeg"
            desc="Innovator who is seasoned in product strategy, Product Market Fitment and Solution Architecture .
            Talks about products, features and user experiance"
          />

          {/* <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/200x200"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Alper Kamu
                </h2>
                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/201x201"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Holden Caulfield
                </h2>
                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/202x202"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Atticus Finch
                </h2>
                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="p-4 lg:w-1/4 md:w-1/2">
            <div className="h-full flex flex-col items-center text-center">
              <img
                alt="team"
                className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
                src="https://dummyimage.com/203x203"
              />
              <div className="w-full">
                <h2 className="title-font font-medium text-lg text-gray-900">
                  Henry Letham
                </h2>
                <h3 className="text-gray-500 mb-3">UI Developer</h3>
                <p className="mb-4">
                  DIY tote bag drinking vinegar cronut adaptogen squid fanny
                  pack vaporware.
                </p>
                <span className="inline-flex">
                  <a className="text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                    </svg>
                  </a>
                  <a className="ml-2 text-gray-500">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                      className="w-5 h-5"
                      viewBox="0 0 24 24"
                    >
                      <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                    </svg>
                  </a>
                </span>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
    // <section className="mt-10 pb-10 pt-20 lg:pb-20 lg:pt-[120px]">
    //   <div className="container mx-auto">
    //     <div className="-mx-4 flex flex-wrap">
    //       <div className="w-full px-4">
    //         <div className="mx-auto mb-[60px] max-w-[600px] text-center">
    //           <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-primary sm:text-4xl md:text-[40px]">
    //             Our Awesome Team
    //           </h2>
    //           <p className="text-base text-body-color">
    //           Meet our exceptional team of experts dedicated to fueling your success.
    //           Through their diverse expertise and unwavering commitment, they strive to provide tailored solutions,
    //           innovative strategies, and unparalleled support, ensuring your business thrives in today&apos;s competitive landscape.
    //           </p>
    //         </div>
    //       </div>
    //     </div>

    //     <div className="-mx-4 flex flex-wrap justify-center">
          // <TeamCard
          //   name="Amit Shukla"
          //   profession="Co-Founder"
          //   imageSrc="/assets/team/t1.jpeg"
          //   desc="Packed with business acumen, managerial style, and stong professional trajectory.
          //   Stiches software product knowledge, business fundamentals, and leads by example"
          // />
          // <TeamCard
          //   name="Digant Goel"
          //   profession="Co-Founder"
          //   imageSrc="/assets/team/t28.jpeg"
          //   desc="Passionate about building business. Expert in execution, operations and strategy.
          //   Strong network and expertise in trading and finance"
          // />
          // <TeamCard
          //   name="Akshay Kumar"
          //   profession="CTO"
          //   imageSrc="/assets/team/t3.jpeg"
          //   desc="Innovator who is seasoned in product strategy, Product Market Fitment and Solution Architecture .
          //   Talks about products, features and user experiance"
          // />
    //     </div>
    //   </div>
    // </section>
  );
};

export default Team;

const TeamCard = ({
  imageSrc,
  name,
  profession,
  desc,
}: {
  imageSrc: string;
  name: string;
  profession: string;
  desc: string;
}) => {
  return (
    <>
      <div className="p-4 lg:w-1/3 md:w-1/2">
        <div className="flex flex-col items-center text-center">
          <Image alt="team" src={imageSrc} height={500} width={500} className="flex-shrink-0 rounded-lg mb-4" />
          {/* <img
            alt="team"
            className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4"
            src={imageSrc}
          /> */}
          <div className="w-full">
            <h2 className="title-font font-medium text-lg text-gray-900">
              {name}
            </h2>
            <h3 className="text-gray-500 mb-3">{profession}</h3>
            <p className="mb-4">
              {desc}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
