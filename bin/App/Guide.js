import boxen from "boxen";
import chalk from "chalk";
class Guide {
  constructor() {}
  guide = () => {
    const guideText = `
      ${chalk.magenta.bold("Guide")}:
          ${chalk.yellowBright("btl_hqt")} <command>
          commands can be:
            ${chalk.cyan("help")}: show guide 
            ${chalk.cyan("show")}: show data 
            ${chalk.cyan("add")}: insert data
            ${chalk.cyan("procedure")}: using procedure 
            ${chalk.cyan("view")}: using view 
            ${chalk.cyan("function")}: using function
            ${chalk.cyan("transaction")}: using Explicit transaction or transaction width lock already written

      `;
    const options = {
      title: "ung dung viet cho vui =)))",
      borderColor: "#85fcb2",
      borderStyle: "double",
      fullscreen: (width) => [width],
      // borderColor: "green",
      // backgroundColor: "#555555",
    };
    const userGuide = boxen(guideText, options);
    console.log(userGuide);
  };
}
export default Guide;
