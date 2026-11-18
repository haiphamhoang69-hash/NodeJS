const { MongoClient } = require('mongodb');

const url = 'mongodb://127.0.0.1:27017';

const client = new MongoClient(url);

async function main() {
    try {
        await client.connect();
        console.log("Ket noi MongoDB thanh cong!");

        const db = client.db('QLsinhvienn');
        const collection = db.collection('students');

        console.log("\nDanh sach sinh vien co diem >= 7:");

        const danhSach = await collection
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        console.log(danhSach);

        const result = await collection.updateOne(
            { masv: "CDCNTT18A07" },
            { $set: { diem: 9.5 } }
        );

        if (result.matchedCount > 0) {
            console.log("\nCap nhat diem sinh vien thanh cong!");
        } else {
            console.log("\nKhong tim thay sinh vien!");
        }

        console.log("\nThong tin sinh vien sau khi cap nhat:");

        const sinhVien = await collection.findOne({
            masv: "CDCNTT18A07"
        });

        console.log(sinhVien);

    } catch (error) {
        console.error("Loi:", error);
    } finally {
        await client.close();
        console.log("\nDa dong ket noi MongoDB!");
    }
}

main();