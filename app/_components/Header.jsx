import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { SignedIn, SignedOut, UserButton } from "@clerk/nextjs";
import Link from "next/link";
const Header = () => {
  return (
    <div className="p-5 flex justify-between items-center border shadow-sm">
      <Image src={"./logo.svg"} alt="logo" width={160} height={160}></Image>
      <Button>Get Started</Button>
      <SignedOut>
        <Link href={"/sign-in"}>
          <Button color="inherit" sx={{ ml: 2 }}>
            Login
          </Button>
        </Link>
        <Link href={"/sign-up"}>
          <Button color="inherit" sx={{ ml: 2 }}>
            Sign Up
          </Button>
        </Link>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </div>
  );
};

export default Header;
