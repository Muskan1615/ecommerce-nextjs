import Footer from "@/components/Footer";
import Header from "@/components/Header";
import { getFaviconLogo } from "@/sanity/lib/queries/getFaviconLogo";
import { ClerkProvider } from "@clerk/nextjs";
import { Metadata } from "next";
import localFont from "next/font/local";
import { ReactNode } from "react";
import "../globals.css";

const roboto = localFont({
  src: "../fonts/RobotoCondensed.woff2",
  variable: "--font-roboto",
  weight: "100 900",
});

export async function generateMetadata(): Promise<Metadata> {
  const faviconUrl = await getFaviconLogo();

  return {
    title: "LA7",
    description: "Ecommerce app",
    icons: faviconUrl
      ? {
          icon: [{ url: faviconUrl, type: "image/png" }],
        }
      : undefined,
  };
}

export default function RootLayout({
  children,
}: Readonly<{ children: ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${roboto.variable} antialiased`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
