import Image from "next/image";
import Link from "next/link";
import FishSauceStick from "../../public/images/fish_sauce_stick.svg";
import PlasticStoolStick from "../../public/images/plastic_stool_stick.svg";
import SpicesStick from "../../public/images/spices_stick.svg";
import Banner from "../components/Banner";
import StickWiggler from "../components/StickWiggler";
import initTranslations from "../i18n";

const Home: React.FC<{ params: { locale: string } }> = async ({
  params: { locale },
}) => {
  const { t } = await initTranslations(locale, ["common"]);

  return (
    <main className="flex min-h-screen flex-col items-center ">
      <div className="relative flex flex-col place-items-center w-full ">
        <Banner />

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
          <StickWiggler className="absolute -right-1 top-[450px] w-40">
            <FishSauceStick alt="Fish Sauce Stick" />
          </StickWiggler>
          <StickWiggler className="absolute -right-1 top-[550px] w-40" reverse>
            <PlasticStoolStick alt="Plastic Stool Stick" />
          </StickWiggler>
          <StickWiggler className="absolute -right-1 top-[650px] w-40">
            <SpicesStick alt="Spices Stick" />
          </StickWiggler>
        </div>

        <div className="bg-fish-brown p-8 w-full">
          <div className="flex flex-row">
            <h1 className="text-2xl text-termina py-4">{t("menu.title")}</h1>
            <h1 className="text-2xl text-kanit py-4">?</h1>
          </div>

          <Link
            className="text-lg text-work-sans py-4 border-t-2 block"
            href={"/lunch"}
          >
            {t("menu.lunch")}
          </Link>
          <Link
            className="text-lg text-work-sans py-4 border-t-2 block"
            href={"/dinner"}
          >
            {t("menu.dinner")}
          </Link>
          <Link
            className="text-lg text-work-sans py-4 border-t-2 border-b-2 block"
            href={"/drinks"}
          >
            {t("menu.drinks")}
          </Link>
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
