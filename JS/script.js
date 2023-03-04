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
        document.getElementById('congBoDiem').innerHTML = `<p class="text-center bg-secondary text-white fs-3 d-block rounded-2 py-2 w-75 mx-auto" style="margin-bottom:-20px;">Điểm sàn công bố: ${diemChuan} <br> Điểm thi của thí sinh: ${tongDiem}</p>`;
        document.getElementById('ket-qua-bai-1').innerHTML = '<div class="bg-danger text-white fw-bold mx-auto w-75 fs-4 text-center rounded-2 py-2">Rấc tiếc bạn đã rớt kì thi này. <br> Chúc bạn may mắn vào lần thi tới :((</div>';
    } else if (tongDiem < diemChuan) {
        document.getElementById('congBoDiem').innerHTML = `<p class="text-center bg-secondary text-white fs-3 d-block rounded-2 py-2 w-75 mx-auto" style="margin-bottom:-20px;">Điểm sàn công bố: ${diemChuan} <br> Điểm thi của thí sinh: ${tongDiem}</p>`;
        document.getElementById('ket-qua-bai-1').innerHTML = '<div class="bg-danger text-white fw-bold mx-auto w-75 fs-4 text-center rounded-2 py-2">Rấc tiếc bạn đã rớt kì thi này. <br> Chúc bạn may mắn vào lần thi tới :((</div>';
    } else if (tongDiem >= diemChuan) {
        document.getElementById('congBoDiem').innerHTML = `<p class="text-center bg-secondary text-white fs-3 d-block rounded-2 py-2 w-75 mx-auto" style="margin-bottom:-20px;">Điểm sàn công bố: ${diemChuan} <br> Điểm thi của thí sinh: ${tongDiem}</p>`;
        document.getElementById('ket-qua-bai-1').innerHTML = '<div class="bg-success text-white fw-bold mx-auto w-75 fs-4 text-center rounded-2 py-2">Chúc mừng bạn đã đậu kì thi này. <br> Chúc bạn thành công trên con đường mình đã chọn <3</div>';
    }
}
