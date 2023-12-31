import React from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import axiosInstance from "../../utils/axios";
import { useNavigate } from "react-router-dom";
import FileUpload from "../../components/FileUpload";

const continents = [
  { key: 1, value: "Africa" },
  { key: 2, value: "Europe" },
  { key: 3, value: "Asia" },
  { key: 4, value: "North America" },
  { key: 5, value: "South America" },
  { key: 6, value: "Australia" },
  { key: 7, value: "Antarctica" },
];

const UploadProductPage = () => {
  const [product, setProduct] = useState({
    title: "",
    description: "",
    price: 0,
    continents: 1,
    images: [],
  });

  const userData = useSelector((state) => state.user?.userData);
  const navigate = useNavigate();

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleImages = (newImages) => {
    setProduct((prevState) => ({
      ...prevState,
      images: newImages,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // 이렇게 해도 되고
    // constb { title, description, price, images, continents } = product;
    const body = {
      writer: userData.id,
      // 이렇게 해도 됨
      ...product,
    };

    try {
      await axiosInstance.post("/products", body);
      navigate("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section>
      <div className="text-center m-7">
        <h1>Product Upload</h1>
      </div>

      <form className="mt-6" onSubmit={handleSubmit}>
        <FileUpload images={product.images} onImageChange={handleImages}/>
        <div className="mt-4">
          <label htmlFor="title">Name</label>
          <input
            className="w-full px-4 py-2 bg-white border rounded-md border-spacing-4"
            name="title"
            id="title"
            onChange={handleChange}
            value={product.title}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="description">Description</label>
          <input
            className="w-full px-4 py-2 bg-white border rounded-md"
            name="description"
            id="description"
            onChange={handleChange}
            value={product.description}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="price">Price</label>
          <input
            className="w-full px-4 py-2 bg-white border rounded-md"
            type="number"
            name="price"
            id="price"
            onChange={handleChange}
            value={product.price}
          />
        </div>

        <div className="mt-4">
          <label htmlFor="continents">Continent</label>
          <select
            className="w-full px-4 mt-2 bg-white border rounded-md"
            name="continents"
            id="continents"
            onChange={handleChange}
            value={product.continents}
          >
            {continents.map((item) => (
              <option key={item.key} value={item.key}>
                {item.value}
              </option>
            ))}
          </select>
        </div>

        <div className="mt-4">
          <button
            type="submit"
            className="w-full px-4 text-white bg-black rounded-md hover:bg-gray-700 py-2"
          >
            Upload
          </button>
        </div>
      </form>
    </section>
  );
};

export default UploadProductPage;
