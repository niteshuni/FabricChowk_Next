"use client";

import ProductInfo from "@/components/Product/ProductInfo";
import productList from "@/constants/catalogList";
import React from "react";
import Image from "next/image";

interface ProductDetailPage {
  params: {
    productId: string;
  };
}

const ProductDetailPage: React.FC<ProductDetailPage> = ({ params }) => {
  const product = productList.find((item) => item.id === params.productId) ?? productList[0];
  return (
    <div className="mx-auto max-w-7xl mt-40">
      <div className="px-4 py-10 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
          <div className="bg-bgimage rounded-xl">
          <Image
          className="mx-auto"
            style={{ objectFit: "contain" }}
            height={500}
            width={400}
            alt={product.name}
            src={product.imgSrc}
          />
          </div>
          <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
            <ProductInfo data={product} />
          </div>
        </div>
        <hr className="my-10" />
        <div className="space-y-4">
          <h3 className="font-bold text-3xl">Related Items</h3>
          {/* {items.length === 0 && <NoResults />} */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 w-full">
            {[productList[1], productList[2], productList[3]].map((item, index) => (
              <div key={index} className="card card-compact bg-base-100 shadow-xl">
              <figure><Image src={item.imgSrc} width={200} height={200} alt={item.name} /></figure>
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>{item.details}</p>
                <div className="card-actions justify-end">
                <a
                href={`/product/${item.id}`}
                className="text-white bg-primary hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 focus:outline-none"
              >
                Details
              </a>                </div>
              </div>
            </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetailPage;
