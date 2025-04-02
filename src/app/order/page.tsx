"use client";

import { useState } from "react";
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

export default function OrderPage() {
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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(orderData);
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
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="delivery"
                  value="delivery"
                  checked={orderData.orderType === "delivery"}
                  onChange={(e) =>
                    setOrderData({ ...orderData, orderType: e.target.value })
                  }
                  className="text-gray-800 focus:ring-red-500"
                />
                <label className="text-gray-600" htmlFor="delivery">
                  Delivery
                </label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="pickup"
                  value="pickup"
                  checked={orderData.orderType === "pickup"}
                  onChange={(e) =>
                    setOrderData({ ...orderData, orderType: e.target.value })
                  }
                  className="text-gray-800 focus:ring-red-500"
                />
                <label className="text-gray-600" htmlFor="pickup">
                  Pickup
                </label>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="name"
              className="block text-md font-medium text-gray-700"
            >
              Name
            </label>
            <input
              id="name"
              type="text"
              value={orderData.name}
              onChange={(e) =>
                setOrderData({ ...orderData, name: e.target.value })
              }
              required
              className="mt-1 py-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-md font-medium text-gray-700"
            >
              Phone
            </label>
            <input
              id="phone"
              type="tel"
              value={orderData.phone}
              onChange={(e) =>
                setOrderData({ ...orderData, phone: e.target.value })
              }
              required
              className="mt-1 py-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            />
          </div>

          {orderData.orderType === "delivery" && (
            <div>
              <label
                htmlFor="address"
                className="block text-md font-medium text-gray-700"
              >
                Delivery Address
              </label>
              <textarea
                id="address"
                value={orderData.address}
                onChange={(e) =>
                  setOrderData({ ...orderData, address: e.target.value })
                }
                required
                className="mt-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
                rows={3}
              />
            </div>
          )}

          <div>
            <label
              htmlFor="pizza"
              className="block text-md font-medium text-gray-700"
            >
              Pizza Type
            </label>
            <select
              id="pizza"
              value={orderData.pizza}
              onChange={(e) =>
                setOrderData({ ...orderData, pizza: e.target.value })
              }
              className="mt-1 text-gray-600 py-1 block w-full rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
            >
              <option value="">Select a pizza</option>
              {pizzas.map((pizza) => (
                <option key={pizza} value={pizza}>
                  {pizza}
                </option>
              ))}
            </select>
          </div>

          <div>
            <label className="block text-md font-medium text-gray-700">
              Size
            </label>
            <div className="flex space-x-4">
              <div className="flex items-center text-gray-600 space-x-2">
                <input
                  type="radio"
                  id="small"
                  value="small"
                  checked={orderData.size === "small"}
                  onChange={(e) =>
                    setOrderData({ ...orderData, size: e.target.value })
                  }
                  className="text-red-500  focus:ring-red-500"
                />
                <label htmlFor="small">Small</label>
              </div>
              <div className="flex items-center text-gray-600 space-x-2">
                <input
                  type="radio"
                  id="medium"
                  value="medium"
                  checked={orderData.size === "medium"}
                  onChange={(e) =>
                    setOrderData({ ...orderData, size: e.target.value })
                  }
                  className="text-red-500 focus:ring-red-500"
                />
                <label htmlFor="medium">Medium</label>
              </div>
              <div className="flex text-gray-600 items-center space-x-2">
                <input
                  type="radio"
                  id="large"
                  value="large"
                  checked={orderData.size === "large"}
                  onChange={(e) =>
                    setOrderData({ ...orderData, size: e.target.value })
                  }
                  className="text-red-500 focus:ring-red-500"
                />
                <label htmlFor="large">Large</label>
              </div>
            </div>
          </div>

          <div>
            <label
              htmlFor="instructions"
              className="block text-md font-medium text-gray-700"
            >
              Special Instructions
            </label>
            <textarea
              id="instructions"
              value={orderData.instructions}
              onChange={(e) =>
                setOrderData({ ...orderData, instructions: e.target.value })
              }
              placeholder="Any special requests or instructions?"
              className="mt-1 block w-full text-gray-600  rounded-md border border-gray-300 shadow-sm focus:border-red-500 focus:ring focus:ring-red-200 focus:ring-opacity-50"
              rows={3}
            />
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
