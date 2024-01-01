import { asset, Head } from "$fresh/runtime.ts";
import {
  imagesPng,
  languageColors,
  languages,
  solutions,
} from "../components/Data.ts";
import { MiniPresent, MiniPresentType } from "../components/MiniPresent.tsx";

export default function Home() {
  const today = new Date();

  const randomize = () => {
    let ret = [];
    for (let i = 0; i < 25; i++) {
      ret.push(i);
    }
    ret.sort(() => (Math.random() > .5) ? 1 : -1);
    return ret;
  };

  const randomizedDays = randomize();

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
            style={`background: url(${image});background-size: contain; background-repeat: no-repeat; background-position: center; filter: grayscale(${
              (today.getFullYear() == 2023 && today.getMonth() == 11 && today.getDate() >= dayNr + 1) || today.getFullYear() > 2023
                ? "0%"
                : "95%"
            }); opacity: ${
              (today.getFullYear() == 2023 && today.getMonth() == 11 && today.getDate() >= dayNr + 1) || today.getFullYear() > 2023
                ? "1"
                : "0.2"
            }`}
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
          <div>
            <a href="https://adventofcode.com/2023" target="_blank">
              <img src="./aoc.png" />
            </a>
            <a href="https://github.com/apaulheim/aoc23code" target="_blank">
              <img src="./github.png" />
            </a>
          </div>
        </div>
        <div class="calendar">
          {randomizedDays.map((index) => renderDay(imagesPng[index], index))}
        </div>
      </div>
    </>
  );
}
