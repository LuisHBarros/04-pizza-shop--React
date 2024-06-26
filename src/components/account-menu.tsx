import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Building, ChevronDown, LogOut } from "lucide-react";
import { DropdownMenuLabel } from "@radix-ui/react-dropdown-menu";
import { useMutation, useQuery } from "@tanstack/react-query";
import { getProfile } from "@/api/get-profile";
import { getManagedRestaurant } from "@/api/get-managed-restaurant";
import { Skeleton } from "@/components/ui/skeleton";
import { Dialog } from "@radix-ui/react-dialog";
import { DialogTrigger } from "./ui/dialog";
import { StoreProfileDialog } from "./store-profile-dialog";
import { useNavigate } from "react-router-dom";
import { signOut } from "@/api/sign-out";

export function AccountMenu() {
  const { data: profile, isLoading: isLoadingProfile } = useQuery({
    queryKey: ["profile"],
    queryFn: getProfile,
  });
  const navigate = useNavigate();

  const { mutateAsync: signOutFn, isPending: isSignOut } = useMutation({
    mutationFn: signOut,
    onSuccess() {
      navigate("/auth/sign-in", { replace: true });
    },
  });

  const { data: restaurant, isLoading: isLoadingManagedRestaurant } = useQuery({
    queryKey: ["restaurant"],
    queryFn: getManagedRestaurant,
  });

  return (
    <Dialog>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            variant="outline"
            className="flex select-none items-center gap-2"
          >
            <span>
              {isLoadingManagedRestaurant ? (
                <Skeleton className="h-4 w-40" />
              ) : (
                restaurant?.name
              )}
            </span>
            <ChevronDown className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          <DropdownMenuLabel className="flex flex-col">
            <span className="">
              {isLoadingProfile ? (
                <Skeleton className="h-4 w-40" />
              ) : (
                profile?.name
              )}
            </span>
            <span className="text-xs font-normal text-muted-foreground">
              {isLoadingProfile ? (
                <Skeleton className="h-4 w-40" />
              ) : (
                profile?.email
              )}
            </span>
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DialogTrigger asChild>
            <DropdownMenuItem>
              <Building className="mr-2 h-4 w-4" />
              <span>Perfil da loja</span>
            </DropdownMenuItem>
          </DialogTrigger>
          <DropdownMenuItem
            className="text-rose-500 dark:text-rose-400"
            asChild
          >
            <button
              className="w-full"
              onClick={() => signOutFn()}
              disabled={isSignOut}
            >
              <LogOut className="mr-2 h-4 w-4" />
              Logout
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
      <StoreProfileDialog />
    </Dialog>
  );
}
