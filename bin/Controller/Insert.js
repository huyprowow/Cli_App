import inquirer from "inquirer";
import Error from "../App/Error.js";
import Connect from "../DB/connect.js";
class Insert {
  constructor() {
    this.questions = [
      {
        type: "list",
        name: "insert",
        message: "What do you want to add ?",
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
      switch (answers.insert) {
        case "TaiKhoan":
          {
            const answers = await inquirer.prompt([
              {
                type: "input",
                name: "TenTaiKhoan",
                message: "TenTaiKhoan: ",
              },
              {
                type: "input",
                name: "MatKhau",
                message: "MatKhau: ",
              },
            ]);
            const connect = new Connect();
            connect.addTaiKhoan(answers.TenTaiKhoan, answers.MatKhau);
          }
          break;
        case "NguoiDung":
          {
            const connect = new Connect();
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "IDTaiKhoan",
                message: "IDTaiKhoan: ",
              },
              {
                type: "input",
                name: "NgaySinhNhat",
                message: "NgaySinhNhat: ",
              },
              {
                type: "list",
                name: "GioiTinh",
                message: "GioiTinh: ",
                choices: ["Nam", "Nữ"],
              },
              {
                type: "input",
                name: "DiaChi",
                message: "DiaChi: ",
              },
              {
                type: "input",
                name: "Email",
                message: "Email: ",
              },
              {
                type: "input",
                name: "QueQuan",
                message: "QueQuan: ",
              },
              {
                type: "input",
                name: "AnhDaiDien",
                message: "AnhDaiDien: ",
              },
              {
                type: "input",
                name: "TenNguoiDung",
                message: "TenNguoiDung: ",
              },
            ]);
            connect.addNguoiDung(
              answers.IDTaiKhoan,
              answers.NgaySinhNhat,
              answers.GioiTinh,
              answers.DiaChi,
              answers.Email,
              answers.QueQuan,
              answers.AnhDaiDien,
              answers.TenNguoiDung
            );
          }
          break;
        case "BinhLuan":
          {
            const connect = new Connect();
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "IDBaiViet",
                message: "IDBaiViet: ",
              },
              {
                type: "number",
                name: "IDNguoiDung",
                message: "IDNguoiDung: ",
              },
              {
                type: "input",
                name: "NoiDung",
                message: "NoiDung: ",
              },
            ]);
            await connect.addBinhLuan(
              answers.IDBaiViet,
              answers.IDNguoiDung,
              answers.NoiDung
            );
          }
          break;
        case "BaiViet":
          {
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "IDNguoiDung",
                message: "IDNguoiDung: ",
              },
              {
                type: "input",
                name: "NoiDung",
                message: "NoiDung: ",
              },
            ]);
            const connect = new Connect();
            await connect.addBaiViet(answers.IDNguoiDung, answers.NoiDung);
          }
          break;
        case "ThongBao":
          {
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "IDNguoiDung",
                message: "IDNguoiDung: ",
              },
              {
                type: "list",
                name: "NoiDung",
                message: "NoiDung: ",
                choices: [
                  "có lời mời kết bạn mới",
                  "đã chấp nhận lời mời kết bạn",
                  "bài viêt có bình luận mới",
                  "có tin nhắn mới",
                  "đã chia sẻ bài viết",
                  "tin nhắn được thả cảm xúc mới",
                  "bài viết của bạn được thích",
                  "bình luận của bạn được thích",
                  "bài viết của bạn được chia sẻ",
                  ":v mệt quá tự nghĩ đi :v",
                ],
              },
            ]);
            const connect = new Connect();
            await connect.addThongBao(answers.IDNguoiDung, answers.NoiDung);
          }
          break;
        case "TinNhan":
          {
            const answers = await inquirer.prompt([
              {
                type: "number",
                name: "IDNguoiGui",
                message: "IDNguoiGui: ",
              },
              {
                type: "number",
                name: "IDNguoiNhan",
                message: "IDNguoiNhan: ",
              },
              {
                type: "list",
                name: "CamXuc",
                message: "CamXuc: ",
                choices: [
                  "thích (ﾉ*ФωФ)ﾉ",
                  "yêu (❤ ω ❤)",
                  "cười ヾ(≧▽≦*)o",
                  "ngạc nhiên (⊙_⊙)？",
                  "buồn (〒▽〒)",
                  "cáu ผ(•̀_•́ผ)",
                  "Không có",
                ],
              },
              {
                type: "input",
                name: "NoiDung",
                message: "NoiDung: ",
              },
            ]);
            const connect = new Connect();
            await connect.addTinNhan(
              answers.IDNguoiGui,
              answers.IDNguoiNhan,
              answers.CamXuc,
              answers.NoiDung
            );
          }
          break;
        case "BanBe":
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
export default Insert;
