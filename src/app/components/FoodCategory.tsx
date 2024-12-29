import React from 'react';

const FoodCategory = () => {
    // Items array containing food details
    const items = [
        { id: 1, img: '/food1.png', label: 'Save 50% on Fast Food' },
        { id: 2, img: '/food2.png', label: 'Desserts' },
        { id: 3, img: '/food3.png', label: 'Healthy Salads' },
        { id: 4, img: '/food4.png', label: 'Delicious Burgers' },
    ];

    return (
        <section className="bg-black text-white py-12 px-4 md:px-8">
            <div className="container mx-auto text-center">
                {/* Title */}
                <h2 className="text-2xl md:text-4xl font-bold mb-8">
                    <span className="text-orange-500">Choose</span> Food Item
                </h2>

                {/* Grid of food items */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="relative group rounded-lg overflow-hidden shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                        >
                            {/* Image of the food item */}
                            <img
                                src={item.img}
                                alt={item.label}
                                className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-300 ease-in-out group-hover:scale-105"
                            />

                            {/* Overlay label */}
                            <div className="absolute bottom-4 left-4 bg-black bg-opacity-70 px-3 py-2 rounded-md">
                                <span className="text-orange-500 font-semibold text-sm md:text-base">
                                    {item.label}
                                </span>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default FoodCategory;
