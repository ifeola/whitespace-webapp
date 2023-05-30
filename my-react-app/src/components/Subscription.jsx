import React from "react";
import subscribeImg from "../assets/newsletter.png";

const Subscription = () => {
  return (
    <section>
      <div className="section bg-blue-50 rounded-lg flex items-center relative">
        <div className="p-6 md:p-10 lg:p-20 z-10 sm:w-4/5 lg:w-3/4">
          <h3>Enter your e-mail address and get started for free</h3>
          <p className="my-4">
            Stay up to date with the most relevant information, our new
            collections, news and special offers!
          </p>

          <form action="/" className="flex flex-col sm:flex-row gap-2">
            <input
              type="text"
              placeholder="Your email address"
              className="w-full sm:w-3/4 outline-0 outline-transparent focus:outline-transparent active:border-gray-700 focus:border-gray-700 border p-2 border-gray-200 rounded-md appearance-none"
              required
            />
            <button
              type="submit"
              className="w-full sm:w-fit px-6 py-2 bg-primary transition-colors hover:bg-hoverColor text-white text-center rounded-md flex items-center justify-center">
              Subscribe
            </button>
          </form>
        </div>
        <div className="h-full w-3/5 absolute top-0 right-0">
          <img
            src={subscribeImg}
            alt=""
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default Subscription;
