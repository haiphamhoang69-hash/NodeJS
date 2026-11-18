const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

const sinhVien = [
    {
        hoTen: "Pham Hoang Hai",
        toan: 9,
        van: 8,
        anh: 9
    },
    {
        hoTen: "Nguyen Thanh Danh",
        toan: 7,
        van: 6,
        anh: 8
    },
    {
        hoTen: "Huynh Thanh Tung",
        toan: 4,
        van: 5,
        anh: 4
    }
];

console.log("===== KET QUA HOC TAP =====");

sinhVien.forEach((sv, index) => {
    const diemTB = tinhDiemTrungBinh(
        sv.toan,
        sv.van,
        sv.anh
    );

    const loai = xepLoai(diemTB);

    console.log(`\nSinh vien ${index + 1}:`);
    console.log(`Ho ten: ${sv.hoTen}`);
    console.log(`Diem trung binh: ${diemTB.toFixed(2)}`);
    console.log(`Xep loai: ${loai}`);
});
