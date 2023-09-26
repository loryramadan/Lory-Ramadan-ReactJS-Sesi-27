import React, {useEffect} from "react";
import {useSelector,  useDispatch } from "react-redux";
import {Link} from 'react-router-dom'
import { getCartTotal } from "../feature/CartSlice";
import 'boxicons'

const Navbar = () => {  
  const {cart, totalQuantity} = useSelector((state) => state.allCart);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCartTotal());
  }, [cart]);

  return (
    <header className="bg-orange-500">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row justify-between">
        <a className="flex items-center mb-4 md:mb-0">
          <Link to="/">
          <span className="ml-3 text-xl text-white">Lory Restaurant</span>
          </Link>
        </a>
        <Link to="/cart">
        <button className="inline-flex items-center text-white bg-blue-500 border-0 py-1 px-3 focus:outline-none hover:bg-blue-600 rounded text-base mt-4 md:mt-0">
          <box-icon name='cart' size='sm' color='white'></box-icon>({totalQuantity})
        </button>
        </Link>
      </div>
    </header>
  );
};

export default Navbar;
