import img1 from "../img/img1.jpeg";

export default function Section3() {
  return (
    <div className="w-full pt-10  lg:mt-28 lg:flex    lg:px-40 ">
      <div className="lg:w-6/12 h-[65vh]">
        <img src={img1} className="w-full h-full" alt="" />
      </div>
      <div className="lg:w-6/12 h-[65vh]  flex flex-col justify-center items-start pl-5">
        <h2 className="font-bold text-6xl mb-8  "># ColorOfTheMonth</h2>
        <p className="text-lg mb-8 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab, fuga cum
          laboriosam sapiente pariatur quis!
        </p>
        <h1 className="text-6xl mb-8 font-bold">Just $35!!!</h1>
      </div>
    </div>
  );
}
