import React from "react";
import Image from "next/image";

const About = () => {
  return (
    <>
      <section className="relative mt-20 bg-white pb-[110px] pt-[120px] lg:pt-[150px]">

        {/* About Us Section */}
        <div className="container mx-auto">
          <div className="flex flex-wrap items-center -mx-4">
            <div className="w-full px-4 lg:w-6/12">
              <div className="about-content">
                <h1 className="text-4xl font-bold !leading-[1.208] text-dark sm:text-[42px] lg:text-[40px] xl:text-5xl">
                  About Us
                </h1>
                <span className="text-primary text-lg font-semibold">Unraveling Excellence, One Thread at a Time!</span>
                <p className="mb-8 mt-5 text-justify text-darkgray">
                  <strong>FabricChowk</strong> is result of collaboration
                  between likeminded professionals who look forward to organize
                  the unorganized sector. The team of accomplished IIT & IIM
                  alumni brings in a combined experience of 50+ years to reshape
                  the fabric and apparel industry with our B2B marketplace.{" "}
                  <br />
                  <br />
                  In response to the challenges posed by the unorganized market,
                  our digital platform redefines the transaction process,
                  offering discovery of wholesalers and retailers along with
                  secure transactions. Our Unique Selling Point lies in a
                  dynamic commission rate based on order size and retailer
                  financial health, optimizing wholesaler recommendations.{" "}
                  <br />
                  <br />
                  In the midst of the textile sector&apos;s technological
                  revolution, our platform provides swift access to extensive
                  markets at competitive prices and is scalable for other
                  commodities and wholesaler-to-distributor models. <br />
                  <br />
                  At FabricChowk, we aim to disrupt inefficient business
                  practices, offering convenience and cost savings to retailers
                  and wholesalers in the fabric market. Join us in transforming
                  the industry into a dynamic, digitally-driven marketplace.
                </p>
              </div>
            </div>
            <div className="hidden px-4 lg:block lg:w-1/12"></div>
            <div className="w-full px-1 lg:w-5/12">
              <div className="lg:ml-auto lg:text-right">
                <div className="relative inline-block pt-11 lg:pt-0">
                    <Image src="/assets/about/about.jpg" alt="about" className="max-w-full lg:ml-auto" height={600} width={900}/>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Our Vision Section  */}

        <div className="container mx-auto flex px-5 py-10 md:flex-row flex-col items-center">
          <div className="md:w-1/2 w-5/6 pb-16">
          <Image alt="vision illustration" src="/assets/about/vision.jpg" width={500} height={500}/>
          </div>
          <div className="lg:flex-grow md:w-2/3 w-5/6 lg:pl-5 md:pl-11 flex flex-col md:items-start md:text-left items-center text-center">
            <h1 className="title-font text-5xl font-bold">
              Our Vision
            </h1>
            <span className="text-primary text-lg font-semibold mb-5 mt-1">Transforming Fabric Commerce & Tradition</span>
            <p className="mb-8 text-darkgray leading-relaxed">
            Empowering India&apos;s fabric B2B Future: Revolutionizing Commerce, PioneeringInnovation, and Elevating Tradition, 
            Redefining the Way We Trade Fabrics for a Better Tomorrow.
            </p>
          </div>
        </div>

        {/* Our Mission Section */}

        <div className="container mx-auto flex p-5 md:flex-row flex-col items-center">
          <div className="lg:flex-grow w-5/6 lg:pr-11 md:pr-24 flex flex-col md:items-start md:text-left mb-5 md:mb-0 items-center text-center">
            <h1 className="title-font text-5xl font-bold">
              Our Mission
            </h1>
            <span className="text-primary text-lg font-semibold mb-5 mt-1">Unifying Fabric Traders, Amplifying Reach</span>
            <p className="mb-8 text-darkgray leading-relaxed">
            Our mission is to organize the unorganized fabric trading sector between wholesalers and retailers, empowering them with enhanced convenience 
            and substantial cost savings. With our cutting-edge platform, retailers can gain direct access to an extensive network of trusted and reputable wholesalers. 
            At the same time, wholesalers can expand their market presence by tapping into a vast pool ofpotential and interested retailers
            </p>
          </div>
          <div className="md:w-1/2 w-5/6">
            <Image alt="mission illustration" src="/assets/about/mission.jpg" width={360} height={300}/>
            {/* <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://dummyimage.com/720x600"
            /> */}
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
