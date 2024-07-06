import Image from "next/image";
import Footer from "../components/Footer";
import initTranslations from "../i18n";

const Home: React.FC<{ params: { lang: string } }> = async ({
  params: { lang },
}) => {
  const { t } = await initTranslations(lang, ["common"]);
  console.log("yess", lang);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="relative flex flex-col place-items-center w-full ">
        <div className=" relative w-full  pt-40 pb-52 h-screen">
          <div className="relative h-full">
            <Image
              className="relative "
              src="/images/header.png"
              alt="Next.js Logo"
              fill
              sizes="100vw"
              objectFit="cover"
            />
          </div>
        </div>

        <div className="relative flex flex-col bg-fish-beige text-fish-green ">
          <div className="relative flex-2 p-8 ">
            <h1 className="text-2xl text-termina py-4 ">{t("header.title")}</h1>
            <p className="text-lg text-work-sans  py-4 ">
              {t("header.content")}
            </p>
          </div>
          <div className="flex-1  min-w-full	row-reverse relative">
            <Image
              src="/images/vietnamstreet.png"
              alt="Next.js Logo"
              width={0}
              height={0}
              sizes="100vw"
              style={{ width: "100%", height: "auto" }}
            />
          </div>
        </div>

        <div className="bg-fish-brown p-8">
          <h1 className="text-2xl text-termina py-4">{t("menu.title")}</h1>
          <p className="text-lg text-work-sans py-4 border-t-2 ">
            {t("menu.lunch")}
          </p>
          <p className="text-lg text-work-sans py-4 border-t-2 ">
            {t("menu.dinner")}
          </p>
          <p className="text-lg text-work-sans py-4 border-t-2 border-b-2">
            {t("menu.drinks")}
          </p>
        </div>
        <div className="relative w-full p-8 bg-fish-beige">
          <Image
            className="relative "
            src="/images/streetsticks.png"
            alt="Woman grilling meat sticks"
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "100%", height: "auto" }}
          />
          <div className="absolute top-0 left-0 w-full h-full flex flex-col items-center justify-center">
            <h1 className="text-2xl text-termina py-4 ">JETZT PROBIEREN</h1>
            <button className="bg-secondary text-work-sans py-2 px-4">
              Zu den Reservierungen
            </button>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Home;
