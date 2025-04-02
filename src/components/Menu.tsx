"use client";

import { useState } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const pizzas = [
  {
    name: "Margherita",
    description: "Fresh tomatoes, mozzarella, basil",
    price: "$14.99",
    image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002",
  },
  {
    name: "Pepperoni",
    description: "Pepperoni, mozzarella, tomato sauce",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1628840042765-356cda07504e",
  },
  {
    name: "Vegetarian",
    description: "Bell peppers, mushrooms, onions, olives",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
  },
  {
    name: "Supreme",
    description: "Pepperoni, sausage, bell peppers, onions, mushrooms",
    price: "$18.99",
    image: "https://images.unsplash.com/photo-1604382355076-af4b0eb60143",
  },
  {
    name: "Hawaiian",
    description: "Ham, pineapple, mozzarella",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1565299507177-b0ac66763828",
  },
  {
    name: "BBQ Chicken",
    description: "BBQ chicken, red onions, cilantro",
    price: "$17.99",
    image: "https://images.unsplash.com/photo-1565299585323-38d6b0865b47",
  },
  {
    name: "Mushroom",
    description: "Various mushrooms, garlic, herbs",
    price: "$15.99",
    image: "https://images.unsplash.com/photo-1571066811602-716837d681de",
  },
  {
    name: "Four Cheese",
    description: "Mozzarella, parmesan, gorgonzola, gouda",
    price: "$16.99",
    image: "https://images.unsplash.com/photo-1548369937-47519962c11a",
  },
];

export default function Menu() {
  const [currentPage, setCurrentPage] = useState(0);
  const itemsPerPage = 4;
  const totalPages = Math.ceil(pizzas.length / itemsPerPage);

  const nextPage = () => {
    setCurrentPage((prev) => (prev + 1) % totalPages);
  };

  const prevPage = () => {
    setCurrentPage((prev) => (prev - 1 + totalPages) % totalPages);
  };

  const currentPizzas = pizzas.slice(
    currentPage * itemsPerPage,
    (currentPage + 1) * itemsPerPage
  );

  return (
    <section className="py-20 bg-gray-100" id="menu">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12" data-aos="fade-up">
          <h2 className="text-4xl text-gray-800 font-bold mb-4">Our Menu</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Explore our selection of handcrafted pizzas made with love and the
            finest ingredients.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {currentPizzas.map((pizza, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden"
              data-aos="fade-up"
              data-aos-delay={index * 100}
            >
              <div className="relative h-48">
                <img
                  src={pizza.image}
                  alt={pizza.name}
                  className="absolute inset-0 w-full h-full object-cover"
                />
              </div>
              <div className="p-4">
                <h3 className="text-xl text-gray-600 font-semibold mb-2">
                  {pizza.name}
                </h3>
                <p className="text-gray-600 mb-4">{pizza.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-xl font-bold text-red-500">
                    {pizza.price}
                  </span>
                  <Link href={`/order?pizza=${pizza.name}`}>
                    <button className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors">
                      Order Now
                    </button>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center items-center space-x-4 mt-8">
          <button
            onClick={prevPage}
            className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <FaChevronLeft className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={nextPage}
            className="bg-white rounded-full p-3 shadow-lg hover:bg-gray-100 transition-colors"
          >
            <FaChevronRight className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </div>
    </section>
  );
}
