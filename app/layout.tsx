import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "般若波罗蜜多心经",
  description: "般若波罗蜜多心经，简称心经。 是佛教大乘教典中，一部文字最短少，诠理最深奥微妙的经典。 仅以二百六十个字，浓缩了六百卷大般若经的要义；摄尽了释尊二十二年般若谈的精华。 既阐明宇宙人生缘起性空的原理；同时显示般若真空妙理的体用与功能；实是般若的核心，佛法的心要。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
