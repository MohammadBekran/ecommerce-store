import type { Metadata } from "next";
import { Urbanist } from "next/font/google";

import Footer from "@/components/footer";
import Header from "@/components/header";
import ClerkProvider from "@/components/partials/providers/clerk-provider";
import ModalProvider from "@/components/partials/providers/modal-provider";
import ToastProvider from "@/components/partials/providers/toast-provider";

import "./globals.css";

const urbanist = Urbanist({
  subsets: ["latin"],
  variable: "--font-urbanist",
});

export const metadata: Metadata = {
  title: "Ecommerce store",
  description: "Developed by Mohammad Bekran",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${urbanist.className} antialiased`}>
          <ModalProvider />
          <ToastProvider />
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </ClerkProvider>
  );
}
