import React from "react";
import Image from "next/image";
import Features from "@/components/shared/Features";

const HowItWorks = () => {
  return (
    <>
      {/* left half section */}
      <div className="bg-gradient-to-b mt-20 from-green-50 to-green-100">
        <section className="py-10 sm:py-16 lg:py-24">
          <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8 lg:pl-20">
            <div className="grid items-center grid-cols-1 gap-12 lg:grid-cols-2">
              <div>
                <h1 className="text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                  How
                  <div className="relative ml-2 inline-flex">
                    <span className="absolute inset-x-0 bottom-0 border-b-[30px] border-[#4ADE80]"></span>
                    <h1 className="relative text-4xl font-bold text-black sm:text-6xl lg:text-7xl">
                      FabricChowk
                    </h1>
                  </div>
                  Works.
                </h1>

                <p className="mt-8 text-base text-black sm:text-xl">
                <strong>Join us to unlock a world of possibilities!</strong> <br />Experience seamless connections, 
                discover new markets, and drive your business forward with our comprehensive platform.
                </p>
                 {/* <div className="absolute">
                  <div className="px-8 py-10">
                    <span className="mt-2 w-20"><Image
                      src="/assets/shared/growth.gif"
                     height={100}
                     width={100}
                      alt="growth"
                    />{" "}</span>
                    
                    <span className="block text-base leading-tight text-black">
                      {" "}
                      Grow Your
                      <br />
                      Business{" "}
                    </span>
                  </div>
                </div> */}
              </div>

              <div className="w-full lg:pl-4">
                <Image
                  height={600}
                  width={900}
                  alt="people grow business"
                  src="/assets/howitworks/businessgrow.jpg"
                />
                
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Post Banner Section */}
      <section className="py-10 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto text-center">
            <span className="flex items-center">
  <span className="h-px flex-1 bg-black"></span>
  <span className="shrink-0 text-4xl font-bold text-black sm:text-6xl lg:text-7xl px-6">Retailers</span>
  <span className="h-px flex-1 bg-black"></span>
</span>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            <strong>Transforming Retail Success</strong> <br />Partner with us to amplify growth opportunities, elevate connections, and revolutionize your wholesale experience.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden  xl:px-45 top-10 md:block md:px-20 lg:px-28">
              <Image
                src="/assets/shared/dottedarrow.svg"
                height={200}
                width={1100}
                alt="dottedarrow"
              />
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-32 h-32 mx-auto bg-white border-2 border-gray-200 rounded-full p-2 shadow">
                  <Image
                    src="/assets/shared/register.gif"
                    height={200}
                    width={200}
                    alt="register"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Register
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Register with your details.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-32 h-32 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <Image
                    src="/assets/shared/discover.gif"
                    height={100}
                    width={100}
                    alt="register"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Discover
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Discover Wide range of products & our partners from around the
                  country.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-32 h-32 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <Image
                    src="/assets/shared/connect.gif"
                    height={100}
                    width={100}
                    alt="register"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Connect
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Connect with the right wholesaler for your requirements with
                  best price and premium quality as per your budget.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-32 h-32 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <Image
                    src="/assets/shared/gift.gif"
                    height={100}
                    width={100}
                    alt="register"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Procure
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Finalize your purchase list and leave the rest to us.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="py-10 bg-white sm:py-16 lg:py-20">
        <div className="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
            <span className="flex items-center">
  <span className="h-px flex-1 bg-black"></span>
  <span className="shrink-0 text-4xl font-bold text-black sm:text-6xl lg:text-7xl px-6">Wholesalers</span>
  <span className="h-px flex-1 bg-black"></span>
</span>
            <p className="max-w-lg mx-auto mt-4 text-base leading-relaxed text-gray-600">
            <strong>Empower your wholesale journey!</strong><br />Explore a vast network, access exclusive deals, 
            and elevate your business to new heights with our dedicated platform.
            </p>
          </div>

          <div className="relative mt-12 lg:mt-20">
            <div className="absolute inset-x-0 hidden  xl:px-45 top-10 md:block md:px-20 lg:px-28">
              <Image
                src="/assets/shared/dottedarrow.svg"
                height={200}
                width={1100}
                alt="dottedarrow"
              />

              {/* <img className="w-full" src="https://cdn.rareblocks.xyz/collection/celebration/images/steps/2/curved-dotted-line.svg" alt="" /> */}
            </div>

            <div className="relative grid grid-cols-1 text-center gap-y-12 md:grid-cols-4 gap-x-12">
              <div>
                <div className="flex items-center justify-center w-32 h-32 mx-auto bg-white border-2 border-gray-200 rounded-full p-2 shadow">
                  <Image
                    src="/assets/shared/register.gif"
                    height={200}
                    width={200}
                    alt="register"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Register
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Register with your details.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-32 h-32 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <Image
                    src="/assets/shared/discover.gif"
                    height={100}
                    width={100}
                    alt="register"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Discover
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Discover Wide range of products & our partners from around the
                  country.
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-32 h-32 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <Image
                    src="/assets/shared/customer.gif"
                    height={100}
                    width={100}
                    alt="register"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Sell Product
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Let the demand from entire country meet your supply
                </p>
              </div>

              <div>
                <div className="flex items-center justify-center w-32 h-32 mx-auto bg-white border-2 border-gray-200 rounded-full shadow">
                  <Image
                    src="/assets/shared/coin.gif"
                    height={100}
                    width={100}
                    alt="register"
                  />
                </div>
                <h3 className="mt-6 text-xl font-semibold leading-tight text-black md:mt-10">
                  Recieve payment
                </h3>
                <p className="mt-4 text-base text-gray-600">
                  Let us track and ensure timely payment
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <Features />
    </>
  );
};

export default HowItWorks;
