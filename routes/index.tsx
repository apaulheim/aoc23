import { asset, Head } from "$fresh/runtime.ts";
import {
  imagesPng,
  languageColors,
  languages,
  solutions,
} from "../components/Data.ts";
import { MiniPresent, MiniPresentType } from "../components/MiniPresent.tsx";

export default function Home() {
  const renderSolutions = (dayNr: number) => {
    if (solutions[dayNr]) {
      return solutions[dayNr].map((solution) => (
        <MiniPresent
          type={MiniPresentType.Language}
          id={solution}
          onClick={() => {}}
        />
      ));
    }
  };

  const renderDay = (image: string, dayNr: number) => {
    return (
      <a href={`/day/${dayNr + 1}`}>
        <div class="day-container">
          <div class="day-nr">
            {dayNr + 1}
          </div>
          <div
            class="day"
            style={`background: url(${image});background-size: contain; background-repeat: no-repeat; background-position: center;`}
          >
          </div>
          <div class="solutions">
            {renderSolutions(dayNr)}
          </div>
        </div>
      </a>
    );
  };

  return (
    <>
      <Head>
        <title>
          Annis AOC23
        </title>
        <link rel="stylesheet" href={asset("/global.css")} />
      </Head>
      <div class="container">
        <div class="title">
          <div class="main-title">
            Anni's AOC 2023
          </div>
          <a href="https://github.com/apaulheim/aoc23" target="_blank">
            <svg
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              width="30"
            >
              <path
                fill="white"
                d="m23 9v6h-1v2h-1v2h-1v1h-1v1h-1v1h-2v1h-1v-5h-1v-1h1v-1h2v-1h1v-1h1v-5h-1v-3h-2v1h-1v1h-1v-1h-4v1h-1v-1h-1v-1h-2v3h-1v5h1v1h1v1h2v2h-2v-1h-1v-1h-2v1h1v2h1v1h3v3h-1v-1h-2v-1h-1v-1h-1v-1h-1v-2h-1v-2h-1v-6h1v-2h1v-2h1v-1h1v-1h2v-1h2v-1h6v1h2v1h2v1h1v1h1v2h1v2z"
              />
            </svg>
          </a>
        </div>
        <div class="calendar">
          {imagesPng.map((image, index) => renderDay(image, index))}
        </div>
      </div>
    </>
  );
}
