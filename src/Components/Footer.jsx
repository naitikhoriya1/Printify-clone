const Footer = () => {
  const sections = {
    Integrations: [
      "Shopify",
      "Etsy",
      "eBay",
      "Amazon",
      "TikTok Shop",
      "PrestaShop",
      "BigCommerce",
      "Wix",
      "WooCommerce",
      "Squarespace",
      "Printify API",
      "Printify Pop-Up Store",
      "Shutterstock",
    ],
    Discover: [
      "Blog",
      "Guides",
      "Products",
      "Etsy print-on-demand",
      "Shopify print-on-demand",
      "Woocommerce print-on-demand",
      "Wix print-on-demand",
      "Squarespace print-on-demand",
      "Make Your Own Shirt",
      "Brands",
      "Pricing",
      "Shipping Rates",
      "Mockup Generator",
    ],
    "Start selling": [
      "Custom T-shirts",
      "Custom Hoodies",
      "Custom Mugs",
      "Custom Socks",
      "Custom Backpacks",
      "Custom Branding",
      "Sell on Etsy",
      "Sell on Social Media",
      "Free T-shirt Designs",
      "Custom Products",
      "Custom All-Over-Print Hoodies",
      "Start a Clothing Line",
      "Start POD Business",
      "Bulk Orders",
      "Transferring To Printify",
    ],
    Printify: [
      "Print on Demand",
      "Print Providers",
      "Experts Program",
      "Printify Express Delivery",
      "Become a Partner",
      "About",
      "Printify Quality Promise",
      "Jobs",
      "Webinars",
      "Printing Profits Podcast",
      "Contact Us",
      "Affiliate",
      "Contact Sales",
      "POD Glossary",
      "Network Fulfillment Status",
      "Merchant Protection",
      "Security",
      "Sitemap",
    ],
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {Object.keys(sections).map((section, index) => (
            <div key={index}>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                {section}
              </h3>
              <ul className="text-gray-700 space-y-2">
                {sections[section].map((item, idx) => (
                  <li key={idx} className="hover:text-green-600 cursor-pointer">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Footer;
