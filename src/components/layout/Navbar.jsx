import { IoIosCart, IoIosSearch } from "react-icons/io";
import { Link } from 'react-router-dom'

export const Navbar = () => {
const navLinks = [
    { link: "Home", href: "/" },
    { link: "The Origin Decree", href: "/about" },
    { link: "Contact Production Office", href: "/contact" },
  ];
  return (
    <div>
        <nav className="h-20 z-50 w-full flex items-center justify-center sticky top-0 bg-[#ffffffdc] backdrop-blur-3xl">
        <div className="max-w-7xl w-full flex justify-between items-center px-6">
          <div className="flex items-center gap-8">
            <img
              src="/images/logo.jpg"
              alt="Logo"
              className="w-10 h-10"
            />
            <div className="flex items-center gap-6 lg:text-[17px]">
              {navLinks.map(({ link, href }, index) => {
                return (
                  <a
                    key={index}
                    href={href}
                    className={` transition ${
                      index === 2
                        ? "bg-[#bf9c6d] rounded-full px-4 py-2 text-[#212529] hover:text-black"
                        : "hover:text-yellow-400 "
                    }`}
                  >
                    {link}
                  </a>
                );
              })}
            </div>
          </div>
            <div className="flex items-center gap-4 font-semibold">
              <IoIosSearch className="w-10 h-10 p-3 rounded-full text-black bg-[#f2f2f2] hover:text-yellow-400 cursor-pointer" />
              <Link to="/login" className="px-4 py-2 bg-[#f2f2f2] rounded-full">
                Access Boardroom
              </Link>
              <IoIosCart className="w-10 h-10 p-3 rounded-full text-black bg-[#f2f2f2] hover:text-yellow-400 cursor-pointer" />
            </div>
        </div>
      </nav>
    </div>
  )
}
