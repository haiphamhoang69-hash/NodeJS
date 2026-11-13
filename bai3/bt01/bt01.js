class SinhVien {
    constructor(ma, hoTen, tuoi, diem) {
        this.ma = ma;
        this.hoTen = hoTen;
        this.tuoi = tuoi;
        this.diem = diem;
    }
}

const danhSachSinhVien = [
    new SinhVien("SV001", "Pham Hoang Hai", 20, 8.5),
    new SinhVien("SV002", "Huynh Thanh Tung", 19, 4.5),
    new SinhVien("SV003", "Nguyen Quoc Huy", 21, 7.0),
    new SinhVien("SV004", "Nguyen Thanh Danh", 20, 3.5),
    new SinhVien("SV005", "Nguyen Anh Quan", 22, 6.5)
];

const sinhVienDat = danhSachSinhVien.filter(
    (sv) => sv.diem >= 5
);

console.log("===== DANH SACH SINH VIEN DAT YEU CAU =====");

sinhVienDat.forEach((sv) => {
    console.log("------------------------------");
    console.log("Ma sinh vien:", sv.ma);
    console.log("Ho ten:", sv.hoTen);
    console.log("Tuoi:", sv.tuoi);
    console.log("Diem:", sv.diem);
});

console.log("------------------------------");
console.log("Tong so sinh vien dat:", sinhVienDat.length);
