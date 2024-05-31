/* import { CsvFileReader } from "./CsvFileReader"; */
import { MatchReader } from "./MatchReader";
/* import { MatcheResult } from "./MatchResult"; */
import { Summary } from "./Summary";
/* import { WinsAnalysis } from "./analyzers/WinsAnalysis";
import { ConsoleReport } from "./reportTargets/ConsoleReport";
import { HtmlReport } from "./reportTargets/HtmlReport"; */

// create an object that satisfy the "DataReader" interface
//const csvFileReader = new CsvFileReader("football.csv");

//create an instance of MatchReader and pass in something satisfying the "DataReader" interface
const matchReader = MatchReader.fromCsv("football.csv"); //  new MatchReader(csvFileReader);
matchReader.load();

/* const winsAnalysis = new WinsAnalysis("Man United");
const consoleReport = new ConsoleReport(); */

const summray = Summary.winsAnalysisWithHtmlReport("Man United"); //new Summary(winsAnalysis, new HtmlReport("report.html"));

summray.buildAndPrintReport(matchReader.matches);
//Summary.winsAnalysisWithHtmlReport("Man United");

//more about Generics
class ArrayOfAnything<T> {
  constructor(public collection: T[]) {}

  get(index: number): T {
    return this.collection[index];
  }
}

const numberCollection = new ArrayOfAnything<number>([1, 2, 6, 10, 15]);
console.log(numberCollection.get(3));
const stringCollection = new ArrayOfAnything<string>(["a", "Z", "r", "s"]);
console.log(stringCollection.collection);

//---------------
function printAnything<T>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
  }
}

/* printAnything<string>(["h", "a", "l", "l", "o", " ", "mo", "tto"]);
printAnything<number>([39, 34, 12, 4, 67, 23]);
printAnything<boolean>([true, true, false, true, false, false]); */

//------------
interface Printable {
  print(): void;
}
class Car {
  print() {
    console.log("I am a car");
  }
}
class House {
  print(): void {
    console.log("I am a House");
  }
}
function printer<T extends Printable>(arr: T[]): void {
  for (let i = 0; i < arr.length; i++) {
    arr[i].print();
  }
}

printer([new Car(), new Car(), new House(), new Car(), new House()]);
