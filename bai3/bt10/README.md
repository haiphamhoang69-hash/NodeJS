BÀI 10 - LIÊN KẾT HAI COLLECTION TRONG MONGODB
1. Giới thiệu dự án

Xây dựng chương trình quản lý sinh viên theo khoa bằng MongoDB và Node.js.

Chương trình tạo hai collection gồm departments và students_join, sau đó sử dụng aggregate() kết hợp $lookup để liên kết thông tin sinh viên với khoa tương ứng.

Kết quả hiển thị đầy đủ mã sinh viên, họ tên, mã khoa và tên khoa.

2. Cấu hình cơ sở dữ liệu
Database: QLsinhvienn
Collection 1: departments
Collection 2: students_join
Địa chỉ kết nối: mongodb://127.0.0.1:27017

3. Nội dung thực hiện
3.1. Tạo collection departments

Tạo hai khoa:

Mã khoa	Tên khoa
CNTT	Cong nghe thong tin
QTKD	Quan tri kinh doanh
3.2. Tạo collection students_join

Thêm bốn sinh viên mẫu:

Mã SV	Họ tên	Mã khoa
HAI001	Nguyen Quoc Huy	CNTT
HAI002	Nguyen Hoang Hai	QTKD
HAI003	Lai Van Sam	CNTT
HAI004	Le Hoang Anh Tien	QTKD
3.3. Liên kết hai collection

Sử dụng aggregate() kết hợp $lookup để liên kết:

Collection sinh viên: students_join.
Collection khoa: departments.
Trường liên kết: makhoa.
Trường lấy thông tin: tenkhoa.

Sử dụng thêm $unwind và $project để hiển thị thông tin khoa tương ứng với từng sinh viên.

4. Hình ảnh thực hiện
Ảnh 1: MongoDB Compass

!MongoDB Compass

Ảnh 2: Code bai10.js

!Code chương trình

Ảnh 3: Thực thi chương trình

!Thực thi chương trình

Ảnh 4: Kết quả liên kết hai collection

!Kết quả cuối cùng

5. Kết quả đạt được
Tạo thành công collection departments với 2 khoa.
Tạo thành công collection students_join với 4 sinh viên.
Sử dụng thành công aggregate() và $lookup.
Liên kết sinh viên với khoa thông qua trường makhoa.
Hiển thị đầy đủ mã sinh viên, họ tên, mã khoa và tên khoa tương ứng.
