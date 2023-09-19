import React from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../store/thunkFunctions";

const ProductInfo = ({ product }) => {
  const dispatch = useDispatch();
  const handleClick = () => {
    dispatch(addToCart({ productId: product._id }));
  };
  return (
    <div>
      <p className="text-xl text-bold">Product Info</p>
      <ul>
        <li>
          <span className="font-semibold text-gray-900">Price: </span>
          {product.price} 원
        </li>
        <li>
          <span className="font-semibold text-gray-900">Sold: </span>
          {product.sold} 개
        </li>
        <li>
          <span className="font-semibold text-gray-900">Description: </span>
          {product.description}
        </li>
      </ul>

      <div className="mt-3">
        <button
          onClick={handleClick}
          className="w-full px-4 py-2 text-white bg-black hover:bg-gray rounded-md"
        >
          Cart
        </button>
      </div>
    </div>
  );
};


export default ProductInfo;
