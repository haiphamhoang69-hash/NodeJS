BÀI 3 - BÀI TẬP 02: TẠO WEB SERVER BẰNG NODE.JS
1. Mục tiêu
Sử dụng module http trong Node.js để tạo Web Server.
Khởi tạo Web Server hoạt động tại cổng 3000.
Xử lý yêu cầu truy cập trang chủ / để hiển thị lời chào và mã sinh viên.
Xử lý yêu cầu truy cập /about để hiển thị thông tin giới thiệu bản thân.
Trả về mã trạng thái HTTP 404 khi truy cập đường dẫn không tồn tại.
2. Nội dung chương trình

Tạo file bai02.js chứa chương trình xây dựng Web Server bằng Node.js.

Sử dụng module http:

javascript
const http = require('http');


Sử dụng hàm http.createServer() để tạo máy chủ và xử lý các yêu cầu từ trình duyệt.

Các chức năng chính:

Trang chủ /:

Hiển thị lời chào.
Họ và tên: Phạm Hoàng Hải.
Mã sinh viên: CD-CNTT18A13.

Trang giới thiệu /about:

Hiển thị thông tin cá nhân gồm:

Họ và tên: Phạm Hoàng Hải.
Mã sinh viên: CD-CNTT18A13.
Lớp: CD-CNTT18A.
Ngành học: Công nghệ thông tin.

Đường dẫn không tồn tại:

Sử dụng res.writeHead(404) để trả về mã trạng thái HTTP 404 và hiển thị thông báo không tìm thấy trang.

Cuối cùng, sử dụng server.listen(3000) để khởi động Web Server tại cổng 3000.

3. Các bước thực hiện

Bước 1: Mở thư mục Bt02 bằng Visual Studio Code.

Bước 2: Tạo file bai02.js và nhập đoạn code chương trình tạo Web Server bằng module HTTP.

Bước 3: Mở Terminal trong Visual Studio Code.

Bước 4: Nhập lệnh sau để chạy chương trình:

bash
node bai02.js


Bước 5: Nhấn Enter và kiểm tra thông báo Web Server đã chạy thành công tại cổng 3000.

Bước 6: Mở trình duyệt và lần lượt truy cập các địa chỉ:

http://localhost:3000
http://localhost:3000/about
http://localhost:3000/test

Kiểm tra nội dung hiển thị và mã trạng thái HTTP tương ứng.

4. Kết quả thực hiện

Sau khi chạy chương trình, Web Server hoạt động thành công tại cổng 3000.

Kết quả kiểm tra:

Đường dẫn	Kết quả
/	Hiển thị lời chào và mã sinh viên CD-CNTT18A13
/about	Hiển thị thông tin giới thiệu bản thân
/test	Trả về HTTP 404 Not Found

Các chức năng hoạt động đúng theo yêu cầu:

Trang chủ hiển thị thông tin sinh viên Phạm Hoàng Hải.
Trang About hiển thị đầy đủ thông tin giới thiệu.
Đường dẫn không tồn tại trả về mã trạng thái HTTP 404.
5. Hình ảnh minh họa

Hình 1: Code chương trình bai02.js

Chèn ảnh chụp màn hình code chương trình trong Visual Studio Code tại đây.

Hình 2: Chạy chương trình trong Terminal

Chèn ảnh chụp màn hình Terminal sau khi thực hiện lệnh:

bash
node bai02.js


Hình 3: Kết quả trang chủ

Chèn ảnh chụp màn hình trình duyệt tại địa chỉ:

http://localhost:3000

Hình 4: Kết quả trang giới thiệu

Chèn ảnh chụp màn hình trình duyệt tại địa chỉ:

http://localhost:3000/about

Hình 5: Kết quả đường dẫn không tồn tại

Chèn ảnh chụp màn hình trình duyệt khi truy cập:

http://localhost:3000/test

6. Kết luận

Đã hoàn thành bài tập tạo Web Server bằng Node.js.

Thông qua bài thực hành, đã biết cách sử dụng module HTTP để tạo máy chủ, xử lý các yêu cầu truy cập từ trình duyệt và trả về nội dung tương ứng với từng đường dẫn.

Chương trình chạy thành công bằng lệnh node bai02.js, hiển thị đúng thông tin tại trang chủ, trang giới thiệu và trả về mã trạng thái HTTP 404 khi truy cập đường dẫn không tồn tại.
