import { IoPlayOutline } from "react-icons/io5";

const Button = () => {
  return (
    <div className="cta flex flex-col sm:flex-row gap-3">
      <a
        href="/"
        className="w-full sm:w-fit px-6 py-2 bg-primary transition-colors hover:bg-hoverColor text-white text-center rounded-md">
        Learn More
      </a>
      <a
        href="/"
        className="w-full py-2 px-6 sm:w-fit border border-gray-300 text-gray-800 text-center rounded-md flex items-center justify-center gap-2">
        <IoPlayOutline />
        <span>Watch Demo</span>
      </a>
    </div>
  );
};

export default Button;
