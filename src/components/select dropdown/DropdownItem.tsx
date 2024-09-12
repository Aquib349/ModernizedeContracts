import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface DropdownItemList {
  className: string;
  placeholder: string;
  icon: React.ReactNode;
  selected: string;
  DataContent: { value: string; label: string }[];
}

const DropdownItem = ({
  className,
  placeholder,
  icon,
  selected,
  DataContent,
}: DropdownItemList) => {
  return (
    <>
      <Select>
        <SelectTrigger className={className}>
          {icon && <div className="text-gray-500">{icon}</div>}
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>{selected}</SelectLabel>
            {DataContent.map((val) => (
              <SelectItem value={val.value}>{val.label}</SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </>
  );
};

export default DropdownItem;
