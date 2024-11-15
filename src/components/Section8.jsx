import Button from "./Button";
// import imgTshirt from '../img/tshirt1.jpg'

export default function Section8() {
  return (
    <div className="w-full lg:h-[65vh] h-auto flex flex-col lg:flex-row lg:px-40 lg:mb-32 ">
      <div className="lg:w-6/12 h-[65vh] w-full flex flex-col justify-center items-start  pl-32 bg-gray-400">
        <h1 className="font-bold relative z-10 text-5xl">
          Printed Tshirt For $25!
        </h1>
        <p className="my-10 relative z-10">
          Nam at congue diam , Etiam erat lectus , finibus eget commodo.
        </p>
        <Button title="Order now" />
      </div>
      <div className="lg:w-6/12 h-[65vh]  w-full flex flex-col justify-center bg-blue-100 items-start pl-32">
        <h1 className="font-bold text-5xl">Printed Mug For $15!</h1>
        <p className="my-10">
          Nam at congue diam , Etiam erat lectus , finibus eget commodo quis.
        </p>
        <Button title="Explore designs" />
      </div>
    </div>
  );
}
