import React, { useState } from "react";
import { useSelector } from "react-redux";
import MenuPage from "./../components/MenuPage";
import Hero from "./../components/Hero";
import Buttons from "../components/button/ButtonsCategory";

const Home = () => {
  const items = useSelector((state) => state.allCart.items);
  const [filter, setFilter] = useState(items);

  const menuItems = [...new Set(items.map((val) => val.category))];

  const filterItems = (cat) => {
    const newItems = items.filter((newval) => newval.category === cat);
    setFilter(newItems);
  };

  // const dispatch = useDispatch();
  return (
    <>
      <Hero />
      <Buttons
        setFilter={setFilter}
        filterItems={filterItems}
        menuItems={menuItems}
      />
      <MenuPage filter={filter} />
    </>
  );
};

export default Home;
