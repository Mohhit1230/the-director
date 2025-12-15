import { FaArrowRightLong, FaArrowUpLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { RiCustomerService2Line } from "react-icons/ri";

export default function Home() {
  const categories = [
    {
      id: 1,
      name: "Suits",
      imageUrl: "/images/products/cat1.png",
    },
    {
      id: 2,
      name: "T-Shirts",
      imageUrl: "/images/products/cat2.png",
    },
    {
      id: 3,
      name: "Accessories",
      imageUrl: "/images/products/cat3.png",
    },
  ];

  return (
    <>
      <div className="min-h-screen flex flex-col gap-28">
        <section className="relative min-h-[60vh] md:h-screen flex items-center justify-center">
          <div className="absolute inset-0 bg-black opacity-20" />
          <div
            className="absolute inset-0 bg-cover bg-center bg-no-repeat brightness-95"
            style={{ backgroundImage: `url("/images/ui/hero_bg.jpg")` }}
          />
        </section>

        {/* Categories Section */}
        <section className="max-w-7xl flex flex-col mx-auto gap-20">
          <h2 className="text-5xl font-semibold text-white text-center">
            Fine Selection
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {categories.map((category) => (
              <Link
                to={`/category/${category.id}`}
                key={category.id}
                className="w-full"
              >
                <img
                  src={category.imageUrl}
                  alt={category.name}
                  className="w-full h-full object-cover rounded-lg shadow-md overflow-hidden"
                />
                <div className="p-4">
                  <h3 className="text-xl font-semibold text-[#FFAD33]">
                    {category.name}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="max-w-6xl py-28 mx-auto flex flex-col gap-20 ">
          {[
            {
              img: "/images/products/cat2.png",
              title: "Exclusive Accessories",
              link: "Shop Now",
              desc: "Discover our curated collection of accessories that perfectly complement your style. From elegant watches to stylish belts, find the finishing touches that elevate your look.",
            },
            {
              img: "/images/products/cat2.png",
              title: "Casual T-Shirts",
              link: "Shop Now",
              desc: "Explore our range of casual t-shirts designed for comfort and style. Made from premium fabrics, our t-shirts are perfect for everyday wear and effortless fashion.",
            },
          ].map((section, index) => (
            <div
              key={index}
              className={`w-full ${
                index == 1 ? "flex-row-reverse" : ""
              } flex justify-between gap-20 `}
            >
              <img
                src={section.img}
                alt=""
                className="w-[40%] object-cover rounded-lg shadow-md"
              />

              <div className="w-[40%] flex items-center">
                <div>
                  <h2 className="text-4xl font-bold text-white mb-6">
                    {section.title}
                  </h2>
                  <p className="text-gray-200 text-md mb-4">{section.desc}</p>
                  <a className="w-fit text-md text-[#ffad33] flex items-end gap-2">
                    {section.link}
                    <FaArrowRightLong className="w-5 h-5 text-[#ffad33]" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </section>
        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 relative p-4 mb-8">
          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                <TbTruckDelivery className="text-white text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#ffad33] mb-3 tracking-wide">
              FREE AND FAST DELIVERY
            </h3>
            <p className="text-yellow-500/90 text-sm">
              Free delivery for all orders over $140
            </p>
          </div>

          <div className="text-center">
            <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <div className="w-14 h-14 bg-black rounded-full flex items-center justify-center">
                <RiCustomerService2Line className="text-white text-3xl" />
              </div>
            </div>
            <h3 className="text-xl font-bold text-[#ffad33] mb-3 tracking-wide">
              24/7 CUSTOMER SERVICE
            </h3>
            <p className="text-yellow-500/90 text-sm">
              Friendly 24/7 customer support
            </p>
          </div>
          <div className="absolute -bottom-20 -right-96 w-10 h-10 bg-white hover:bg-gray-300 hover:scale-110 transition-all rounded-full flex items-center justify-center">
            <FaArrowUpLong className=" text-xl" />
          </div>
        </div>
      </div>
    </>
  );
}
