import MenuDropdown from "@/components/select dropdown/MenuDropdown";
import { Button } from "@/components/ui/button";

const framework = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

interface QuickViewProps {
  triggerButton: any;
}
const SavedViews = ({ triggerButton }: QuickViewProps) => {
  return (
    <>
      <MenuDropdown
        triggerButton={triggerButton}
        Data={framework}
        required={true}
      />
    </>
  );
};

export default SavedViews;
