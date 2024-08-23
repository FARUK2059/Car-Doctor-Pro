import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/Components/Sheard/Navbar";
import Footer from "@/Components/Sheard/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: {
    default: "Car Docto Pro",
    template: "%s | Car Doctor Pro",
  },
  description: "Car Reaper Workshop",

};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
      </body>
    </html>
  );
}
