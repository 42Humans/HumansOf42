import type { Metadata } from "next";
import { Victor_Mono } from "next/font/google";
import "./globals.css";

const inter = Victor_Mono({ subsets: ["latin"], style: ["italic"] });

export const metadata: Metadata = {
  title: "Humans of 42",
  description: "Interviews with people around 42 Seoul",
  viewport: { width: "device-width", initialScale: 1 },
  formatDetection: { address: false, telephone: false, email: false },
};

export default function RootLayout(props: {
  children: React.ReactNode;
  modal: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`text-black dark:text-gray-50 ${inter.className}`}>
        {props.children}
        {props.modal}
      </body>
    </html>
  );
}
