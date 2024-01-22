"use client";

import { wholesalerList } from '@/constants/partnerList';
import { PartnerWholesaler } from '@/types/PartnersType';
import Image from 'next/image';
import React from 'react'

const Retailers = () => {
  return (
    <section className="mt-20 lg:mt-40 bg-white p-5 lg:p-10">
       <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-full text-center">
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-primary sm:text-4xl md:text-[40px]">
                Our Retailers
              </h2>
              <p className="text-base text-body-color">
              Dive into a world of textile excellence at FabricChowk&apos;s Retailer Hub. 
              Discover a curated selection of top-tier fabrics, sourced from trusted retailers, to meet every retail need with style and quality.
              </p>
            </div>
          </div>
        </div>
      <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
        <div className="flex items-center justify-between flex-column flex-wrap md:flex-row space-y-4 md:space-y-0 pb-4 bg-white">
          <div>
          </div>
          <label htmlFor="table-search" className="sr-only">
            Search
          </label>
          <div className="relative right-10">
            <div className="absolute inset-y-0 rtl:inset-r-0 start-0 flex items-center ps-3 pointer-events-none">
              <svg
                className="w-4 h-4 text-gray-500"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 20 20"
              >
                <path
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                />
              </svg>
            </div>
            <input
              type="text"
              id="table-search-users"
              className="block p-2 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg w-80 bg-gray-50 focus:ring-blue-500 focus:border-blue-500"
              placeholder="Search for users"
            />
          </div>
        </div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 ">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th scope="col" className="px-6 py-3">
                Business Name
              </th>
              <th scope="col" className="px-6 py-3">
                Address
              </th>
              <th scope="col" className="px-6 py-3">
                City
              </th>
              <th scope="col" className="px-6 py-3">
                Zone
              </th>
              <th scope="col" className="px-6 py-3">
                Propritor
              </th>
              <th scope="col" className="px-6 py-3">
                Product Category
              </th>
              <th scope="col" className="px-6 py-3">
                Phone
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Reference
              </th>
              <th scope="col" className="px-6 py-3">
                Annual Revenue
              </th>
            </tr>
          </thead>
          <tbody>
            {wholesalerList.map((item: PartnerWholesaler, index) => (
              <tr key={index} style={{borderBottomColor: 'rgb(229, 231, 235)'}} className="bg-white border-b hover:bg-gray-50">
                <th
                  scope="row"
                  className="flex items-center px-6 py-4 text-gray-900"
                >
                  <Image
                    className="rounded-full"
                    height={50}
                    width={50}
                    alt="partner image"
                    src="/assets/shared/unknown.png"
                  />

                  <div className="ps-3">
                    <div className="text-base font-semibold">
                      {item.businessName}
                    </div>
                  </div>
                </th>
                <td className="px-6 py-4">{item.address}</td>
                <td className="px-6 py-4">{item.city}</td>
                <td className="px-6 py-4">{item.zone}</td>
                <td className="px-6 py-4">{item.proprietor}</td>
                <td className="px-6 py-4">{item.category}</td>
                <td className="px-6 py-4">{item.phone}</td>
                <td className="px-6 py-4">{item.emailID}</td>
                <td className="px-6 py-4"></td>
                <td className="px-6 py-4">{item.annualRevenue}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Retailers;
