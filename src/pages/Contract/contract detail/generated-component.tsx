import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import React from "react";

interface GeneratedComponentProps {
  section: { id: number; name: string };
  removeComponent: (id: number) => void;
}

const GeneratedComponent: React.FC<GeneratedComponentProps> = ({
  section,
  removeComponent,
}) => {
  return (
    <div className="p-4 border bg-white rounded-md ml-[5rem] mb-2 relative">
      {section.name.toLowerCase() !== "summary" && (
        <div className="remove-button absolute right-0 top-0">
          <Button
            variant="outline"
            className="p-2 h-8 border-0 hover:text-red-600 hover:bg-transparent"
            onClick={() => removeComponent(section.id)}
          >
            <X size={20} />
          </Button>
        </div>
      )}
      <h2 className="text-lg font-semibold">{section.name}</h2>
      <p>ID: {section.id}</p>
      {section.name.toLowerCase() === "summary" && (
        <p>
          <b>summary :</b> Smart alerts, documents, Activity, issues, notes
        </p>
      )}
    </div>
  );
};

export default GeneratedComponent;
