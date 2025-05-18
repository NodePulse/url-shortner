import { Link, useNavigate } from "react-router-dom";
import { Button } from "./ui/button";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuLabel,
    DropdownMenuSeparator,
    DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { LinkIcon, LogOutIcon } from "lucide-react";

const Header = () => {
    const navigate = useNavigate();
    const user = true;

    return (
        <nav className="py-4 flex justify-between items-center">
            <Link to="/">Minifi</Link>

            <div className="">
                {!user ? (
                    <Button onClick={() => navigate("/auth")}>Login</Button>
                ) : (
                    <DropdownMenu>
                        <DropdownMenuTrigger className="w-10 rounded-full overflow-hidden hover:cursor-pointer">
                            <Avatar>
                                <AvatarImage src="https://github.com/shadcn.png" />
                                <AvatarFallback>CN</AvatarFallback>
                            </Avatar>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuLabel>Sachin Bharbey</DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem>
                                <LinkIcon className="mr-2 h-4 w-4" />
                                <span>My Links</span>
                            </DropdownMenuItem>
                            <DropdownMenuItem className="text-destructive">
                                <LogOutIcon className="mr-2 h-4 w-4" />
                                <span>Logout</span>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
                )}
            </div>
        </nav>
    );
};

export default Header;
