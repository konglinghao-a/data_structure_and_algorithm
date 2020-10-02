/**
 * 冒泡排序
 * 输入：待排序的数组
 * 输出：从小到大排好序的数组
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 最后一个值不需要再和其它数比较
    let isComplete = true; // 定义是否结束的标志
    for (let j = 0; j < arr.length - 1 - i; j++) {
      // 比较相邻的数
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // 交换
        isComplete = false; // 设置标志
      }
    }
    // 如果没有交换相邻数，则说明全部的数都是排好序的
    if (isComplete) {
      break;
    }
  }
  return arr;
}

// 测试
let testArr = [9, 4, 6, 8, 1, 3, 2, 5];
console.log(bubbleSort(testArr));
