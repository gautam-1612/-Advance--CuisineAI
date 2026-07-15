import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ClerkProvider } from "@clerk/nextjs";

export const metadata = {
  title: "CuisineAI - AI Recipes Platform",
  description: "",
};

// Google font Config
const inter = Inter({
  subsets: ["latin"],
});

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className={inter.className}>
        <body className="min-h-full flex flex-col">
          <Header />
          <main className="min-h-screen">{children}</main>
          <footer className="w-full bg-stone-300 h-12 flex justify-center border-t">
            <p className="m-auto text-sm">A Project by Gautam Bhushan</p>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
