"use client";

import React, { useState } from 'react'

const LanguageToggle = () => {
  const [isChecked, setIsChecked] = useState(false)

  const handleCheckboxChange = () => {
    setIsChecked(!isChecked)
  }

  return (
    <>
      <label className='themeSwitcherTwo shadow-card relative inline-flex cursor-pointer select-none items-center justify-center rounded-md bg-white p-1 mr-5'>
        <input
          type='checkbox'
          className='sr-only'
          checked={isChecked}
          onChange={handleCheckboxChange}
        />
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            !isChecked ? 'text-white bg-kellygreen' : 'text-kellygreen bg-semikellygreen'
          }`}
        >
          EN
        </span>
        <span
          className={`flex items-center space-x-[6px] rounded py-2 px-[18px] text-sm font-medium ${
            isChecked ? 'text-white bg-kellygreen' : 'text-kellygreen bg-semikellygreen'
          }`}
        >
          हि
        </span>
      </label>
    </>
  )
}

export default LanguageToggle;
