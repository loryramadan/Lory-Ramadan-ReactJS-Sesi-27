import React from "react";
import DATA from "../../utils/MenuData";

const Buttons = ({ menuItems, setFilter, filterItems }) => {
  return (
    <div className="text-center mt-5 ">
      <button
        className="mx-3 md:w-32 md:py-3  text-white bg-orange-500 border-0  focus:outline-none hover:bg-orange-600 rounded text-lg"
        onClick={() => setFilter(DATA)}
      >
        semua
      </button>
      {menuItems.map((val) => (
        <button
          key={val.id}
          className="md:w-32 mx-3 md:py-3 text-white bg-orange-500 border-0 focus:outline-none hover:bg-orange-600 rounded text-lg"
          onClick={() => filterItems(val)}
        >
          {val}
        </button>
      ))}
    </div>
  );
};

export default Buttons;
