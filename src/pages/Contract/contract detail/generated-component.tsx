import React from "react";

interface GeneratedComponentProps {
  section: { id: number; name: string };
}

const GeneratedComponent: React.FC<GeneratedComponentProps> = ({ section }) => {
  return (
    <div className="p-4 border bg-white rounded-md ml-[5rem] mb-2">
      <h2 className="text-lg font-semibold">{section.name}</h2>
      <p>ID: {section.id}</p>
    </div>
  );
};

export default GeneratedComponent;
