
const fs = require('fs');

// Thong tin sinh vien
const hoTen = 'Pham Hoang Hai';
const maSinhVien = 'CD-CNTT18A13';
const tenLop = 'CD-CNTT18A';

const tenFile = 'thongtin.txt';

// Buoc 1: Tao file va ghi ho ten, ma sinh vien
fs.writeFile(tenFile, 
    `Ho ten: ${hoTen}\nMa sinh vien: ${maSinhVien}\n`,
    'utf8',
    (err) => {
        if (err) throw err;

        console.log('Da tao file thongtin.txt thanh cong!');

        // Buoc 2: Doc va hien thi noi dung file
        fs.readFile(tenFile, 'utf8', (err, data) => {
            if (err) throw err;

            console.log('\nNoi dung file ban dau:');
            console.log(data);

            // Buoc 3: Ghi noi them ten lop vao cuoi file
            fs.appendFile(
                tenFile,
                `Ten lop: ${tenLop}\n`,
                'utf8',
                (err) => {
                    if (err) throw err;

                    console.log('Da ghi noi ten lop thanh cong!');

                    // Buoc 4: Doc lai file sau khi cap nhat
                    fs.readFile(tenFile, 'utf8', (err, data) => {
                        if (err) throw err;

                        console.log('\nNoi dung file sau khi cap nhat:');
                        console.log(data);
                    });
                }
            );
        });
    }
);
