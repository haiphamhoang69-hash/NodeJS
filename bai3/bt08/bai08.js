
const fs = require('fs');
const path = require('path');

// ======================================
// SINH VIEN: PHAM HOANG HAI
// BAI 08: QUAN LY TAP TIN VOI FILE SYSTEM
// DU AN: NHAT KY KHAM PHA NHA TRANG
// ======================================

// Duong dan thu muc du an ca nhan
const duongDanDuAn = __dirname;
const duongDanData = path.join(duongDanDuAn, 'data');

const fileCu = path.join(duongDanData, 'ghichu.txt');
const fileMoi = path.join(duongDanData, 'ghichu_moi.txt');
const fileTam = path.join(duongDanData, 'tam.txt');

console.log('\n====================================');
console.log('   NHAT KY CA NHAN - PHAM HOANG HAI');
console.log('====================================');
console.log('Thu muc du an:', duongDanDuAn);

// 1. Tao thu muc data
if (!fs.existsSync(duongDanData)) {
    fs.mkdirSync(duongDanData);
    console.log('\n1. Tao thu muc data thanh cong!');
} else {
    console.log('\n1. Thu muc data da ton tai!');
}

// 2. Tao va ghi file ghichu.txt
const noiDung = `NHAT KY KHAM PHA NHA TRANG
Nguoi viet: Pham Hoang Hai
Ngay 1: Toi dao bien Nha Trang va ngam hoang hon.
Ngay 2: Toi tham quan Thap Ba Ponagar va tim hieu van hoa Cham.
Ngay 3: Toi thuong thuc dac san dia phuong va luu lai ky niem dep.`;

fs.writeFile(fileCu, noiDung, 'utf8', (err) => {
    if (err) {
        console.log('Loi tao file:', err.message);
        return;
    }

    console.log('2. Tao va ghi file ghichu.txt thanh cong!');

    // 3. Doi ten file bang fs.rename()
    fs.rename(fileCu, fileMoi, (err) => {
        if (err) {
            console.log('Loi doi ten file:', err.message);
            return;
        }

        console.log('3. Doi ten file thanh ghichu_moi.txt thanh cong!');

        // 4. Doc noi dung file sau khi doi ten
        fs.readFile(fileMoi, 'utf8', (err, data) => {
            if (err) {
                console.log('Loi doc file:', err.message);
                return;
            }

            console.log('\n4. NOI DUNG FILE GHICHU_MOI.TXT:');
            console.log('--------------------------------');
            console.log(data);
            console.log('--------------------------------');
            console.log('Doc file thanh cong!');

            // 5. Tao file tam.txt
            fs.writeFile(fileTam, 'Tap tin tam cua Pham Hoang Hai.', 'utf8', (err) => {
                if (err) {
                    console.log('Loi tao file tam:', err.message);
                    return;
                }

                console.log('\n5. Tao file tam.txt thanh cong!');

                // 6. Xoa file tam.txt bang fs.unlink()
                fs.unlink(fileTam, (err) => {
                    if (err) {
                        console.log('Loi xoa file tam:', err.message);
                        return;
                    }

                    console.log('6. Xoa file tam.txt thanh cong!');

                    console.log('\n====================================');
                    console.log('Sinh vien: Pham Hoang Hai');
                    console.log('====================================');
                });
            });
        });
    });
});
