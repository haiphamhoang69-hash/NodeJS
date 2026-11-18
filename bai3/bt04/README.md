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

3. Các bước thực hiện
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

4. Hình ảnh minh chứng
Ảnh 1: kết nối MongoDB

<img width="327" height="43" alt="image" src="https://github.com/user-attachments/assets/6791e0cb-faa0-4eff-882b-fe91c8c9c83c" />


Ảnh 2: Kết quả chạy chương trình trên Terminal

<img width="456" height="451" alt="image" src="https://github.com/user-attachments/assets/117e6815-ad51-42fe-a49c-549321af4947" />


Ảnh 3: Dữ liệu trong MongoDB Compass

<img width="459" height="490" alt="image" src="https://github.com/user-attachments/assets/410e84b7-e9e0-4111-b6ef-f1a1a2868583" />


5. Kết quả

Chương trình thực hiện thành công:

Kết nối MongoDB thành công.
Thêm 3 sinh viên vào database qlsinhvien.
Hiển thị danh sách sinh viên bằng find().
Đóng kết nối MongoDB sau khi hoàn thành.

Dữ liệu được lưu trong MongoDB và có thể kiểm tra bằng MongoDB Compass.
