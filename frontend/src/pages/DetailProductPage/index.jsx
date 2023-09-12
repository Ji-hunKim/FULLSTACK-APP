import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../../utils/axios";
import ProductImage from "./Sections/ProductImage";
import ProductInfo from "./Sections/ProductInfo";

const DetailedProductPage = () => {
  const { productId } = useParams();
  const [product, setproduct] = useState(null);

  useEffect(() => {
    async function fetchProduct() {
      try {
        const response = await axiosInstance.get(
          `/products/${productId}?type=single`
        );
        console.log(response);
        setproduct(response.data[0]);
      } catch (error) {
        console.error(error);
      }
    }
    fetchProduct();
  }, [productId]);

  if (!product) return null;
  return (
    <section>
      <div className="text-center">
        <h1 className="p-4 text-2xl">{product.title}</h1>
      </div>

      <div className="flex gap-4">
        {/* ProductImage */}
        <div className="w-1/2">
          <ProductImage product={product} />
        </div>

        {/* ProductInfo */}
        <div className="w-1/2">
          <ProductInfo procuct={product} />
        </div>
      </div>
    </section>
  );
};

export default DetailedProductPage;
