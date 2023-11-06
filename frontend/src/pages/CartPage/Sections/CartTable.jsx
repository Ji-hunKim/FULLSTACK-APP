import React from "react";

const CartTable = ({ products, onRemoveItem }) => {

  const renderCartImage = (images) => {
    if (images.length > 0) {
      let image = images[0];
      return `${import.meta.env.VITE_SERVER_URL}/${image}`;
    }
  };

  const renderItems =
    products.length > 0 &&
    products.map((product) => (
      <tr className="border-b" key={product._id}>
        <td>
          <img
            className="w-[70px]"
            alt="product"
            src={renderCartImage(product.images)}
          />
        </td>
        <td>amount : {product.quantity}</td>
        <td>{product.price} $</td>
        <td>
          <button onClick={() => onRemoveItem(product._id)}>delete</button>
        </td>
      </tr>
    ));

  return (
    <table className="w-full text-sm text-left text-gray-500">
      <thead className="border-[1px]">
        <tr>
          <th>Photo</th>
          <th>Amount</th>
          <th>Price</th>
          <th>Delete</th>
        </tr>
      </thead>

      <tbody>{renderItems}</tbody>
    </table>
  );
};

export default CartTable;
