BÀI 5. TÌM KIẾM, CẬP NHẬT VÀ SẮP XẾP MONGODB
1. Giới thiệu

Bài thực hành sử dụng Node.js để tìm kiếm, cập nhật và sắp xếp dữ liệu trong MongoDB.

2. Yêu cầu bài tập
Sử dụng database qlsinhvien.
Sử dụng collection students của Bài 04.
Tìm sinh viên có điểm lớn hơn hoặc bằng 7 bằng find() và $gte.
Sắp xếp kết quả theo điểm giảm dần bằng sort().
Cập nhật điểm sinh viên theo mã sinh viên bằng updateOne() và $set.
Hiển thị lại thông tin sinh viên sau khi cập nhật.
3. Công cụ sử dụng
Node.js
MongoDB Community Server
MongoDB Compass
Visual Studio Code
Command Prompt (CMD)
4. Cấu trúc thư mục
text
Bt05/
├── bai05.js
├── package.json
├── package-lock.json
├── README.md
└── images/
    ├── buoc1.png
    ├── buoc2.png
    ├── buoc3.png
    └── buoc4.png

5. Các bước thực hiện
Bước 1: Khởi tạo dự án Node.js

Mở CMD tại thư mục Bt05 và nhập lệnh:

bash
npm init -y

Bước 2: Cài đặt thư viện MongoDB
bash
npm install mongodb

Bước 3: Tạo file bai05.js

Viết chương trình kết nối MongoDB bằng MongoClient, sử dụng database qlsinhvien và collection students.

Chương trình thực hiện:

Tìm sinh viên có điểm từ 7 trở lên bằng find() và $gte.
Sắp xếp điểm từ cao xuống thấp bằng sort().
Cập nhật điểm sinh viên có mã CDCNTT18A07 thành 9.5 bằng updateOne() và $set.
Hiển thị thông tin sinh viên sau khi cập nhật bằng findOne().
Đóng kết nối MongoDB bằng client.close().
Bước 4: Chạy chương trình

Sử dụng lệnh:

bash
node bai05.js

6. Kết quả thực hiện
Ảnh 1: Khởi tạo dự án và cài đặt thư viện

Chèn ảnh CMD sau khi thực hiện npm init -y và npm install mongodb.

!Cai dat thu vien

Ảnh 2: Nội dung mã nguồn bai05.js

Chèn ảnh mã nguồn chương trình trong Visual Studio Code.

!Ma nguon bai05

Ảnh 3: Kết quả tìm kiếm và sắp xếp

Chương trình tìm được các sinh viên có điểm từ 7 trở lên và sắp xếp theo thứ tự giảm dần:

Phạm Hoàng Hải: 9.5 điểm.
Nguyễn Thanh Danh: 8.5 điểm.

!Ket qua tim kiem

Ảnh 4: Kết quả cập nhật dữ liệu

Sinh viên có mã CDCNTT18A07 được cập nhật điểm từ 8.5 lên 9.5.

Chương trình hiển thị thông tin sau khi cập nhật thành công và đóng kết nối MongoDB.

!Ket qua cap nhat

7. Kết luận

Đã hoàn thành bài tập tìm kiếm, cập nhật và sắp xếp dữ liệu MongoDB bằng Node.js.

Qua bài thực hành đã biết cách:

Tìm kiếm dữ liệu bằng find().
Sử dụng toán tử $gte để lọc dữ liệu.
Sắp xếp dữ liệu bằng sort().
Cập nhật dữ liệu bằng updateOne() và $set.
Kiểm tra dữ liệu sau khi cập nhật.
Đóng kết nối MongoDB sau khi hoàn thành.

Kết quả: Chương trình chạy thành công, tìm kiếm và sắp xếp đúng dữ liệu, cập nhật điểm sinh viên thành công trong MongoDB.