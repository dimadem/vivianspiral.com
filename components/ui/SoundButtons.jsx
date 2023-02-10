import { BsVolumeUp, BsVolumeMute } from "react-icons/bs";

export default function SoundButtons(params) {
  return (
    <div className="flex flex-row justify-center space-x-10 sm:space-x-40">
      <button className="border-2 border-white px-10 py-2">
        <BsVolumeUp size={40} />
      </button>
      <button className="border-2 border-white px-10 py-2">
        <BsVolumeMute size={40} />
      </button>
    </div>
  );
}
