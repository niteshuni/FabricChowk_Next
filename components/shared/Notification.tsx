"use client";

import orderStatus from "@/constants/orderStatus";
import { OrderEntity } from "@/types/orderTypes";
import { usePathname } from "next/navigation";
import React, { useEffect, useState } from "react";

type notificationType = {
    notify: boolean;
    order: OrderEntity | undefined;
}

const Notification: React.FC = () => {

    const [isNotification, setIsNotification] = useState<notificationType>({notify: false, order: undefined});

    const pathname = usePathname();
    const pathArray = pathname.split('/');
    const checkWSPath = pathArray.find((path) => path === "ws");
    const isWSlogged = localStorage.getItem("signedws");
    const isRTlogged = localStorage.getItem("signedrt");

    useEffect(() => {
        const handleStorageChange = () => {
            const isWSlogged = localStorage.getItem("signedws");
            const isRTlogged = localStorage.getItem("signedrt");
            const orderDetails = JSON.parse(localStorage.getItem("myOrder") ?? "") as OrderEntity;
            const orderSt = orderDetails?.status ?? undefined;
            if(orderSt !=null && checkWSPath && isWSlogged && orderSt === 1 || orderSt === 3 ) {
                setIsNotification({notify: true, order: orderDetails});
            } else if(orderSt !=null && !checkWSPath && isRTlogged && orderSt=== 2 || orderSt === 4 ) {
                setIsNotification({notify: true, order: orderDetails});
            } else {
                setIsNotification({notify:false, order: undefined});
            }
        };
    
        window.addEventListener('storage', handleStorageChange);
    
        return () => {
          window.removeEventListener('storage', handleStorageChange);
        };
      }, []); 
    
  return (
    <div className="dropdown dropdown-end bg-transparent mr-4">
      <div
        tabIndex={0}
        role="button"
        className="btn shadow-none m-1 p-0 w-6 bg-transparent border-0 hover:bg-transparent"
        style={{ height: "1.5rem", minHeight: "1.5rem" }}
      >
        {isNotification.notify ? (
          <svg
            className="w-6 h-6 text-gray-800 dark:text-white"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M15.133 10.632v-1.8a5.406 5.406 0 0 0-4.154-5.262.955.955 0 0 0 .021-.106V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C4.867 13.018 3 13.614 3 14.807 3 15.4 3 16 3.538 16h12.924C17 16 17 15.4 17 14.807c0-1.193-1.867-1.789-1.867-4.175ZM4 4a1 1 0 0 1-.707-.293l-1-1a1 1 0 0 1 1.414-1.414l1 1A1 1 0 0 1 4 4ZM2 8H1a1 1 0 0 1 0-2h1a1 1 0 1 1 0 2Zm14-4a1 1 0 0 1-.707-1.707l1-1a1 1 0 1 1 1.414 1.414l-1 1A1 1 0 0 1 16 4Zm3 4h-1a1 1 0 1 1 0-2h1a1 1 0 1 1 0 2ZM6.823 17a3.453 3.453 0 0 0 6.354 0H6.823Z" />
          </svg>
        ) : (
          <svg
            className="w-6 h-6 text-gray-800"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 14 20"
          >
            <path d="M12.133 10.632v-1.8A5.406 5.406 0 0 0 7.979 3.57.946.946 0 0 0 8 3.464V1.1a1 1 0 0 0-2 0v2.364a.946.946 0 0 0 .021.106 5.406 5.406 0 0 0-4.154 5.262v1.8C1.867 13.018 0 13.614 0 14.807 0 15.4 0 16 .538 16h12.924C14 16 14 15.4 14 14.807c0-1.193-1.867-1.789-1.867-4.175ZM3.823 17a3.453 3.453 0 0 0 6.354 0H3.823Z" />
          </svg>
        )}
      </div>
      <div
        tabIndex={0}
        className="dropdown-content z-[1] card card-compact w-72 shadow bg-white text-primary-content"
      >
        <div className="block px-4 py-2 font-medium text-center text-black rounded-t-lg bg-lightgray">
          Notifications
        </div>
        {isWSlogged || isRTlogged ? (
          <div className="divide-y divide-gray-100 ">
            {isNotification.order != null &&
              Object.keys(isNotification.order).length > 0 && (
                <a href={checkWSPath ? `/ws/order/${isNotification.order.id}` : `/order/${isNotification.order.id}`} className="flex px-4 py-3 hover:bg-grey500">
                  <div className="w-full ps-3">
                    <div className="text-black text-sm">
                      Order ID:
                      <span className="font-semibold ml-2">
                        {isNotification.order.id}
                      </span>
                    </div>
                    <span className="text-right text-black text-sm">
                      {checkWSPath
                        ? `Retailer: ${isNotification.order.retailer}`
                        : `Wholesaler: ${isNotification.order.wholesaler}`}
                    </span>
                    <div className="text-xs text-primary">
                      {orderStatus[isNotification.order.status]}
                    </div>
                  </div>
                </a>
              )}
            <a href="#" className="flex px-4 py-3 hover:bg-grey500">
              <div className="w-full ps-3">
                <div className="text-black text-sm">
                  Order ID:
                  <span className="font-semibold ml-2">#459867</span>
                </div>
                <span className="text-right text-black text-sm">
                {checkWSPath
                        ? `Retailer: Anil Mahajan`
                        : `Wholesaler: Gaurav Creation`}
                </span>
                <div className="text-xs text-primary">Delivered</div>
              </div>
            </a>
            <a href="#" className="flex px-4 py-3 hover:bg-grey500">
              <div className="w-full ps-3">
                <div className="text-black text-sm">
                  Order ID:
                  <span className="font-semibold ml-2">#459231</span>
                </div>
                <span className="text-right text-black text-sm">
                {checkWSPath
                        ? `Retailer: Mrityunjay Saha`
                        : `Wholesaler: Vineet Fashions`}
                </span>
                <div className="text-xs text-primary">Delivered</div>
              </div>
            </a>
            <a href="#" className="flex px-4 py-3 hover:hover:bg-grey500">
              <div className="w-full ps-3">
                <div className="text-black text-sm">
                  Order ID:
                  <span className="font-semibold ml-2">#425643</span>
                </div>
                <span className="text-right text-black text-sm">
                {checkWSPath
                        ? `Retailer: Gaurav Agarwal`
                        : `Wholesaler: Rampuria Vanijya`}
                </span>
                <div className="text-xs text-primary">Delivered</div>
              </div>
            </a>
            <a href="#" className="flex px-4 py-3 hover:hover:bg-grey500">
              <div className="w-full ps-3">
                <div className="text-black text-sm">
                  Order ID:
                  <span className="font-semibold ml-2">#400243</span>
                </div>
                <span className="text-right text-black text-sm">
                {checkWSPath
                        ? `Retailer: Anil Dinesh Rajgarhia`
                        : `Wholesaler: Gaurav Synthetics`}
                </span>
                <div className="text-xs text-primary">Delivered</div>
              </div>
            </a>
          </div>
        ) : (
          <span className="text-black px-4 py-3 text-m">No Notification</span>
        )}
        <a
          href="#"
          className="block py-2 text-sm font-medium text-center text-black rounded-b-lg bg-lightgray"
        >
          <div className="inline-flex items-center ">
            <svg
              className="w-4 h-4 me-2 text-gray-500"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 14"
            >
              <path d="M10 0C4.612 0 0 5.336 0 7c0 1.742 3.546 7 10 7 6.454 0 10-5.258 10-7 0-1.664-4.612-7-10-7Zm0 10a3 3 0 1 1 0-6 3 3 0 0 1 0 6Z" />
            </svg>
            View all
          </div>
        </a>
      </div>
    </div>
  );
};

export default Notification;
