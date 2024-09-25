import logo1 from "../assets/img/logo9.svg";
import logo2 from "../assets/img/logo2.svg";
import logo3 from "../assets/img/logo3.svg";
import logo4 from "../assets/img/logo4.svg";
import logo5 from "../assets/img/logo5.svg";
import logo6 from "../assets/img/logo6.svg";
import logo8 from "../assets/img/logo8.svg";

const IntegrationPage = () => {
  const platforms = [
    { name: "BigCommerce", logo: logo2 },
    { name: "Wix", logo: logo1 },
    { name: "Squarespace", logo: logo3 },
    { name: "WooCommerce", logo: logo6 },
    { name: "Shopify", logo: logo4 },
    { name: "Etsy", logo: logo5 },
    { name: "More", logo: logo8 },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white text-center px-4 sm:px-6 lg:px-8">
      {/* Platform Grid */}
      <div className="relative grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 sm:gap-16 lg:gap-32 items-center">
        {/* Central Green Icon */}
        <div className="col-span-2 sm:col-span-3 lg:col-span-3 flex justify-center mb-10">
          <div className="bg-green-500 w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 flex items-center justify-center rounded-lg shadow-lg">
            <img
              src={logo1}
              alt="Main Icon"
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
          </div>
        </div>

        {/* Other Platforms */}
        {platforms.map((platform, index) => (
          <div
            key={index}
            className="relative w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 bg-white flex items-center justify-center rounded-lg shadow-lg"
          >
            <img
              src={platform.logo}
              alt={platform.name}
              className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12"
            />
          </div>
        ))}

        {/* SVG for connecting lines */}
        <div className="absolute top-0 left-0 w-full h-full">
          <svg
            className="w-full h-full"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M50,200 Q150,100 300,200"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <path
              d="M300,200 Q450,300 600,200"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <path
              d="M600,200 Q750,150 900,200"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <path
              d="M300,200 Q200,350 100,200"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <path
              d="M600,200 Q750,250 900,150"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <path
              d="M100,300 Q200,200 300,300"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <path
              d="M300,300 Q500,400 700,300"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <path
              d="M50,300 Q200,400 350,300"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
            <path
              d="M200,500 Q400,300 600,500"
              stroke="#E5E7EB"
              strokeWidth="2"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default IntegrationPage;
