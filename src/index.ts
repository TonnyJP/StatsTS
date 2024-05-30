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
