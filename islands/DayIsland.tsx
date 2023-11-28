import { useState } from "preact/hooks";
import Present from "../components/Present.tsx";
import {
  imagesPng,
  Language,
  languages,
  solutions,
} from "../components/Data.ts";
import { MiniPresent } from "../components/MiniPresent.tsx";
import { MiniPresentType } from "../components/MiniPresent.tsx";

interface DayIslandProps {
  dayNr: number;
}

export default function DayIsland({ dayNr }: DayIslandProps) {
  const images = imagesPng;

  const [selectedLang, setSelectedLang] = useState(
    dayNr - 1 < solutions.length && solutions[dayNr - 1].length > 0 ? 0 : -1,
  );

  const renderPresents = () => {
    if (dayNr - 1 < solutions.length) {
      return (
        solutions[dayNr - 1].map((lang: Language) => (
          <Present
            language={lang}
            onClick={(lang: Language) => {
              setSelectedLang(lang);
              console.log("selectedLang", lang);
            }}
          />
        ))
      );
    }
    return null;
  };

  const renderGithubEmbed = () => {
    if (selectedLang >= 0) {
      return (
        <iframe
          frameBorder="0"
          width="800px"
          height="500px"
          srcDoc={`<html><body><script src="https://emgithub.com/embed-v2.js?target=https%3A%2F%2Fgithub.com%2Fapaulheim%2Faoc23code%2Fblob%2Fmain%2F${
            languages[selectedLang]
          }%2Fday${dayNr}.${
            languages[selectedLang]
          }&style=github-dark&type=code&showBorder=on&showLineNumbers=on&showFileMeta=on&showFullPath=on&showCopy=on"></script></body></html>`}
        />
      );
    }
    return null;
  };

  const renderReplit = () => {
    if (selectedLang >= 0) {
      return (
        <a
          href={`https://replit.com/@apaulheim/aoc23day${dayNr}${
            languages[selectedLang]
          }`}
          target="blank"
        >
          <div class="replit">
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M7 5.5C7 4.67157 7.67157 4 8.5 4H15.5C16.3284 4 17 4.67157 17 5.5V12H8.5C7.67157 12 7 11.3284 7 10.5V5.5Z"
                fill="#F26207"
              >
              </path>
              <path
                d="M17 12H25.5C26.3284 12 27 12.6716 27 13.5V18.5C27 19.3284 26.3284 20 25.5 20H17V12Z"
                fill="#F26207"
              >
              </path>
              <path
                d="M7 21.5C7 20.6716 7.67157 20 8.5 20H17V26.5C17 27.3284 16.3284 28 15.5 28H8.5C7.67157 28 7 27.3284 7 26.5V21.5Z"
                fill="#F26207"
              >
              </path>
            </svg>Run on Replit
          </div>
        </a>
      );
    }
    return null;
  };

  const renderSolutions = (dayNr: number) => {
    if (solutions[dayNr - 1]?.length > 0) {
      return solutions[dayNr - 1].map((solution) => (
        <MiniPresent
          type={MiniPresentType.Language}
          id={solution}
          onClick={(lang: Language) => {
            setSelectedLang(lang);
          }}
        />
      ));
    } else return <div class="no-solution">No solutions implemented yet</div>;
  };

  return (
    <>
      <div class="navbar-container">
        <a href="/">
          {"\< Back to calendar"}
        </a>
      </div>
      <div class="day-title">Day {dayNr}</div>
      <div class="day-aoc">
        <a href={`https://adventofcode.com/2023/day/${dayNr}`}>
          <img class="aoc" src="../../aoc.png" />
          <div>{"Go to puzzle"}</div>
        </a>
      </div>
      <div class="solutions day">
        {renderSolutions(dayNr)}
      </div>
      <div class="container-code">
        {renderReplit()}
        {renderGithubEmbed()}
      </div>
      {
        /* <div class="decoration">
        <img src={images[dayNr - 1]} width="250px" />
      </div> */
      }
    </>
  );
}
