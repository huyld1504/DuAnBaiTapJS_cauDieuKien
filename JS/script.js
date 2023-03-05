console.log('hello')
//Bài 1:
document.getElementById('btn-ketQua').onclick = function () {
    //Điểm môn
    var mon1 = +document.getElementById('mon1').value;
    var mon2 = +document.getElementById('mon2').value;
    var mon3 = +document.getElementById('mon3').value;
    //Điểm ưu tiên khu vực
    var khuVuc = +document.getElementById('khuVuc').value;
    //Điểm cộng đối tương ưu tiên
    var doiTuong = +document.getElementById('doiTuong').value;
    //Điểm chuẩn
    const diemChuan = 25;
    //Tông điểm của thí sinh
    var tongDiem = mon1 + mon2 + mon3 + khuVuc + doiTuong;
    if (mon1 > 10 || mon2 > 10 || mon3 > 10) {
        document.getElementById('ket-qua-bai-1').innerHTML = '<div class="bg-warning text-white fw-bold mx-auto w-75 fs-4 text-center rounded-2 py-2">Hệ thống ghi nhận do bạn nhập sai dữ liệu. <br> Vui lòng nhập lại đúng dữ liệu!!!</div>';
    } else if (mon1 == 0 || mon2 == 0 || mon3 == 0) {
        document.getElementById('congBoDiem').innerHTML = `<p class="text-center bg-secondary text-white fs-3 d-block rounded-2 py-2 w-75 mx-auto" style="margin-bottom:-20px;">Do có dầu điểm 0 (điểm liệt) nên hệ thống sẽ không công bố điểm thi của bạn!!!</p>`;
        document.getElementById('ket-qua-bai-1').innerHTML = '<div class="bg-danger text-white fw-bold mx-auto w-75 fs-4 text-center rounded-2 py-2">Rấc tiếc bạn đã rớt kì thi này. <br> Chúc bạn may mắn vào lần thi tới :((</div>';
    } else if (tongDiem < diemChuan) {
        document.getElementById('congBoDiem').innerHTML = `<p class="text-center bg-secondary text-white fs-3 d-block rounded-2 py-2 w-75 mx-auto" style="margin-bottom:-20px;">Điểm sàn công bố: ${diemChuan} <br> Điểm thi của thí sinh: ${tongDiem}</p>`;
        document.getElementById('ket-qua-bai-1').innerHTML = '<div class="bg-danger text-white fw-bold mx-auto w-75 fs-4 text-center rounded-2 py-2">Rấc tiếc bạn đã rớt kì thi này. <br> Chúc bạn may mắn vào lần thi tới :((</div>';
    } else if (tongDiem >= diemChuan) {
        document.getElementById('congBoDiem').innerHTML = `<p class="text-center bg-secondary text-white fs-3 d-block rounded-2 py-2 w-75 mx-auto" style="margin-bottom:-20px;">Điểm sàn công bố: ${diemChuan} <br> Điểm thi của thí sinh: ${tongDiem}</p>`;
        document.getElementById('ket-qua-bai-1').innerHTML = '<div class="bg-success text-white fw-bold mx-auto w-75 fs-4 text-center rounded-2 py-2">Chúc mừng bạn đã đậu kì thi này. <br> Chúc bạn thành công trên con đường mình đã chọn <3</div>';
    }
}

//Bài 2: 
document.getElementById('btn-tinhTienDien').onclick = function () {
    var tieuThuDien = document.getElementById('tieuThuDien').value;
    var tienDien = 0;
    if (tieuThuDien <= 50) {
        tienDien = tieuThuDien * 500;
        document.getElementById('ket-qua-bai-2').innerHTML = `<div class="alert alert-success fs-4 w-75 mx-auto mt-4 text-center text-success">Tiền điện tháng này: ${Intl.NumberFormat("de-DE").format(tienDien)} ${''}VND</div>`;
    } else if (tieuThuDien > 50 && tieuThuDien <= 100) {
        tienDien = 500 * 50 + (tieuThuDien - 50) * 650;
        document.getElementById('ket-qua-bai-2').innerHTML = `<div class="alert alert-success fs-4 w-75 mx-auto mt-4 text-center text-success">Tiền điện tháng này: ${Intl.NumberFormat("de-DE").format(tienDien)} ${''}VND</div>`;
    } else if (tieuThuDien > 100 && tieuThuDien <= 150) {
        tienDien = 500 * 50 + 50 * 650 + (tieuThuDien - 100) * 850;
        document.getElementById('ket-qua-bai-2').innerHTML = `<div class="alert alert-warning fs-4 w-75 mx-auto mt-4 text-center text-warning">Tiền điện tháng này: ${Intl.NumberFormat("de-DE").format(tienDien)} ${''}VND</div>`;
    } else if (tieuThuDien > 150 && tieuThuDien <= 300) {
        tienDien = 500 * 50 + 650 * 50 + 850 * 150 + (tieuThuDien - 200) * 1100;
        document.getElementById('ket-qua-bai-2').innerHTML = `<div class="alert alert-warning fs-4 w-75 mx-auto mt-4 text-center text-warning">Tiền điện tháng này: ${Intl.NumberFormat("de-DE").format(tienDien)} ${''}VND</div>`;
    } else if (tieuThuDien > 300) {
        tienDien = 500 * 50 + 650 * 50 + 850 * 150 + 1100 * 50 + (tieuThuDien - 300) * 1300;
        document.getElementById('ket-qua-bai-2').innerHTML = `<div class="alert alert-danger fs-4 w-75 mx-auto mt-4 text-center text-danger">Tiền điện tháng này: ${Intl.NumberFormat("de-DE").format(tienDien)} ${''}VND</div>`;
    }
}
document.getElementById('btn-tinhThue').onclick = function () {
    var hoVaTen = document.getElementById('hoVaTen').value;
    var thuNhap = +document.getElementById('thuNhap').value;
    var soNguoi = document.getElementById('soNguoi').value;
    var tienThuNhap = thuNhap - 4e+6 - (soNguoi) * 1.6e+6;
    var tienDongThue = 0;
    if (tienThuNhap <= 60e+6) {
        tienDongThue = tienThuNhap * 0.05;
    } else if (tienThuNhap > 60e+6 && tienThuNhap <= 120e+6) {
        tienDongThue = tienThuNhap * 0.1;
    } else if (tienThuNhap > 120e+6 && tienThuNhap <= 210e+6) {
        tienDongThue = tienThuNhap * 0.15;
    } else if (tienThuNhap > 210e+6 && tienThuNhap <= 384e+6) {
        tienDongThue = tienThuNhap * 0.2;
    } else if (tienThuNhap > 384e+6 && tienThuNhap <= 624e+6) {
        tienDongThue = tienThuNhap * 0.25;
    } else if (tienThuNhap > 624e+6 && tienThuNhap <= 960e+6) {
        tienDongThue = tienThuNhap * 0.3;
    } else if (tienThuNhap > 960e+6) {
        tienDongThue = tienThuNhap * 0.35;
    }
    document.getElementById('ket-qua-bai-3').innerHTML = `<div class="alert alert-success fs-4 w-75 mx-auto mt-4">Họ và tên: <span class="text-uppercase fw-bolder">${hoVaTen}</span> <br> <span class="text-danger my-2 fw-bold text-uppercase">Tiền thuế phải đóng: ${Intl.NumberFormat("de-DE").format(tienDongThue)} VND</span> <br> Vui lòng đóng thuế theo quy định !!!</div>`
}

//Bài 4:
document.getElementById('hoKinhDoanh').onchange = function () {
    var doanhNghiep = document.getElementById('doanhNg').value;
    var khachHang = document.getElementById('khachHang').value;
    var hoGiaDinh = document.getElementById('hoGiaDinh').value;
    document.getElementById('hoKD').innerHTML = `<div class="row"><input  id="soKetNoi" class="bg-light fs-3 rounded-2 border-0 w-25 col-4 mx-auto mt-4" type="number" placeholder="Số kết nối"></div>`;
}

