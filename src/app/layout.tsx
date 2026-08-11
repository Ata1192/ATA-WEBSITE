import type { Metadata } from "next";
import "./globals.css";
import { LanguageProvider } from "@/context/LanguageContext";

export const metadata: Metadata = {
  title: "Ata Metin — Software Engineering Student & Developer",
  description:
    "Ata Metin'in kişisel portfolyo sitesi. Doğu Akdeniz Üniversitesi Software Engineering öğrencisi. .NET, React ve modern web teknolojileri üzerine projeler ve staj deneyimleri. Personal portfolio of Ata Metin, Software Engineering student at Eastern Mediterranean University.",
  keywords: [
    "Ata Metin",
    "Software Engineering",
    "Doğu Akdeniz Üniversitesi",
    "Eastern Mediterranean University",
    "Developer",
    "Portfolio",
    ".NET",
    "React",
    "Yazılım Mühendisliği",
  ],
  authors: [{ name: "Ata Metin" }],
  openGraph: {
    title: "Ata Metin — Software Engineering Student & Developer",
    description:
      "Ata Metin'in kişisel portfolyo sitesi. Doğu Akdeniz Üniversitesi Software Engineering öğrencisi.",
    type: "website",
  },
};

import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100..800;1,100..800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <CustomCursor />
        <SmoothScroll>
          <LanguageProvider>{children}</LanguageProvider>
        </SmoothScroll>
      </body>
    </html>
  );
}
