import Button from "./Button";
import imgCup from "../img/cup.jpg";

export default function Section7() {
  return (
    <div className="w-full lg:px-44 h-[80vh] mb-32 flex flex-col lg:flex-row ">
      <div className="lg:w-6/12 w-full h-full flex flex-col pl-8 justify-center items-start ">
        <h1 className="font-bold lg:text-5xl text-4xl ">
          Hundreds Of Ready Designs To <br /> Choose From
        </h1>
        <p className="my-10">
          Nam at congue dian etiam erat lectus . finibus eget commodo <br />{" "}
          quis , congue diam etiam erat lectus.
        </p>

        <Button title="Explore designs" />
      </div>
      <div className="lg:w-6/12 w-full h-full ">
        <img src={imgCup} className="h-full w-full" alt="image cup" />
      </div>
    </div>
  );
}
