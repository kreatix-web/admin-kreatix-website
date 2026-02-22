import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function PrivacyPolicy() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("privacy.pageTitle");
  }, [t]);

  return (
    <div className="bg-dark text-[#FFFFFF] overflow-x-hidden">
      <Navbar />

      <main className="px-6 lg:px-16 py-16">
        <div className="mt-24 max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
            {t("privacy.legalLabel")}
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-[#FFFFFF]">
            {t("privacy.title")}
          </h1>
          <p className="text-muted mb-10 font-mono text-sm">
            {t("privacy.lastUpdated")}
          </p>

          <section className="prose prose-invert max-w-none prose-headings:text-[#FFFFFF] prose-headings:font-display prose-p:text-muted prose-li:text-muted prose-strong:text-[#FFFFFF] prose-a:text-accent prose-hr:border-dark-border">
            <h2 id="who-we-are" className="mt-10">
              {t("privacy.s1.title")}
            </h2>
            <p>
              {t("privacy.s1.body1")}
              <br />
              {t("privacy.s1.address")}
              <br />
              {t("privacy.s1.company")}
              <br />
              {t("privacy.s1.contactPrivacy")}
              <br />
              {t("privacy.s1.euRep")}
              <br />
              {t("privacy.s1.dpo")}
            </p>
            <p>{t("privacy.s1.body2")}</p>

            <h2 id="roles" className="mt-10">
              {t("privacy.s2.title")}
            </h2>
            <ul>
              <li>{t("privacy.s2.item1")}</li>
              <li>{t("privacy.s2.item2")}</li>
            </ul>

            <h2 id="what-we-collect" className="mt-10">
              {t("privacy.s3.title")}
            </h2>
            <h3>{t("privacy.s3.visitors")}</h3>
            <ul>
              <li>{t("privacy.s3.visitorsItem1")}</li>
              <li>{t("privacy.s3.visitorsItem2")}</li>
            </ul>
            <h3>{t("privacy.s3.prospects")}</h3>
            <ul>
              <li>{t("privacy.s3.prospectsItem1")}</li>
              <li>{t("privacy.s3.prospectsItem2")}</li>
              <li>{t("privacy.s3.prospectsItem3")}</li>
            </ul>
            <h3>{t("privacy.s3.hosted")}</h3>
            <p>{t("privacy.s3.hostedBody")}</p>

            <h2 id="purposes" className="mt-10">
              {t("privacy.s4.title")}
            </h2>
            <ul>
              <li>{t("privacy.s4.item1")}</li>
              <li>{t("privacy.s4.item2")}</li>
              <li>{t("privacy.s4.item3")}</li>
              <li>{t("privacy.s4.item4")}</li>
              <li>{t("privacy.s4.item5")}</li>
              <li>{t("privacy.s4.item6")}</li>
            </ul>

            <h2 id="sharing" className="mt-10">
              {t("privacy.s5.title")}
            </h2>
            <p>{t("privacy.s5.body1")}</p>
            <p>{t("privacy.s5.body2")}</p>

            <h2 id="transfers" className="mt-10">
              {t("privacy.s6.title")}
            </h2>
            <p>{t("privacy.s6.body")}</p>

            <h2 id="retention" className="mt-10">
              {t("privacy.s7.title")}
            </h2>
            <p>{t("privacy.s7.body")}</p>
            <ul>
              <li>{t("privacy.s7.item1")}</li>
              <li>{t("privacy.s7.item2")}</li>
              <li>{t("privacy.s7.item3")}</li>
              <li>{t("privacy.s7.item4")}</li>
            </ul>

            <h2 id="security" className="mt-10">
              {t("privacy.s8.title")}
            </h2>
            <p>{t("privacy.s8.body")}</p>

            <h2 id="rights" className="mt-10">
              {t("privacy.s9.title")}
            </h2>
            <p>{t("privacy.s9.body")}</p>

            <h2 id="cookies" className="mt-10">
              {t("privacy.s10.title")}
            </h2>
            <p>{t("privacy.s10.body")}</p>
            <ul>
              <li>{t("privacy.s10.item1")}</li>
              <li>{t("privacy.s10.item2")}</li>
              <li>{t("privacy.s10.item3")}</li>
            </ul>
            <p>{t("privacy.s10.body2")}</p>

            <h2 id="processor" className="mt-10">
              {t("privacy.s11.title")}
            </h2>
            <p>{t("privacy.s11.body")}</p>
            <ul>
              <li>{t("privacy.s11.item1")}</li>
              <li>{t("privacy.s11.item2")}</li>
              <li>{t("privacy.s11.item3")}</li>
              <li>{t("privacy.s11.item4")}</li>
            </ul>

            <h2 id="children" className="mt-10">
              {t("privacy.s12.title")}
            </h2>
            <p>{t("privacy.s12.body")}</p>

            <h2 id="changes" className="mt-10">
              {t("privacy.s13.title")}
            </h2>
            <p>{t("privacy.s13.body")}</p>

            <p className="mt-6">{t("privacy.contactLine")}</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
