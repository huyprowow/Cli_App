import chalk from "chalk";
import inquirer from "inquirer";
import Error from "../App/Error.js";
import Connect from "../DB/connect.js";
class Transaction {
  constructor() {
    this.questions = [
      {
        type: "list",
        name: "transaction",
        message: "What transaction you want to use?",
        choices: [
            "tr_ShowTaiKhoan"
        ],
      },
    ];
  }
  choice = async () => {
    try {
      const answers = await inquirer.prompt(this.questions);
      switch (answers.transaction) {
        case "tr_ShowTaiKhoan":
            {
                const connect = new Connect();
                const tr_ShowTaiKhoan = await connect.getTrShowTaiKhoan();
                console.table(tr_ShowTaiKhoan);
            }
            break;
        default: {
          const error = new Error("sai cu phap (invalid command)");
          error.errorLog();
        }
      }
    } catch (err) {
      if (err.isTtyError) {
        const error = new Error(
          `Prompt couldn't be rendered in the current environment: ${err}`
        );
        error.errorLog();
      } else {
        const error = new Error(err);
        error.errorLog();
      }
    }
  };
}
export default Transaction;
