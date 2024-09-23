import price from "../assets/img/price.svg";

const PricingSection = () => {
  return (
    <div className="min-h-screen mt-20 flex justify-center rounded-xl  items-center bg-gray-100 py-12">
      <div className="flex  text-white rounded-xl overflow-hidden w-[90%] max-w-5xl">
        {/* Left Section: Text and Pricing Box */}
        <div className="bg-[#203641] w-1/2 px-20 flex flex-col justify-center space-y-6">
          <h1 className="text-4xl font-bold">Make Money, Risk-Free</h1>
          <p className="text-sm">
            You pay for fulfillment only when you make a sale
          </p>

          {/* Pricing Box */}
          <div className="bg-[#17262A] p-6 rounded-lg pb-10">
            <div className="flex justify-between text-xl pb-10">
              <p>You sell a t-shirt</p>
              <p>$30</p>
            </div>
            <div className="flex justify-between text-xl pb-10">
              <p>You pay for its production</p>
              <p>$12</p>
            </div>
            <hr className="border-gray-700 my-2" />
            <div className="flex justify-between text-2xl font-bold text-green-500">
              <p>Your profit</p>
              <p>$18</p>
            </div>
          </div>

          <button className=" w-full px-6 py-3 bg-green-600 text-white rounded-md font-semibold hover:bg-green-700">
            Start selling
          </button>

          <p className="text-sm text-gray-400">
            100% Free to use · 900+ Products · Largest print network
          </p>
        </div>
        <div className="w-1/2  flex items-center rounded-xl justify-center ">
          <img
            src={price}
            alt="Illustration"
            className="h-[40rem] rounded-xl"
          />
        </div>
      </div>
    </div>
  );
};

export default PricingSection;
