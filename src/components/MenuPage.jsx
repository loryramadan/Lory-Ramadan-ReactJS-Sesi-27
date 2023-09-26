import React from "react";
import { useDispatch} from "react-redux";
import { addToCart } from "../feature/CartSlice";
import { NavLink } from "react-router-dom";
import { numberWithComma } from "../utils/NumberWithComma";

const MenuPage = ({filter}) => {

  const dispatch = useDispatch();

  return (
    <>
      <section className="text-gray-600">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap m-4">
            {filter.map((item) => {
              return (
                <div className="lg:w-1/4 md:w-1/2 p-4 w-full" key={item.id}>
                  <a className="block relative h-48 rounded overflow-hidden">
                    <img
                      className="object-cover object-center w-full h-full block border-4 rounded-md border-orange-500"
                      alt={item.nama}
                      src={item.gambar}
                    />
                  </a>
                  <div className="my-6 flex justify-between">
                    <h2 className="text-gray-900 text-lg font-medium">
                      {item.nama}
                    </h2>
                    <p className="mt-1">Rp: {numberWithComma(item.harga)}</p>
                  </div>
                    <button
                    onClick={() => dispatch(addToCart(item))}
                    className="w-full text-white text-center bg-orange-500  py-1 px-3 focus:outline-none hover:bg-orange-600 rounded text-lg"
                    >
                    Add
                    </button>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default MenuPage;
