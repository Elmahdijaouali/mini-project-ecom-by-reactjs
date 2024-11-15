export default function CardProduct({
  title,
  category,
  oldPrice,
  newPrice,
  img,
}) {
  return (
    <div className="h-[65vh]  lg:w-[23%] w-[80%] m-3 shadow-lg  relative">
      <button className=" absolute -top-5 -right-5 bg-red-500 text-white w-14 h-14 rounded-full ">
        Sale!
      </button>
      <div className="w-full bg-blue-300 h-96 ">
        <img className="w-full h-full" src={img} alt={title} />
      </div>
      <div>
        <h2 className="text-center text-gray-600 my-5 text-xl">{category}</h2>
        <h1 className="font-bold text-2xl text-center ">{title}</h1>
        <p className="text-center my-4">icons</p>
        <p className="text-center font-semibold text-xl">
          <span className="text-gray-600 ">{oldPrice}</span> {newPrice}
        </p>
      </div>
    </div>
  );
}
