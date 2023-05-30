import HeroImg from "../assets/Hero-img.png";
import card from "../assets/Credit Card.png";
import { IoStar } from "react-icons/io5";
import Button from "./Button";

const Hero = () => {
  return (
    <section className="lg:h-screen flex items-center mt-20 md:mt-32 lg:mt-0 ">
      <div className="section py-8 grid lg:grid-cols-2 gap-2 items-center justify-between">
        <div className="flex flex-col gap-2">
          <div className="description">
            <h1 className="hero__header text-[32px] w-3/4 font-medium md:text-[48px] md:w-full">
              Everything you need to scale a{" "}
              <span className="inline-block whitespace-nowrap relative after:absolute after:contents after:w-full after:h-1 after:left-0 after:bottom-0 after:-z-10 after:bg-primary">
                global team
              </span>
            </h1>
            <p className="my-3">
              Check out our proven methods, guides, and exercises that help make
              work better, and people happier.
            </p>
          </div>

          <Button />

          <div className="rate mt-4">
            <p>Trusted by over more than 1M customers</p>
            <div className="flex items-center gap-1 mt-2">
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
              <IoStar />
            </div>
          </div>
        </div>
        <div className="hero__imgs relative w-full flex lg:justify-end justify-center mt-8 sm:mt-10 lg:mt-0 ">
          <img
            src={HeroImg}
            alt=""
            className="hero__img md:w-full sm:w-4/5 lg:w-[85%] object-cover aspect-square lg:aspect-auto"
          />
          <img
            src={card}
            alt=""
            className="absolute right-3 bottom-3 hidden lg:block"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
