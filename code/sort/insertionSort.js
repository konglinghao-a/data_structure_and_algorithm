/**
 * 插入排序
 * 输入：待排序的数组
 * 输出：从小到大排好序的数组
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let temp = i; // 记录待插入值的下标
    for (let j = i - 1; j >= 0; j--) {
      if (arr[temp] < arr[j]) { // 若待插入值较小，则换位
        [arr[temp], arr[j]] = [arr[j], arr[temp]];
        temp = j;
      } else {
        // 结束当前循环，即插入了待插入值
        break;
      }
    }
  }
  return arr;
}

// 测试
let testArr = [9, 4, 6, 8, 1, 3, 2, 5];
console.log(insertionSort(testArr));
