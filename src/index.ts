import { CsvFileReader } from "./CsvFileReader";
import { MatcheResult } from "./MatchResult";

const matches = new CsvFileReader("football.csv");

let manUnitedWins = 0;
matches.read();

for (let match of matches.data) {
  if (match[1] === "Man United" && match[5] === MatcheResult.HomeWin) {
    manUnitedWins++;
  } else if (match[2] === "Man United" && match[5] === MatcheResult.AwayWin) {
    manUnitedWins++;
  }
}

console.log(`Manchester United wins ${manUnitedWins} games.`);
