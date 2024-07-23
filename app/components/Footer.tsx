import React from "react";
import initTranslations from "../i18n";

export interface FooterProps {
  locale: string;
  children?: React.ReactNode;
}

const Footer: React.FC<FooterProps> = async ({ locale }) => {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <div className="bg-fish-green flex flex-row p-8 w-full">
      <div className=" flex-1">
        <h2 className="text-work-sans font-bold">{t("footer.openingHours")}</h2>
        <p>bla</p>
        <p>bla</p>
      </div>
      <div className=" flex-1"></div>
    </div>
  );
};

export default Footer;
