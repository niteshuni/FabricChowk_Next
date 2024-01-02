import React from "react";

const SerachFilterBar = () => {
  return (
    <div className="join relative lg:w-6/12 lg:left-40">
      <span className="absolute inset-y-0 top-1 left-0 pl-3 flex items-center text-xl">
        &#x1F50D;
      </span>
      <input
        style={{ paddingLeft: "40px", fontSize: "1.2rem" }}
        className="input input-bordered input-primary w-11/12 lg:input-lg rounded-l-full lg:rounded-r-full ring-inset ring-2"
        placeholder="Search"
      />
      <label
        htmlFor="my-drawer-2"
        className="btn lg:btn-lg btn-primary drawer-button lg:hidden join-item rounded-r-full"
      >
        Filter
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M3 5C3 4.44772 3.44772 4 4 4H20C20.5523 4 21 4.44772 21 5C21 5.55228 20.5523 6 20 6H4C3.44772 6 3 5.55228 3 5ZM3 12C3 11.4477 3.44772 11 4 11H16C16.5523 11 17 11.4477 17 12C17 12.5523 16.5523 13 16 13H4C3.44772 13 3 12.5523 3 12ZM7 19C6.44772 19 6 19.4477 6 20C6 20.5523 6.44772 21 7 21H20C20.5523 21 21 20.5523 21 20C21 19.4477 20.5523 19 20 19H7Z"
            fill="currentColor"
          />
        </svg>
      </label>
    </div>
  );
};

export default SerachFilterBar;
