import { IoLogoFacebook } from "react-icons/io5";
import { IoLogoTwitter } from "react-icons/io5";
import { IoLogoInstagram } from "react-icons/io5";
import { IoLogoLinkedin } from "react-icons/io5";
import { IoMailOutline } from "react-icons/io5";
import { IoLocationOutline } from "react-icons/io5";
import { IoCallOutline } from "react-icons/io5";
import logo from "../assets/Logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="section">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6 mb-6 md:mb-8">
          <div className="col-start-1 col-end-3 sm:col-end-5 lg:col-end-3 flex flex-col sm:w-3/5 lg:w-full items-center sm:items-start">
            <img src={logo} alt="" className="w-[160px]" />
            <p className="my-3 text-center sm:text-left">
              We love working with ambitious people. Let's build something great
              together now.
            </p>
            <div className="text-gray-500 flex items-center gap-2">
              <a
                href=""
                className="text-gray-500 transition-colors hover:text-primary text-xl">
                <IoLogoFacebook />
              </a>
              <a
                href=""
                className="text-gray-500 transition-colors hover:text-primary text-xl">
                <IoLogoTwitter />
              </a>
              <a
                href=""
                className="text-gray-500 transition-colors hover:text-primary text-xl">
                <IoLogoInstagram />
              </a>
              <a
                href=""
                className="text-gray-500 transition-colors hover:text-primary text-xl">
                <IoLogoLinkedin />
              </a>
            </div>
          </div>
          <ul className="flex flex-col gap-2 text-gray-700 text-sm">
            <h6 className="mb-1 text-gray-900">Product</h6>
            <li>
              <a href="/">Pricing</a>
            </li>
            <li>
              <a href="/">Case studies</a>
            </li>
            <li>
              <a href="/">Features</a>
            </li>
            <li>
              <a href="/">Reviews</a>
            </li>
            <li>
              <a href="/">Updates</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-gray-700 text-sm">
            <h6 className="mb-1 text-gray-900">Product</h6>
            <li>
              <a href="/">About</a>
            </li>
            <li>
              <a href="/">Careers</a>
            </li>
            <li>
              <a href="/">News</a>
            </li>
            <li>
              <a href="/">Blog</a>
            </li>
            <li>
              <a href="/">Contact</a>
            </li>
          </ul>
          <ul className="flex flex-col gap-2 text-gray-700 col-start-1 col-end-3 sm:col-end-2 md:col-span-1 text-sm">
            <h6 className="mb-1 text-gray-900">Support</h6>
            <li>
              <a href="/">Help Center</a>
            </li>
            <li>
              <a href="/">Status</a>
            </li>
            <li>
              <a href="/">Report a Bug</a>
            </li>
            <li>
              <a href="/">Chat Support</a>
            </li>
          </ul>
          <div className="flex flex-col gap-2 col-start-1 col-end-3 sm:col-end-2 md:col-span-1">
            <h6 className="mb-1 text-gray-900">Contact Us</h6>
            <div className="flex flex-col gap-2 text-gray-700">
              <p className="flex items-center gap-2 text-sm">
                <IoMailOutline className="text-lg" />
                <span>hello@ifeola.design</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <IoCallOutline className="text-lg" />
                <span>+234 905 8344 397</span>
              </p>
              <p className="flex items-center gap-2 text-sm">
                <IoLocationOutline className="text-lg" />
                <span>No 1 Road 10, Bethel Estate, Agudu</span>
              </p>
            </div>
          </div>
        </div>

        <div className="flex items-center flex-col sm:flex-row justify-between py-6 md:py-8 border-t border-gray-300">
          <p className="text-xs">© 2023 DesignPal - All rights reserved</p>
          <p className="text-primary text-xs flex items-center mt-3 sm:mt-0">
            <a href="/" className="mr-6">
              Terms of Service
            </a>
            <a href="/">Privacy Policy</a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
