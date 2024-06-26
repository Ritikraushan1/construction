// components/Popup.js
"use client";
import React, { useState } from "react";
import Cookies from "js-cookie";

const Popup = ({ onClose }) => {
  const [selection, setSelection] = useState("Ambala");

  const handleSave = () => {
    Cookies.set("location", selection, { expires: 7 });
    window.location.reload();
    onClose();
  };

  return (
    <div className="fixed bg-gray-800 bg-opacity-75 inset-0 flex items-center justify-center z-50">
      <div className="bg-white py-10 px-5 lg:px-24 rounded shadow-lg text-center w-[90%] lg:w-[60%] h-[70%] md:h-[80%] lg:h-[50%]">
        <div className="grid grid-rows-2 lg:grid-cols-2 items-center justify-center">
          <div className=" flex items-center justify-center">
            <img
              src="/images/popup.svg"
              alt="logo"
              className="w-[70%] h-[70%]"
            />
          </div>
          <div className=" flex flex-col">
            <h2 className="text-2xl mb-2 text-black font-bold">
              What's the location?
            </h2>
            <div className="w-[100%]">
              <select
                className="border border-gray-300 p-1 lg:p-2 text-black mb-4"
                value={selection}
                onChange={(e) => setSelection(e.target.value)}
                defaultValue="Ambala"
              >
                <option value="Ambala">Ambala</option>
                <option value="Chandigarh">Chandigarh</option>
                <option value="Dehradun">Dehradun</option>
                <option value="Karnal">Karnal</option>
                <option value="Saharanpur">Saharanpur</option>
                <option value="Delhi - NCR">Delhi - NCR</option>
                <option value="Indore">Indore</option>
                <option value="Meerut">Meerut</option>
                <option value="Muzaffarnagar">Muzaffarnagar</option>
                <option value="Roorkee">Roorkee</option>
                <option value="Yamunanagar">Yamunanagar</option>
              </select>
              <button
                className="bg-black hover:bg-white text-yellow-400 hover:text-black hover:border-black hover:border-[1px] border-opacity-25 ml-7 px-7 py-2 rounded-sm uppercase text-sm"
                onClick={handleSave}
              >
                Search
              </button>
            </div>
            <p className="text-gray-500 pt-5">
              Each location will have its own special package.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Popup;
