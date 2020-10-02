/**
 * 选择排序
 * 输入：待排序的数组
 * 输出：从小到大排好序的数组
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length - 1; i++) { // 最后一个值不再需要选择 minIndex 然后交换
    let minIndex = i; // 定义当前值的下标
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) { // 找到比当前值小的下标
        minIndex = j;
      }
    }
    // 当 minIndex 不是当前值下标的时候（也就是找到了比当前值小的数的下标）才交换
    if (minIndex !== i) {
      // 交换
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }
  return arr;
}

// 测试
let testArr = [9, 4, 6, 8, 1, 3, 2, 5];
console.log(selectionSort(testArr));
