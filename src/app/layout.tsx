import { Metadata } from "next";
import { ReactNode } from "react";
import { Header } from "@/components/Layout";
import { fonts } from "./fonts";

import "./general.css";

export const metadata: Metadata = {
  title: {
    default: "Bimbasaka | Главная",
    template: "%s | Bimbasaka",
  },
  description:
    "Официальный портал корпорации на сервере Бимбавуд. Торговля, вакансии, биржа",
  openGraph: {
    title: "Строим будущее сервера",
    description: "Смотри наши контракты и устав корпорации.",
    siteName: "Minecraft Corporation",
    type: "website",
  },
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="ru" className={fonts.variable}>
      <body
        className="h-screen flex flex-col m-0"
        suppressHydrationWarning={true}
      >
        <Header />
        <main className="grow">{children}</main>
      </body>
    </html>
  );
}
