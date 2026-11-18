BÀI 7. XỬ LÝ THAM SỐ URL TRÊN WEB SERVER
1. Giới thiệu

Bài thực hành xây dựng Web Server bằng Node.js, sử dụng module http và đối tượng URL để xử lý các tham số truyền trên đường dẫn URL.

2. Yêu cầu bài tập
Tạo file bai07.js.
Sử dụng module http và đối tượng URL.
Tạo Web Server chạy tại cổng 3001.
Truy cập /hello?name=Minh hiển thị Xin chào Minh.
Truy cập /sum?a=10&b=20 hiển thị Tổng = 30.
Trả về thông báo lỗi nếu thiếu tham số hoặc giá trị không hợp lệ.

3. Các bước thực hiện
Bước 1: Khởi tạo dự án Node.js

Mở CMD tại thư mục Bt07 và nhập lệnh:

bash
npm init -y

Bước 2: Tạo file bai07.js

Sử dụng module http để tạo Web Server và đối tượng URL để đọc đường dẫn cũng như các tham số truyền vào.

Chương trình xử lý hai đường dẫn:

/hello: Nhận tham số name và hiển thị lời chào.
/sum: Nhận hai tham số a, b và tính tổng.

Ngoài ra, chương trình kiểm tra tham số bị thiếu, giá trị không hợp lệ và đường dẫn không tồn tại.

Bước 3: Khởi động Web Server

Mở CMD tại thư mục Bt07 và chạy lệnh:

bash
node bai07.js


Khi chạy thành công, Terminal hiển thị:

text
Web Server dang chay tai http://localhost:3001

Bước 4: Kiểm tra chức năng trên trình duyệt

Kiểm tra chức năng hello:

text
http://localhost:3001/hello?name=Minh


Kết quả:

text
Xin chao Minh


Kiểm tra chức năng sum:

text
http://localhost:3001/sum?a=10&b=20


Kết quả:

text
Tong = 30

4. Hình ảnh minh chứng
Ảnh 1: Khởi tạo dự án Node.js

<img width="506" height="298" alt="image" src="https://github.com/user-attachments/assets/7c112449-817c-4dc0-a9e8-b6e18715e398" />


!Khoi tao du an

Ảnh 3: Khởi động Web Server

<img width="422" height="43" alt="image" src="https://github.com/user-attachments/assets/34140009-8d58-49bd-8c97-e10a62c19974" />


!Khoi dong server

Ảnh 4: Kết quả chức năng hello và sum

Chèn ảnh trình duyệt hiển thị kết quả:

<img width="339" height="86" alt="image" src="https://github.com/user-attachments/assets/b3a1cbe5-717f-439f-bb40-cf8f3646fa98" />

Xin chào Minh.

<img width="339" height="85" alt="image" src="https://github.com/user-attachments/assets/bf75bb65-b1b0-47af-a6e3-72e3663765e1" />

Tổng = 30.

!Ket qua hello va sum

Ảnh 5: Kiểm tra thông báo lỗi

Chèn ảnh trình duyệt hiển thị thông báo khi thiếu tham số hoặc nhập giá trị không hợp lệ.

<img width="347" height="92" alt="image" src="https://github.com/user-attachments/assets/2d133549-acaa-4792-ab1c-56eb960cfd27" />

Lỗi giá trị không hợp lệ.





!Ket qua kiem tra loi

5. Kết luận

Đã hoàn thành bài tập xử lý tham số URL trên Web Server bằng Node.js.

Qua bài thực hành đã biết cách:

Sử dụng module http để tạo Web Server.
Sử dụng đối tượng URL để xử lý đường dẫn.
Lấy tham số URL bằng searchParams.get().
Kiểm tra dữ liệu đầu vào.
Tính tổng hai số được truyền qua URL.
Trả về thông báo lỗi khi dữ liệu không hợp lệ.

Kết quả: Web Server chạy thành công tại cổng 3001 và xử lý đúng các yêu cầu của bài tập.
