import { Home, PanelLeft, Search } from "lucide-react";
import { Link, Outlet } from "react-router-dom";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "../ui/sheet";
import { Button } from "../ui/button";
import { Input } from "../ui/input";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@radix-ui/react-dropdown-menu";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@radix-ui/react-tooltip";
import { adminNavData } from "@/data/data";
import { useState } from "react";
import { FaTableColumns } from "react-icons/fa6";
const DashBoardLayout = () => {
  const [isSheetOpen, setIsSheetOpen] = useState(false);

  const handleButtonClick = () => {
    setIsSheetOpen(!isSheetOpen);
  };

  return (
    <TooltipProvider>
      <div className="flex min-h-screen w-full flex-col bg-muted/40">
        <aside
          className={`fixed inset-y-0 left-0 z-10 ${
            isSheetOpen ? "hidden" : "flex"
          } w-14 flex-col border-r bg-background sm:flex`}
        >
          <nav className="flex flex-col items-center gap-4 px-2 sm:py-5 relative">
            <button
              onClick={handleButtonClick}
              className="mb-4 absolute top-0 left-10"
            >
              <FaTableColumns className="text-3xl" />
            </button>

            {adminNavData.map((data) => (
              <Tooltip key={data.path}>
                <TooltipTrigger asChild>
                  <Link to={data.path} className="">
                    <p className="text-2xl text-[#7C3FFF] mt-8">{data.icon}</p>
                    <span className="sr-only">{data.element}</span>
                  </Link>
                </TooltipTrigger>
                <TooltipContent
                  className="bg-[#7C3FFF] text-[#FFF] p-2 border rounded-md mt-8"
                  sideOffset={5}
                  side="right"
                >
                  <span>{data.element}</span>
                </TooltipContent>
              </Tooltip>
            ))}
          </nav>
          <nav className="mt-auto flex flex-col items-center gap-4 px-2 sm:py-5">
            <Tooltip>
              <TooltipTrigger asChild>
                <Link
                  to="#"
                  className="flex h-9 w-9 items-center justify-center rounded-lg text-muted-foreground transition-colors hover:text-foreground md:h-8 md:w-8"
                >
                  <Home className="h-5 w-5" />
                  <span className="sr-only">Dashboard</span>
                </Link>
              </TooltipTrigger>
              <TooltipContent
                className="bg-[#7C3FFF] text-white  p-2 border rounded-md border-white"
                side="right"
              >
                <span>Dashboard</span>
              </TooltipContent>
            </Tooltip>
          </nav>
        </aside>
        <div className="flex flex-col sm:gap-4 sm:py-4 sm:pl-14">
          <header className="sticky top-0 z-30 flex h-14 items-center gap-4 border-b bg-background px-4 sm:static sm:h-auto sm:border-0 sm:bg-transparent sm:px-6">
            <Sheet open={isSheetOpen} onOpenChange={setIsSheetOpen}>
              <SheetTrigger asChild>
                <Button size="icon" variant="outline" className="sm:hidden">
                  <PanelLeft className="h-5 w-5" />
                  <span className="sr-only">Toggle Menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="left" className="sm:max-w-xs">
                <nav className=" gap-6 text-lg font-medium">
                  {adminNavData.map((data) => (
                    <div key={data.element} className="flx items-center">
                      <SheetClose>
                        <Link
                          to={data.path}
                          className="flex items-center gap-4 mt-8 text-[#7C3FFF]"
                        >
                          <p>{data.icon}</p>
                          <p className="">{data.element}</p>
                        </Link>
                      </SheetClose>
                    </div>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>

            <div className="relative ml-auto flex-1 md:grow-0">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search..."
                className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
              />
            </div>
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button
                  variant="outline"
                  size="icon"
                  className="overflow-hidden rounded-full"
                ></Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>My Account</DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Settings</DropdownMenuItem>
                <DropdownMenuItem>Support</DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>Logout</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          </header>
          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </TooltipProvider>
  );
};

export default DashBoardLayout;
