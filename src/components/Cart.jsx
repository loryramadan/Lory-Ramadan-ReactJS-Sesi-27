import React from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  getCartTotal,
  removeItem,
  decreaseItemQuantity,
  increaseItemQuantity,
} from "../feature/CartSlice";
import BackToMenuButton from "./button/BackToMenuButton";
import "boxicons"
import  {numberWithComma} from "../utils/NumberWithComma";

const Cart = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.allCart
  );

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <>
    <BackToMenuButton />
    <div className="container mt-10 mx-auto">
      <div className="flex my-10 shadow-md">
        <div className="w-3/4 px-10 py-10">
          <div className="flex justify-between border-b pb-8">
            <h1 className="font-semibold text-2xl">Shoping Cart</h1>
          </div>
          <div className="flex justify-between mb-5 mt-10">
            <h3 className="w-2/5">product detail</h3>
            <h3 className="w-1/5 font-semibold text-center">Quantity</h3>
            <h3 className="w-1/5 font-semibold text-center">Price</h3>
            <h3 className="w-1/5 font-semibold text-center">Total</h3>
          </div>
          {cart.map((item) => (
            <div key={item} className="flex items-center py-5">
              <div className="flex w-[600px] mr-10">
                <div className="w-56">
                  <img className="h-44 object-cover" alt={item.nama} src={item.gambar}/>
                </div>
                <div className="flex flex-col justify-between ml-4 flex-grow">
                  <span className="font-bold text-lg">{item.nama}</span>
                  <button
                    onClick={() => dispatch(removeItem(item.id))}
                  >
                    <box-icon name='trash' color='red'></box-icon>
                  </button>
                </div>
                <div className="flex justify-between w-1/5 h-14 mt-16 border-2">
                  <button className="p-2 pb-2 border-2"
                    onClick={() => dispatch(decreaseItemQuantity(item.id))}
                  >
                    -
                  </button>
                  <span className="text-lg py-3 pb-2 text-center mx-2 w-8">{item.quantity}</span>
                  <button className="p-2 pb-2 border-2"
                    onClick={() => dispatch(increaseItemQuantity(item.id))}
                  >
                    +
                  </button>
                </div>
              </div>
              <span className="text-center w-1/5 font-semibold text-xs">
                Rp: {numberWithComma(item.harga)}
              </span>
              <span className="text-center w-1/5 font-semibold text-xs">
                Rp: {numberWithComma(item.harga * item.quantity)}
              </span>
            </div>
          ))}
        </div>

        <div className="w-1/4 py-10 px-8 border-2 shadow-md">
          <h1 className="pb-8 text-2xl font-semibold border-b">
            Order Summary
          </h1>
          <div className="flex justify-between mt-10 mb-5">
            <span className="font-semibold">Total Item:</span>
            <span className="font-semibold">{totalQuantity}</span>
          </div>
          <div className="border mt-8">
            <div className="flex justify-between py-6 px-2 font-semibold">
              <span>Total:</span>
              <span>Rp: {numberWithComma(totalPrice)}</span>
            </div>
            <button className="bg-blue-500 py-3 w-full font-semibold text-white">
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
    </>
  );
};

export default Cart;
