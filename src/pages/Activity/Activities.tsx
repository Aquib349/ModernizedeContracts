import { ToggleMenuContext } from "@/context/SideMenuContext";
import { useContext, useEffect } from "react";
import { useLocation } from "react-router-dom";
import { Minus, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

const Activities = () => {
  const location = useLocation();
  const { isOpen, Open, setOpen } = useContext(ToggleMenuContext);

  useEffect(() => {
    if (location.pathname === "/activities") {
      setOpen(true);
    }
  }, [location.pathname, setOpen]);

  return (
    <>
      <Drawer open={Open} onOpenChange={setOpen}>
        <DrawerContent>
          <div className="mx-auto w-full max-w-sm">
            <DrawerHeader>
              <DrawerTitle>Move Goal</DrawerTitle>
              <DrawerDescription>
                Set your daily activity goal.
              </DrawerDescription>
            </DrawerHeader>
            <div className="p-4 pb-0">
              <div className="flex items-center justify-center space-x-2">
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                >
                  <Minus className="h-4 w-4" />
                  <span className="sr-only">Decrease</span>
                </Button>
                <div className="flex-1 text-center">
                  <div className="text-7xl font-bold tracking-tighter">100</div>
                  <div className="text-[0.70rem] uppercase text-muted-foreground">
                    Calories/day
                  </div>
                </div>
                <Button
                  variant="outline"
                  size="icon"
                  className="h-8 w-8 shrink-0 rounded-full"
                >
                  <Plus className="h-4 w-4" />
                  <span className="sr-only">Increase</span>
                </Button>
              </div>
              <div className="mt-3 h-[250px]">
                <p>
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Totam consequuntur ducimus aperiam culpa minus reiciendis
                  sequi fugit incidunt nesciunt doloremque exercitationem, a
                  modi eos delectus. Cum reiciendis dolor optio. Ratione
                  tempora, quidem tempore cupiditate quasi recusandae. Minus
                  nobis consequatur debitis veniam tempore cum quia, quos illum
                  libero. Consequuntur, nisi quibusdam.
                </p>
              </div>
            </div>
          </div>
        </DrawerContent>
      </Drawer>

      <div
        className={`transition-all duration-500 ease-in-out ${
          isOpen ? "pt-[3.8rem] pl-[4rem]" : "pt-14 p-2"
        }`}
      >
        Activities
      </div>
    </>
  );
};

export default Activities;
