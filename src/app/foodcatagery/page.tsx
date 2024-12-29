import React from 'react';

const FoodCategory = () => {
  // Items array containing food details
  const items = [
    { id: 1, img: "/food1.png", label: "Save 50% on Fast Food" },
    { id: 2, img: "/food2.png", label: "Desserts" },
    { id: 3, img: "/food3.png", label: "Healthy Salads" },
    { id: 4, img: "/food4.png", label: "Delicious Burgers" },
  ];

  return (
    <section className="bg-black text-white py-16 px-6">
      <div className="container mx-auto text-center">
        {/* Title */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          <span className="text-orange-500">Choose</span> Food Item
        </h2>

        {/* Grid of food items */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {items.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg"
            >
              {/* Image of the food item */}
              <img
                src={item.img}
                alt={item.label}
                width={500}
                height={500}
                className="w-full h-56 object-cover rounded-lg transition-transform duration-300 group-hover:scale-110"
              />

              {/* Overlay label */}
              <div className="absolute bottom-4 left-4 bg-black bg-opacity-50 px-4 py-2 rounded-md transition-opacity duration-300 group-hover:bg-opacity-75">
                <span className="text-orange-500 font-semibold">{item.label}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FoodCategory;