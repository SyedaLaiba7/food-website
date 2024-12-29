import Image from "next/image";
import { IoPlayOutline } from "react-icons/io5";


export default function Aboutus() {
  return (
    <div>
      {/* Frist Section: Content and Buttons */}
      <section className="text-white body-font">
        <div className="container h-full mx-auto flex flex-col md:flex-row px-5 py-24">
          {/* Left Image */}
          <div className="flex flex-col md:flex-row items-center md:space-x-4 mt-2">
            <Image
              className="object-cover object-center w-full md:w-[336px] h-auto mt-4 md:mt-0 rounded-lg"
              alt="hero"
              src="/about1.png"
              width={309}
              height={536}
            />
          </div>

          {/* Right Images */}
          <div className="flex flex-col md:space-y-4 mt-4 md:mt-0 md:ml-4">
            <Image
              className="object-cover object-center w-full md:w-[309px] h-auto rounded-lg"
              alt="image2"
              src="/youget.png"
              width={309}
              height={271}
            />
            <Image
              className="object-cover object-center mt-4 w-full md:w-[309px] h-auto rounded-lg"
              alt="image3"
              src="/youget2.png"
              width={309}
              height={382}
            />
          </div>

          {/* Text Content and Buttons */}
          <div className="lg:flex-grow md:w-1/2 lg:pl-12 md:pl-8 flex flex-col items-center md:items-start text-center md:text-left mt-8 md:mt-0">
            <h1 className="text-sm mb-4 font-medium text-yellow-400 italic">About us _____</h1>
            <p className="text-black title-font text-2xl md:text-3xl font-bold">
              Food is an important part of a balanced Diet
            </p>
            <p className="mb-8 leading-relaxed mt-4 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
              dui volutpat fringilla bibendum. Urna, elit augue urna, vitae feugiat pretium donec id elementum.
              Ultrices mattis vitae mus risus. Lacus nisi, et ac dapibus sit eu velit in consequat.
            </p>
            <div className="flex justify-center md:justify-start">
              <button className="inline-flex text-white bg-orange-400 border-0 py-2 px-4 focus:outline-none rounded text-lg">
                Show More
              </button>
              <button className="ml-4 inline-flex items-center text-black border-0 py-2 px-4 focus:outline-none rounded text-lg">
                <IoPlayOutline className="mr-2" />
                Watch video
              </button>
            </div>
          </div>
        </div>

        {/* Second Section */}
        <section className="text-white body-font">
          <div className="container mx-auto flex flex-col items-center px-5 py-24">
            <h1 className="text-black text-2xl md:text-3xl font-bold text-center">Why Choose Us</h1>
            <p className="text-black text-center mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non
              dui volutpat fringilla bibendum.
            </p>
            <Image
              className="object-cover object-center w-full md:w-[1320px] h-auto mt-10 rounded-lg"
              alt="why choose us"
              src="/about.png"
              width={1320}
              height={386}
            />
          </div>
        </section>
      </section>

      {/* Thrid section */}
      <section className="text-white body-font h-full">
        <div className="container px-3 py-20 mx-auto">
          <div className="flex flex-wrap m-4">
            <div className="p-4 md:w-1/3">
              <div className="h-full  flex justify-center items-center  flex-col border-2 rounded-lg overflow-hidden">
                <Image

                  src="/student.png"
                  width={80} height={80}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    BEST CHEF
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3">
              <div className="h-full border-2 flex justify-center items-center  flex-col rounded-lg overflow-hidden">
                <Image
                  className=""
                  src="/coffee.png"
                  width={80} height={80}
                  alt="blog"
                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    120 Item food
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
              </div>
            </div>
            <div className="p-4 md:w-1/3" >
              <div className="h-full border-2  flex justify-center items-center  flex-col rounded-lg overflow-hidden">
                <Image
                  className=" flex flex-col justify-center items-center"
                  src="/man.png"
                  width={80} height={80}
                  alt="blog"

                />
                <div className="p-6">
                  <h1 className="title-font text-lg font-medium text-black mb-2 text-bold text-center">
                    Clean Environment
                  </h1>
                  <p className="leading-relaxed mb-3 text-center text-black">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque diam pellentesque bibendum non dui volutpat</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}