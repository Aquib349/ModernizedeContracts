import React from "react";

interface SelectItem {
    value: string;
    label: string;
}

interface SelectProps {
    items: SelectItem[];
    placeholder?: string;
    onChange: (value: string) => void;
    className?: string;
    triggerClassName?: string;
}

const CommonDropDown: React.FC<SelectProps> = ({
    items,
    placeholder = "Select an option",
    onChange,
    className = "",
    triggerClassName = "",
}) => {
    const [isOpen, setIsOpen] = React.useState(false);
    const [selectedValue, setSelectedValue] = React.useState<string | null>(null);

    const handleSelect = (value: string) => {
        setSelectedValue(value);
        onChange(value);
        setIsOpen(false);
    };

    return (
        <div className={`relative`}>
            <button
                className={`ml-2 w-[130px] text-xs text-slate-500 border border-gray-300 rounded px-3 py-2 focus:outline-none flex items-center justify-between ${triggerClassName}`}
                onClick={() => setIsOpen(!isOpen)}
            >
                <span>{selectedValue || placeholder}</span>
                {/* Dropdown Arrow */}
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className={`h-4 w-4 transform transition-transform ${isOpen ? "rotate-180" : ""
                        }`}
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M19 9l-7 7-7-7"
                    />
                </svg>
            </button>
            {isOpen && (
                <div className="absolute top-12 left-0 w-full bg-white border border-gray-300 rounded shadow-md z-10">
                    <ul className="py-1">
                        {items.map((item) => (
                            <li
                                key={item.value}
                                className="px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer"
                                onClick={() => handleSelect(item.value)}
                            >
                                {item.label}
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

export default CommonDropDown;
