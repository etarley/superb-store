"use client";
import { Button } from "@/components/ui/button";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuSeparator, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";
import { Skeleton } from "@/components/ui/skeleton";
import { CreditCardIcon, HeartIcon, HelpCircleIcon, LocateIcon, LogOutIcon, PackageIcon, SettingsIcon, UserIcon } from "lucide-react";
import Link from "next/link";
import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

import { signIn, signOut, useSession } from "next-auth/react";


export default function SignIn() {
  const { data: session, status } = useSession();

  if (status === "loading") return (
  <div className="flex items-center space-x-4">
    <Skeleton className="h-12 w-12 rounded-full" />
  </div>
);

  if (session) {
    return (
      <DropdownMenu key="1">
        <DropdownMenuTrigger asChild>
     <Avatar>
            <AvatarImage src={session.user.image ||""} alt="User avatar" />
            <AvatarFallback className="border-border border-2 text-muted-foreground">
            {session.user.name
              ? session.user.name
                  ?.split(" ")
                  .map((word) => word[0].toUpperCase())
                  .join("")
              : "~"}
          </AvatarFallback>
          <span className="sr-only">Toggle user menu</span>
          </Avatar>
          </DropdownMenuTrigger>
           <DropdownMenuContent className="w-64" align="end" forceMount>
        <div className="flex items-center gap-3 px-2 py-4 border-b">
          <Avatar>
            <AvatarImage src={session.user.image ||""} alt="User avatar" />
            <AvatarFallback className="border-border border-2 text-muted-foreground">
            {session.user.name
              ? session.user.name
                  ?.split(" ")
                  .map((word) => word[0].toUpperCase())
                  .join("")
              : "~"}
          </AvatarFallback>
          <span className="sr-only">Toggle user menu</span>
          </Avatar>
          <div className="grid gap-0.5 text-sm">
            <div className="font-medium">{session.user.name}</div>
            <div className="text-gray-500">{session.user.email}</div>
          </div>
        </div>
        <Link href='/account'>
          <DropdownMenuItem>
            <UserIcon className="h-4 w-4 mr-2" />
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <LocateIcon className="h-4 w-4 mr-2" />
          Addresses
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon className="h-4 w-4 mr-2" />
          Payment Methods
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PackageIcon className="h-4 w-4 mr-2" />
          Orders
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HeartIcon className="h-4 w-4 mr-2" />
          Wishlist
        </DropdownMenuItem>
        <Link href='/settings'>
          <DropdownMenuItem >
            
              <SettingsIcon className="h-4 w-4 mr-2" />
              Settings
            
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <HelpCircleIcon className="h-4 w-4 mr-2" />
          Help/Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600" onClick={()=>signOut()}>
          <LogOutIcon className="h-4 w-4 mr-2" />
          Logout
        </DropdownMenuItem>
      </DropdownMenuContent>
          </DropdownMenu>
    );
  }
  return (
      <Button onClick={() => signIn()}>Sign in</Button>
  );
}
