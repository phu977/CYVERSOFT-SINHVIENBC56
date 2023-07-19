// Input dùng chung cho tất cả yêu cẩu

var arrHoTen = [];
var arrDiem = [];

var arrTagHoTen = document.querySelectorAll("#tableSinhVien td:nth-child(3)");

for (var index = 0; index < arrTagHoTen.length; index++) {
  var hoTen = arrTagHoTen[index].innerText;
  // đưa vào mảng họ tên
  arrHoTen.push(hoTen);
}
console.log(arrHoTen);
var arrTagTongDiem = document.querySelectorAll(
  "#tableSinhVien td:nth-child(4)"
);
for (var index = 0; index < arrTagTongDiem.length; index++) {
  var diem = +arrTagTongDiem[index].innerText;
  // đưa vào mảng họ tên
  arrDiem.push(diem);
}
console.log(arrDiem);

// bài 1 tìm sinh viên có điểm cao nhất
document.querySelector("#btnSVCaoDiemNhat").onclick = function () {
  // input arrten,arrDiem
  // output vị trí indexmax
  var max = arrDiem[0];
  var indexmax = 0;
  for (var index = 0; index < arrDiem.length; index++) {
    if (arrDiem[index] > max) {
      max = arrDiem[index];
      indexmax = index;
    }
  }
  // hiện thị output ra ngoài
  document.querySelector("#svGioiNhat").innerHTML =
    arrHoTen[indexmax] + "-" + arrDiem[indexmax];
};

// bài 2 tìm số sv có điểm thấp nhất 
// document.querySelector('#btnSVThapDiemNhat').onclick = function () {
//   // input arrhoten, arrdiem 
//   // output vi tri index
//   var min = arrDiem[0];
//   var indexmin = 0;
//   for( var index = 0; index < arrDiem.length;index ++){
//     if(arrDiem[index] < min){
//       min = arrDiem[index];
//       indexmin = index;
//     }
//   }
//   // hiện thị kết quả
//   document.querySelector('#svYeuNhat').innerHTML = arrHoTen[indexmin] + '--' + arrDiem[indexmin];
// }
document.querySelector('#btnSVThapDiemNhat').onclick = function (){
  var indexMin = findMin(arrDiem);
  document.querySelector('#svYeuNhat').innerHTML = arrHoTen[indexMin] + '--' + arrDiem[indexMin];
}

// bài 3 tìm số học sinh giỏi
document.querySelector('#btnSoSVGioi').onclick = function () {
  // input arrhoten, arrdiem 
  // output số học sinh giỏi
  // var countnumber = 0;
  // for(var index = 0 ; index < arrDiem.length;index ++){
  //   if(arrDiem[index] >= 8.0){
  //     countnumber += 1;
  //   }
  // }
  // document.querySelector('#soSVGioi').innerHTML = countnumber;
  var soSvgioi = demSvGioi(arrDiem);
  document.querySelector('#soSVGioi').innerHTML = soSvgioi;
}

// bài 4 danh sách sv điểm trung bình lớn hơn 5
document.querySelector('#btnSVDiemHon5').onclick = function(){
  var soSVTB = demSvGioi(arrDiem,5);
  document.querySelector('#dsDiemHon5').innerHTML = soSVTB;
}
// bài 5 sắp xếp
document.querySelector('#btnSapXepTang').onclick = function(){
  var arrDiemtang = _.sortBy(arrDiem);
  document.querySelector("#dtbTang").innerHTML = arrDiemtang;
  // giảm dần
  // document.querySelector("#dtbTang").innerHTML = arrDiemtang.reverse();
}