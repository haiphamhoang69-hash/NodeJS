BÀI 3 - BÀI TẬP 03: MODULE, FILE SYSTEM VÀ CƠ SỞ DỮ LIỆU
1. Mục tiêu

Sử dụng module fs trong Node.js để:

Tạo tập tin thongtin.txt chứa họ tên và mã sinh viên.
Đọc và hiển thị nội dung tập tin lên Terminal.
Sử dụng appendFile() để ghi nối thêm tên lớp.
Đọc lại tập tin để kiểm tra nội dung sau cập nhật.
2. Nội dung chương trình

Tạo file bai03.js và sử dụng module fs:

javascript
const fs = require('fs');


Thông tin sinh viên:

Họ và tên: Phạm Hoàng Hải.
Mã sinh viên: CD-CNTT18A13.
Lớp: CD-CNTT18A.

Chương trình thực hiện:

Dùng writeFile() để tạo file và ghi thông tin sinh viên.
Dùng readFile() để đọc nội dung ban đầu.
Dùng appendFile() để ghi nối thêm tên lớp.
Dùng readFile() để đọc lại nội dung sau cập nhật.
3. Các bước thực hiện

Bước 1: Mở thư mục Bt03 bằng Visual Studio Code.

Bước 2: Tạo file bai03.js và nhập code chương trình.

Bước 3: Mở Terminal và chạy lệnh:

bash
node bai03.js


Bước 4: Kiểm tra kết quả hiển thị trên Terminal và nội dung file thongtin.txt.

4. Kết quả thực hiện

Sau khi chạy chương trình, file thongtin.txt được tạo và cập nhật thành công.

Nội dung cuối cùng:

text
Ho ten: Pham Hoang Hai
Ma sinh vien: CD-CNTT18A13
Ten lop: CD-CNTT18A


Terminal hiển thị nội dung tập tin trước và sau khi cập nhật.

5. Hình ảnh minh họa

Hình 1: Code chương trình bai03.js.

Hình 2: Kết quả chạy chương trình trên Terminal.

Hình 3: Nội dung file thongtin.txt sau khi cập nhật.

(Chèn ảnh chụp màn hình tương ứng tại đây.)

6. Kết luận

Đã hoàn thành bài tập sử dụng module fs trong Node.js, biết cách tạo, đọc và ghi nối dữ liệu vào tập tin bằng các phương thức writeFile(), readFile() và appendFile().