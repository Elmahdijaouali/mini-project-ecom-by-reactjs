import Button from "./Button";

export default function Section4() {
  return (
    <div className="w-full bg-red-500 text-white lg:h-52 h-[40vh]  flex flex-col lg:flex-row  items-center lg:px-52 lg:justify-between justify-center mb-10">
      <h1 className="font-bold text-4xl f">Grob This Limited Time Offer</h1>
      <Button title="Order now" />
    </div>
  );
}
