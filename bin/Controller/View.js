import inquirer from "inquirer";
import Error from "../App/Error.js";
import Connect from "../DB/connect.js";
class View {
  constructor() {
    this.questions = [
      {
        type: "list",
        name: "view",
        message: "What view you want to use?",
        choices: ["v_BaiViet", "v_NguoiDung", "v_QueQuan"],
      },
    ];
  }
  choice = async () => {
    try {
      const answers = await inquirer.prompt(this.questions);
      switch (answers.view) {
        case "v_BaiViet":
          {
            const connect = new Connect();
            const v_BaiViet = await connect.getViewBaiViet();
            console.table(v_BaiViet);
          }
          break;
        case "v_NguoiDung":
          {
            const connect = new Connect();
            const NguoiDung = await connect.getViewNguoiDung();
            console.table(NguoiDung);
          }
          break;
        case "v_QueQuan":
          {
            const connect = new Connect();
            const v_QueQuan = await connect.getViewQueQuan();
            console.table(v_QueQuan);
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
export default View;
