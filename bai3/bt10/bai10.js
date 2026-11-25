
const { MongoClient } = require('mongodb');

const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

async function main() {
    try {
        // 1. Ket noi MongoDB
        await client.connect();
        console.log('Ket noi MongoDB thanh cong!');

        // 2. Chon database
        const db = client.db('QLsinhvienn');

        // 3. Chon hai collection
        const departments = db.collection('departments');
        const students = db.collection('students_join');

        // 4. Tao danh sach khoa
        const danhSachKhoa = [
            {
                makhoa: 'CNTT',
                tenkhoa: 'Cong nghe thong tin'
            },
            {
                makhoa: 'QTKD',
                tenkhoa: 'Quan tri kinh doanh'
            }
        ];

        // 5. Tao danh sach sinh vien
        const danhSachSinhVien = [
            {
                masv: 'HAI001',
                hoten: 'Nguyen Quoc Huy',
                makhoa: 'CNTT'
            },
            {
                masv: 'HAI002',
                hoten: 'Nguyen Hoang Hai',
                makhoa: 'QTKD'
            },
            {
                masv: 'HAI003',
                hoten: 'Lai Van Sam',
                makhoa: 'CNTT'
            },
            {
                masv: 'HAI004',
                hoten: 'Le Hoang Anh Tien',
                makhoa: 'QTKD'
            }
        ];

        // 6. Xoa du lieu mau cu neu co
        await departments.deleteMany({
            makhoa: { $in: ['CNTT', 'QTKD'] }
        });

        await students.deleteMany({
            masv: { $in: ['HAI001', 'HAI002', 'HAI003', 'HAI004'] }
        });

        // 7. Them du lieu vao collection departments
        const ketQuaKhoa = await departments.insertMany(danhSachKhoa);

        console.log('\n1. THEM DU LIEU KHOA');
        console.log('So khoa da them:', ketQuaKhoa.insertedCount);

        // 8. Them du lieu vao collection students_join
        const ketQuaSinhVien = await students.insertMany(danhSachSinhVien);

        console.log('\n2. THEM DU LIEU SINH VIEN');
        console.log('So sinh vien da them:', ketQuaSinhVien.insertedCount);

        // 9. Lien ket hai collection bang aggregate() va $lookup
        const ketQuaLienKet = await students.aggregate([
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongTinKhoa'
                }
            },
            {
                $unwind: '$thongTinKhoa'
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongTinKhoa.tenkhoa'
                }
            }
        ]).toArray();

        // 10. Hien thi danh sach sinh vien kem ten khoa
        console.log('\n3. DANH SACH SINH VIEN VA KHOA:');

        ketQuaLienKet.forEach(sv => {
            console.log(
                `Ma SV: ${sv.masv} | Ho ten: ${sv.hoten} | Ma khoa: ${sv.makhoa} | Ten khoa: ${sv.tenkhoa}`
            );
        });

        console.log('\nTong so sinh vien:', ketQuaLienKet.length);

    } catch (error) {
        console.log('Loi:', error.message);
    } finally {
        await client.close();
        console.log('\nDa dong ket noi MongoDB!');
    }
}

main();
