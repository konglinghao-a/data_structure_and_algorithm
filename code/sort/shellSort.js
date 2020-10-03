/**
 * 希尔排序
 * 输入：待排序的数组
 * 输出：从小到大排好序的数组
 */
function shellSort(arr) {
  // // Knuth 增量序列的方式产生 gap
  // let gap = 1;
  // while (gap < arr.length / 3) {
  //   gap = gap * 3 + 1;
  // }

  // Shell 增量序列的方式产生 gap
  let gap = Math.floor(arr.length / 2);

  while (gap >= 1) {
    for (let i = 0; i < arr.length; i++) {
      // 进行插入排序
      for (let j = i; j >= gap; j -= gap) {
        // 若待插入值较小，则换位
        if (arr[j] < arr[j - gap]) {
          [arr[j], arr[j - gap]] = [arr[j - gap], arr[j]];
        }
      }
    }
    // gap = (gap - 1) / 3; // Knuth 增量序列减小方式
    gap = Math.floor(gap / 2); // Shell 增量序列减小方式
  }
  return arr;
}

// 测试
let testArr = [9, 4, 6, 7, 1, 3, 2, 5];
console.log(shellSort(testArr));
