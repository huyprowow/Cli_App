import chalk from "chalk";
import dotenv from "dotenv";
import logSymbols from "log-symbols";
import logUpdate from "log-update";
import { QueryTypes, Sequelize } from "sequelize";
import { logger } from "./Log.mjs";

const frames = ["╴", "╵", "╶", "╷"];
let index = 0;

dotenv.config();
class Connect {
  #sequelize;
  constructor() {
    this.#sequelize = new Sequelize(
      process.env.DATABASE_NAME,
      process.env.USER_NAME,
      process.env.PASSWORD,
      {
        host: process.env.HOST,
        port: process.env.PORT,
        dialect: "mssql",
        logging: (msg) => logger.info(msg),
      }
    );
  }
  connecting = () => {
    try {
      const interval = setInterval(() => {
        const frame = frames[(index = ++index % frames.length)];
        logUpdate(`${frame} connecting to database...`);
      }, 80);
      this.#sequelize.authenticate();
      clearInterval(interval);
      console.log(
        `${logSymbols.success} ${chalk.green(
          "Connecting database has been established successfully."
        )}`
      );
    } catch (error) {
      console.error("Unable to connect to the database:", error);
    }
  };
  // dang ra nen tach thanh file Entity rieng nhung ma eu truy cap dc sequelize nen thoi
  //show
  getTaiKhoan = async () => {
    const taikhoan = await this.#sequelize.query("SELECT * FROM TaiKhoan", {
      type: QueryTypes.SELECT,
    });
    return taikhoan;
  };
  getNguoiDung = async () => {
    const nguoidung = await this.#sequelize.query("SELECT * FROM NguoiDung", {
      type: QueryTypes.SELECT,
    });
    return nguoidung;
  };
  getBinhLuan = async () => {
    const binhluan = await this.#sequelize.query("SELECT * FROM BinhLuan", {
      type: QueryTypes.SELECT,
    });
    return binhluan;
  };
  getBaiViet = async () => {
    const baiviet = await this.#sequelize.query("SELECT * FROM BaiViet", {
      type: QueryTypes.SELECT,
    });
    return baiviet;
  };
  getThongBao = async () => {
    const thongbao = await this.#sequelize.query("SELECT * FROM ThongBao", {
      type: QueryTypes.SELECT,
    });
    return thongbao;
  };
  getTinNhan = async () => {
    const tinnhan = await this.#sequelize.query("SELECT * FROM TinNhan", {
      type: QueryTypes.SELECT,
    });
    return tinnhan;
  };
  getBanBe = async () => {
    const banbe = await this.#sequelize.query("SELECT * FROM BanBe", {
      type: QueryTypes.SELECT,
    });
    return banbe;
  };

  //add
  addTaiKhoan = async (TenTaiKhoan, MatKhau) => {
    const [results, metadata] = await this.#sequelize.query(
      `insert into TaiKhoan(TenTaiKhoan, MatKhau) values($TenTaiKhoan,$MatKhau)`,
      {
        bind: { TenTaiKhoan, MatKhau },
        type: QueryTypes.INSERT,
      }
    );
    metadata > 0
      ? console.log(`${logSymbols.success} ${chalk.green("Them thanh cong")}`)
      : console.log(`${logSymbols.error} ${chalk.red("Them that bai")}`);
  };
  addNguoiDung = async (
    IDTaiKhoan,
    NgaySinhNhat,
    GioiTinh,
    DiaChi,
    Email,
    QueQuan,
    AnhDaiDien,
    TenNguoiDung
  ) => {
    const [results, metadata] = await this.#sequelize.query(
      `insert into NguoiDung(IDTaiKhoan, NgaySinhNhat, GioiTinh, DiaChi, Email, QueQuan, AnhDaiDien, TenNguoiDung) values($IDTaiKhoan,$NgaySinhNhat,$GioiTinh,$DiaChi,$Email,$QueQuan,$AnhDaiDien,$TenNguoiDung)`,
      {
        bind: {
          IDTaiKhoan,
          NgaySinhNhat,
          GioiTinh,
          DiaChi,
          Email,
          QueQuan,
          AnhDaiDien,
          TenNguoiDung,
        },
        type: QueryTypes.INSERT,
      }
    );
    metadata > 0
      ? console.log(`${logSymbols.success} ${chalk.green("Them thanh cong")}`)
      : console.log(`${logSymbols.error} ${chalk.red("Them that bai")}`);
  };
  addBinhLuan = async (IDBaiViet, IDNguoiDung, NoiDung) => {
    const [results, metadata] = await this.#sequelize.query(
      `insert into BinhLuan(IDBaiViet, IDNguoiDung, NoiDung) values($IDBaiViet,$IDNguoiDung,$NoiDung)`,
      {
        bind: { IDBaiViet, IDNguoiDung, NoiDung },
        type: QueryTypes.INSERT,
      }
    );
    metadata > 0
      ? console.log(`${logSymbols.success} ${chalk.green("Them thanh cong")}`)
      : console.log(`${logSymbols.error} ${chalk.red("Them that bai")}`);
  };
  addBaiViet = async (IDNguoiDung, NoiDung) => {
    const [results, metadata] = await this.#sequelize.query(
      `insert into BaiViet(IDNguoiDung, NoiDung) values($IDNguoiDung,$NoiDung)`,
      {
        bind: { IDNguoiDung, NoiDung },
        type: QueryTypes.INSERT,
      }
    );
    metadata > 0
      ? console.log(`${logSymbols.success} ${chalk.green("Them thanh cong")}`)
      : console.log(`${logSymbols.error} ${chalk.red("Them that bai")}`);
  };
  addThongBao = async (IDNguoiDung, NoiDung) => {
    const [results, metadata] = await this.#sequelize.query(
      `insert into ThongBao(IDNguoiDung, NoiDung) values($IDNguoiDung,$NoiDung)`,
      {
        bind: { IDNguoiDung, NoiDung },
        type: QueryTypes.INSERT,
      }
    );
    metadata > 0
      ? console.log(`${logSymbols.success} ${chalk.green("Them thanh cong")}`)
      : console.log(`${logSymbols.error} ${chalk.red("Them that bai")}`);
  };
  addTinNhan = async (IDNguoiGui, IDNguoiNhan, CamXuc, NoiDung) => {
    const [results, metadata] = await this.#sequelize.query(
      `insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values($IDNguoiGui,$IDNguoiNhan,$CamXuc,$NoiDung)`,
      {
        bind: {
          IDNguoiGui,
          IDNguoiNhan,
          CamXuc: CamXuc == "Không có" ? null : CamXuc,
          NoiDung,
        },
        type: QueryTypes.INSERT,
      }
    );
    metadata > 0
      ? console.log(`${logSymbols.success} ${chalk.green("Them thanh cong")}`)
      : console.log(`${logSymbols.error} ${chalk.red("Them that bai")}`);
  };
  //procedure
  getSoBan = async (id) => {
    const [results, metadata] = await this.#sequelize.query(
      `EXEC p_SoBan ${id}`
    );
    const [soban] = results;
    return soban[""];
  };
  setThemBan = async (id1, id2) => {
    const [instance, created] = await this.#sequelize.query(
      `EXEC p_themBan ${id1},${id2}`,
      {
        type: QueryTypes.UPSERT,
      }
    );
    console.log(`${logSymbols.success} ${chalk.green("Them thanh cong")}`);
  };
  setXoaBan = async (id1, id2) => {
    const results = await this.#sequelize.query(`EXEC p_xoaBan ${id1},${id2}`, {
      type: QueryTypes.DELETE,
    });
    console.log(`${logSymbols.success} ${chalk.green("Xoa thanh cong")}`);
  };
  setThichBaiViet = async (id1, id2) => {
    const [results, metadata] = await this.#sequelize.query(
      `EXEC p_tangLuotThichBaiViet ${id1},${id2}`,
      {
        type: QueryTypes.UPDATE,
      }
    );
    console.log(`${logSymbols.success} ${chalk.green("Like thanh cong")}`);
  };
  setThichBinhLuan = async (id1, id2) => {
    const [results, metadata] = await this.#sequelize.query(
      `EXEC p_tangLuotThichBinhLuan ${id1},${id2}`,
      {
        type: QueryTypes.UPDATE,
      }
    );
    console.log(`${logSymbols.success} ${chalk.green("Like thanh cong")}`);
  };
  //view
  getViewBaiViet = () => {
    const results = this.#sequelize.query(`select * from v_BaiViet`, {
      type: QueryTypes.SELECT,
    });
    return results;
  };
  getViewQueQuan = () => {
    const results = this.#sequelize.query(`select * from v_QueQuan`, {
      type: QueryTypes.SELECT,
    });
    return results;
  };
  getViewNguoiDung = () => {
    const results = this.#sequelize.query(`select * from view_nguoidung`, {
      type: QueryTypes.SELECT,
    });
    return results;
  };
  //function
  getSoBanByFunc = async (id) => {
    const results = await this.#sequelize.query(`select dbo.f_SoBan(${id})`, {
      type: QueryTypes.SELECT,
    });
    const [soban] = results;
    return soban[""];
  };
  getSoBaiVietByFunc = async (id) => {
    const results = await this.#sequelize.query(
      `select dbo.f_SoBaiViet(${id})`,
      {
        type: QueryTypes.SELECT,
      }
    );
    const [sobv] = results;
    return sobv[""];
  };
  getTrShowTaiKhoan = async () => {
    const results = await this.#sequelize.query(
      `
    begin tran
    set tran isolation level read committed
    select * from TaiKhoan
    commit tran
    `,
      {
        type: QueryTypes.SELECT,
      }
    );
    return results;
  };
  getSoLuongTinNhan = async (id) => {
    const results = await this.#sequelize.query(
      `select dbo.func_SoLuongTinNhan(${id})`,
      {
        type: QueryTypes.SELECT,
      }
    );
    const [soluong] = results;
    return soluong[""];
  };
  getSoTB = async (id) => {
    const results = await this.#sequelize.query(`select dbo.f_soTB(${id})`, {
      type: QueryTypes.SELECT,
    });
    const [soluong] = results;
    return soluong[""];
  };
}
export default Connect;
