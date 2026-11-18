BÀI 6. XÂY DỰNG MODULE TÍNH KẾT QUẢ HỌC TẬP
1. Giới thiệu

Bài thực hành xây dựng module trong Node.js để tính điểm trung bình và xếp loại học tập cho sinh viên.

2. Yêu cầu bài tập
Tạo hai tập tin bai06.js và xulyDiem.js.
Trong xulyDiem.js, xây dựng hàm tính điểm trung bình của 3 môn học.
Xây dựng hàm xếp loại học tập:
Giỏi: Điểm trung bình từ 8 trở lên.
Khá: Điểm trung bình từ 6.5 đến dưới 8.
Trung bình: Điểm trung bình từ 5 đến dưới 6.5.
Yếu: Điểm trung bình dưới 5.
Sử dụng module.exports để xuất các hàm.
Sử dụng require() trong file bai06.js để gọi các hàm.
Tạo dữ liệu 3 sinh viên và hiển thị họ tên, điểm trung bình, xếp loại trên Terminal.
3. Công cụ sử dụng
Node.js
Visual Studio Code
Command Prompt (CMD)
4. Các bước thực hiện
Bước 1: Tạo thư mục Bt06

Tạo thư mục Bt06 trong đường dẫn:

text
C:\CD-CNTT18A\bai3\bt06

Bước 2: Tạo file xulyDiem.js

Xây dựng các hàm:

Tính điểm trung bình của 3 môn học.
Xếp loại học tập theo điểm trung bình.
Xuất các hàm bằng module.exports.
Bước 3: Tạo file bai06.js

Sử dụng require() để gọi các hàm từ file xulyDiem.js.

Tạo dữ liệu gồm 3 sinh viên và hiển thị họ tên, điểm trung bình và xếp loại học tập.

Bước 4: Chạy chương trình

Mở CMD tại thư mục Bt06 và nhập lệnh:

bash
node bai06.js

5. Kết quả thực hiện
Ảnh 1: Lệnh Chạy

<img width="360" height="31" alt="image" src="https://github.com/user-attachments/assets/a7975e36-3b42-46eb-8093-e15bec92df81" />


Ảnh 2: Kết quả chạy chương trình




Kết quả hiển thị trên Terminal:

text
===== KET QUA HOC TAP =====

Sinh vien 1:
Ho ten: Pham Hoang Hai
Diem trung binh: 8.67
Xep loai: Giỏi

Sinh vien 2:
Ho ten: Nguyen Thanh Danh
Diem trung binh: 7.00
Xep loai: Khá

Sinh vien 3:
Ho ten: Huynh Thanh Tung
Diem trung binh: 4.33
Xep loai: Yếu


!Ket qua chay chuong trinh

6. Kết luận

Đã hoàn thành bài tập xây dựng Module tính kết quả học tập bằng Node.js.

Qua bài thực hành đã biết cách:

Tạo và sử dụng module trong Node.js.
Sử dụng module.exports để xuất hàm.
Sử dụng require() để gọi module.
Tính điểm trung bình của 3 môn học.
Xếp loại học tập dựa trên điểm trung bình.
Hiển thị kết quả học tập của sinh viên trên Terminal.

Kết quả: Chương trình chạy thành công, tính điểm trung bình và xếp loại học tập cho 3 sinh viên chính xác.
