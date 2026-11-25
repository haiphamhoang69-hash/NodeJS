
# BÀI 09 - XÓA DỮ LIỆU CÓ ĐIỀU KIỆN TRONG MONGODB

## 1. Thông tin sinh viên

- Họ và tên: Phạm Hoàng Hải
- Vai trò: Sinh viên
- Bài thực hành: Bài 09
- Chủ đề: Module, File System và cơ sở dữ liệu
- Ngôn ngữ: JavaScript
- Công cụ: Node.js, MongoDB Compass

## 2. Giới thiệu dự án

Xây dựng chương trình quản lý danh sách sinh viên
bằng Node.js và MongoDB.

Chương trình thực hiện thêm dữ liệu sinh viên,
xóa một sinh viên theo mã sinh viên, xóa nhiều
sinh viên có điểm dưới 5 và hiển thị danh sách
sinh viên còn lại.

## 3. Cấu trúc dự án

```text
Bt09/
│
├── bai09.js
├── package.json
├── package-lock.json
├── README.md
└── images/
    ├── 01-mongodb.png
    ├── 02-code.png
    ├── 03-thuc-thi.png
    └── 04-ket-qua.png
```

## 4. Cấu hình cơ sở dữ liệu

- Database: QLsinhvienn
- Collection: students
- Địa chỉ kết nối: mongodb://127.0.0.1:27017

Chương trình sử dụng database và collection
đang có trên MongoDB Compass.

## 5. Cài đặt chương trình

### Bước 1: Khởi tạo dự án

```bash
npm init -y
```

### Bước 2: Cài đặt thư viện MongoDB

```bash
npm install mongodb
```

### Bước 3: Chạy chương trình

```bash
node bai09.js
```

## 6. Nội dung thực hiện

### 6.1. Thêm dữ liệu sinh viên

Chương trình thêm 5 sinh viên mẫu:

| Mã SV | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| HAI001 | Nguyen Quoc Huy | 20 | 8.5 |
| HAI002 | Nguyen Hoang Hai | 21 | 4.5 |
| HAI003 | Lai Van Sam | 20 | 7.8 |
| HAI004 | Le Hoang Anh Tien | 22 | 3.9 |
| HAI005 | Tang Duy Tan | 21 | 6.5 |

### 6.2. Xóa một sinh viên bằng deleteOne()

Sử dụng mã sinh viên HAI003 để xóa
sinh viên Lai Van Sam.

### 6.3. Xóa nhiều sinh viên bằng deleteMany()

Sử dụng điều kiện điểm dưới 5 để xóa:

- Nguyen Hoang Hai: 4.5 điểm.
- Le Hoang Anh Tien: 3.9 điểm.

### 6.4. Hiển thị danh sách còn lại

Sử dụng phương thức find() để truy vấn
và hiển thị danh sách sinh viên sau khi xóa.

## 7. Hình ảnh thực hiện

### Ảnh 1: MongoDB Compass

![MongoDB Compass](images/01-mongodb.png)

### Ảnh 2: Code chương trình

![Code bai09.js](images/02-code.png)

### Ảnh 3: Thực thi chương trình

![Thực thi](images/03-thuc-thi.png)

### Ảnh 4: Kết quả cuối cùng

![Kết quả](images/04-ket-qua.png)

## 8. Kết quả đạt được

- Số sinh viên thêm: 5.
- Số bản ghi xóa bằng deleteOne(): 1.
- Số bản ghi xóa bằng deleteMany(): 2.
- Tổng số bản ghi đã xóa: 3.
- Số sinh viên còn lại trong nhóm dữ liệu mẫu: 2.

Danh sách còn lại:

1. Nguyen Quoc Huy - 8.5 điểm.
2. Tang Duy Tan - 6.5 điểm.

## 9. Kết luận

Qua bài thực hành, em đã hiểu cách kết nối
MongoDB bằng Node.js và sử dụng các phương thức
insertMany(), deleteOne(), deleteMany() và find()
để quản lý dữ liệu sinh viên.

