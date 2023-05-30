import { IoCheckmarkCircleOutline } from "react-icons/io5";
import Button from "./Button";

const Workflow = () => {
  return (
    <section>
      <div className="section grid flex-col gap-6 lg:gap-10 place-items-center">
        <div className="text-center">
          <h3>Streamline your workflow with SaaS: Get started now</h3>
          <p className="mt-2">
            Stay up to date with the most relevant information
          </p>
        </div>
        <div className="flex flex-col md:flex-row items-center gap-3">
          <p className="flex gap-1 items-center">
            <span className="text-primary w-8 h-8 flex items-center justify-center rounded-full bg-blue-50">
              <IoCheckmarkCircleOutline />
            </span>
            <span>Unlimited pages</span>
          </p>
          <p className="flex gap-1 items-center">
            <span className="text-primary w-8 h-8 flex items-center justify-center rounded-full bg-blue-50">
              <IoCheckmarkCircleOutline />
            </span>
            <span>Easy Access</span>
          </p>
          <p className="flex gap-1 items-center">
            <span className="text-primary w-8 h-8 flex items-center justify-center rounded-full bg-blue-50">
              <IoCheckmarkCircleOutline />
            </span>
            <span>14-days free trial</span>
          </p>
        </div>
        <div className="w-full sm:flex items-center justify-center">
          <Button />
        </div>
      </div>
    </section>
  );
};

export default Workflow;
