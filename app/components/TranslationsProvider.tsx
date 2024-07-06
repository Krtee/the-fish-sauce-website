"use client";

import initTranslations from "@/app/i18n";
import { createInstance } from "i18next";
import { I18nextProvider } from "react-i18next";

export const TranslationsProvider: React.FC<{
  children: React.ReactNode;
  locale: string;
  namespaces?: string[];
  resources?: any;
}> = async ({
  children,
  locale = "de",
  namespaces = ["common"],
  resources = undefined,
}) => {
  const i18n = createInstance();

  await initTranslations(locale, namespaces, i18n, resources);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
};
