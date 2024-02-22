import React from "react";
import CategoryElement from "../components/CategoryElement";
import Collections from "../components/Collections";
import SectionTop from "../components/SectionTop";
import SectionTopBottom from "../components/SectionTopBottom";
import { useLang } from "../context/LangContext";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import { useGetAllCollectionsQuery } from "../services/collections";

const CollectionsPage = () => {
  const { lang } = useLang();
  const { data: collections, isLoading } = useGetAllCollectionsQuery();
  const handleLangChange = (e) => {
    switch (lang) {
      case "Az":
        return "Kolleksiyalar";
      case "Ru":
        return "Коллекции";
      default:
        return "Collections";
    }
  };

  useSetPageTitle(handleLangChange());
  return (
    <main>
      <div className="container">
        <SectionTop title={handleLangChange()} />
        <SectionTopBottom>
          <p style={{ maxWidth: "56rem" }}>
            {lang === "Az"
              ? "Həqiqətən də bu şeylər arasında fərq asan və məqsədəuyğundur. Pulsuz seçimin bizim üzümüzə açıq olduğu və heç nəyin bizə mane olmadığı bir vaxtda ən az olanı."
              : lang === "Ru"
              ? "И действительно, различие между этими вещами легко и целесообразно. Ибо в свободное время, когда мы свободны в выборе, ничто не мешает нам делать то, что лучше."
              : ` Et harum quidem rerum facilis est et expedita distinctio. Nam libero
                    tempore, cum soluta nobis est eligendi optio cumque nihil impedit
                    quo minus id quod maxime.`}
          </p>
        </SectionTopBottom>
        <Collections>
          {collections &&
            collections.map((collection) => (
              <CategoryElement
                lang={lang}
                type="collections"
                key={collection.id}
                {...collection}
              />
            ))}
        </Collections>
      </div>
    </main>
  );
};

export default CollectionsPage;
