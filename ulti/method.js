/**
 * 
 * @param {*} arr input là một array ví dụ [1,7,6,5]
 * @returns outpt là vị trí của giá trị nhỏ nhất trong mảng 
 */

function findMin(arr) {
  var indexMin = 0;
  var min = arr[0];
  for(var index = 0; index < arr.length; index ++){
    if(arr[index] < min){
        indexMin = index; //lưu lại vị trí min
        min = arr[index]; // lưu lại giá trị min
    }
  }
  return indexMin;
}
/**
 * 
 * @param {*} arrdiemso là một mảng chứa các giá trị [8,9,7,6,5,10]
 * @param {*} diemgioi mặc định là 8 nếu không truyền hoặc là giá trị mình tự truyền vào 
 * @returns output số lượng giá trị >= 8 ví dụ 3
 *  
 * 
 */
function demSvGioi(arrdiemso,diemgioi = 8){
    // output so luoung
    var count = 0;
    for(var index = 0; index < arrdiemso.length;index++){
        if(arrdiemso[index] >= diemgioi){
            count += 1;
        }
    }
    return count;
}

