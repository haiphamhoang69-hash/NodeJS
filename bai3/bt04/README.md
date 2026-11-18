BÀI 4. THÊM VÀ HIỂN THỊ DỮ LIỆU MONGODB
1. Giới thiệu

Bài tập thực hành sử dụng Node.js để kết nối và thao tác với cơ sở dữ liệu MongoDB.

2. Yêu cầu
Kết nối MongoDB đang chạy trên máy tính.
Sử dụng database qlsinhvien.
Sử dụng collection students.
Thêm ít nhất 3 sinh viên bằng insertMany().
Sử dụng find() để hiển thị danh sách sinh viên.
Đóng kết nối MongoDB sau khi hoàn thành.

4. Các bước thực hiện
Bước 1: Khởi tạo dự án Node.js
bash
npm init -y

Bước 2: Cài đặt thư viện MongoDB
bash
npm install mongodb

Bước 3: Tạo file bai04.js

Viết chương trình kết nối MongoDB, thêm 3 sinh viên vào collection students bằng insertMany(), sử dụng find() để hiển thị danh sách và đóng kết nối sau khi hoàn thành.

Bước 4: Chạy chương trình
bash
node bai04.js

5. Hình ảnh minh chứng
Ảnh 1: kết nối MongoDB


Ảnh 2: Cấu trúc thư mục và mã nguồn

Chèn ảnh file bai04.js tại đây.

Ảnh 3: Kết quả chạy chương trình trên Terminal

Chèn ảnh kết quả chạy lệnh node bai04.js tại đây.

Ảnh 4: Dữ liệu trong MongoDB Compass

Chèn ảnh database qlsinhvien, collection students hiển thị 3 sinh viên tại đây.

6. Kết quả

Chương trình thực hiện thành công:

Kết nối MongoDB thành công.
Thêm 3 sinh viên vào database qlsinhvien.
Hiển thị danh sách sinh viên bằng find().
Đóng kết nối MongoDB sau khi hoàn thành.

Dữ liệu được lưu trong MongoDB và có thể kiểm tra bằng MongoDB Compass.