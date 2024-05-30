import { MatcheResult } from "./MatchResult";
import { MatchData } from "./MatchData";
import { dateStringToDate } from "./utils";
import { CsvFileReader } from "./CsvFileReader";

interface DataReader {
  read(): void;
  data: string[][];
}

export class MatchReader {
  matches: MatchData[] = [];
  static fromCsv(name: string): MatchReader {
    return new MatchReader(new CsvFileReader(name));
  }

  constructor(public reader: DataReader) {}

  load(): void {
    this.reader.read();
    this.matches = this.reader.data.map((row: string[]): any => {
      return [
        dateStringToDate(row[0]),
        row[1],
        row[2],
        parseInt(row[3]),
        parseInt(row[4]),
        row[5] as MatcheResult,
        row[6],
      ];
    });
  }
}
