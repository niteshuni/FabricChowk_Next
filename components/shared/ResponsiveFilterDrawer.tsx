import React from "react";

const ResponsiveFilterDrawer = ({
  content,
  sidebar,
}: {
  content: React.ReactNode;
  sidebar: React.ReactNode;
}) => {
  return (
    <div className="drawer lg:drawer-open">
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      <div className="drawer-content flex flex-col items-center justify-center">
        {content}
        <label
          htmlFor="my-drawer-2"
          className="btn btn-primary drawer-button hidden"
        >
          Filter
        </label>
      </div>
      <div className="drawer-side mt-20 lg:mt-10">
        <label
          htmlFor="my-drawer-2"
          aria-label="close sidebar"
          className="drawer-overlay"
        ></label>
        <ul className="menu p-4 w-80 min-h-full bg-base-200 text-base-content">
          {sidebar}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveFilterDrawer;
