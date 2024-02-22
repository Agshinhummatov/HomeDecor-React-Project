import React from "react";
import AboutUs from "../components/AboutUs";
import Statistics from "../components/Statistics";
import StatisticsElement from "../components/StatisticsElement";
import { useLang } from "../context/LangContext";
import { useSetPageTitle } from "../hooks/useSetPageTitle";
import { useGetAllStatisticsQuery } from "../services/statistics";

const AboutPage = () => {
  const { lang } = useLang();
  switch (lang) {
    case "Az":
      useSetPageTitle("Haqqımızda");
      break;
    case "Ru":
      useSetPageTitle("О нас");
      break;
    default:
      useSetPageTitle("About us");
  }

  const { data: statistics, isLoading } = useGetAllStatisticsQuery();

  return (
    <main>
      <AboutUs lang={lang} />
      <Statistics>
        {statistics &&
          statistics.map((statistic) => (
            <StatisticsElement lang={lang} key={statistic.id} {...statistic} />
          ))}
      </Statistics>
    </main>
  );
};

export default AboutPage;
