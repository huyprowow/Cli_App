import Func from "../Controller/Func.js";
import Insert from "../Controller/Insert.js";
import Procedure from "../Controller/Procedure.js";
import Show from "../Controller/Show.js";
import Transaction from "../Controller/Transaction.js";
import View from "../Controller/View.js";
import Connect from "../DB/Connect.js";
import Error from "./Error.js";
import Guide from "./Guide.js";
const args = process.argv;
const commands = ["show", "help", "add", "procedure","view","function","transaction"];
class Main {
  constructor() {}
  start = () => {
    if (commands.indexOf(args[2]) == -1) {
      const error = new Error("sai cu phap (invalid command)");
      const guide = new Guide();
      error.errorLog();
      guide.guide();
    } else {
      if (args[2] !== "help") {
        const connect = new Connect();
        connect.connecting();
      }
      switch (args[2]) {
        case "help":
          {
            const guide = new Guide();
            guide.guide();
          }
          break;
        case "add":
          {
            const insert = new Insert();
            insert.choice();
          }
          break;
        case "show":
          {
            const show = new Show();
            show.choice();
          }
          break;
        case "procedure":
          {
            const procedure = new Procedure();
            procedure.choice();
          }
          break;
        case "view":
          {
            const view = new View();
            view.choice();
          }
          break;
        case "function":
          {
            const func = new Func();
            func.choice();
          }
          break;
        case "transaction":
          {
            const transaction = new Transaction();
            transaction.choice();
          }
          break;
        default: {
          const error = new Error("sai cu phap (invalid command)");
          const guide = new Guide();
          error.errorLog();
          guide.guide();
        }
      }
    }
  };
}
export default Main;
