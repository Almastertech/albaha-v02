import { NextIntlClientProvider, useTranslations } from "next-intl";
import { getMessages, getTranslations } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import "./globals.css";
import Navbar from "@/UI/Navbar";
import Footer from "@/UI/Footer";
import ScrollableArea from "@/UI/ScrollableArea";

export const metadata = {
  title: "albaha",
  description: "bla bla bla",
};

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  if (!routing.locales.includes(locale)) {
    notFound();
  }
  const messages = await getMessages();

  return (
    <html lang={locale} dir={locale.includes("ar") ? "rtl" : "ltr"}>
      <NextIntlClientProvider messages={messages}>
        <body className="overflow-x-hidden text-xl">
          <ScrollableArea>{children}</ScrollableArea>
        </body>
      </NextIntlClientProvider>
    </html>
  );
}
