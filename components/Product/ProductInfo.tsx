import { Product } from "@/types/catalogTypes";
import React from "react";

interface InfoProps {
  data: Product;
}

const ProductInfo: React.FC<InfoProps> = ({ data }) => {
  return (
    <div>
      <h1 className="text-3xl bordered font-bold text-gray-900">{data.name}</h1>
      <div className="mt-3 items-end justify-between">
        <p className="text-2xl text-gray-900">{data.company}</p>
      </div>
      <hr className="my-4" />
      <div className="flex flex-col gap-y-2">
        <div className="flex items-center">
          {/* <h3 className="font-semibold text-black">Size:</h3> */}
          <div>{data.details}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Category:</h3>
          <div>{data.category}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Sub-Category:</h3>
          <div>{data.subCategory}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Sub-Sub-Category:</h3>
          <div>{data.nestedCategory}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Type:</h3>
          <div>{data.type}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Price:</h3>
          <div>{`₹${data.price} - ₹${+data.price + 200}`}</div>
        </div>
        <div className="flex items-center gap-x-2">
          <h3 className="font-semibold text-black">Discount:</h3>
          <span className="badge text-kellygreen bg-semikellygreen font-bold">
            {data.discount}%
          </span>
        </div>
        <span className="badge badge-secondary badge-md font-bold">
          Trending
        </span>
      </div>
      <div className="mt-8 flex items-center gap-x-8">
        <button className="btn btn-primary text-white flex items-center gap-x-3">
          Add To Cart
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            className="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
