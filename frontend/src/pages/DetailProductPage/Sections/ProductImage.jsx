import React, { useState, useEffect } from "react";
import ImageGallery from "react-image-gallery";

const ProductImage = ({ product }) => {
  const [images, setimages] = useState([]);
  useEffect(() => {
    if (product?.imgaes?.length > 0) {
      let images = [];
      product.images.map((imageName) => {
        return images.push({
          original: `${import.meta.env.VITE_SERVER_URL}/${imageName}`,
          thumbnail: `${import.meta.env.VITE_SERVER_URL}/${imageName}`,
        });
      });
    }

    setimages(images);
  }, [product]);

  return <ImageGallery items={images} />;
};

export default ProductImage;
