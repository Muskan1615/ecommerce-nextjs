import { cn } from "@/lib/utils";
import React from "react";

interface Props {
  children: React.ReactNode;
  className?: string;
}

export const Container = ({ children }: Props) => {
  return <div className={cn("max-w-screen-xl mx-auto")}>{children}</div>;
};
