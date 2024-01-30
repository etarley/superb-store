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
    <Skeleton className="size-12 rounded-full" />
  </div>
);

  if (session) {
    return (
      <DropdownMenu key="1">
        <DropdownMenuTrigger asChild>
     <Avatar>
            <AvatarImage src={session.user.image ||""} alt="User avatar" />
            <AvatarFallback className="border-2 border-border text-muted-foreground">
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
        <div className="flex items-center gap-3 border-b px-2 py-4">
          <Avatar>
            <AvatarImage src={session.user.image ||""} alt="User avatar" />
            <AvatarFallback className="border-2 border-border text-muted-foreground">
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
            <UserIcon className="mr-2 size-4" />
            Profile
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <LocateIcon className="mr-2 size-4" />
          Addresses
        </DropdownMenuItem>
        <DropdownMenuItem>
          <CreditCardIcon className="mr-2 size-4" />
          Payment Methods
        </DropdownMenuItem>
        <DropdownMenuItem>
          <PackageIcon className="mr-2 size-4" />
          Orders
        </DropdownMenuItem>
        <DropdownMenuItem>
          <HeartIcon className="mr-2 size-4" />
          Wishlist
        </DropdownMenuItem>
        <Link href='/settings'>
          <DropdownMenuItem >
            
              <SettingsIcon className="mr-2 size-4" />
              Settings
            
          </DropdownMenuItem>
        </Link>
        <DropdownMenuItem>
          <HelpCircleIcon className="mr-2 size-4" />
          Help/Support
        </DropdownMenuItem>
        <DropdownMenuSeparator />
        <DropdownMenuItem className="text-red-600" onClick={()=>signOut()}>
          <LogOutIcon className="mr-2 size-4" />
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
