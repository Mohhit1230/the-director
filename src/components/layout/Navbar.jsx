import { IoIosSearch, IoMdMenu, IoMdClose } from "react-icons/io";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";
import { useState, useEffect, useRef } from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { IoCartOutline } from "react-icons/io5";
import { BiUser } from "react-icons/bi";
import {
  MdOutlineShoppingBag,
  MdOutlineCancel,
  MdOutlineLogout,
} from "react-icons/md";
import { AiOutlineStar } from "react-icons/ai";

export const Navbar = () => {
  const { user, logout } = useAuth();
  const [open, setOpen] = useState(false);
  const [visible, setVisible] = useState(true);
  const [userDropdownOpen, setUserDropdownOpen] = useState(false);
  const lastScroll = useRef(0);

  const auth = useAuth();
  const navigate = useNavigate();

  const navLinks = [
    { link: "Home", href: `${user ? "/home" : "/"}` },
    { link: "About", href: "/about" },
    { link: "Contact", href: "/contact" },
    { link: "Sign Up", href: "/signup" },
  ];

  useEffect(() => {
    lastScroll.current = window.scrollY;
    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          const current = window.scrollY;
          if (open) {
            setVisible(true);
            lastScroll.current = current;
            ticking = false;
            return;
          }

          if (current > lastScroll.current + 10 && current > 60) {
            setVisible(false);
          } else if (current < lastScroll.current - 10) {
            setVisible(true);
          }
          lastScroll.current = current;
          ticking = false;
        });
        ticking = true;
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  return (
    <header
      className={`fixed left-0 right-0 top-0 z-50 bg-white/10 backdrop-blur-sm shadow transform transition-all duration-300 ease-in-out ${
        visible ? "translate-y-0 opacity-100" : "-translate-y-full opacity-0"
      }`}
    >
      <nav className="max-w-7xl mx-auto w-full flex items-center justify-between px-4 md:px-6 ">
        <div className="w-full flex items-center justify-between">
          <img
            src="/images/brand/logo.png"
            alt="Logo"
            className="w-32 h-20 rounded-full brightness-150"
          />
          <button
            className="md:hidden p-2 rounded-md focus:outline-none"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? (
              <IoMdClose className="w-6 h-6" />
            ) : (
              <IoMdMenu className="w-6 h-6" />
            )}
          </button>
          <div className="hidden md:flex items-center gap-6 text-sm lg:text-base">
            {navLinks.map(({ link, href }, index) => (
              <Link
                key={index}
                to={href}
                className={` ${user && index == 3 ? "hidden" : "p-3"}
                  text-[#FFAD33] hover:text-yellow-400
                
                `}
              >
                {link}
              </Link>
            ))}
          </div>
          <div className="hidden md:flex items-center gap-4">
            <div className="bg-white rounded-sm overflow-hidden px-1.5 w-60">
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                }}
                className="flex items-center "
              >
                <input
                  type="search"
                  placeholder="What are you looking for?"
                  className="w-full px-2 py-2 text-sm focus:outline-none appearance-none"
                />
                <IoIosSearch className="w-10 h-10 p-2 rounded-full text-black hover:text-yellow-400 cursor-pointer" />
              </form>
            </div>

            <button
              onClick={() => navigate("/wishlist")}
              className=" text-[#FFAD33] transition-colors hover:text-yellow-400 cursor-pointer"
            >
              <IoMdHeartEmpty className="w-7 h-7 font-light" />
            </button>
            <button
              onClick={() => navigate("/cart")}
              className=" text-[#FFAD33] transition-colors hover:text-yellow-400 cursor-pointer"
            >
              <IoCartOutline className="w-7 h-7" />
            </button>

            {/* User Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setUserDropdownOpen(true)}
              onMouseLeave={() => setUserDropdownOpen(false)}
            >
              <button className="text-white bg-[#fd4444] p-2 rounded-full transition-colors hover:bg-[#fd4444]/80 cursor-pointer">
                <BiUser className="w-5 h-5" />
              </button>

              {/* Dropdown Menu */}
              {userDropdownOpen && (
                <div className="absolute right-0 top-full pt-2 z-50">
                  <div className="w-56 bg-gradient-to-b from-[#3d3d3d] via-[#4a4a4a] to-[#5a5a5a] backdrop-blur-md rounded-md shadow-2xl overflow-hidden">
                    {user ? (
                      // Authenticated User Menu
                      <div className="py-2">
                        <Link
                          to="/account/profile"
                          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors"
                        >
                          <BiUser className="w-5 h-5 text-gray-300" />
                          <span className="text-[#ffad33]">
                            Manage My Account
                          </span>
                        </Link>
                        <Link
                          to="/account/orders"
                          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors"
                        >
                          <MdOutlineShoppingBag className="w-5 h-5 text-gray-300" />
                          <span className="text-[#ffad33]">My Order</span>
                        </Link>
                        <Link
                          to="/account/cancellations"
                          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors"
                        >
                          <MdOutlineCancel className="w-5 h-5 text-gray-300" />
                          <span className="text-[#ffad33]">
                            My Cancellations
                          </span>
                        </Link>
                        <Link
                          to="/account/reviews"
                          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors"
                        >
                          <AiOutlineStar className="w-5 h-5 text-gray-300" />
                          <span className="text-[#ffad33]">My Reviews</span>
                        </Link>
                        <button
                          onClick={() => {
                            logout();
                            navigate("/");
                            setUserDropdownOpen(false);
                          }}
                          className="w-full flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors"
                        >
                          <MdOutlineLogout className="w-5 h-5 text-gray-300" />
                          <span className="text-[#ffad33]">Logout</span>
                        </button>
                      </div>
                    ) : (
                      // Non-authenticated User Menu
                      <div className="py-2">
                        <Link
                          to="/login"
                          className="flex items-center gap-3 px-4 py-3 text-white hover:bg-white/10 transition-colors"
                        >
                          <BiUser className="w-5 h-5 text-gray-300" />
                          <span className="text-[#ffad33]">Login</span>
                        </Link>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Mobile menu */}
        {open && (
          <div className="absolute left-0 top-full w-full bg-white shadow-md md:hidden">
            <div className="flex flex-col px-4 py-3 gap-2">
              {navLinks.map(({ link, href }, i) => (
                <Link
                  key={i}
                  to={href}
                  onClick={() => setOpen(false)}
                  className="py-2 border-b last:border-b-0"
                >
                  {link}
                </Link>
              ))}
              <div className="flex items-center gap-3 pt-2">
                <button
                  onClick={(e) => {
                    e.stopPropagation();

                    setOpen(false);
                  }}
                  className="p-1 rounded-full focus:outline-none"
                >
                  <IoIosSearch className="w-8 h-8 p-2 rounded-full text-black bg-[#f2f2f2]" />
                </button>
                <button
                  onClick={() => {
                    setOpen(false);
                    auth?.user ? navigate("/user/account") : navigate("/login");
                  }}
                  className="px-3 py-2 bg-[#f2f2f2] rounded-full"
                >
                  Access Boardroom
                </button>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
