import React from 'react'

const ToggleFilter = ({filterName}: {filterName: string}) => {
  return (
    <label className="label cursor-pointer my-1">
      <span className="label-text text-sm font-medium">{filterName}</span>
      <input type="checkbox" className="toggle toggle-primary" />
    </label>
  );
}

export default ToggleFilter