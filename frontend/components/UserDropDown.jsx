"use client";

import { UserButton } from "@clerk/nextjs";
import { Cookie, Refrigerator } from "lucide-react";
import React from "react";

// The reason is that <UserButton> from Clerk is an interactive React component. It handles things like:

// Opening and closing the dropdown
// Navigating through menu items
// Managing authentication state
// Handling clicks and other browser events

function UserDropDown() {
  return (
    <UserButton>
      <UserButton.MenuItems>
        <UserButton.Link
          label="My Recipes"
          labelIcon={<Cookie size={16} />}
          href="/recipes"
        />
        <UserButton.Link
          label="My Pantry"
          labelIcon={<Refrigerator size={16} />}
          href="/pantry"
        />
        <UserButton.Action label="manageAccount" />
      </UserButton.MenuItems>
    </UserButton>
  );
}

export default UserDropDown;
