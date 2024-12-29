import { Clock } from "lucide-react";
import { Facebook, Twitter, Instagram, Youtube, PinIcon } from 'lucide-react'




export default function Footer() {
  const link1 = ['About', 'News', 'Partners', 'Team', 'Menu', 'Contact']
  const link2 = ['FAQ', 'Term & Condition', 'Reporting', 'Documentation', 'Support Policy', 'Privacy']
  const posts = [
    { title: "Is fastfood good for your body?", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Change your food habit With organic food", date: "February 28, 2022", image: "/recentPost.png" },
    { title: "Do you like fastfood for your life?", date: "February 28, 2022", image: "/recentPost.png" },
  ]
  const icons = [
    { Icon: Facebook, color: 'text-[#1E1E1E]' },
    { Icon: Twitter, color: 'text-[#1E1E1E]' },
    { Icon: Instagram, color: 'text-[#1E1E1E]' },
    { Icon: Youtube, color: 'text-[#FF9F0D]' },
    { Icon: PinIcon, color: 'text-[#1E1E1E]' },
  ]

  return (
    <footer className="bg-[#0D0D0D] text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="w-full md:w-[1169px] mx-auto text-center mb-12 flex gap-[0px] flex-col md:flex-row md:gap-[271px]">
          <div className="flex flex-col">
            <h2 className="text-3xl font-bold mb-4">
              <span className="text-[#FF9F0D]">Still</span> You Need Our Support ?
            </h2>
            <p className="mb-6">Do not wait make a smart & logical quote here. Its pretty easy.</p>
          </div>

          <form className="flex-col md:flex-row space-y-4">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="flex-grow bg-[#FF9F0D] text-white placeholder:text-center md:placeholder:text-start placeholder-white placeholder-opacity-60 px-4 py-4 rounded-l-md focus:outline-none"
            />
            <button
              type="submit"
              className="bg-white text-[#FF9F0D] px-6 py-4 rounded-r-md font-semibold hover:bg-[#FF9F0D] hover:text-white transition duration-300"
            >
              Subscribe Now
            </button>
          </form>
        </div>
        <div className="border-t border-[#FF9F0D] my-8"></div>
        <div className="md:flex md:justify-between block items-center mt-[56px] space-y-5 md:space-y-0">
          <div className='w-full md:w-[395.2px]'>
            <h3 className="text-xl font-bold mb-8">About Us.</h3>
            <p className="mb-6 text-[18px] leading-[26px]">
              Corporate clients and leisure travelers have been relying on Groundlink for dependable safe, and professional chauffeured car service in major cities across World.
            </p>
            <div className="flex items-start">
              <div className="bg-[#FF9F0D] p-2 rounded mr-4 w-[77.23px] h-[70.79px]">
                <Clock className="text-white m-auto" />
              </div>
              <div>
                <h4 className="font-semibold">Opening Hours</h4>
                <p className="text-sm">Mon - Sat(8.00 - 6.00)</p>
                <p className="text-sm">Sunday - Closed</p>
              </div>
            </div>
          </div>
          <div className="w-[120.36px]">
            <h3 className="text-xl font-bold mb-6">Useful Links</h3>
            <ul className="text-[16px] leading-6 flex flex-col gap-4">
              {link1.map((link) => (
                <li key={link} className="mb-2">
                  <a href="#" className="hover:text-[#FF9F0D] transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="text-xl font-bold mb-6">Help?</h3>
            <ul className="text-[16px] flex flex-col gap-4 leading-6">
              {link2.map((link) => (
                <li key={link} className="mb-2">
                  <a href="../FAQ" className="hover:text-[#FF9F0D] transition duration-300">
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-[273.83px]">
            <h3 className="text-xl font-bold mb-8">Recent Post</h3>
            {posts.map((post, index) => (
              <div key={index} className="flex  items-center mb-4">
                <img src={post.image} alt="" className="w-16 h-16 object-cover mr-4" />
                <div>
                  <h4 className="font-semibold mb-1">{post.title}</h4>
                  <p className="text-sm text-gray-400">{post.date}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="bg-[#4F4F4F] py-8 flex">
        <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
          <p className="text-[16px] leading-6 mb-4 md:mb-0">
            Copyright © 2022 by Syeda Laiba. All Rights Reserved.
          </p>
          <div className="flex space-x-4">
            {icons.map(({ Icon, color }, index) => (
              <a
                key={index}
                href="#"
                className={`bg-white p-2 rounded ${color} hover:bg-[#FF9F0D] hover:text-white transition duration-300`}
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}