import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Victor_Mono({ subsets: ["latin"] });

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
        <span className="rounded p-1 outline-none hover:outline hover:outline-white/30 text-white">
          Humans of 42
        </span>
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
      <body className={`text-gray-800 dark:text-gray-50 ${inter.className}`}>
        <NaviBar />
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
