import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navigation from "../components/Navigation";
import { TranslationsProvider } from "../components/TranslationsProvider";
import "./globals.scss";
const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Fish Sauce",
  description: "The Fish Sauce",
};

export const RootLayout: React.FC<{
  children: React.ReactNode;
  params: { lang: string };
}> = ({ params: { lang }, children }) => {
  console.log("yo", lang);

  return (
    <html lang="de">
      <TranslationsProvider namespaces={["common"]} locale={lang}>
        <body className={inter.className}>
          <Navigation />
          {children}
        </body>
      </TranslationsProvider>
    </html>
  );
};

export default RootLayout;
