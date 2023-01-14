import chalk from "chalk";
import inquirer from "inquirer";
import Error from "../App/Error.js";
import Connect from "../DB/connect.js";
class Func {
  constructor() {
    this.questions = [
      {
        type: "list",
        name: "func",
        message: "What function you want to use?",
        choices: ["f_SoBan", "f_soBaiViet", "func_SoLuongTinNhan", "f_soTB","f_soBV"],
      },
    ];
  }
  choice = async () => {
    try {
      const answers = await inquirer.prompt(this.questions);
      switch (answers.func) {
        case "f_SoBan":
          {
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "id",
                message:
                  "Please enter the id of the user you want to check the number of friends",
              },
            ]);
            const connect = new Connect();
            const soban = await connect.getSoBanByFunc(answers.id);
            console.log(
              `${chalk.green("so ban cua nguoi dung co id = ")} ${chalk.cyan(
                `${answers.id}`
              )} ${chalk.green("la: ")} ${chalk.magenta(`${soban}`)}`
            );
          }
          break;
        case "f_soBaiViet":
          {
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "id",
                message:
                  "Please enter the id of the user you want to check the number of posts",
              },
            ]);
            const connect = new Connect();
            const soban = await connect.getSoBaiVietByFunc(answers.id);
            console.log(
              `${chalk.green(
                "so bai viet cua nguoi dung co id = "
              )} ${chalk.cyan(`${answers.id}`)} ${chalk.green(
                "la: "
              )} ${chalk.magenta(`${soban}`)}`
            );
          }
          break;
        case "func_SoLuongTinNhan":
          {
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "id",
                message:
                  "Please enter the id of the user you want to check the number of messages",
              },
            ]);
            const connect = new Connect();
            const sotinnhan = await connect.getSoLuongTinNhan(answers.id);
            console.log(
              `${chalk.green(
                "so tin nhan cua nguoi dung co id = "
              )} ${chalk.cyan(`${answers.id}`)} ${chalk.green(
                "la: "
              )} ${chalk.magenta(`${sotinnhan}`)}`
            );
          }
          break;
        case "f_soTB":
          {
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "id",
                message:
                  "Please enter the id of the user you want to check the number of notifications",
              },
            ]);
            const connect = new Connect();
            const sotb = await connect.getSoTB(answers.id);
            console.log(
              `${chalk.green(
                "so thong bao cua nguoi dung co id = "
              )} ${chalk.cyan(`${answers.id}`)} ${chalk.green(
                "la: "
              )} ${chalk.magenta(`${sotb}`)}`
            );
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
export default Func;
