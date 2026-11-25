
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        // 1. Ket noi MongoDB
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        // 2. Su dung database va collection cua Hai
        const db = client.db('QLsinhvienn');
        const students = db.collection('students');

        // 3. Danh sach 5 sinh vien mau
       const danhSachSinhVien = [
    { masv: 'HAI001', hoten: 'Nguyen Quoc Huy', tuoi: 20, diem: 8.5 },
    { masv: 'HAI002', hoten: 'Nguyen Hoang Hai', tuoi: 21, diem: 4.5 },
    { masv: 'HAI003', hoten: 'Lai Van Sam', tuoi: 20, diem: 7.8 },
    { masv: 'HAI004', hoten: 'Le Hoang Anh Tien', tuoi: 22, diem: 3.9 },
    { masv: 'HAI005', hoten: 'Tang Duy Tan', tuoi: 21, diem: 6.5 }
];

        // 4. Xoa du lieu mau cu neu da ton tai
        const danhSachMaSV = danhSachSinhVien.map(sv => sv.masv);

        await students.deleteMany({
            masv: { $in: danhSachMaSV }
        });

        // 5. Them 5 sinh vien
        const ketQuaThem = await students.insertMany(danhSachSinhVien);

        console.log('\n1. THEM SINH VIEN');
        console.log('So sinh vien da them:', ketQuaThem.insertedCount);

        // 6. Hien thi danh sach ban dau
        console.log('\nDANH SACH SINH VIEN BAN DAU:');

        const danhSachBanDau = await students.find().toArray();

        danhSachBanDau.forEach(sv => {
            console.log(
                `Ma SV: ${sv.masv} | Ho ten: ${sv.hoten} | Tuoi: ${sv.tuoi} | Diem: ${sv.diem}`
            );
        });

        // 7. Xoa mot sinh vien theo ma bang deleteOne()
        const ketQuaXoaMot = await students.deleteOne({
            masv: 'HAI003'
        });

        console.log('\n2. XOA MOT SINH VIEN BANG deleteOne()');
        console.log('Ma sinh vien: HAI003');
        console.log('So ban ghi da xoa:', ketQuaXoaMot.deletedCount);

        // 8. Xoa sinh vien co diem duoi 5 bang deleteMany()
        const ketQuaXoaNhieu = await students.deleteMany({
            masv: { $in: danhSachMaSV },
            diem: { $lt: 5 }
        });

        console.log('\n3. XOA SINH VIEN CO DIEM DUOI 5 BANG deleteMany()');
        console.log('So ban ghi da xoa:', ketQuaXoaNhieu.deletedCount);

        // 9. Tong so ban ghi da xoa
        const tongSoDaXoa =
            ketQuaXoaMot.deletedCount + ketQuaXoaNhieu.deletedCount;

        console.log('\n4. TONG SO BAN GHI DA XOA:', tongSoDaXoa);

        // 10. Hien thi danh sach con lai bang find()
        console.log('\n5. DANH SACH SINH VIEN CON LAI:');

        const danhSachConLai = await students.find().toArray();

        danhSachConLai.forEach(sv => {
            console.log(
                `Ma SV: ${sv.masv} | Ho ten: ${sv.hoten} | Tuoi: ${sv.tuoi} | Diem: ${sv.diem}`
            );
        });

        console.log('\nSo sinh vien con lai:', danhSachConLai.length);

    } catch (error) {
        console.log('Loi:', error.message);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
