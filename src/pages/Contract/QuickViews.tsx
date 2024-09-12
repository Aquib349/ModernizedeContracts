import MenuDropdown from "@/components/select dropdown/MenuDropdown";

const frameworks = [
  {
    value: "assigned",
    label: "Assigned By Me",
  },
  {
    value: "submitted",
    label: "Submitted By Me",
  },
  {
    value: "collaborator/approver",
    label: "Collaborator/Approver",
  },
  {
    value: "saved draft",
    label: "Saved Drafts",
  },
  {
    value: "all",
    label: "All",
  },
];

interface QuickViewProps {
  triggerButton: React.ReactNode;
}

const QuickViews: React.FC<QuickViewProps> = ({ triggerButton }) => {
  return (
    <>
      <MenuDropdown
        triggerButton={triggerButton}
        Data={frameworks}
        required={false}
      />
    </>
  );
};

export default QuickViews;
