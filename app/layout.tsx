import type {Metadata} from "next";
import "./globals.css";
import React from "react";
import NavigationBar from "@/components/NavigationBar";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "rlxos",
  description: "An OpenSource Operating System",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <NavigationBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
