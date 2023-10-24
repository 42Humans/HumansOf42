import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], style: ["normal"] });

export const metadata: Metadata = {
  title: "Humans of 42",
  description: "Interviews with people around 42 Seoul",
  viewport: { width: "device-width", initialScale: 1 },
  formatDetection: { address: false, telephone: false, email: false },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ko">
      <body className={`text-gray-50 ${inter.className}`}>{children}</body>
    </html>
  );
}
