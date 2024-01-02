"use client";

import { categoryNode } from "@/types/CategoryTypes";
import React, { useState } from "react";
import CheckboxTree from "react-checkbox-tree";
import "react-checkbox-tree/lib/react-checkbox-tree.css";

const TreeSelect = () => {
  const [checked, setChecked] = useState<string[]>([]);
  const [expanded, setExpanded] = useState<string[]>([]);

  return (
    <details className="overflow-hidden rounded-xl my-2 border border-gray-300 [&_summary::-webkit-details-marker]:hidden">
      <summary className="flex cursor-pointer items-center justify-between gap-2 bg-white p-4 text-gray-900 transition">
        <span className="text-sm font-medium"> Category </span>

        <span className="transition group-open:-rotate-180">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="h-4 w-4"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M19.5 8.25l-7.5 7.5-7.5-7.5"
            />
          </svg>
        </span>
      </summary>
      <CheckboxTree
        icons={{
          check: <span className="rct-icon rct-icon-check text-primary" />,
          uncheck: <span className="rct-icon rct-icon-uncheck text-primary" />,
          halfCheck: (
            <span className="rct-icon rct-icon-half-check text-primary" />
          ),
          expandClose: <span className="rct-icon rct-icon-expand-close" />,
          expandOpen: <span className="rct-icon rct-icon-expand-open" />,
          expandAll: <span className="rct-icon rct-icon-expand-all" />,
          collapseAll: <span className="rct-icon rct-icon-collapse-all" />,
          parentClose: <span className="" />,
          parentOpen: <span className="" />,
          leaf: <span className="" />,
        }}
        nodes={categoryNode}
        checked={checked}
        expanded={expanded}
        onCheck={(checked) => setChecked(checked)}
        onExpand={(expanded) => setExpanded(expanded)}
      />
    </details>
  );
};

export default TreeSelect;
