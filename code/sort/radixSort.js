/**
 * 基数排序
 * 输入：待排序的数组
 * 输出：从小到大排好序的数组
 */
function radixSort(arr) {
  // 找到数组中的最大值并确定其位数
  let maxValue = findMaxValue(arr);
  let maxDigit = getMaxDigit(maxValue);


  return arr;
}

/**
 * 求数组中的最大值
 * 输入：数组
 * 输出：数组中的最大值
 */
function findMaxValue(arr) {
  let maxValue = arr[0];
  for (let i = 0; i < arr.length; i++) {
    if (maxValue < arr[i]) {
      maxValue = arr[i];
    }
  }
  return maxValue;
}

/**
 * 求一个数的最大位数
 * 输入：一个正整数
 * 输出：这个数的最大位数
 */
function getMaxDigit(num) {
  let maxDigit = 0;
  while (num) {
    num = Math.floor(num / 10);
    maxDigit++;
  }
  return maxDigit;
}


// 测试
// let testArr = [456, 789, 123, 1, 32, 4, 243, 321, 42, 90, 10, 999];
// console.log(radixSort(testArr));
