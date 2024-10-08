import { Bot, HardDriveUpload } from "lucide-react";

function WebNavigation() {
  return (
    <>
      <div className="web-navigation">
        <div className="main-default text-white px-1">
          <div className="text-md font-medium p-1 flex items-center gap-2">
            <img src="assets/ai.png" alt="ai-logo" className="w-6 h-6" />
            <p className="text-md">
              eContract -{" "}
              <span className="font-bold bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Kozmo AI
              </span>
            </p>
          </div>
          {/* upload document */}
          <div className="flex items-center gap-4 p-2 hover:bg-slate-600 hover:rounded-md my-2 cursor-pointer text-sm mr-4">
            <span className="p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
              <div className="bg-black/80 py-1 px-3 rounded-md">
                <HardDriveUpload size={16} />
              </div>
            </span>
            <p>Upload Document</p>
          </div>

          {/* chat with eContract GPT */}
          <div className="flex items-center gap-4 p-2 hover:bg-slate-600 hover:rounded-md my-2 cursor-pointer text-sm mr-4">
            <span className="p-0.5 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-md">
              <div className="bg-black/90 py-1 px-3 rounded-md">
                <Bot size={16} />
              </div>
            </span>
            <p>eContract-GPT</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default WebNavigation;
