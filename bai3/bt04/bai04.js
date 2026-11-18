
const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function main() {
    try {
        // Kết nối MongoDB
        await client.connect();
        console.log("Ket noi MongoDB thanh cong!");

        // Chọn database và collection
        const db = client.db('qlsinhvien');
        const collection = db.collection('students');

        // Xóa dữ liệu cũ
        await collection.deleteMany({});

        // Danh sách 3 sinh viên
        const sinhVien = [
            {
                masv: "CDCNTT18A07",
                hoten: "Nguyen Thanh Danh",
                tuoi: 20,
                diem: 8.5
            },
            {
                masv: "CDCNTT18A13",
                hoten: "Pham Hoang Hai",
                tuoi: 21,
                diem: 9.5
            },
            {
                masv: "CDCNTT18A27",
                hoten: "Huynh Thanh Tung",
                tuoi: 19,
                diem: 6
            }
        ];

        // Thêm 3 sinh viên bằng insertMany()
        const result = await collection.insertMany(sinhVien);
        console.log(`Da them ${result.insertedCount} sinh vien!`);

        // Hiển thị danh sách sinh viên
        console.log("\nDanh sach sinh vien:");

        const danhSach = await collection.find().toArray();

        console.log(danhSach);

    } catch (error) {
        console.error("Loi:", error);
    } finally {
        // Đóng kết nối MongoDB
        await client.close();
        console.log("\nDa dong ket noi MongoDB!");
    }
}

main();
