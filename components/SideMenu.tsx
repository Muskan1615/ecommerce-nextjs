"use client";

import { Text } from "lucide-react";
import React, { useState } from "react";
import { Sidebar } from "./Sidebar";

export const SideMenu = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <Text
        className="w-5 h-5 cursor-pointer"
        onClick={() => setIsSidebarOpen(true)}
      />
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />
    </>
  );
};
