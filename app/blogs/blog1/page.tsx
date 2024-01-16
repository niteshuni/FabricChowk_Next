import React from 'react'
import Image from 'next/image';

const Blog1 = () => {
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
                    <time title="December 10th, 2023">December 10, 2023</time>
                  </p>
                </div>
              </div>
            </address>
            <h1 className="mb-4 text-3xl font-extrabold leading-tight text-gray-900 lg:mb-6 lg:text-4xl">
              Margin for traders in fabric market
            </h1>
          </header>
          <p>
            The fabric market, steeped in tradition and history, has been a
            livelihood for traders since ancient times. Once a basic necessity,
            fabric has evolved into a style statement and heritage attire,
            significantly contributing to the wealth of traders. In the face of
            heightened competition, the identification of high-margin products
            has become crucial.
          </p>
          <br />
          <p>
            Determining high-margin fabrics for traders in India involves
            considering factors such as market demand, trends, and the specific
            niche targeted by the trader. Geographical conditions, affordable
            manpower, and government policies play roles in boosting
            trader&apos;s margins. Logistics is a critical consideration in
            trading, impacting profit margins. While various factors affect
            fabric trader&apos;s margins, certain fabrics have historically
            commanded higher profit margins in the Indian market.
          </p>
          <br />
          <p>
            <strong>Silk Fabrics:</strong>Luxurious and in demand for various
            occasions, silk fabrics often command premium prices.
          </p>
          <br />
          <p>
            <strong>Handloom Fabrics:</strong> Traditional handwoven fabrics
            like Banarasi silk and Khadi are prized for craftsmanship and
            uniqueness, allowing for higher margins.
          </p>
          <br />
          <p>
            <strong>Embroidered Fabrics:</strong> Fabrics with intricate
            embellishments, such as zari work or sequins, often fetch premium
            prices.
          </p>
          <br />
          <p>
            <strong>Organic Cotton:</strong> With the increasing demand for
            sustainable products, organic cotton fabrics can offer higher profit
            margins.
          </p>
          <br />
          <p>
            <strong>Linen Fabrics:</strong> Known for comfort and breathability,
            linen is considered a premium fabric with good profit margins.
          </p>
          <br />
          <p>
            <strong>Velvet Fabrics:</strong> Luxurious velvet, often used for
            special occasions, contributes to its higher market value.
          </p>
          <br />
          <p>
            <strong>Brocade Fabrics:</strong> Intricately patterned brocade
            fabrics, commonly used in ethnic wear, can have good profit margins.
          </p>
          <br />
          <p>
            <strong>Tussar Silk:</strong> Valued for its texture and natural
            sheen, Tussar silk, produced in various parts of India, is a
            high-margin fabric.
          </p>
          <br />
          <p>
            <strong>Chanderi Silk:</strong>Lightweight and sheer, Chanderi silk
            from Madhya Pradesh often commands higher prices.
          </p>
          <br />
          <p>
            <strong>Bamboo Fabric:</strong>Sustainable and soft, bamboo fabrics
            appeal to eco-conscious consumers, potentially leading to higher
            margins.
          </p>
          <br />
          <p>
            Market dynamics and trends are ever-evolving, necessitating constant
            updates with the latest industry information. Quality,
            craftsmanship, and uniqueness are pivotal in determining a
            fabric&apos;s success. Thorough market research and an understanding
            of consumer preferences can help identify fabrics with high-profit
            potential in the current market context. Stay attuned to the
            changing landscape to thrive in the dynamic fabric market.
          </p>
          <section className="not-format mt-10">
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
                      alt="Akshay Kumar"
                      src="/assets/team/t2round.jpeg"
                      height={20}
                      width={20}
                      className="w-10 h-10 mask mask-circle rounded-full flex-shrink-0 object-cover object-center"
                    />
                    Akshay Kumar
                  </p>
                  <p className="text-sm text-gray-600">
                    <time title="December 12th, 2023">December 12, 2023</time>
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
                Very straight-to-point article. Really worth time reading. Thank
                you!
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
            <article className="p-6 mb-6 ml-6 lg:ml-12 text-base bg-white rounded-lg">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900">
                    <Image
                      alt="Digant Goel"
                      src="/assets/team/t2round.jpeg"
                      height={20}
                      width={20}
                      className="w-10 h-10 mask mask-circle rounded-full flex-shrink-0 object-cover object-center"
                    />
                    Digant Goel
                  </p>
                  <p className="text-sm text-gray-600">
                    <time title="December 12th, 2023">December 12, 2023</time>
                  </p>
                </div>
                <button
                  id="dropdownComment2Button"
                  data-dropdown-toggle="dropdownComment2"
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
                  id="dropdownComment2"
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
              <p>Much appreciated! Glad you liked it ☺️</p>
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
            <article className="p-6 mb-6 text-base bg-white border-t border-gray-200">
              <footer className="flex justify-between items-center mb-2">
                <div className="flex items-center">
                  <p className="inline-flex items-center mr-3 font-semibold text-sm text-gray-900">
                    <Image
                      alt="Amit Shukla"
                      src="/assets/team/t2round.jpeg"
                      height={20}
                      width={20}
                      className="w-10 h-10 mask mask-circle rounded-full flex-shrink-0 object-cover object-center"
                    />
                    Amit Shukla
                  </p>
                  <p className="text-sm text-gray-600">
                    <time title="December 11th, 2023">December 11, 2023</time>
                  </p>
                </div>
                <button
                  id="dropdownComment3Button"
                  data-dropdown-toggle="dropdownComment3"
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
                  id="dropdownComment3"
                  className="hidden z-10 w-36 bg-white rounded divide-y divide-gray-100 shadow"
                >
                  <ul
                    className="py-1 text-sm text-gray-700"
                    aria-labelledby="dropdownMenuIconHorizontalButton"
                  >
                    <li>
                      <a
                        href="#"
                        className="block py-2 px-4 hover:bg-gray-100 "
                      >
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
                Excellent article, a must read!!
              </p>
              <div className="flex items-center mt-4 space-x-4">
                <button
                  type="button"
                  className="flex items-center font-medium text-sm text-gray-500 hover:underline dark:text-gray-400"
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

export default Blog1;
