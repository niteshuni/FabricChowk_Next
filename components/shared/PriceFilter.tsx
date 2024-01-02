import React from "react";

const PriceFilter = () => {
  return (
    <details className="overflow-hidden rounded-xl my-2 border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
        <span className="text-sm font-medium"> Price </span>

        <span className="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>

      <div className="border-t border-gray-200 bg-white">
        <header className="flex items-center justify-between p-4">
          <span className="text-sm text-gray-700">
            The highest price is ₹1200
          </span>

          <button
            type="button"
            className="text-sm text-gray-900 underline underline-offset-4"
          >
            Reset
          </button>
        </header>

        <div className="border-t border-gray-200 p-4">
          <div className="flex justify-between gap-4">
            <label
              htmlFor="FilterPriceFrom"
              className="flex items-center gap-2"
            >
              <span className="text-sm text-gray-600">₹</span>
              <input
                type="number"
                placeholder="From"
                className="input input-xs input-bordered input-primary w-full max-w-xs"
              />
            </label>

            <label htmlFor="FilterPriceTo" className="flex items-center gap-2">
              <span className="text-sm text-gray-600">₹</span>
              <input
                type="number"
                placeholder="To"
                className="input input-xs input-bordered input-primary w-full max-w-xs"
              />
            </label>
          </div>
        </div>
      </div>
    </details>
  );
};

export default PriceFilter;
