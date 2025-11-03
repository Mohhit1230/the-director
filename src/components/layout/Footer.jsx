import { BsTwitterX } from "react-icons/bs";
import { FaInstagram, FaFacebookF } from "react-icons/fa";
export const Footer = () => {
  return (
    <div>
        <footer className="bg-[#18130e] py-12">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex justify-between gap-8 mb-8">
            <div className="flex gap-6 items-center">
              <img
                src="/images/logo.jpg"
                alt="Logo"
                className="w-10 h-10"
              />
              <div className="w-full space-x-3">
                {[
                  "Home",
                  "The Origin Decree",
                  "Products",
                  "Membership Protocol",
                  "Confidentiality Protocol",
                ].map((item, index) => (
                  <a key={index} className="text-[#c9b396] hover:text-white">
                    {item}
                  </a>
                ))}
              </div>
            </div>

            <div className="flex gap-6 items-center">
              <div className="flex space-x-4">
                <FaFacebookF className="text-[#c9b396] w-8 h-8    cursor-pointer" />
                <BsTwitterX className="text-[#c9b396] w-8 h-8    cursor-pointer" />
                <FaInstagram className="text-[#c9b396] w-8 h-8   cursor-pointer" />
              </div>
              <button className="bg-[#be9b6c] text-gray-900 px-6 py-2 rounded-full text-sm font-medium transition mt-4 md:mt-0">
                Contact Production Office
              </button>
            </div>
          </div>
          <div className="border-t border-gray-700 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-300">
              &copy; 2024 The Director. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
