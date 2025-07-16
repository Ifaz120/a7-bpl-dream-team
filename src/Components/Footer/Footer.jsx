import React from "react";

const Footer = () => {
  return (
    <div className="bg-[#06091A] min-h-[600px] relative flex flex-col">
      {/* email section */}
      <div className="w-9/10 border border-gray-300 bg-white mx-auto flex flex-col gap-y-8 h-[340px] justify-center items-center bg-[url('/public/Images/bg-shadow.png')] bg-cover text-center rounded-4xl absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
        <div className="text-center flex flex-col gap-y-2">
          <h2 className="text-2xl sm:text-3xl font-bold">Subscribe to our Newsletter</h2>
          <p className=" sm:text-xl text-gray-600 font-bold">
            Get the latest updates and news right in your inbox!
          </p>
        
        </div>
        <div className="flex flex-col sm:flex-row gap-y-3 sm:gap-y-0 gap-x-3">
          <input
            placeholder="Enter your email"
            className="border-1 bg-white border-gray-400 rounded-lg px-2 sm:w-[300px] py-2 placeholder-gray-500"
            type="email"
            name=""
            id=""
          />
          <button className="px-4 py-2 bg-gradient-to-br from-pink-400 to-yellow-400 font-semibold rounded-lg cursor-pointer">
            Subscribe
          </button>
        </div>
      </div>

      {/* footer section */}
      <div className="w-9/10 mx-auto mt-[240px] flex flex-col justify-center items-center gap-y-10">
        <img className="w-25" src="/Images/logo-footer.png" alt="" />
        <div className="grid sm:grid-cols-1 lg:grid-cols-3 gap-x-30 gap-y-5 text-white">
          <div className="">
            <h5 className="font-bold text-xl">About Us</h5>
            <p className="text-gray-400 ">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div className=" flex flex-col sm:justify-center sm:items-center">
            <h5 className="font-bold text-xl mb-4">Quick Links</h5>
            <ul className="text-gray-400 flex flex-col gap-y-2 sm:list-disc">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="flex flex-col gap-y-4">
            <h5 className="font-bold text-xl">Subscribe</h5>
            <p className="text-gray-400 ">
              Subscribe to our newsletter for the latest updates.
            </p>
            <div className="flex">
              <input
                placeholder="Enter your Email"
                className="bg-white px-4 py-2 rounded-l-lg placeholder-gray-500 text-black"
                type="email"
                name=""
                id=""
              />
              <button className="px-4 py-2 bg-gradient-to-br from-pink-400 to-yellow-400 font-semibold rounded-r-lg cursor-pointer text-black">
                Subscribe
              </button>
            </div>
          </div>
        </div>
 
      </div>

      <div className="flex flex-col gap-y-6 py-10 ">
        <hr className="border-t-2 border-gray-800 w-full" />
        <p className="text-white mx-auto ">@2024 Your Company All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
