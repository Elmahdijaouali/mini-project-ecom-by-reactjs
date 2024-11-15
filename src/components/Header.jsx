import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import logo from "../img/logo.png";

export default function Header() {
  return (
    <div className="w-full h-20 flex  lg:px-48 items-center ">
      <div className="lg:w-1/6 w-4/6  p-20  ">
        <img className="h-14 w-52 " src={logo} alt="logo" />
      </div>
      <nav className="w-4/6 hidden lg:block">
        <ul className="flex justify-between  px-48">
          <li className="text-lg hover:text-red-400 text-red-400 first-letter:uppercase">
            Home
          </li>
          <li className="text-lg hover:text-red-400 first-letter:uppercase">
            All products
          </li>
          <li className="text-lg hover:text-red-400 first-letter:uppercase">
            tshirts{" "}
          </li>
          <li className="text-lg hover:text-red-400 first-letter:uppercase">
            mugs
          </li>
          <li className="text-lg hover:text-red-400 first-letter:uppercase">
            About HDX
          </li>
          <li className="text-lg hover:text-red-400 first-letter:uppercase">
            Cantcat
          </li>
          <li className="text-lg hover:text-red-400 first-letter:uppercase">
            Account
          </li>
        </ul>
      </nav>
      <div className="lg:w-1/6 w-2/6  text-red-400 relative flex lg:justify-end  text-2xl  ">
        <span> £0.00 </span>
        <FontAwesomeIcon className="ml-3  " icon={faCartShopping} />
        <span className=" absolute text-sm text-center py-0.5 lg:py-0 text-white rounded-full bg-red-500 min-w-7 -right-28 lg:-right-6  -top-4 ">
          0
        </span>
      </div>
    </div>
  );
}
