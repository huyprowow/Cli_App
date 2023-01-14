import inquirer from "inquirer";
import Error from "../App/Error.js";
import Connect from "../DB/connect.js";
class Show {
  constructor() {
    this.questions = [
      {
        type: "list",
        name: "show",
        message: "What do you want to show?",
        choices: [
          "BanBe",
          "TaiKhoan",
          "NguoiDung",
          "BinhLuan",
          "BaiViet",
          "ThongBao",
          "TinNhan",
        ],
      },
    ];
  }
  choice = async () => {
    try {
      const answers = await inquirer.prompt(this.questions);
      switch (answers.show) {
        case "TaiKhoan":
          {
            const connect = new Connect();
            const taikhoan = await connect.getTaiKhoan();
            console.table(taikhoan);
          }
          break;
        case "NguoiDung":
          {
            const connect = new Connect();
            const nguoidung = await connect.getNguoiDung();
            console.table(nguoidung.map((item) => {
              return{
                ...item,
                AnhDaiDien: item.AnhDaiDien.slice(0, 20)+"...",
              }
            }));
          }
          break;
        case "BinhLuan":
          {
            const connect = new Connect();
            const binhluan = await connect.getBinhLuan();
            console.table(binhluan);
          }
          break;
        case "BaiViet":
          {
            const connect = new Connect();
            const baiviet = await connect.getBaiViet();
            console.table(baiviet);
          }
          break;
        case "ThongBao":
          {
            const connect = new Connect();
            const thongbao = await connect.getThongBao();
            console.table(thongbao);
          }
          break;
        case "TinNhan":
          {
            const connect = new Connect();
            const tinnhan = await connect.getTinNhan();
            console.table(tinnhan);
          }
          break;
        case "BanBe":
          {
            const connect = new Connect();
            const banbe = await connect.getBanBe();
            console.table(banbe);
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
export default Show;
