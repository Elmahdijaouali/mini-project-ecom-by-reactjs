import imgHero from "../img/imgHero.png";
import Button from "./Button";

export default function Hero() {
  return (
    <div className=" w-full pt-10 flex lg:flex-row  flex-col-reverse items-center  px-10  lg:px-40 ">
      <div className="lg:w-3/6 w-full h-full  ">
        <h1 className="lg:text-8xl text-6xl font-bold text-gray-700 ">
          Customized <br />
          Printed Tees
        </h1>
        <p className="text-xl mt-10">
          Nam at congue diam etiam erat lectus . finibus eget commondo quis{" "}
          <br /> congue diam etaim erat lectus .
        </p>
        <Button title="explore store" />
      </div>
      <div className="lg:w-3/6 w-full h-full p-0 ">
        <img src={imgHero} alt="img hero" className="w-full h-full  " />
      </div>
    </div>
  );
}
