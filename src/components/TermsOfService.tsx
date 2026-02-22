import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function TermsOfService() {
  const { t } = useTranslation();

  useEffect(() => {
    document.title = t("terms.pageTitle");
  }, [t]);

  return (
    <div className="bg-dark text-[#FFFFFF] overflow-x-hidden">
      <Navbar />

      <main className="px-6 lg:px-16 py-16">
        <div className="mt-24 max-w-3xl mx-auto">
          <p className="font-mono text-xs tracking-[0.3em] uppercase text-accent mb-4">
            {t("terms.legalLabel")}
          </p>
          <h1 className="font-display text-3xl md:text-4xl font-bold mb-2 text-[#FFFFFF]">
            {t("terms.title")}
          </h1>
          <p className="text-muted mb-10 font-mono text-sm">
            {t("terms.lastUpdated")}
          </p>

          <section className="prose prose-invert max-w-none prose-headings:text-[#FFFFFF] prose-headings:font-display prose-p:text-muted prose-li:text-muted prose-strong:text-[#FFFFFF] prose-a:text-accent prose-hr:border-dark-border">
            <p>{t("terms.intro")}</p>

            <h2 className="mt-10">{t("terms.s1.title")}</h2>
            <p>{t("terms.s1.body")}</p>

            <h2 className="mt-10">{t("terms.s2.title")}</h2>
            <p>{t("terms.s2.body")}</p>

            <h2 className="mt-10">{t("terms.s3.title")}</h2>
            <p>{t("terms.s3.body")}</p>
            <ul>
              <li>{t("terms.s3.item1")}</li>
              <li>{t("terms.s3.item2")}</li>
              <li>{t("terms.s3.item3")}</li>
              <li>{t("terms.s3.item4")}</li>
            </ul>
            <p>{t("terms.s3.body2")}</p>

            <h2 className="mt-10">{t("terms.s4.title")}</h2>
            <ul>
              <li>{t("terms.s4.item1")}</li>
              <li>{t("terms.s4.item2")}</li>
              <li>{t("terms.s4.item3")}</li>
              <li>{t("terms.s4.item4")}</li>
              <li>{t("terms.s4.item5")}</li>
            </ul>

            <h2 className="mt-10">{t("terms.s5.title")}</h2>
            <ul>
              <li>{t("terms.s5.item1")}</li>
              <li>{t("terms.s5.item2")}</li>
              <li>{t("terms.s5.item3")}</li>
            </ul>

            <h2 className="mt-10">{t("terms.s6.title")}</h2>
            <p>{t("terms.s6.body")}</p>

            <h2 className="mt-10">{t("terms.s7.title")}</h2>
            <p>{t("terms.s7.body")}</p>

            <h2 className="mt-10">{t("terms.s8.title")}</h2>
            <p>{t("terms.s8.body")}</p>

            <h2 className="mt-10">{t("terms.s9.title")}</h2>
            <p>{t("terms.s9.body")}</p>

            <h2 className="mt-10">{t("terms.s10.title")}</h2>
            <p>{t("terms.s10.body")}</p>

            <h2 className="mt-10">{t("terms.s11.title")}</h2>
            <p>{t("terms.s11.body")}</p>

            <h2 className="mt-10">{t("terms.s12.title")}</h2>
            <p>{t("terms.s12.body")}</p>

            <h2 className="mt-10">{t("terms.s13.title")}</h2>
            <ul>
              <li>{t("terms.s13.item1")}</li>
              <li>{t("terms.s13.item2")}</li>
              <li>{t("terms.s13.item3")}</li>
              <li>{t("terms.s13.item4")}</li>
            </ul>

            <h2 className="mt-10">{t("terms.s14.title")}</h2>
            <p>{t("terms.s14.body")}</p>

            <h2 className="mt-10">{t("terms.s15.title")}</h2>
            <ul>
              <li>{t("terms.s15.item1")}</li>
              <li>{t("terms.s15.item2")}</li>
              <li>{t("terms.s15.item3")}</li>
            </ul>

            <h2 className="mt-10">{t("terms.s16.title")}</h2>
            <ul>
              <li>{t("terms.s16.item1")}</li>
              <li>{t("terms.s16.item2")}</li>
            </ul>

            <h2 className="mt-10">{t("terms.s17.title")}</h2>
            <p>{t("terms.s17.body")}</p>

            <h2 className="mt-10">{t("terms.s18.title")}</h2>
            <p>{t("terms.s18.body")}</p>

            <h2 className="mt-10">{t("terms.s19.title")}</h2>
            <p>{t("terms.s19.body")}</p>

            <h2 className="mt-10">{t("terms.s20.title")}</h2>
            <p>{t("terms.s20.body")}</p>

            <h2 className="mt-10">{t("terms.s21.title")}</h2>
            <p>
              {t("terms.s21.body")}
              <br />
              {t("terms.s21.body2")}
              <br />
              {t("terms.s21.body3")}
            </p>

            <h2 className="mt-10">{t("terms.s22.title")}</h2>
            <p>{t("terms.s22.body")}</p>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
