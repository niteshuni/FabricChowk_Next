"use client";
import React from "react";
import MultiselectFilter from "../shared/MultiselectFilter";
import PriceFilter from "../shared/PriceFilter";
import ToggleFilter from "../shared/ToggleFilter";
import TreeSelect from "../shared/TreeSelect";

const SideBarFilter = () => {
  return (
    <>
      <div className="flex justify-between items-center mb-3">
        <h1 className="text-lg font-bold">Filters</h1>
        <button className="btn btn-primary btn-sm hover:text-white">
          Apply
        </button>
      </div>

      <MultiselectFilter />
      <TreeSelect />
      <PriceFilter />
      <ToggleFilter filterName="Trending" />
      <ToggleFilter filterName="Discount" />
    </>
  );
};

export default SideBarFilter;
