import type { Metadata } from "next";
import "./globals.css";
import Header from "@/app/components/Header";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "FLO | Неофициальный сайт",
  icons: "https://www.flo.com.kz/pub/assets/flo-v2/images/flo-logo.svg",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={"font-body"}>
        <div className={"flex flex-col h-screen justify-between relative"}>
          <Header />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
