create database BTL_HQT
go
use BTL_HQT
go
create table TaiKhoan
(
IDTaiKhoan int identity(1,1) primary key not null,
TenTaiKhoan varchar(30) unique,
MatKhau varchar(30) check(len(MatKhau)>=3)
)
create table NguoiDung(
IDNguoiDung int identity(1,1) primary key,
IDTaiKhoan int foreign key references TaiKhoan(IDTaiKhoan),
NgaySinhNhat date,
GioiTinh nvarchar(5) check( GioiTinh=N'Nam' or GioiTinh=N'Nữ'),
DiaChi nvarchar(100),
Email varchar(30) unique check(Email like '%@%'),
QueQuan nvarchar(100),
AnhDaiDien varchar(400),
TenNguoiDung nvarchar(50),
SoBanBe int check(SoBanBe>=0 and SoBanBe<= 5000) default 0
)
create table ThongBao(
IDThongBao int identity(1,1) primary key,
IDNguoiDung int foreign key references NguoiDung(IDNguoiDung),
NoiDung nvarchar(400),
ThoiGian smalldatetime default getdate()
)
create table BaiViet(
IDBaiViet int identity(1,1) primary key,
IDNguoiDung int foreign key references NguoiDung(IDNguoiDung), 
SoLuotThich int check (SoLuotThich>=0) default 0,
SoLuotChiaSe int check (SoLuotChiaSe>=0) default 0,
ThoiGianDang smalldatetime default getdate(),
NoiDung nvarchar(2500)
)

create table BinhLuan(
IDBinhLuan int identity(1,1) primary key,
IDBaiViet int foreign key references BaiViet(IDBaiViet),
IDNguoiDung int foreign key references NguoiDung(IDNguoiDung),
SoLuotThich int check (SoLuotThich>=0) default 0,
NoiDung nvarchar(1000),
ThoiGian smalldatetime default getdate()
)

create table BanBe(
IDNguoidung1 int NOT NULL foreign key references NguoiDung(IDNguoiDung),
IDNguoidung2 int NOT NULL foreign key references NguoiDung(IDNguoiDung),
LaBan bit,
PRIMARY KEY (IDNguoidung1,IDNguoidung2)
)

create table TinNhan(
IDTinNhan int identity(1,1) primary key,
IDNguoiGui  int foreign key references NguoiDung(IDNguoiDung),
IDNguoiNhan  int foreign key references NguoiDung(IDNguoiDung),
ThoiGian smalldatetime  default getdate(),
CamXuc nvarchar(20),
NoiDung nvarchar(1000)
)

insert into TaiKhoan(TenTaiKhoan, MatKhau) values('trongnguyen','123')
insert into TaiKhoan(TenTaiKhoan, MatKhau) values('vietha','vh12')
insert into TaiKhoan(TenTaiKhoan, MatKhau) values('linhdam','dam.linh')
insert into TaiKhoan(TenTaiKhoan, MatKhau) values('tranlam','lam323')
insert into TaiKhoan(TenTaiKhoan, MatKhau) values('vynguyen','vi#2')
insert into TaiKhoan(TenTaiKhoan, MatKhau) values('leona','leona232')
insert into TaiKhoan(TenTaiKhoan, MatKhau) values('tunguyen','tung')
insert into TaiKhoan(TenTaiKhoan, MatKhau) values('yenle','lemyyen')


insert into NguoiDung(IDTaiKhoan,NgaySinhNhat,GioiTinh,DiaChi,Email,QueQuan,AnhDaiDien,TenNguoiDung) 
values(1,'1999-01-01',N'Nam',N'Hà Nội','trong.nguyen@gmail.com',N'Hà Nội','https://ipos.vn/wp-content/uploads/2020/02/bartender-3.jpg',N'Trọng Nguyễn')
insert into NguoiDung(IDTaiKhoan,NgaySinhNhat,GioiTinh,DiaChi,Email,QueQuan,AnhDaiDien,TenNguoiDung) 
values(2,'1999-02-01',N'Nữ',N'Hà Nội','vietha0202@gmail.com',N'Hà Nội','https://scontent.fhan12-1.fna.fbcdn.net/v/t39.30808-1/319327648_2226685930871378_6539877343182067449_n.jpg?stp=dst-jpg_p320x320&_nc_cat=104&ccb=1-7&_nc_sid=7206a8&_nc_ohc=GPMEnQnssmIAX-5R0hu&_nc_ht=scontent.fhan12-1.fna&oh=00_AfCGEeJ3_AoHmWcLGi1QrmdSm5yxQznkLzaXK6oO4lHl3Q&oe=639B3622',N'Dương Việt Hà')
insert into NguoiDung(IDTaiKhoan,NgaySinhNhat,GioiTinh,DiaChi,Email,QueQuan,AnhDaiDien,TenNguoiDung) 
values(3,'1999-05-01',N'Nữ',N'Quận Tân Bình, TP Hồ Chí Minh','dam.linh.tran@gmail.com',N'Sài Gòn','https://www.facebook.com/photo/?fbid=531783738989420&set=pcb.531783818989412',N'Linh Đàm')
insert into NguoiDung(IDTaiKhoan,NgaySinhNhat,GioiTinh,DiaChi,Email,QueQuan,AnhDaiDien,TenNguoiDung) 
values(4,'1982-04-23',N'Nam',N'Lào Cai','lamlam@gmail.com',N'Bình Dương','https://images.pexels.com/photos/6499190/pexels-photo-6499190.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500',N'Lam Lam')
insert into NguoiDung(IDTaiKhoan,NgaySinhNhat,GioiTinh,DiaChi,Email,QueQuan,AnhDaiDien,TenNguoiDung) 
values(5,'1982-04-23',N'Nữ',N'Quận Tân Bình, TP Hồ Chí Minh','VyNg2304@gmail.com',N'Sài Gòn','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS1joh99zGGXCFp3osVz31zq5dd4ifMhyohVQ&usqp=CAU',N'Vy Nguyễn')
insert into NguoiDung(IDTaiKhoan,NgaySinhNhat,GioiTinh,DiaChi,Email,QueQuan,AnhDaiDien,TenNguoiDung) 
values(6,'2003-12-03',N'Nam',N'Lào Cai','leona@gmail.com',N'Bình Dương','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc46jtDyJqgBjM6Km-UCJ33XlOy4PBZfvPhg&usqp=CAU',N'Vỹ Thiên Ân')
insert into NguoiDung(IDTaiKhoan,NgaySinhNhat,GioiTinh,DiaChi,Email,QueQuan,AnhDaiDien,TenNguoiDung) 
values(7,'2005-06-21',N'Nam',N'Hòa Bình','tug@outlook.com',N'Hải Dương','https://image.thanhnien.vn/w1024/Uploaded/2022/aobohun/2022_09_26/hs-nghi-tet-7652.jpg',N'Tung')
insert into NguoiDung(IDTaiKhoan,NgaySinhNhat,GioiTinh,DiaChi,Email,QueQuan,AnhDaiDien,TenNguoiDung) 
values(8,'1982-04-23',N'Nữ',N'Buôm Ma Thuột','Yenle@gmail.com',N'Bình Dương','https://upload.wikimedia.org/wikipedia/commons/thumb/2/24/PANO0002-Pano.jpg/1200px-PANO0002-Pano.jpg',N'Yen Nguyen')

insert into ThongBao(IDNguoiDung,NoiDung) values(1,N'có lời mời kết bạn mới')
insert into ThongBao(IDNguoiDung,NoiDung) values(1,N'có bình luận mới')
insert into ThongBao(IDNguoiDung,NoiDung) values(1,N'có tin nhắn mới')
insert into ThongBao(IDNguoiDung,NoiDung) values(2,N'có bình luận mới')
insert into ThongBao(IDNguoiDung,NoiDung) values(2,N'có tin nhắn mới')
insert into ThongBao(IDNguoiDung,NoiDung) values(1,N'có lời mời kết bạn mới')
insert into ThongBao(IDNguoiDung,NoiDung) values(3,N'có lời mời kết bạn mới')
insert into ThongBao(IDNguoiDung,NoiDung) values(3,N'có tin nhắn mới')
insert into ThongBao(IDNguoiDung,NoiDung) values(2,N'có lời mời kết bạn mới')


insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(1,2,1)
insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(2,1,1)
insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(2,3,1)
insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(3,2,1)
insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(1,4,1)
insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(4,1,1)
insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(6,4,1)
insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(4,6,1)

insert into BaiViet(IDNguoiDung,NoiDung) values(1,N'ai đi chơi noel với tui khum')
insert into BaiViet(IDNguoiDung,NoiDung) values(2,N'sắp tết rồi đừng trượt môn để ăn tết cho ngon =))))')
insert into BaiViet(IDNguoiDung,NoiDung) values(5,N'Một cánh cửa không nguyện ý mở, nếu cứ tiếp tục gõ sẽ là bất lịch sự.')
insert into BaiViet(IDNguoiDung,NoiDung) values(5,N'=)))) lẩu đê')
insert into BaiViet(IDNguoiDung,NoiDung) values(2,N'ai mua conan k')

insert into BinhLuan(IDBaiViet, IDNguoiDung, NoiDung) values(1,2,N'Mơ')
insert into BinhLuan(IDBaiViet, IDNguoiDung, NoiDung) values(2,3,N'à thế à')
insert into BinhLuan(IDBaiViet, IDNguoiDung, NoiDung) values(1,2,N'Mà m tính lượn đâu được')
insert into BinhLuan(IDBaiViet, IDNguoiDung, NoiDung) values(1,1,N'ai biết có người đi rồi tính sau :3')
insert into BinhLuan(IDBaiViet, IDNguoiDung, NoiDung) values(2,2,N'xời quá là bình thường nuôn')
insert into BinhLuan(IDBaiViet, IDNguoiDung, NoiDung) values(2,3,N'=))) sắp bị trường đuổi tói nơi r còn mõm')

insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(2,1,Null,N'=)) ế =)))')
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(3,2,Null,N'Tết này t book vé qua m chơi nha')
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(1,2,null,N'm có k mà chọc t =)))')
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(2,3,null,N'Ôcê')
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(6,5,null,N'zô game cu')
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(5,6,null,N'từ t nốt trận đã')
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(6,3,null,N'tết này nhà m dọn j chưa')
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(2,4,null,N'hú')
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(4,6,null,N'nay ông kia có lên đá bóng k m')
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(7,6,null,N'kuynh :3')

select * from TaiKhoan
select * from ThongBao
select * from BinhLuan
select * from BaiViet
select * from NguoiDung
select * from BanBe
select * from TinNhan
/* huy*/
-- proc dem so ban
create procedure p_SoBan
@IDNguoidung int
as
begin
select count(IDNguoidung2) from BanBe where IDNguoiDung1=@IDNguoidung and LaBan=1
end
exec p_SoBan 2
-- function dem so ban
create function f_SoBan(@IDNguoidung int)
returns int
as
begin
return (select count(IDNguoidung2) from BanBe where IDNguoiDung1=@IDNguoidung and LaBan=1)
end
print dbo.f_SoBan(2)
select * from BanBe
-- func tinh so bai viet cua nguoi dung
create function f_soBaiViet(@IDNguoiDung int)
returns int
as
begin
return (select count(IDBaiViet) from BaiViet where IDNguoiDung=@IDNguoiDung)
end
print dbo.f_soBaiViet(1)

--function so binh luan
create function f_soBinhLuan(@IDBaiViet int)
returns int
as begin 
return (select count(IDBinhLuan) from BinhLuan where IDBaiViet=@IDBaiViet)
end
print dbo.f_soBinhLuan(1)
select * from BinhLuan

-- proc them ban
create proc p_themBan @IDNguoiDung1 int,@IDNguoiDung2 int
as
begin
	if(exists(select LaBan from BanBe where IDNguoidung1=@IDNguoiDung1 and IDNguoidung2=@IDNguoiDung2))
		update BanBe set LaBan=1 where IDNguoidung1=@IDNguoiDung1 and IDNguoidung2=@IDNguoiDung2
	else
		insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(@IDNguoiDung1,@IDNguoiDung2,1)	
	if(exists(select LaBan from BanBe where IDNguoidung1=@IDNguoiDung2 and IDNguoidung2=@IDNguoiDung1))
		update BanBe set LaBan=1 where IDNguoidung1=@IDNguoiDung2 and IDNguoidung2=@IDNguoiDung1
	else
		insert into BanBe(IDNguoidung1 ,IDNguoidung2, LaBan) values(@IDNguoiDung2,@IDNguoiDung1,1)	
end
exec p_themBan 1,2
exec p_themBan 2,3
select * from BanBe
select * from BanBe
-- proc xoa ban
create proc p_xoaBan @IDNguoiDung1 int,@IDNguoiDung2 int
as
begin
	delete from BanBe where IDNguoidung1=@IDNguoiDung1 and IDNguoidung2=@IDNguoiDung2	
	delete from BanBe where IDNguoidung1=@IDNguoiDung2 and IDNguoidung2=@IDNguoiDung1	
end
exec p_xoaBan 2,3
select * from BanBe
select * from NguoiDung
-- trigger xoa ban
alter trigger tr_xoaBan
on BanBe
instead of delete
as
begin
	update BanBe set LaBan=0 where IDNguoidung1=(select IDNguoidung1 from deleted) and IDNguoidung2=(select IDNguoidung2 from deleted)
	update BanBe set LaBan=0 where IDNguoidung1=(select IDNguoidung2 from deleted) and IDNguoidung2=(select IDNguoidung1 from deleted)
end
--trigger cap nhap ban be khi them xoa ban
create trigger tr_capNhapBan
on BanBe
for insert,update
as begin
	declare @ID1 int,@ID2 int;
	select @ID1=IDNguoiDung1,@ID2=IDNguoidung2 from inserted
	update NguoiDung set SoBanBe= dbo.f_SoBan(@ID1) where IDNguoiDung=(@ID1)
	update NguoiDung set SoBanBe= dbo.f_SoBan(@ID2) where IDNguoiDung=(@ID2)
end

-- view xem IDBaiViet,NoiDung,SoLuotThich,SoBinhLuan,SoLuotChiaSe,ThoiGianDang giam dan theo so luot thich
create view v_BaiViet(IDBaiViet,NoiDung,SoLuotThich,SoBinhLuan,SoLuotChiaSe,ThoiGianDang)
as
select distinct BaiViet.IDBaiViet,BaiViet.NoiDung,BaiViet.SoLuotThich,dbo.f_soBinhLuan(BaiViet.IDBaiViet),SoLuotChiaSe,ThoiGianDang 
from BaiViet
join BinhLuan on BaiViet.IDBaiViet=BaiViet.IDBaiViet
select * from v_BaiViet

-- proc tra ve con tro dua ra tat ca tin nhan cua da gui cua nguoi dung, su dung proc de in ra
create proc p_tinNhanCuaNguoiDung
@IDNguoiDung int,
@c cursor varying output
as
begin
	set @c= cursor dynamic scroll
	for select * from TinNhan where IDNguoiGui=@IDNguoiDung
	open @c
end
--call
declare @cur cursor
exec p_tinNhanCuaNguoiDung 2,@c=@cur output
fetch first from @cur
while @@FETCH_STATUS=0
fetch next from @cur
close @cur
deallocate @cur
--transacsion doc thong tin tat ca tai khoan chi doc dl chinh xac (tranh dang dung thi bi cap nhap,xoa)
begin tran
set tran isolation level read committed
select * from TaiKhoan
commit tran
-- con tro dua ra danh sach nguoi dung binh luan trong bai viet co id 1
declare cur cursor dynamic scroll
for select * from NguoiDung where IDNguoiDung in 
	(select IDNguoiDung from BinhLuan where IDBaiViet =1)
open cur
fetch first from cur
while @@FETCH_STATUS=0
fetch next from cur
close cur
deallocate cur
--trigger, transaction chỉ có thể nhắn tin nếu đã kết bạn
create trigger tr_NhanTin on TinNhan
for insert,update as
begin 
	begin transaction
	declare @IDGui int ,@IDNhan int,@laBan bit
	select @IDGui=IDNguoiGui,@IDNhan=IDNguoiNhan from inserted 
	select @laBan=Laban from BanBe where IDNguoiDung1=@IDGui and IDNguoiDung2=@IDNhan
	if(@laban=1)
		begin
			commit tran
		end
	else
		begin 
			rollback tran
			print N'k thể gửi tin nhắn nếu k phải là bạn'
		end
end
select * from TinNhan
select * from banbe
exec p_themBan 8,9
exec p_xoaBan 8,9
insert into TinNhan(IDNguoiGui,IDNguoiNhan,CamXuc,NoiDung) values(8,9,null,N'Hello')

----------------------------------------------thai-------------------------------------------------
-- function so luong tin nhan cua nguoidung (thai)
create function func_SoLuongTinNhan (@idNguoiDung int) returns int as begin
	declare @tinGui int, @tinNhan int;
	select @tinGui = count(IDTinNhan) from TinNhan join NguoiDung on TinNhan.IDNguoiGui = NguoiDung.IDNguoiDung 
	where IDNguoiDung = @idNguoiDung;
	select @tinNhan = count(IDTinNhan) from TinNhan join NguoiDung on TinNhan.IDNguoiNhan = NguoiDung.IDNguoiDung 
	where IDNguoiDung = @idNguoiDung;
	return @tinGui + @tinNhan;
end
select dbo.func_SoLuongTinNhan(1)
select * from TinNhan

-- procedure de thich bai viet moi lan goi tang so luot thich len 1 (thai)
create proc p_tangLuotThichBaiViet(@idBaiviet int,@idNguoiDung int ) as begin
	update BaiViet set SoLuotThich = SoLuotThich +1 where IDBaiViet = @idBaiviet and IDNguoiDung=@idNguoiDung;
end

select *from BaiViet
exec p_tangLuotThichBaiViet 1,1;
select * from BaiViet;

-- procedure de thich binh luan moi lan goi tang so luot thich len 1 (thai)
create proc  p_tangLuotThichBinhLuan(@idBinhLuan int, @idBaiViet int) as begin
	update BinhLuan set SoLuotThich = SoLuotThich + 1 where IDBinhLuan = @idBinhLuan and IDBaiViet = @idBaiViet;
end

select * from BinhLuan;
exec p_tangLuotThichBinhLuan 3, 1;
select * from BinhLuan;

--funtion số lượng tin nhắn của người dùng
create function func_SoLuongTinNhan (@idNguoiDung int) returns int as begin
	declare @tinGui int, @tinNhan int;
	select @tinGui = count(IDTinNhan) from TinNhan join NguoiDung on TinNhan.IDNguoiGui = NguoiDung.IDNguoiDung 
	where IDNguoiDung = @idNguoiDung;
	select @tinNhan = count(IDTinNhan) from TinNhan join NguoiDung on TinNhan.IDNguoiNhan = NguoiDung.IDNguoiDung 
	where IDNguoiDung = @idNguoiDung;
	return @tinGui + @tinNhan;
end
select dbo.func_SoLuongTinNhan(1)
select * from TinNhan

--trigger đổi mật khẩu khác với mật khẩu cũ 
create trigger trig_DoiMatKhau on TaiKhoan for update as
begin 
if((select MatKhau from deleted) =(select MatKhau from inserted))
rollback tran;
end

insert into TaiKhoan(TenTaiKhoan,MatKhau) values('Thai','123')
update TaiKhoan set MatKhau='abc' where TenTaiKhoan='Thai';
select * from TaiKhoan

--view tổng hợp số lượng người dùng theo quê quán	
create view v_QueQuan
as
select DISTINCT QueQuan,COUNT(IDNguoiDung) as SoluongNguoiDung 
from NguoiDung group by QueQuan 
select * from v_QueQuan



------------------------------------------my thanh-----------------------------------------------------
-- procedure tra ve con tro chua danh sach nguoi dung lon hon 18 tuoi
create procedure sp_DanhSachNguoiDungLonHon18Tuoi
@con_tro cursor varying output 
as
begin
	set @con_tro=cursor dynamic scroll
	for select * from NguoiDung where YEAR(GETDATE()) - YEAR(NguoiDung.NgaySinhNhat)>18
	open @con_tro
end
declare @con_tro_ND cursor
exec sp_DanhSachNguoiDungLonHon18Tuoi @con_tro=@con_tro_ND output
fetch first from @con_tro_ND
while (@@FETCH_STATUS = 0)
	Begin
		fetch next from @con_tro_ND
	End
close @con_tro_ND
deallocate @con_tro_ND

-- function so luong thong bao cua nguoi dung (my thanh)
create function f_soTB(@IDNguoiDung int)
returns int
as
begin
	declare @TB int;
	select @TB = count(IDThongBao) from NGUOIDUNG, THONGBAO 
	where NGUOIDUNG.IDNguoiDung = THONGBAO.IDNguoiDung
	and ThongBao.IDNguoiDung = @IDNguoiDung;
	return @TB;
end
select dbo.f_soTB(1)


-- trigger thêm thông báo tới người dùng khi có tin nhắn
create trigger tr_thongbaoTinnhan
on TinNhan
for insert
as
begin
	declare @id int
	select @id= IDNguoiNhan from inserted
	insert  into ThongBao(IDNguoiDung,NoiDung) values(@id, N'có tin nhắn mới');
end
 
--select * from ThongBao where IDNguoiDung=4
--select * from TinNhan where IDNguoiNhan=4

--con trỏ chứa nội dung tất cả bình luận của bài viết có số lượng thích lớn hơn 3
declare con_tro_BV cursor DYNAMIC SCROLL
for 
	select BINHLUAN.NoiDung from BAIVIET,BINHLUAN 
	where BAIVIET.IDBaiViet = BINHLUAN.IDBaiViet and BAIVIET.SoLuotThich>3
open con_tro_BV

declare @Soluotthich int, @NoiDung nvarchar(50)
FETCH FIRST from con_tro_BV into  @NoiDung
while (@@FETCH_STATUS = 0)
Begin
	print @NoiDung
	FETCH NEXT from con_tro_BV into  @NoiDung
End
Close con_tro_BV
DeAllocate con_tro_BV

--View tổng hợp show ra IDNguoiDung, TenNguoiDung, Email, SoBanBe, SoThongBao, SoBaiViet, SoTinNhan
CREATE VIEW view_nguoidung
as
	select NGUOIDUNG.IDNguoiDung,NGUOIDUNG.TenNguoiDung,NGUOIDUNG.email, NGUOIDUNG.SoBanBe,
	count(THONGBAO.IDThongBao) as SoThongBao, count(BAIVIET.IDBaiViet) as SoBaiViet, count(TINNHAN.IDTinNhan) as SoTinhan
	from NGUOIDUNG 
	left join THONGBAO on NGUOIDUNG.IDNguoiDung = THONGBAO.IDNguoiDung
	left join BAIVIET on NGUOIDUNG.IDNguoiDung = BAIVIET.IDNguoiDung
	left join TINNHAN on NGUOIDUNG.IDNguoiDung = TINNHAN.IDNguoiGui
	group by NguoiDung.IDNguoiDung,NGUOIDUNG.TenNguoiDung,NGUOIDUNG.email, NGUOIDUNG.SoBanBe

select * from view_nguoidung




-- function tra ve bang chua tat ca tin nhan,thoi gian cua 2 nguoi dung bat ki
-- function tra ve so luong tin nhan nguoi dung da gui trong hom nay

-- view gom IDNguoiGui,IDNguoiNhan, TenNguoiGui,TenNguoiNhan, NoiDungTinNhan, ThoiGianGui tin nhan

-- con tro tra ve bang chua thong bao,thoi gian thong bao cua nguoi dung

-- procedure tim kiem bai viet theo ngay tra ve bang chua NoiDung tat ca bai viet trong khoang thoi gian nao do (truyen vao 2 ngay, tra ve bang)

-- procedure chia se bai viet moi lan goi tang so luot chia se len 1


--drop table ThongBao
--drop table TinNhan
--drop table BinhLuan
--drop table BaiViet
--drop table BanBe
--drop table NguoiDung
--drop table TaiKhoan
-- proc tra ve thong tin nhung bai viet co nhieu so luot thich nhat
create procedure p_bvnhieuthichnhat
as
begin
select * from BaiViet where SoLuotThich = (select max(SoLuotThich) from BaiViet )
end
exec p_bvnhieuthichnhat