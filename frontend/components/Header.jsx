import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs";
import React from "react";
import { Button } from "./ui/button";

export default function Header() {
  return (
    <header className="fixed top-0 w-full border-b border-stone-200 bg-stone-50/50 backdrop-blur-md z-50">
      <nav className="container px-4 h-16 flex justify-between items-center">
        <div>LOGO</div>
        <div>navlinks</div>
        <div className="flex items-center space-x-4">
          <Show when="signed-out">
            <SignInButton mode="modal">
              <Button
                variant="ghost"
                className="bg-amber-50 text-stone-600 hover:text-[#6c47ff] font-medium cursor-pointer"
              >
                Sign In
              </Button>
            </SignInButton>

            <SignUpButton mode="modal">
              <Button
                variant="primary"
                className="rounded-full px-6 bg-[#6c47ff] text-stone-50 cursor-pointer font-medium"
              >
                Get Started
              </Button>
            </SignUpButton>
          </Show>
          <Show when="signed-in">
            <UserButton />
          </Show>
        </div>
      </nav>
    </header>
  );
}
