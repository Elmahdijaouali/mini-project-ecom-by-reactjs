import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebook,
  faTwitter,
  faInstagram,
  faGoogle,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";

export default function Footer() {
  return (
    <div className="w-full bg-gray-800 text-white px-52 py-10 flex flex-col lg:flex-row items-center  h-fit lg:h-80">
      <div className="lg:w-3/12 w-full">
        <ul>
          <li className="font-semibold text-xl mb-5  hover:text-red-400 w-fit hover:cursor-pointer">
            Home
          </li>
          <li className="font-semibold text-xl mb-5 hover:text-red-400  w-fit hover:cursor-pointer">
            About HDX
          </li>
          <li className="font-semibold text-xl mb-5 hover:text-red-400  w-fit hover:cursor-pointer">
            My account
          </li>
        </ul>
      </div>
      <div className="lg:w-3/12 w-full">
        <ul>
          <li className="font-semibold text-xl mb-5 hover:text-red-400 w-fit hover:cursor-pointer">
            Tshirts
          </li>
          <li className="font-semibold text-xl mb-5 hover:text-red-400 w-fit hover:cursor-pointer">
            Mugs
          </li>
          <li className="font-semibold text-xl mb-5 hover:text-red-400 w-fit hover:cursor-pointer">
            Contcat
          </li>
        </ul>
      </div>
      <div className="lg:w-3/12 w-full"></div>
      <div className="lg:w-3/12 w-full">
        <ul className="flex justify-between items-center">
          <li className="font-semibold text-xl mb-5 bg-white text-gray-950 hover:text-white hover:bg-red-400 p-2 rounded-md">
            <FontAwesomeIcon className="text-3xl" icon={faFacebook} />
          </li>
          <li className="font-semibold text-xl mb-5 bg-white text-gray-950 hover:text-white hover:bg-red-400 p-2 rounded-md">
            <FontAwesomeIcon className="text-3xl" icon={faTwitter} />
          </li>
          <li className="font-semibold text-xl mb-5 bg-white text-gray-950 hover:text-white hover:bg-red-400 p-2 rounded-md">
            <FontAwesomeIcon className="text-3xl" icon={faInstagram} />
          </li>
          <li className="font-semibold text-xl mb-5 bg-white text-gray-950 hover:text-white hover:bg-red-400 p-2 rounded-md">
            <FontAwesomeIcon className="text-3xl" icon={faGoogle} />
          </li>
          <li className="font-semibold text-xl mb-5 bg-white text-gray-950 hover:text-white hover:bg-red-400 p-2 rounded-md">
            <FontAwesomeIcon className="text-3xl" icon={faYoutube} />
          </li>
        </ul>
      </div>
    </div>
  );
}
