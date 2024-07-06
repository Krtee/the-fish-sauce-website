import { Metadata } from "next";
import "./globals.scss";
import { TranslationsProvider } from "./components/TranslationsProvider";
import Navigation from "./components/Navigation";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Footer from "./components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Fish Sauce",
  description: "The Fish Sauce",
};

export const RootLayout: React.FC<{
  children: React.ReactNode;
  params: { locale: string };
}> = ({ params: { locale }, children }) => {
  return (
    <html lang="de">
      <TranslationsProvider namespaces={["common"]} locale={locale}>
        <body className={inter.className}>
          <Suspense>
            <Navigation />
            {children}
            <Footer lang={locale} />
          </Suspense>
        </body>
      </TranslationsProvider>
    </html>
  );
};

export default RootLayout;
