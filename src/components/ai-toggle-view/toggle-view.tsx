import { CircleArrowRight } from "lucide-react";
import ai_logo from "../../assets/image.png";

interface ToggleViewProps {
  heading: string;
}

const ToggleView: React.FC<ToggleViewProps> = ({ heading }) => {
  return (
    <>
      <div className="bg-white rounded my-2">
        <div className="flex items-center justify-between p-2">
          <div className="flex items-center">
            <img src={ai_logo} alt="loading.." className="w-8" />
            <h1 className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent font-medium">
              {heading}
            </h1>
          </div>
          <div className="flex items-center space-x-2">
            <p className="text-blue-500 text-sm">Switch to classic View</p>
            <CircleArrowRight
              size={16}
              className="text-blue-500 cursor-pointer"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ToggleView;
