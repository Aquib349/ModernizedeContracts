import { PipelineContextProvider } from "@/context/document-pipeline";
import { Outlet } from "react-router-dom";

const Pipeline = () => {
  return (
    <>
      <PipelineContextProvider>
        <div className="pipeline-component">
          <div className="main">
            <Outlet />
          </div>
        </div>
      </PipelineContextProvider>
    </>
  );
};

export default Pipeline;
