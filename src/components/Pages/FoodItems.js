import React from 'react';
import { useParams } from 'react-router-dom';
import { FaShoppingCart } from 'react-icons/fa';
import itemDetails from '../../components/Pages/ItemDetails'; // Ensure correct import path

const ThreeItems = () => {
  const { category, id } = useParams(); // Get category and id from the route params

  // Get the specific sub-category items based on the id
  const items = itemDetails[category]?.[id];

  // Check if items is an array, if not, handle the error
  if (!Array.isArray(items)) {
    return <div>No items found for this category.</div>;
  }

  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <h2 className="text-2xl font-bold mb-6 capitalize">{category} - {id}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
        {items.map((item, index) => (
          <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col items-center">
            <div className="p-4">
              <img
                src={item.image}
                alt={item.name}
                className="w-32 h-32 object-cover rounded-lg"
              />
            </div>
            <div className="p-4 text-center">
              <h3 className="text-xl font-semibold">{item.name}</h3>
              <p className="text-gray-600 mt-2">{item.price}</p>
              <button className="mt-4 bg-yellow-500 text-white py-2 px-4 rounded-lg flex items-center justify-center hover:bg-yellow-600">
                <FaShoppingCart className="mr-2" />
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThreeItems;

