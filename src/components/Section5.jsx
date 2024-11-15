import CardProduct from "./cardProduct";
import dataProducts from "../config/data.js";
import { useState } from "react";

export default function Section5() {
  const [products, setProducts] = useState(dataProducts);

  //   handle filter by category
  const handleFilter = async (pCategory) => {
    if (pCategory !== "All") {
      setProducts(products.filter((item) => item.category === pCategory));
    } else {
      setProducts(dataProducts);
    }
  };

  return (
    <div className="mb-10">
      <h1 className="text-center lg:text-7xl text-4xl font-bold  my-20">
        Featured Products
      </h1>
      <div className="w-full lg:px-40">
        <div className="w-full">
          <ul className="flex ml-10 lg:ml-0 my-10 ">
            <li
              className="font-semibold text-gray-400 text-xl mr-5 hover:cursor-pointer  hover:text-black"
              onClick={() => handleFilter("All")}
            >
              All Products
            </li>
            <li
              className="font-semibold text-gray-400 text-xl mr-5 hover:cursor-pointer  hover:text-black"
              onClick={() => handleFilter("Tshirts")}
            >
              Tshirts
            </li>
            <li
              className="font-semibold text-xl mr-5 text-gray-400   hover:cursor-pointer hover:text-black"
              onClick={() => handleFilter("Mugs")}
            >
              Mugs
            </li>
          </ul>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap justify-between items-center">
          {/* cards  */}
          {products.map((product, index) => (
            <CardProduct
              key={index}
              title={product.title}
              category={product.category}
              oldPrice={product.oldPrice}
              newPrice={product.newPrice}
              img={product.img}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
