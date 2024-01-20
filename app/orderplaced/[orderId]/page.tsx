"use client";

import TransactionModal from '@/components/OrderModals/TransactionModal';
import productList from '@/constants/catalogList';
import orderStatus, { orderObject } from '@/constants/orderStatus';
import { OrderEntity } from '@/types/orderTypes';
import React, {useEffect, useRef, useState} from 'react';

interface OrderDetailsParam {
    params: {
      orderId: string;
    };
  }

const OrderDetails: React.FC<OrderDetailsParam> = ({params}) => {
  const [isChecked, setIsChecked] = useState(false);
  const [isTransaction, setIsTransaction] =  useState(false);
  const transactionRef = useRef<HTMLInputElement>(null);
  const [currentOrderDetails, setCurrentOrderDetails] = useState<OrderEntity>(JSON.parse(localStorage.getItem("myOrder") ?? JSON.stringify(orderObject)));

  useEffect(() => {
    const handleStorageChange = () => {
      setCurrentOrderDetails(JSON.parse(localStorage.getItem("myOrder") ?? ""));
    };

    window.addEventListener('storage', handleStorageChange);

    return () => {
      window.removeEventListener('storage', handleStorageChange);
    };
  }, []); 


  const handleTackingDetailHandler = () => {
    const tranID = transactionRef?.current?.value ?? "";
    if (tranID.length > 0) {
      setIsTransaction(false);
      changePostTransactionStatus(tranID);
    } else {
      setIsTransaction(true);
    }
  };

  const handleCheckboxChange = () => {
    if (!isChecked) {
      setIsChecked(!isChecked)
      changePostDeliveryStatus()
    }
  }

  const changePostDeliveryStatus = () => {
    setCurrentOrderDetails((previousOrderDetails)=> {
      const newOrderDetails = previousOrderDetails;
      newOrderDetails.status = 5;
      localStorage.setItem("myOrder", JSON.stringify(newOrderDetails));
      return {...newOrderDetails};
    });
  }

  const changePostTransactionStatus = (tranID: string) => {
    setCurrentOrderDetails((previousOrderDetails)=> {
      const newOrderDetails = previousOrderDetails;
      newOrderDetails.status = 3;
      const newObject = {...newOrderDetails, transactionId: tranID, paymentFlag: false};
      localStorage.setItem("myOrder", JSON.stringify(newObject));
      return newObject;
    });
  }

  const products = [productList[0]
  ];
  return (
    <main className="bg-white mt-10 px-4 pb-24 pt-10 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
      <div
        style={{
          boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
          borderTop: `3px solid rgb(252, 103, 49)`,
          borderBottom: `3px solid rgb(252, 103, 49)`,
        }}
        className="mx-auto p-10 w-full"
      >
        {currentOrderDetails.status === 2 && (
          <TransactionModal isModalOpen={true} />
        )}
        <div>
          <p className="text-4xl font-bold text-kellygreen tracking-tight">
            Order Details
          </p>

          <dl className="mt-5 text-m grid grid-cols-2 w-full gap-x-6 font-medium">
            <div>
              <dt className="text-xl text-darkgray">Order ID</dt>
              <dd className="mt-1 text-base text-primary">{`#${currentOrderDetails.id}`}</dd>
            </div>
            <div>
              <dt className="text-xl ml-1 text-darkgray">Status</dt>
              <dd
                style={{ textWrap: "nowrap" }}
                className="mt-1 lg:text-base text-white  p-3 badge badge-primary"
              >
                {orderStatus[currentOrderDetails.status]}
              </dd>
            </div>
          </dl>
        </div>

        <section
          aria-labelledby="order-heading"
          className="mt-5 border-t border-gray-200"
        >
          {products.map((product) => (
            <div
              key={product.id}
              className="flex space-x-6 border-b border-gray-200 py-5"
            >
              <img
                src={product.imgSrc}
                alt={product.name}
                className="h-20 w-20 flex-none rounded-lg bg-gray-100 object-cover object-center sm:h-40 sm:w-40"
              />
              <div className="flex flex-auto flex-col">
                <div>
                  <h4 className="font-medium text-gray-900">
                    <a href="">{product.name}</a>
                  </h4>
                  <p className="mt-2 text-sm text-gray-600">
                    {product.details}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Comment:</strong>&nbsp;&nbsp;
                    {currentOrderDetails.itemComment}
                  </p>
                  <p className="mt-2 text-sm text-gray-600">
                    <strong>Wholesaler:</strong>&nbsp;&nbsp;
                    {currentOrderDetails.wholesaler}
                  </p>
                </div>
                <div className="mt-2 flex flex-1 items-center">
                  <dl className="flex space-x-4 divide-x divide-gray-200 text-sm sm:space-x-6">
                    <div className="flex">
                      <dt className="font-medium text-darkgray">Quantity</dt>
                      <dd className="ml-2 text-gray-700">
                        {currentOrderDetails.quantity}
                      </dd>
                    </div>
                    <div className="flex pl-4 sm:pl-6">
                      <dt className="font-medium text-darkgray">Price</dt>
                      <dd className="ml-2 text-gray-700">{`₹${product.price}-₹${product.hPrice}`}</dd>
                    </div>
                  </dl>
                </div>
              </div>
            </div>
          ))}

          <div className="mt-4">
            <div className="px-2">
              <h1 className="font-bold text-kellygreen">Shipping Address</h1>
              <dl className="py-2 text-sm">
                <div>
                  <dt className="font-bold">Rusil Bansal</dt>
                  <dd className="text-gray-700">
                    <address className="not-italic">
                      <span className="block">
                        Shop No-104-109, 6th floor, Khetan Super Market, Birla
                        Mandir Road, 800004
                      </span>
                      <span className="block">North, Patna</span>
                      <span className="block">9430032448</span>
                    </address>
                  </dd>
                </div>
              </dl>
            </div>

            {currentOrderDetails.status >= 2 && (
              <div className="border-t border-gray-200 mt-2 p-2">
                <h1 className="font-bold text-kellygreen">
                  Transaction Details
                </h1>
                {isTransaction && (
                  <span className="text-red font-bold">
                    Error!! Please provide the Transaction ID for the order
                    placed.
                  </span>
                )}
                <dl className="py-2 text-sm">
                  <div>
                    <dt className="font-bold">Transaction ID</dt>
                    {currentOrderDetails.paymentFlag && (
                      <div>
                        <span className="mb-2 block">
                          {currentOrderDetails.transactionId}
                        </span>
                        <span className="text-red font-bold">
                        Transaction details declined by Wholesaler!!Please provide the accurate transaction ID for verification. Your cooperation is appreciated.
                        </span>
                      </div>
                    )}
                    <dd className="text-gray-700">
                      {currentOrderDetails.status === 2 ? (
                        <div className="mt-2 relative">
                          <input
                            type="text"
                            id="floating_courier_partner"
                            className="w-64 block px-2.5 pb-2.5 pt-4 text-sm text-darkgray bg-transparent rounded-lg border-solid	border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            placeholder=""
                            ref={transactionRef}
                          />
                          <label
                            htmlFor="floating_courier_partner"
                            className="absolute text-sm font-medium text-darkgray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                          >
                            {`${currentOrderDetails.paymentFlag ? "New" : ""} Transaction ID`}
                          </label>
                        </div>
                      ) : (
                        <span className="block">
                          {currentOrderDetails.transactionId}
                        </span>
                      )}
                      {currentOrderDetails.status === 2 ? (
                        <button
                          onClick={handleTackingDetailHandler}
                          className="btn btn-primary mt-2"
                        >
                          Submit
                        </button>
                      ) : null}
                    </dd>
                  </div>
                </dl>
              </div>
            )}

            {currentOrderDetails.status >= 4 && (
              <div className="border-t border-gray-200 mt-2 p-2">
                <h1 className="font-bold text-kellygreen">Shipping Method</h1>
                <dl className="py-2 text-sm">
                  <div>
                    <dt className="font-bold">
                      {currentOrderDetails.courierPartner}
                    </dt>
                    <dd className="mt-q text-gray-700">
                      <span className="block">
                        AWB:&nbsp;<strong>{currentOrderDetails.tNumber}</strong>
                      </span>
                      <a
                        className="block link link-primary"
                        href={currentOrderDetails.tLink}
                      >
                        Track
                      </a>
                      <span className="block">Takes up to 3 working days</span>
                    </dd>
                  </div>
                </dl>
              </div>
            )}

            {currentOrderDetails.status >= 4 && (
              <div className="border-t border-gray-200 mt-2 p-2">
                <h1 className="font-bold text-kellygreen">Delivery</h1>
                <div className="mt-2">
                  <span>Order Delivered?</span>
                  <br />
                  <input
                    type="checkbox"
                    className="mt-1 toggle toggle-success"
                    checked={isChecked}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>
            )}

            <div className="w-full border-t border-gray-200 mt-2">
              <ul className="w-full mt-10 steps steps-vertical justify-center lg:steps-horizontal">
                {Object.entries(orderStatus).map(([key, value], index) => (
                  <li
                    key={index}
                    className={`step ${
                      (currentOrderDetails.paymentFlag && key === "2") ? "step-error":  currentOrderDetails.status >= +key ? "step-primary" : ""
                    }`}
                  >
                    {value}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>
      </div>
      <p className="text-gray-500 mt-3 ml-5 dark:text-gray-400">
          Facing issues for your Order? please
          <a
            href="/contact"
            className="inline-flex ml-2 items-center font-medium text-primary hover:underline"
          >
           Contact Us
            <svg
              className="w-4 h-4 ms-2 rtl:rotate-180"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 10"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 5h12m0 0L9 1m4 4L9 9"
              />
            </svg>
          </a>
        </p>
    </main>
  );
};

export default OrderDetails;
