"use client";

import { useState, Suspense } from "react";
import { useSearchParams } from "next/navigation";

const pizzas = [
  "Margherita",
  "Pepperoni",
  "Vegetarian",
  "Supreme",
  "Hawaiian",
  "BBQ Chicken",
  "Mushroom",
  "Four Cheese",
];

function OrderForm() {
  const searchParams = useSearchParams();
  const selectedPizza = searchParams.get("pizza");

  const [orderData, setOrderData] = useState({
    name: "",
    phone: "",
    address: "",
    pizza: selectedPizza || "",
    size: "medium",
    orderType: "delivery",
    instructions: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log(orderData);
  };

  const handleInputChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setOrderData({ ...orderData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-20 bg-gray-200">
      <div className="max-w-3xl mx-auto px-4 py-12">
        <h1 className="text-4xl text-gray-800 font-bold text-center mb-8">
          Place Your Order
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-lg shadow"
        >
          <div>
            <label className="block text-xl font-medium text-gray-700">
              Order Type
            </label>
            <div className="flex space-x-4 mt-2">
              <label className="flex items-center space-x-2 text-gray-600">
                <input
                  type="radio"
                  name="orderType"
                  value="delivery"
                  checked={orderData.orderType === "delivery"}
                  onChange={handleInputChange}
                  className="text-gray-800 focus:ring-red-500"
                />
                <span>Delivery</span>
              </label>
              <label className="flex items-center space-x-2 text-gray-600">
                <input
                  type="radio"
                  name="orderType"
                  value="pickup"
                  checked={orderData.orderType === "pickup"}
                  onChange={handleInputChange}
                  className="text-gray-800 focus:ring-red-500"
                />
                <span>Pickup</span>
              </label>
            </div>
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700">
              Name
            </label>
            <input
              name="name"
              type="text"
              value={orderData.name}
              onChange={handleInputChange}
              required
              className="mt-1 py-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
            />
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700">
              Phone
            </label>
            <input
              name="phone"
              type="tel"
              value={orderData.phone}
              onChange={handleInputChange}
              required
              className="mt-1 py-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
            />
          </div>

          {orderData.orderType === "delivery" && (
            <div>
              <label className="block text-md font-medium text-gray-700">
                Delivery Address
              </label>
              <textarea
                name="address"
                value={orderData.address}
                onChange={handleInputChange}
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
                rows={3}
              />
            </div>
          )}

          <div>
            <label className="block text-md font-medium text-gray-700">
              Pizza Type
            </label>
            <select
              name="pizza"
              value={orderData.pizza}
              onChange={handleInputChange}
              className="mt-1 text-gray-600 py-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200"
            >
              <option value="">Select a pizza</option>
              {pizzas.map((pizza) => (
                <option key={pizza} value={pizza}>
                  {pizza}
                </option>
              ))}
            </select>
          </div>

          <button
            type="submit"
            className="w-full px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition-colors"
          >
            Place Order
          </button>
        </form>
      </div>
    </div>
  );
}

export default function OrderPage() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <OrderForm />
    </Suspense>
  );
}
