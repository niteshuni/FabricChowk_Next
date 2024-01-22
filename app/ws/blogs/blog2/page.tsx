import React from 'react'
import Image from 'next/image';

const Blog2 = () => {
  return (
    <main className="pt-8 mt-20 pb-16 lg:pt-16 lg:pb-24 bg-white antialiased">
      <div className="flex justify-between px-4 mx-auto max-w-screen-xl ">
        <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue">
          <header className="mb-4 lg:mb-6 not-format">
            <address className="flex items-center mb-6 not-italic">
              <div className="inline-flex items-center mr-3 text-sm text-gray-900">
                <Image
                  alt="Digant Goel"
                  src="/assets/team/t2round.jpeg"
                  height={20}
                  width={20}
                  className="w-20 h-20 mask mask-circle rounded-full flex-shrink-0 object-cover object-center"
                />
                <div>
                  <a
                    href="#"
                    rel="author"
                    className="text-xl font-bold text-gray-900"
                  >
                    Digant Goel
                  </a>
                  <p className="text-base text-gray-500">
                    Co-Founder, FabricChowk
                  </p>
                  <p className="text-base text-gray-500">
                    <time title="December 17th, 2023">December 17, 2023</time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              Why is Surat the Hub of fabric trade in India{" "}
            </h1>
          </header>

          <p>
            Nestled beside the Tapi River in Gujarat, Surat, a city once
            renowned for its silk weaving heritage, remains a bustling
            commercial center for textiles. Steeped in history, Surat Castle,
            constructed in the 1500s, stands as a testament to the city&apos;s
            resilience against Portuguese colonists, while nearby cemeteries
            house elaborates colonial-era tombs from the Dutch, Armenian, and
            English communities.
          </p>
          <br />
          <p>
            Beyond its textile legacy, Surat holds the distinction of being the
            world&apos;s largest diamond manufacturing center, housing over
            5,000 advanced diamond cutting units. The Surat SEZ, with more than
            100 listed companies, is swiftly becoming a leading hub for jewelry
            production.
          </p>
          <br />
          <p>
            Surat&apos;s historical significance extends to being the landing
            site for the British in India, with remnants of Dutch and Portuguese
            business centers still preserved. Once a bustling port with ships
            from 84 countries, Surat has evolved into a dynamic fabric trade hub
            in India.
          </p>
          <br />
          <p>
            The city&apos;s prominence in the fabric trade can be attributed to
            various factors. Its historical roots in textile trading, dating
            back to ancient times, have cultivated expertise and specialization.
            Surat&apos;s strategic location in Gujarat ensures easy access to
            key raw materials, and its well-developed infrastructure supports
            the entire textile value chain, from production to distribution.
          </p>
          <br />
          <p>
            Surat&apos;s industrial clusters, encompassing weaving, dyeing,
            printing, and processing, create a synergistic environment fostering
            the growth of the fabric trade. The city&apos;s diverse fabric
            offerings, spanning traditional to modern, attract buyers
            nationwide, contributing to its comprehensive marketplace status.
          </p>
          <br />
          <p>
            The entrepreneurial spirit of Surat is evident in its numerous small
            and medium-sized enterprises engaged in fabric production and
            trading, contributing to the vibrancy of the textile market.
            Embracing technological advancements, Surat&apos;s adoption of
            modern machinery enhances the efficiency and quality of fabric
            manufacturing.
          </p>
          <br />
          <p>
            The city&apos;s rich tradition of business, passed down through
            generations, combined with a business-friendly environment and
            experienced traders, solidifies its status as a fabric trade hub.
            Government support through incentives, subsidies, and infrastructure
            projects has further fueled Surat&apos;s growth in the textile
            industry.
          </p>
          <br />
          <p>
            With a strong focus on export-oriented textile production, Surat
            actively participates in international trade, bolstering India&apos;s
            position in the global textile market. The unique combination of
            historical legacy, geographical advantages, industry-specific
            infrastructure, and a conducive business environment has firmly
            established Surat as a pivotal hub for fabric trade in India.
            Explore the city&apos;s vibrant fabric market, where tradition meets
            innovation, making it a beacon in the textile landscape.
          </p>
          <br/>
          <br/>

          <section className="not-format">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900">
                Discussion
              </h2>
            </div>
            <form className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-gray-200">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  rows={6}
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <button
                type="submit"
                className="inline-flex items-center py-2.5 px-4 text-xs font-medium text-center text-white bg-primary-700 rounded-lg focus:ring-4 focus:ring-primary-200 dark:focus:ring-primary-900 hover:bg-primary-800"
              >
                Post comment
              </button>
            </form>
            <article className="p-6 mb-6 text-base bg-white rounded-lg">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900">
                  <Image
                      alt="Amit Shukla"
                      src="/assets/team/t1round.jpeg"
                      height={20}
                      width={20}
                      className="w-10 h-10 mask mask-circle rounded-full flex-shrink-0 object-cover object-center"
                    />
                    Amit Shukla
                  </p>
                  <p className="text-sm text-gray-600">
                    <time title="December 18th, 2023">December 18, 2023</time>
                  </p>
                </div>
                <button
                  id="dropdownComment1Button"
                  data-dropdown-toggle="dropdownComment1"
                  className="inline-flex items-center p-2 text-sm font-medium text-center text-gray-500 bg-white rounded-lg hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-gray-50 dark:text-gray-400 dark:bg-gray-900 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                  type="button"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 16 3"
                  >
                    <path d="M2 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm6.041 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM14 0a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Z" />
                  </svg>
                  <span className="sr-only">Comment settings</span>
                </button>
                {/* <!-- Dropdown menu --> */}
                <div
                  id="dropdownComment1"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow"
                >
                  <ul
                    className="py-1 text-sm text-gray-700"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                        Edit
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                        Remove
                      </a>
                    </li>
                    <li>
                      <a href="#" className="block py-2 px-4 hover:bg-gray-100">
                        Report
                      </a>
                    </li>
                  </ul>
                </div>
              </footer>
              <p>
                Nice, excellent article!!
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center font-medium text-sm text-gray-500 hover:underline"
                >
                  <svg
                    className="mr-1.5 w-3 h-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="currentColor"
                    viewBox="0 0 20 18"
                  >
                    <path d="M18 0H2a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h2v4a1 1 0 0 0 1.707.707L10.414 13H18a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5 4h2a1 1 0 1 1 0 2h-2a1 1 0 1 1 0-2ZM5 4h5a1 1 0 1 1 0 2H5a1 1 0 0 1 0-2Zm2 5H5a1 1 0 0 1 0-2h2a1 1 0 0 1 0 2Zm9 0h-6a1 1 0 0 1 0-2h6a1 1 0 1 1 0 2Z" />
                  </svg>
                  Reply
                </button>
              </div>
            </article>
          </section>
        </article>
      </div>
    </main>
  );
}

export default Blog2;
