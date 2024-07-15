import MapIcon from "../Icons/MapIcon";
import PhoneIcon from "../Icons/PhoneIcon";
import FormComponent from "./FormComponent";
import MapComponent from "./MapComponent";

// import dynamic from "next/dynamic";
// const MapComponent = dynamic(() => import("./MapComponent"));

type Props = {};
function ContactFormSection({}: Props) {
  return (
    <div className="">
      <div
        id="contact"
        className="flex w-full scroll-m-20 flex-col space-y-10 pb-20 pt-20 md:mx-auto md:flex-row md:items-center md:space-y-0 md:px-2 lg:max-w-6xl"
      >
        <div className="w-full py-10">
          <h2 className="pb-4 text-center text-4xl font-semibold text-zinc-800 lg:text-5xl ">
            Contact Us
          </h2>
          <div className="flex w-full items-center justify-around px-5 md:h-10 lg:mx-auto lg:w-3/4">
            <h3 className="flex w-full items-center text-zinc-800 font-semibold md:text-base">
              <PhoneIcon />
              {`(+1)123456789`}
            </h3>
            <h3 className="flex w-full items-center text-zinc-800 font-semibold md:text-base">
              <MapIcon />
              City, State
            </h3>
          </div>

          <FormComponent />
        </div>

        <MapComponent />
      </div>
    </div>
  );
}

export default ContactFormSection;
