import { BlogCardType } from "@/types/blogTypes";
import React from "react";
import Image from "next/image";

const BlogCard = (props: BlogCardType) => {
  return (
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap -m-12">
          <div className="p-12 flex flex-col items-start">
            <span className="inline-block py-1 px-2 rounded bg-semikellygreen text-kellygreen text-xs font-medium tracking-widest">
              {props.readTime}
            </span>
            <h2 className="sm:text-3xl text-2xl title-font font-medium mt-4 mb-4">
                {props.header}
            </h2>
            <p className="leading-relaxed mb-8 text-darkgray">
              {props.para}
            </p>
            <div className="flex items-center flex-wrap pb-4 mb-4 border-b-2 border-gray-100 mt-auto w-full">
              <a href={props.href} className="text-primary inline-flex items-center">
                Learn More
                <svg
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <span className="mr-3 inline-flex items-center ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
                  <circle cx="12" cy="12" r="3"></circle>
                </svg>
                {props.views}
              </span>
              <span className="inline-flex items-center leading-none text-sm">
                <svg
                  className="w-4 h-4 mr-1"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
                {props.comment}
              </span>
            </div>
            <a className="inline-flex items-center">
                <Image alt="blog" src={props.userImgSrc} height={12} width={12} className="w-12 h-12 mask mask-circle rounded-full flex-shrink-0 object-cover object-center"/>
              <span className="flex-grow flex flex-col pl-4">
                <span className="title-font font-medium">
                  {props.userName}
                </span>
                <span className="text-kellygreen text-xs tracking-widest mt-0.5">
                  {props.dateString}
                </span>
              </span>
            </a>
          </div>
        </div>
      </div>
  );
};

export default BlogCard;
