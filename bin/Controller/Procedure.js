import chalk from "chalk";
import inquirer from "inquirer";
import Error from "../App/Error.js";
import Connect from "../DB/connect.js";

class Procedure {
  constructor() {
    this.questions = [
      {
        type: "list",
        name: "procedure",
        message: "What procedure do you want to use?",
        choices: ["p_SoBan", "p_ThemBan", "p_XoaBan","p_ThichBaiViet","p_ThichBinhLuan"],
      },
    ];
  }
  choice = async () => {
    try {
      const answers = await inquirer.prompt(this.questions);
      switch (answers.procedure) {
        case "p_SoBan":
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
            const soban = await connect.getSoBan(answers.id);
            console.log(
              `${chalk.green("so ban cua nguoi dung co id = ")} ${chalk.cyan(
                `${answers.id}`
              )} ${chalk.green("la: ")} ${chalk.magenta(`${soban}`)}`
            );
          }
          break;
        case "p_ThemBan":
          {
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "id1",
                message: "Enter ID user1: ",
              },
              {
                type: "number",
                name: "id2",
                message: "Enter ID user2: ",
              },
            ]);
            const connect = new Connect();
            await connect.setThemBan(answers.id1, answers.id2);
          }
          break;
        case "p_XoaBan":
          {
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "id1",
                message: "Enter ID user1: ",
              },
              {
                type: "number",
                name: "id2",
                message: "Enter ID user2: ",
              },
            ]);
            const connect = new Connect();
            await connect.setXoaBan(answers.id1, answers.id2);
          }
          break;
          case "p_ThichBaiViet":
            {
              const answers = await inquirer.prompt([
                {
                  type: "number",
                  name: "postID",
                  message: "Enter ID bai viet: ",
                },
                {
                  type: "number",
                  name: "userID",
                  message: "Enter ID user: ",
                },
              ]);
              const connect = new Connect();
              await connect.setThichBaiViet( answers.postID,answers.userID);
            }
            break;
            case "p_ThichBinhLuan":
              {
                const answers = await inquirer.prompt([
                  {
                    type: "number",
                    name: "postID",
                    message: "Enter ID binh luan: ",
                  },
                  {
                    type: "number",
                    name: "userID",
                    message: "Enter ID user: ",
                  },
                ]);
                const connect = new Connect();
                await connect.setThichBinhLuan( answers.postID,answers.userID);
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
export default Procedure;
