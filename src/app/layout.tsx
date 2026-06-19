import type { Metadata } from "next";
import { Bai_Jamjuree } from "next/font/google";
import "./globals.css";

const baiJamjuree = Bai_Jamjuree({
  variable: "--font-bai-jamjuree",
  subsets: ["latin"],
  weight: ["300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Ashbard Energy | Engineering Excellence",
  description:
    "Premium well services, NDT, and pipeline support for Africa's leading energy operators.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${baiJamjuree.variable} h-full antialiased overflow-x-hidden`}>
      <body className="min-h-full w-screen max-w-full overflow-x-hidden">{children}</body>
    </html>
  );
}
