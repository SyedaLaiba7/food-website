import React from 'react'
import { FaCheck } from 'react-icons/fa6'
import FoodCategory from './FoodCategory'

function Hero() {
    return (
        <>
            <section className='bg-black px-3 md:px-[135px] flex flex-col justify-evenly md:flex-row  md:items-center py-[50px]'>
                {/* Heading */}
                <div className='text-white w-full md:w-[50%]'>
                    <h1 className='text-center md:text-start md:text-[32px] text-[24px] font-normal text-[#FF9F0D] font whitespace-nowrap'>
                        Its Quick & Amusing!
                    </h1>

                    <h1 className='text-[20px] text-center md:text-start md:text-[50px] font-bold whitespace-nowrap md:whitespace-normal'>

                        <span className='text-[#FF9F0D]'>Th</span>e Art of speed food Quality
                    </h1>

                    <p className='text-[10px] text-center md:text-start md:text-[16px] font-normal'>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Varius sed pharetra dictum neque massa congue
                    </p>

                    <div className='flex flex-col md:flex-row items-center md:items-start'>

                        <button className='bg-[#FF9F0D] text-white w-[100px] h-[30px] md:w-[190px] md:h-[60px] rounded-[40px] mt-[32px] hover:bg-yellow-800'>
                            See More
                        </button>
                    </div>
                </div>

                {/* Image */}

                <div className='mt-[50px] md:mt-0 '>
                    <img
                        src="/food.png"
                        alt='Hero Image'
                        width={700}
                        height={500}
                        className=''
                    />

                </div>
            </section>
            <section className="bg-black px-4 md:px-[135px] flex flex-col md:flex-row justify-between items-center py-[50px] space-y-8 md:space-y-0">

                {/* Content Section */}
                <div className="text-white w-full md:w-[50%] space-y-6">
                    <h1 className="text-[24px] md:text-[32px] font-normal text-[#FF9F0D] font-greatVibes">
                        About us
                    </h1>

                    <h2 className="text-[20px] md:text-[50px] font-bold">
                        <span className="text-[#FF9F0D]">We</span> Create the best foody product
                    </h2>

                    <p className="text-[12px] md:text-[16px] leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum. Ultrices mattis sed vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
                    </p>

                    <ul className="space-y-4">
                        <li className="text-[12px] md:text-[16px] flex items-center">
                            <span className="mr-2 text-[#FF9F0D]">
                                <FaCheck />
                            </span>
                            Lacus nisi, et ac dapibus sit eu velit in consequat.
                        </li>
                        <li className="text-[12px] md:text-[16px] flex items-center">
                            <span className="mr-2 text-[#FF9F0D]">
                                <FaCheck />
                            </span>
                            Quisque diam pellentesque bibendum non dui volutpat fringilla
                        </li>
                        <li className="text-[12px] md:text-[16px] flex items-center">
                            <span className="mr-2 text-[#FF9F0D]">
                                <FaCheck />
                            </span>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit
                        </li>
                    </ul>

                    <div>
                        <button className="bg-[#FF9F0D] text-white w-[120px] h-[40px] md:w-[190px] md:h-[60px] rounded-full mt-4 hover:bg-yellow-800">
                            See More
                        </button>
                    </div>
                </div>

                {/* Images Section */}
                <div className="w-full md:w-[50%] flex flex-col items-center md:items-end space-y-4 md:space-y-6">
                    <img src="/foodpic1.png" alt="Featured Dish" className="w-full h-full rounded-lg" />

                    <div className="flex flex-wrap justify-center md:justify-end gap-4">
                        <img src="/foodpic2.png" alt="Dish 2" className="w-[45%] md:w-[48%] rounded-lg" />
                        <img src="/foodpic3.png" alt="Dish 3" className="w-[45%] md:w-[48%] rounded-lg" />
                    </div>
                </div>

            </section>

            <FoodCategory />
        </>
    
    )
}

export default Hero