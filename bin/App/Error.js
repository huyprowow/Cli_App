import chalk from "chalk";
import { mainSymbols } from "figures";

class Error {
  constructor(err) {
    this.err = err;
  }
  errorLog=()=> {
    const errLog = chalk.red(mainSymbols.cross, "<(＿　＿)>", this.err);
    console.log(errLog);
  }
}
export default Error;
