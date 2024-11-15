import imgVideo from "../img/imgVideo.jpg";
export default function Section6() {
  return (
    <div className="w-full lg:px-44 h-[70vh] rounded-3xl my-32">
      {/* <video className="w-full h-full bg-red-700 " src="" ></video> */}
      <img
        className="w-full h-full rounded-3xl"
        src={imgVideo}
        alt=" image video "
      />
    </div>
  );
}
