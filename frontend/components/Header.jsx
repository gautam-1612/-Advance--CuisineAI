import { Show, SignInButton, SignUpButton } from "@clerk/nextjs";
import UserDropDown from "./UserDropDown";
import React from "react";
import { Button } from "./ui/button";
import Link from "next/link";
import Image from "next/image";
import { Cookie, Refrigerator } from "lucide-react";

export default function Header() {
  const user = null; // replace with actual user later

  return (
    // backdrop-blur-md - This blurs whatever is behind the element, not the element itself. bg-stone-50/50 - 50% opacity.
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/50 backdrop-blur-md z-50">
      <nav className="container mx-auto px-4 h-16 flex justify-between items-center">
        <Link href={user ? "/dashboard" : "/"}>
          <Image
            src="/logo.png"
            alt="Logo"
            height={60}
            width={80}
            className="w-35"
          />
        </Link>

        <div className="hidden md:flex items-center space-x-8 text-sm font-medium text-stone-600">
          <Link
            href="/recipies"
            className="hover:text-orange-600 transition-colors flex gap-1.5"
          >
            <Cookie className="w-4 h-4 mt-0.5" />
            My Recipies
          </Link>
          <Link
            href="/recipies"
            className="hover:text-orange-600 transition-colors flex gap-1.5"
          >
            <Refrigerator className="w-4 h-4 mt-0.5" />
            My Pantry
          </Link>
        </div>

        <div className="flex items-center space-x-4">
          <Show when="signed-out">
            <SignInButton mode="modal">
              {/* how to cook button */}
              <Button
                variant="ghost"
                className="bg-amber-50 text-stone-600 hover:text-orange-600 hover:bg-orange-50 font-medium cursor-pointer"
              >
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button
                variant="primary"
                className="rounded-full px-6 bg-orange-600 text-stone-50 cursor-pointer font-medium"
              >
                Get Started
              </Button>
            </SignUpButton>
          </Show>

          <Show when="signed-in">
            <UserDropDown />
          </Show>
        </div>
      </nav>
    </header>
  );
}
