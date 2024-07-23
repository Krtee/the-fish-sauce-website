import { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import { TranslationsProvider } from "../components/TranslationsProvider";
import "./../globals.scss";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "The Fish Sauce",
  description: "The Fish Sauce",
};

const RootLayout: React.FC<{
  children: React.ReactNode;
  params: { locale: string };
}> = ({ params: { locale }, children }) => {
  return (
    <html lang="de">
      <body className={inter.className}>
        <TranslationsProvider namespaces={["common"]} locale={locale}>
          <Suspense>
            <Navigation />
            {children}
          </Suspense>
          <Footer locale={locale} />
        </TranslationsProvider>
      </body>
    </html>
  );
};

export default RootLayout;
