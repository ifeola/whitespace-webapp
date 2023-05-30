import image1 from "../assets/client1.png";
import image2 from "../assets/client2.png";
import image3 from "../assets/client3.png";
import image4 from "../assets/client4.png";
import image5 from "../assets/client5.png";
import image6 from "../assets/client6.png";
import image7 from "../assets/client7.png";
import image8 from "../assets/client8.png";

const Clients = () => {
  return (
    <section>
      <div className="section">
        <h3 className="mb-6 text-center">Our Clients</h3>
        <div className="grid place-items-center grid-cols-2 gap-6 md:grid-cols-2 lg:grid-cols-4">
          <img src={image1} className="w-[102px] md:w-[148px]" alt="" />
          <img src={image2} className="w-[102px] md:w-[148px]" alt="" />
          <img src={image3} className="w-[102px] md:w-[148px]" alt="" />
          <img src={image4} className="w-[102px] md:w-[148px]" alt="" />
          <img src={image5} className="w-[102px] md:w-[148px]" alt="" />
          <img src={image6} className="w-[102px] md:w-[148px]" alt="" />
          <img src={image7} className="w-[102px] md:w-[148px]" alt="" />
          <img src={image8} className="w-[102px] md:w-[148px]" alt="" />
        </div>
      </div>
    </section>
  );
};

export default Clients;
