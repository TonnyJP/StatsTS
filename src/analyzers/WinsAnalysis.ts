import { MatchData } from "../MatchData";
import { MatcheResult } from "../MatchResult";
import { Analyzer } from "../Summary";

export class WinsAnalysis implements Analyzer {
  constructor(public team: string) {}

  run(matches: MatchData[]): string {
    let winsCount = 0;

    for (let match of matches) {
      if (match[1] === this.team && match[5] === MatcheResult.HomeWin) {
        winsCount++;
      } else if (match[2] === this.team && match[5] === MatcheResult.AwayWin) {
        winsCount++;
      }
    }
    return `Team ${this.team} won ${winsCount} games.`;
  }
}
