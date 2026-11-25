
# BÀI 08 - QUẢN LÝ TẬP TIN VỚI FILE SYSTEM

## 1. Thông tin sinh viên

- Họ và tên: Phạm Hoàng Hải
- Bài thực hành: Bài 08
- Chủ đề: Module, File System và cơ sở dữ liệu
- Ngôn ngữ: JavaScript
- Môi trường thực thi: Node.js

## 2. Giới thiệu dự án

Dự án cá nhân "Nhật ký khám phá Nha Trang"
được xây dựng nhằm thực hành các thao tác
quản lý tập tin và thư mục bằng module fs
trong Node.js.

Chương trình thực hiện tạo thư mục, ghi dữ liệu,
đổi tên tập tin, đọc nội dung và xóa tập tin tạm.

## 3. Cấu trúc dự án

```text
Bt08/
├── bai08.js
├── README.md
└── images/
    ├── 01-cau-truc.png
    ├── 02-thuc-thi.png
    └── 03-ket-qua.png
```

Sau khi chạy chương trình, thư mục data
và tập tin ghichu_moi.txt sẽ được tạo tự động.

## 5. Các chức năng đã thực hiện

1. Sử dụng module fs của Node.js.
2. Tạo thư mục data.
3. Tạo tập tin ghichu.txt.
4. Ghi ít nhất 3 dòng nội dung vào tập tin.
5. Đổi tên ghichu.txt thành ghichu_moi.txt
   bằng fs.rename().
6. Đọc và hiển thị nội dung tập tin mới.
7. Tạo tập tin tam.txt.
8. Xóa tập tin tam.txt bằng fs.unlink().
9. Hiển thị thông báo kết quả từng thao tác.

## 6. Hình ảnh thực hiện

### Ảnh 1: Thực thi chương trình

![Thực thi chương trình](images/02-thuc-thi.png)

### Ảnh 2: Kết quả cuối cùng

![Kết quả chương trình](images/03-ket-qua.png)

## 7. Kết quả

Chương trình thực hiện thành công các thao tác
quản lý tập tin bằng module fs.

- Thư mục data được tạo thành công.
- Tập tin ghichu.txt được tạo và ghi nội dung.
- Tập tin được đổi tên thành ghichu_moi.txt.
- Nội dung tập tin mới được đọc và hiển thị.
- Tập tin tam.txt được tạo và xóa thành công.
