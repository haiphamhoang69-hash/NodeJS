
const http = require('http');

const server = http.createServer((req, res) => {

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.writeHead(200);
        res.end(`
            <h1>Xin chào!</h1>
            <h2>Chào mừng đến với Website Node.js</h2>
            <p>Họ và tên: Phạm Hoàng Hải</p>
            <p>Mã sinh viên: CD-CNTT18A13</p>
        `);
    }

    else if (req.url === '/about') {
        res.writeHead(200);
        res.end(`
            <h1>GIỚI THIỆU BẢN THÂN</h1>
            <p>Họ và tên: Phạm Hoàng Hải</p>
            <p>Mã sinh viên: CD-CNTT18A13</p>
            <p>Lớp: CD-CNTT18A</p>
            <p>Ngành học: Công nghệ thông tin</p>
        `);
    }

    else {
        res.writeHead(404, {
            'Content-Type': 'text/html; charset=utf-8'
        });

        res.end(`
            <h1>404 - Không tìm thấy trang!</h1>
            <p>Đường dẫn bạn truy cập không tồn tại.</p>
        `);
    }
});

server.listen(3000, () => {
    console.log('====================================');
    console.log('Web Server đang chạy thành công!');
    console.log('Địa chỉ: http://localhost:3000');
    console.log('Trang chủ: http://localhost:3000');
    console.log('Giới thiệu: http://localhost:3000/about');
    console.log('====================================');
});
