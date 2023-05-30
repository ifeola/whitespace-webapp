import logo from "../assets/Logo.svg";
import logoMobile from "../assets/Logo-only.svg";
import { IoCloseOutline } from "react-icons/io5";
import { useState } from "react";

const Header = () => {
  window.addEventListener("scroll", () => {
    let header = document.querySelector(".header");
    header.classList.toggle("scroll-nav", window.scrollY > 0);
  });

  const [toggle, setToggle] = useState(true);

  const toggleHandler = () => {
    setToggle((prevState) => !toggle);
  };

  return (
    <header className="header border-b border-transparent bg-white fixed top-0 left-0 h-16 md:h-20 right-0 flex items-center z-50">
      <nav className="flex items-center justify-between">
        <div>
          <img src={logo} alt="" className="hidden lg:block w-48" />
          <img src={logoMobile} alt="" className="lg:hidden w-12" />
        </div>

        <div className="nav__links flex items-center justify-between">
          <div className={toggle ? "nav__list" : "nav__list active"}>
            <ul>
              <li>
                <a href="/" className="nav__link">
                  Home
                </a>
              </li>
              <li>
                <a href="/" className="nav__link">
                  Features
                </a>
              </li>
              <li>
                <a href="/" className="nav__link">
                  About Us
                </a>
              </li>
              <li>
                <a href="/" className="nav__link">
                  News
                </a>
              </li>
              <li>
                <a href="/" className="nav__link">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <ul className="hidden md:flex items-center">
            <li>
              <a href="/" className="nav__link-desk mr-3">
                Home
              </a>
            </li>
            <li>
              <a href="/" className="nav__link-desk mr-3">
                Features
              </a>
            </li>
            <li>
              <a href="/" className="nav__link-desk mr-3">
                About Us
              </a>
            </li>
            <li>
              <a href="/" className="nav__link-desk mr-3">
                News
              </a>
            </li>
            <li>
              <a href="/" className="nav__link-desk mr-3">
                Contact
              </a>
            </li>
          </ul>
          <a
            href="/"
            className="nav__cta bg-primary md:px-6 md:py-3 px-4 py-2 mr-4 md:mr-0 transition-colors hover:bg-hoverColor text-white rounded-md inline-block md:text-base">
            Start now
          </a>
          <button
            className="border border-gray-300 w-9 h-9 flex items-center justify-center rounded-md md:hidden z-50"
            onClick={toggleHandler}>
            {toggle ? (
              <svg
                width="28"
                height="28"
                viewBox="0 0 28 28"
                fill="none"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5.20007 8.5H17.8501M5.20007 14H11.8001M5.20007 19.5H22.8001"
                  stroke="#344051"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
              </svg>
            ) : (
              <IoCloseOutline className="text-3xl text-gray-600" />
            )}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
