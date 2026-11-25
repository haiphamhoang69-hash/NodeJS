
# BÀI 09 - XÓA DỮ LIỆU CÓ ĐIỀU KIỆN TRONG MONGODB
## 1. Giới thiệu dự án

Xây dựng chương trình quản lý danh sách sinh viên
bằng Node.js và MongoDB.

Chương trình thực hiện thêm dữ liệu sinh viên,
xóa một sinh viên theo mã sinh viên, xóa nhiều
sinh viên có điểm dưới 5 và hiển thị danh sách
sinh viên còn lại.
## 2. Cấu hình cơ sở dữ liệu

- Database: QLsinhvienn
- Collection: students
- Địa chỉ kết nối: mongodb://127.0.0.1:27017

Chương trình sử dụng database và collection
đang có trên MongoDB Compass.

## 3. Cài đặt chương trình

### Bước 1: Cài đặt thư viện MongoDB

```bash
npm install mongodb
```

### Bước 2: Chạy chương trình

```bash
node bai09.js
```

## 4. Nội dung thực hiện

### 4.1. Thêm dữ liệu sinh viên

Chương trình thêm 5 sinh viên mẫu:

| Mã SV | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| HAI001 | Nguyen Quoc Huy | 20 | 8.5 |
| HAI002 | Nguyen Hoang Hai | 21 | 4.5 |
| HAI003 | Lai Van Sam | 20 | 7.8 |
| HAI004 | Le Hoang Anh Tien | 22 | 3.9 |
| HAI005 | Tang Duy Tan | 21 | 6.5 |

### 4.2. Xóa một sinh viên bằng deleteOne()

Sử dụng mã sinh viên HAI003 để xóa
sinh viên Lai Van Sam.

### 4.3. Xóa nhiều sinh viên bằng deleteMany()

Sử dụng điều kiện điểm dưới 5 để xóa:

- Nguyen Hoang Hai: 4.5 điểm.
- Le Hoang Anh Tien: 3.9 điểm.

### 4.4. Hiển thị danh sách còn lại

Sử dụng phương thức find() để truy vấn
và hiển thị danh sách sinh viên sau khi xóa.

## 5. Hình ảnh thực hiện
### Ảnh 1: Lệnh chạy chương trình

<img width="327" height="25" alt="image" src="https://github.com/user-attachments/assets/eba9f13b-3342-4f92-8257-5b1ad4dd65b6" />


### Ảnh 4: Kết quả cuối cùng

<img width="618" height="559" alt="image" src="https://github.com/user-attachments/assets/0b76341e-821e-413c-8683-1195a7455419" />

## 6. Kết quả đạt được

- Số sinh viên thêm: 5.
- Số bản ghi xóa bằng deleteOne(): 1.
- Số bản ghi xóa bằng deleteMany(): 2.
- Tổng số bản ghi đã xóa: 3.
- Số sinh viên còn lại trong nhóm dữ liệu mẫu: 2.

Danh sách còn lại:

1. Nguyen Quoc Huy - 8.5 điểm.
2. Tang Duy Tan - 6.5 điểm.
