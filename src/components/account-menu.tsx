import React from "react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";

export function AccountMenu() {
    return (
        <DropdownMenu>
            <DropdownMenuTrigger asChild>
                <Button variant="outline" className="flex items-center gap-2 select-none">
                    <span>Pizza Shop</span>
                    <ChevronDown className="h-4 w-4" />
                </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end" className="w-56">
                <DropdownMenuLabel className="flex flex-col">
                    <span className="">Luis Henrique</span>
                    <span className="text-xs font-normal text-muted-foreground">pizza.shop@email.com</span>
                </DropdownMenuLabel>
                <DropdownMenuSeparator />
                <DropdownMenuItem>
                    <Building className="h-4 w-4 mr-2" />
                    <span>Perfil da loja</span>
                </DropdownMenuItem>
                <DropdownMenuItem className="text-rose-500 dark:text-rose-400">
                <LogOut className="h-4 w-4 mr-2" />
                    Logout
                </DropdownMenuItem>
            </DropdownMenuContent>
        </DropdownMenu>
    )
}