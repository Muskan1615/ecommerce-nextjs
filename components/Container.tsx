import React from "react";

export const Container = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return <div className="px-4 sm:px-6 lg:px-8">{children}</div>;
};
