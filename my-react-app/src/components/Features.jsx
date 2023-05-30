import { IoMailOpenOutline } from "react-icons/io5";
import { IoPhonePortraitOutline } from "react-icons/io5";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import featureImg from "../assets/Features.png";

const data = [
  {
    icon: <IoCheckmarkCircleOutline />,
    title: "Project Structure",
    description:
      "Check out our proven methods, guides, and exercises that help make work better, and people happier.",
  },
  {
    icon: <IoMailOpenOutline />,
    title: "Responsive",
    description:
      "This Design System and UI kit is coming with full-responsive screens for tablet and mobile devices.",
  },
  {
    icon: <IoPhonePortraitOutline />,
    title: "Messaging",
    description:
      "On mobile, customers can send text, or audio messages to agents, like using any messaging app",
  },
];

const Features = () => {
  return (
    <section>
      <div className="section">
        <div className="text-center">
          <h5>Our Features</h5>
          <h3 className="my-2">Our key benefits</h3>
          <p>
            Our services are designed to cater to your specific needs and goals
          </p>
        </div>

        <div className="mt-8 sm:mt-10 lg:grid grid-cols-2 gap-10 items-center">
          <div className="flex flex-col gap-5">
            {data.map((item) => {
              return (
                <div className="text-secondary">
                  <span className="text-primary w-8 h-8 flex items-center justify-center rounded-lg bg-blue-50">
                    {item.icon}
                  </span>
                  <h5 className="my-2">{item.title}</h5>
                  <p className="text-secondary">{item.description}</p>
                </div>
              );
            })}
          </div>

          <img
            src={featureImg}
            alt=""
            className=" mt-8 sm:mt-10 lg:mt-0 md:w-full sm:w-4/5 lg:w-full object-cover aspect-square lg:aspect-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default Features;
