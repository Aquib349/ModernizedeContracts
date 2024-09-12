import {
  ListCollapse,
  FilePenLine,
  FileStack,
  Link,
  Signature,
  TriangleAlert,
  Replace,
  PersonStanding,
  Files,
  Trash2,
} from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { HiDotsHorizontal } from "react-icons/hi";

const Actions = () => {
  return (
    <>
      <div className="action-container">
        <div className="main">
          <DropdownMenu>
            <DropdownMenuTrigger asChild className="h-0">
              <Button className="outline-none bg-gray-200 text-black hover:bg-gray-300">
                <HiDotsHorizontal className="cursor-pointer" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent className="w-56 mr-2">
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <ListCollapse className="mr-2 h-4 w-4" />
                  <span>View Details</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FilePenLine className="mr-2 h-4 w-4" />
                  <span>Edit</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <FileStack className="mr-2 h-4 w-4" />
                  <span>View History</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuGroup>
                <DropdownMenuItem>
                  <Link className="mr-2 h-4 w-4" />
                  <span>Copy Link</span>
                </DropdownMenuItem>
                <DropdownMenuItem>
                  <Signature className="mr-2 h-4 w-4" />
                  <span>Start Approval</span>
                </DropdownMenuItem>
              </DropdownMenuGroup>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <TriangleAlert className="mr-2 h-4 w-4" />
                <span>View Past Alerts</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Replace className="mr-2 h-4 w-4" />
                <span>Change Status / Post an Update</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <PersonStanding className="mr-2 h-4 w-4" />
                <span>People & Permission</span>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem>
                <Files className="mr-2 h-4 w-4" />
                <span>Duplicate Record</span>
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Trash2 className="mr-2 h-4 w-4" />
                <span>Delete Contract Record</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </>
  );
};

export default Actions;
