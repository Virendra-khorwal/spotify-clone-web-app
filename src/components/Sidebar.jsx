import { FaCloudsmith, FaBolt, FaSlackHash, FaHatWizard } from "react-icons/fa";
import { IoMdPin } from "react-icons/io";
import { Link } from "react-router-dom";
const Sidebar = () => {
  return (
    <div className="w-52 py-4 flex flex-col items-center gap-y-24 px-10 bg-neutral">
      <div className="flex items-center gap-4 text-3xl">
        <FaCloudsmith /> <p>Musix</p>
      </div>
      <div className="flex flex-col gap-y-4 text-lg">
        <div className="flex gap-4 items-center text-primary">
          <FaBolt /> <p>Explore</p>
        </div>
        <div className="flex gap-4 items-center">
          <FaSlackHash /> <p>Trending</p>
        </div>
        <div className="flex gap-4 items-center">
          <FaHatWizard /> <p>Top Artists</p>
        </div>
        <div className="flex gap-4 items-center">
          <IoMdPin /> <p>Around You</p>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
