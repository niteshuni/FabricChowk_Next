import { Product } from "@/types/catalogTypes";
import React from "react";
import Image from "next/image";

export const ProductCard = ({ productList }: { productList: Product[] }) => {
  return (
    <>
      {productList.map((item, index) => (
        <div
          key={index}
          className="card card-bordered lg:card-side w-11/12 bg-base-100 shadow-xl my-10"
        >
          {item.trending && (
            <span className="badge badge-secondary badge-md absolute right-0 top-[-8px]">
              Trending
            </span>
          )}
          <label className="swap swap-flip absolute right-3 top-5">
            <input type="checkbox" />
            <svg
              className="swap-off"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="none"
              stroke="black"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>

            <svg
              className="swap-on"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              width="24"
              height="24"
              fill="red"
              stroke="red"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
          </label>
          <figure className="bg-bgimage overflow-hidden rounded-tl-xl rounded-tr-xl lg:rounded-bl-xl lg:rounded-tr-none">
            <Image
              style={{ objectFit: "contain" }}
              height={500}
              width={300}
              alt={item.name}
              src={item.imgSrc}
            />
          </figure>
          <div className="card-body py-4">
            <h2 className="card-title text-kellygreen">{item.name}</h2>

            <span className="text-darkgray">{item.details}</span>
            <span>
              <strong>Category:</strong> {item.category}
            </span>
            <span>
              <strong>Type:</strong> {item.type}
            </span>
            <span>
              <strong>Company:</strong> {item.company}
            </span>
            <span>
              <strong>Price:</strong> ₹{item.price}
            </span>
            <span>
              <strong>Discount:</strong>{" "}
              <span className="badge text-kellygreen bg-semikellygreen font-bold">
                {item.discount}%
              </span>
            </span>
            <div className="card-actions justify-end">
              <a
                href={`/product/${item.id}`}
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Details
              </a>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};
