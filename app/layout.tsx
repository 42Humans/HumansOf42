import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import logo42 from "@/public/42_logo.svg";

const inter = Victor_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "Humans of 42",
  description: "Interviews with people around 42 Seoul",
  viewport: { width: "device-width", initialScale: 1 },
  formatDetection: { address: false, telephone: false, email: false },
};

function NaviBar() {
  return (
    <div className="w-full flex flex-row bg-gray-800">
      <Link className="p-4" href={"/"}>
        <div className="flex flex-row gap-2 rounded p-1 outline-none hover:outline hover:outline-white/30 text-white">
          <span className="">Humans of</span>
          <Image className="relative" src={logo42} alt={"42_logo"} width={32} />
        </div>
      </Link>
    </div>
  );
}

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body
        className={`bg-white/90 dark:bg-black/90 text-gray-800 dark:text-gray-50/90 ${inter.className}`}
      >
        <NaviBar />
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
