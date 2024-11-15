import Button from "./Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import img1 from "../img/img1.jpeg";
import img2 from "../img/img2.jpeg";
import img3 from "../img/img3.jpeg";
import imgCup from "../img/cup.jpg";

export default function Section2() {
  return (
    <div className=" w-full pt-10 lg:mt-10  mb-10  lg:px-40 ">
      <div className="w-full lg:flex">
        <div
          className="lg:w-4/12 w-full  flex  items-center  bg-slate-100 "
          style={{ height: "45vh" }}
        >
          <p className="text-2xl pl-10 leading-10">
            Best quality printed <br />
            tshirts and mugs for all <br />
            your needs
          </p>
        </div>
        <div
          className="lg:w-4/12 w-full   bg-slate-500"
          style={{ height: "45vh" }}
        >
          <img className="w-full h-full" src={img1} alt="" />
        </div>
        <div className="lg:w-4/12 w-full  h-96 ">
          <img
            className="w-full h-full"
            src={img2}
            alt=""
            style={{ height: "45vh" }}
          />
        </div>
        <div
          className="lg:w-4/12 w-full  pl-16 lg:pl-0   flex flex-col  justify-center items-start bg-slate-100 "
          style={{ height: "45vh" }}
        >
          <h2 className="font-bold text-5xl pl-3 leading-tight  ">
            Get Printed T- <br /> shirt @ $25!
          </h2>
          <Button title="Visit store" />
        </div>
      </div>

      <div className="w-full lg:flex">
        <div className="lg:w-4/12 w-full pl-16 lg:pl-0 h-96 flex flex-col justify-center items-start  bg-no-repeat bg-cover ">
          <p className="text-3xl font-bold  leading-snug ">
            Get Printed Mug <br />@ $15
          </p>
          <Button title="visit store" />
        </div>
        <div className="lg:w-4/12 w-full h-96 ">
          <img
            className="w-full h-full"
            src={img3}
            alt=""
            style={{ height: "45vh" }}
          />
        </div>
        <div className="lg:w-4/12 w-full h-96 ">
          <img
            className="w-full h-full"
            src={imgCup}
            alt=""
            style={{ height: "45vh" }}
          />
        </div>
        <div
          className="lg:w-4/12 w-full h-96 flex items-center justify-center  "
          style={{ height: "45vh" }}
        >
          <div>
            <div className="lg:w-4/12 w-full  h-14 flex justify-center mx-auto my-3 items-center rounded-full border-4">
              <FontAwesomeIcon className="text-5xl" icon={faPlus} />
            </div>
            <div>
              <h2 className="text-xl font-bold ">Get Your Own</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
