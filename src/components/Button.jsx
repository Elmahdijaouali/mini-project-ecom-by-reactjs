import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAnglesRight } from "@fortawesome/free-solid-svg-icons";

export default function Button({ title }) {
  return (
    <button className="border- border-2 relative z-10 border-l-0 uppercase py-3 px-10 my-10 border-gray-800 text-lg ">
      <FontAwesomeIcon className="mr-3" icon={faAnglesRight} />
      {title}
    </button>
  );
}
