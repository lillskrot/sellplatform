"use client";

import React, { useState } from "react";

interface DropdownProps {
  label: string;
  dropdownText: string;
}

const Dropdown: React.FC<DropdownProps> = ({ label, dropdownText }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false); // Manage dropdown open/close state

  return (
    <div
      className="relative"
      style={{ backgroundColor: "rgba(244, 244, 244, 1)" }}
    >
      <label
        className="block text-sm font-medium text-gray-700"
        style={{ textAlign: "left" }} // Ensure the label is aligned to the left
      ></label>
      <button
        onClick={() => setIsOpen(!isOpen)} // Toggle the open/closed state on click
        className="mt-1 block w-full py-2 px-3 white-background text-gray-700 focus:outline-none sm:text-sm"
        style={{ textAlign: "left" }}
      >
        {label}
      </button>
      {isOpen && (
        <div
          className="w-full white-background border-gray-300 rounded-md" // `mt-2` for space between button and dropdown
        >
          <div className="p-2 text-gray-700">{dropdownText}</div>
        </div>
      )}
    </div>
  );
};

export default Dropdown;
