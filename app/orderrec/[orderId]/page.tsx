"use client";

import ShippingModal from '@/components/OrderModals/ShippingModal';
import productList from '@/constants/catalogList';
import orderStatus from '@/constants/orderStatus';
import { OrderEntity } from '@/types/orderTypes';
import React, { useEffect, useRef, useState } from 'react'

const orderObject: OrderEntity = {
    id: "11228456",
    date: "January 19, 2024",
    productId: "",
    status: 3,
    quantity: 200,
    itemComment: "Provide green and blue cotton saree",
    wholesaler: "Mungipa Texttile",
    retailer: "Rushil Bansal, RR Enterprises",
    transactionId: "1234678945678",
    delivered: false,
    tLink: undefined,
    tNumber: undefined,
    courierPartner: "",
    paymentFlag: false,
};

const OrderReceivedDetails: React.FC = () => {

    const [currentOrderDetails, setCurrentOrderDetails] = useState<OrderEntity>(JSON.parse(localStorage.getItem("myOrder") ?? ""));
    const [isApproved, setIsApproved] = useState(false);
    const [transactionFlag, setTransactionFlag] = useState(0);
    const [trackingError, setTrackingError] = useState(false);
    const partnerRef = useRef<HTMLInputElement>(null);
    const awbRef = useRef<HTMLInputElement>(null);
    const trackingLinkRef = useRef<HTMLInputElement>(null);

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
      const trackingNumber = awbRef?.current?.value ?? "";
      const partnerName = partnerRef?.current?.value ?? "";
      const trackingLink = trackingLinkRef?.current?.value ?? "";
      if ((partnerName.length> 0 && trackingNumber.length > 0) || trackingLink.length > 0) {
        setTrackingError(false);
        changePostTrackingDetails(trackingNumber, partnerName, trackingLink);
      } else {
        setTrackingError(true);
      }
    };

    const changePostTrackingDetails = (trackingNumber: string, partnerName: string, trackingLink: string) => {
      setCurrentOrderDetails((previousOrderDetails)=> {
        localStorage.setItem("myOrder", JSON.stringify({...previousOrderDetails, status: 4, courierPartner: partnerName, tLink: trackingLink, tNumber: trackingNumber}));
        return {...previousOrderDetails, status: 4, courierPartner: partnerName, tLink: trackingLink, tNumber: trackingNumber};
      });
    };

    const handleCheckboxChange = () => {
        if(!isApproved) {
            setIsApproved(!isApproved);
        }
        changePostOrderApprovalStatus()
      }

      const changePostOrderApprovalStatus = () => {
        setCurrentOrderDetails((previousOrderDetails)=> {
          localStorage.setItem("myOrder", JSON.stringify({...previousOrderDetails, status: 2}));
          return {...previousOrderDetails, status: 2};
        });
      }

      const changePostTransactionApprovalStatus = () => {
        setCurrentOrderDetails((previousOrderDetails)=> {
          localStorage.setItem("myOrder", JSON.stringify({...previousOrderDetails, status: 4, }));
          return {...previousOrderDetails, status: 4, };
        });
      }

      const changePreTransactionApprovalStatus = () => {
        setCurrentOrderDetails((previousOrderDetails)=> {
          localStorage.setItem("myOrder", JSON.stringify({...previousOrderDetails, status: 2, paymentFlag: true}));
          return {...previousOrderDetails, status: 2, paymentFlag: true};
        });
      }

    const setTransactionApproval = (value: number) => {
      if (transactionFlag === 0) {
        if (value === 1) {
          changePostTransactionApprovalStatus();
        } else {
          changePreTransactionApprovalStatus();
        }
        setTransactionFlag(value);
      }
    };

    const product = productList[0];
  return (
    <>
      <main className="bg-white mt-10 px-4 pb-24 pt-10 sm:px-6 sm:pt-24 lg:px-8 lg:py-32">
        <div
          style={{
            boxShadow: "0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            borderTop: `3px solid rgb(252, 103, 49)`,
            borderBottom: `3px solid rgb(252, 103, 49)`,
          }}
          className="mx-auto p-10 w-full"
        >
          <div className="">
            <p className="text-4xl font-bold text-kellygreen tracking-tight">
              Order Received
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
                    <strong>Reatiler:</strong>&nbsp;&nbsp;
                    {currentOrderDetails.retailer}
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

              <div className="border-t border-gray-200 mt-2 p-2">
                <h1 className="font-bold text-kellygreen">Approve Order</h1>
                <div className="mt-2">
                  <span className="align-top text-m mr-2 text-darkgray">
                    Please Approve the order!
                  </span>
                  <input
                    type="checkbox"
                    className="toggle toggle-primary"
                    checked={currentOrderDetails.status >=2 ? true: isApproved}
                    onChange={handleCheckboxChange}
                  />
                </div>
              </div>

              {(currentOrderDetails.status > 2 ||
                currentOrderDetails.paymentFlag) && (
                <div className="border-t border-gray-200 mt-2 p-2">
                  <h1 className="font-bold text-kellygreen">
                    Transaction Details
                  </h1>
                  <dl className="py-2 text-sm">
                    <div>
                      <dt className="font-bold">Transaction ID</dt>
                      <dd className="text-gray-700">
                        <span className="block">
                          {currentOrderDetails.transactionId}
                        </span>
                      </dd>
                    </div>
                  </dl>
                  {currentOrderDetails.paymentFlag ? (
                    <span className="text-red font-bold">
                      Payment Approval was rejected!!
                    </span>
                  ) : (
                    <>
                      <span className="text-darkgray">
                        Please approve or reject!
                      </span>
                      <div className="join ml-2">
                        <input
                          className="join-item btn checked:!bg-red checked:!border-red checked:!text-white "
                          type="radio"
                          name="options"
                          checked={transactionFlag === 2 ? true : false}
                          aria-label="Rejected"
                          onClick={() => setTransactionApproval(2)}
                        />
                        <input
                          className="join-item btn checked:!bg-kellygreen checked:!border-kellygreen checked:!text-white"
                          type="radio"
                          name="options"
                          checked={transactionFlag === 1 ? true : false}
                          aria-label="Approved"
                          onClick={() => setTransactionApproval(1)}
                        />
                      </div>
                    </>
                  )}
                </div>
              )}

              {currentOrderDetails.status === 4 && <ShippingModal />}

              {currentOrderDetails.status >= 4 && (
                <div className="border-t border-gray-200 mt-2 p-2">
                  <h1 className="font-bold text-kellygreen">Shipping Method</h1>
                  {trackingError && (
                     <span className="text-red font-bold">
                     Error!! Please enter Courier Partner & AWB number or
                        Tracking Link.
                   </span>
                  )}
                  <dl className="py-2 text-sm">
                    <div>
                      <dt className="font-bold">
                        {currentOrderDetails.status === 4 ? (
                          <div className="relative">
                            <input
                              type="text"
                              id="floating_courier_partner"
                              className="w-64 block px-2.5 pb-2.5 pt-4 text-sm text-darkgray bg-transparent rounded-lg border-solid	border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=""
                              ref={partnerRef}
                            />
                            <label
                              htmlFor="floating_courier_partner"
                              className="absolute text-sm font-medium text-darkgray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Courier Partner
                            </label>
                          </div>
                        ) : (
                          <div>
                            <span className="block">
                              Partner:&nbsp;
                              <strong>
                                {currentOrderDetails.courierPartner}
                              </strong>
                            </span>
                          </div>
                        )}
                      </dt>
                      <dd className="text-darkgray">
                        {currentOrderDetails.status === 4 ? (
                          <div className="relative mt-2">
                            <input
                              type="text"
                              id="floating_courier_partner"
                              className="w-64 block px-2.5 pb-2.5 pt-4 text-sm text-darkgray bg-transparent rounded-lg border-solid	border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=""
                              ref={awbRef}
                            />
                            <label
                              htmlFor="floating_courier_partner"
                              className="absolute text-sm text-darkgray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              AWB Number
                            </label>
                          </div>
                        ) : (
                          <div>
                            <span className="block">
                              AWB:&nbsp;
                              <strong>{currentOrderDetails.tNumber}</strong>
                            </span>
                          </div>
                        )}

                        {currentOrderDetails.status === 4 ? (
                          <div className="relative mt-2">
                            <input
                              type="url"
                              id="floating_courier_partner"
                              className="w-64 block px-2.5 pb-2.5 pt-4 text-sm text-darkgray bg-transparent rounded-lg border-solid	border border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                              placeholder=""
                              ref={trackingLinkRef}
                            />
                            <label
                              htmlFor="floating_courier_partner"
                              className="absolute text-sm text-darkgray duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-white px-2 peer-focus:px-2 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto start-1"
                            >
                              Tracking Link
                            </label>
                          </div>
                        ) : (
                          <a
                            className="block link link-primary"
                            href={currentOrderDetails.tLink}
                          >
                            Tracking Link
                          </a>
                        )}

                        {currentOrderDetails.status === 4 ? (
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

              <div className="w-full border-t border-gray-200 mt-2">
                <ul className="w-full mt-10 steps steps-vertical justify-center lg:steps-horizontal">
                  {Object.entries(orderStatus).map(([key, value], index) => (
                    <li
                      key={index}
                      className={`step ${
                        currentOrderDetails.status >= +key ? "step-primary" : ""
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
      </main>
    </>
  );
}

export default OrderReceivedDetails;
