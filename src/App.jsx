import IntegrationPage from "./Components/IntegrationPage";
import TestosteroneData from "./Components/testosteroneData";
import PricingSection from "./Components/PricingSection";
import Footer from "./Components/Footer";
import tShirtImage from "./assets/img/t-shirt.png";
import huddy from "./assets/img/huddy.png";
import asset19 from "./assets/img/asset19.svg";
import img1 from "./assets/img/img1.webp";
import img2 from "./assets/img/img2.webp";
import img3 from "./assets/img/img3.webp";
import background from "./assets/img/background.svg";
import social1 from "./assets/img/social1.svg";
import social2 from "./assets/img/social2.svg";
import social3 from "./assets/img/social3.svg";
import social4 from "./assets/img/social4.svg";
import social5 from "./assets/img/social5.svg";
import social6 from "./assets/img/social6.svg";
import social7 from "./assets/img/social7.svg";
export default function App() {
  return (
    <div className="bg-white">
      {/* Navbar  */}
      <div className="text-white my-3 px-10 flex justify-between items-center">
        <div className="logo">
          <img
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt="Logo"
            className="w-22 h-10" // Increased size to be slightly bigger than the buttons
          />
        </div>
        <div className="menu text-black ">
          {/* Replace <i> tags with <span> tags */}
          <span className="pr-[30px]">Catalog</span>
          <span className="pr-[30px]">How it Works</span>
          <span className="pr-[30px]">Pricing</span>
          <span className="pr-[30px]">Blog</span>
          <span className="pr-[30px]">Services</span>
          <span className="pr-[30px]">Use Cases</span>
          <span className="pr-[30px]">Need help?</span>
        </div>
        <div className="auth-buttons pr-[80px]">
          <button className=" text-black  py-2 px-5 rounded border-2 border-black-500">
            Login
          </button>
          <button className="ml-4 bg-green-500 hover:bg-green-700 text-white  py-2 px-4 rounded">
            Sign Up
          </button>
        </div>
      </div>
      <hr />
      {/* Main Content  */}
      <div className="flex justify-between items-center">
        <div className="flex flex-col justify-center items-start pl-[10rem] pt-[12rem]">
          <h1 className="text-6xl font-semibold">
            Create and sell <br /> custom products
          </h1>
          <h4 className="text-sm font-bold pt-10">
            <span className="ri-arrow-right-fill"></span>100% Free to use
          </h4>
          <h4 className="text-sm font-bold pt-1">
            <span className="ri-arrow-right-fill"></span>900+ High-Quality
            Products
          </h4>
          <h4 className="text-sm font-bold pt-1">
            <span className="ri-arrow-right-fill"></span>Largest global print
            network
          </h4>
          <div className="flex justify-center items-center pt-10">
            <button className="p-2 bg-green-500 hover:bg-green-700 text-white py-3 px-6 rounded">
              Start for free
            </button>
            <button className="ml-5 p-2 text-black py-3 px-6 rounded border-2 border-black-500">
              <span className="ri-play-circle-line"></span>How it works
            </button>
          </div>
          <p className="text-sm font-semibold pt-3 text-green-600">
            Trusted by over 8M sellers around the world
          </p>
        </div>

        <div className="flex justify-end items-center pr-[15rem] pt-[3rem]">
          <img
            src="https://i.pinimg.com/474x/01/55/8d/01558d15762a1625d67f30a0d4faf9de.jpg"
            alt="Descriptive Alt Text"
            className="w-[30rem] h-[30rem]"
          />
        </div>
      </div>
      {/* Why Printify  */}
      <div className="w-full h-[40rem] mt-[6rem] flex justify-evenly items-center text-[#485256] ">
        <div className="flex space-x-4 ">
          <div className="w-[22rem] h-[22rem] bg-white  rounded-lg p-4 pr-4">
            <img
              src="https://printify.com/pfh/assets/legacy/higher-profits.svg"
              alt=""
              className="w-[150px] h-[150px]"
            />
            <h1 className="text-xl font-bold pt-5">Higher Profits</h1>
            <p className="text-sm pt-5">
              We offer some of the lowest prices in the industry because print
              providers continuously compete to win your business.
            </p>
          </div>
          <div className="w-[22rem] h-[22rem] bg-white  rounded-lg p-4">
            <img
              src="https://printify.com/pfh/assets/legacy/robust-scaling.svg"
              alt=""
              className="w-[150px] h-[150px]"
            />
            <h1 className="text-xl font-bold pt-5">Robust Scaling</h1>
            <p className="text-sm pt-5">
              Easily handle peak holiday seasons, with our wide network of
              partners and automatic routing functionality.
            </p>
          </div>
          <div className="w-[22rem] h-[22rem] bg-white  rounded-lg p-4">
            <img
              src="https://printify.com/pfh/assets/legacy/best-selection.svg"
              alt=""
              className="w-[150px] h-[150px]"
            />
            <h1 className="text-xl font-bold pt-5">Best Selection</h1>
            <p className="text-sm pt-5">
              With 900+ products and top quality brands, you can choose the best
              products for your business.
            </p>
          </div>
        </div>
      </div>

      {/* third page  */}
      <div className="w-full h-[40rem]  bg-[#e0dfdf54] flex justify-evenly items-center">
        <div className="w-[30%] h-[80%] ">
          <img src={tShirtImage} alt="T-Shirt" />
        </div>
        <div className="w-[20%] h-[40%] ">
          <img src={huddy} alt="" />
        </div>
        <div className="w-[40%] h-[60%] pt-[3rem] rounded-lg bg-white px-[5rem] ">
          <h1 className="text-3xl font-bold pt-10">
            Easily add your design to a wide range of products
          </h1>
          <p className="pt-10">
            With our free design tools, you can easily add your custom designs
            to t-shirts, mugs, phone cases, and hundreds of other products.
          </p>
          <div className="flex justify-center items-center pt-10">
            <h4 className="text-green-500 pt-10 inline-block">All products</h4>
            <img src={asset19} className="w-5 h-5 ml-2 align-middle" />
          </div>
        </div>
      </div>
      {/* 4th page  */}
      <div className="w-full h-[40rem] mt-20  bg-[#e0dfdf54] flex justify-evenly items-center">
        <div className="w-full h-[40rem] mt-[6rem] flex justify-evenly items-center text-[#485256] ">
          <div className="flex space-x-4 ">
            <div className="w-[22rem] h-[22rem]  rounded-lg p-4 pr-4">
              <img src={img1} alt="" className="w-[150px] h-[150px]" />
              <h1 className="text-xl text-green-500 font-bold pt-5">CREATE </h1>
              <h1 className="text-xl font-bold pt-5">Custom Products</h1>
              <p className="text-sm pt-5">
                Easily add your design to a wide range of products using our
                free tools
              </p>
            </div>
            <div className="w-[22rem] h-[22rem]  rounded-lg p-4">
              <img src={img2} alt="" className="w-[150px] h-[150px]" />
              <h1 className="text-xl  text-green-500 font-bold pt-5">SELL</h1>
              <h1 className="text-xl font-bold pt-5">On your turms </h1>
              <p className="text-sm pt-5">
                You Choose the products , sell price , and where to sell
              </p>
            </div>
            <div className="w-[22rem] h-[22rem] rounded-lg p-4">
              <img src={img3} alt="" className="w-[150px] h-[150px]" />
              <h1 className="text-xl  text-green-500 font-bold pt-5">
                WE HANDLE
              </h1>
              <h1 className="text-xl font-bold pt-5"> fulfillment</h1>
              <p className="text-sm pt-5">
                Once an oder is placed , we automatically handle all the
                printing and delivery logistic
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* 5th page  */}
      <div className="w-full h-[40rem]   flex  items-center flex-col ">
        <h1 className="text-5xl mt-[2rem] pt-1">Connect your store</h1>
        <h3 className="mt-2">
          Printify easily integrates with major e-commerce platforms and
          marketplaces
        </h3>
        <IntegrationPage />
      </div>
      {/* 6th page  */}
      <div className="w-full h-[30rem] mt-96 flex items-center justify-center rounded-lg ">
        <div className="w-[80%] h-[10rem] bg-green-100 flex items-center justify-center rounded-lg">
          <h1 className="text-3xl font-semibold pl-20 text-green-700">
            Are you a large business looking for custom solutions?
          </h1>
          <img
            src={background}
            alt=""
            className=" relative h-[10rem] w-[50%] object-cover bg-center rounded-lg"
          />
        </div>
      </div>
      {/* 7th page  */}
      <div className="w-full h-[50rem] bg-[#e0dfdf54] pt-[6rem] rounded-lg ">
        <div className="w-[80%] h-[10rem] flex items-center p-24 justify-center rounded-lg">
          <h1 className="text-5xl pl-10 pr-10">
            Trusted by over 8M sellers around the world
          </h1>
          <p className="text-xl ">
            Whether you are just getting started or run an enterprise-level
            e-commerce business, we do everything we can to ensure a positive
            merchant experience.
          </p>
        </div>
        <TestosteroneData />
      </div>
      {/* pricing section  */}
      <PricingSection />
      {/* bottom navbar  */}
      <div className="w-full flex justify-between items-center  text-white py-4 px-10 mt-20">
        <div className="logo">
          <img
            src="https://printify.com/pfh/media/logo-old-B5JY5YNQ.svg"
            alt="Footer Logo"
            className="w-20 h-10"
          />
        </div>
        <div className="links flex space-x-4">
          <img src={social1} alt="Image 1" className="w-8 h-8" />
          <img src={social2} alt="Image 2" className="w-8 h-8" />
          <img src={social3} alt="Image 3" className="w-8 h-8" />
          <img src={social4} alt="Image 4" className="w-8 h-8" />
          <img src={social5} alt="Image 5" className="w-8 h-8" />
          <img src={social6} alt="Image 6" className="w-8 h-8" />
          <img src={social7} alt="Image 6" className="w-8 h-8" />
        </div>
      </div>
      {/*   footer  */}
      <Footer />
      {/* terms  */}
      <div className="w-full h-[8rem] py-4 bg-gray-200 text-center text-sm">
        {/* Links Section */}
        <div className="flex justify-center items-center">
          <a
            href="/terms-of-service"
            className="text-gray-700 hover:underline pr-10"
          >
            Terms of Service
          </a>
          <a
            href="/privacy-policy"
            className="text-gray-700 hover:underline pr-10"
          >
            Privacy Policy
          </a>
          <a href="/security" className="text-gray-700 hover:underline pr-10">
            Security
          </a>
          <a
            href="/intellectual-property"
            className="text-gray-700 hover:underline pr-10"
          >
            Intellectual Property Policy
          </a>
        </div>
        {/* Copyright Section */}
        <p className="text-gray-600 mt-2">
          © 2024 Printify, Inc. All rights reserved.
        </p>

        {/* Sticky Icon */}
        <div className="w-14 h-14 rounded-full sticky bottom-5 left-5 z-50">
          <img
            src="https://static.ada.support/images/5a93af0b-c1ec-45fc-9cc8-0a3aa12ee4d0.svg"
            alt="Support Icon"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
}
