import type { Metadata } from "next";
import { Open_Sans } from "next/font/google";
import "./globals.css";
import { registerLicense } from '@syncfusion/ej2-base';
import { ContextProvider } from "./context/ContextProvider";

registerLicense(process.env.NEXT_PUBLIC_EJ2_LICENSE_KEY || '');

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "Dashy",
  description: "A Dashboard made with Syncfusion Components",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${openSans.variable} antialiased`}
      >
        <ContextProvider>
         {children}
        </ContextProvider>
      </body>
    </html>
  );
}
