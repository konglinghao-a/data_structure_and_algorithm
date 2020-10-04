/**
 * 计数排序，没有优化空间
 * 输入：待排序的数组
 * 输出：从小到大排好序的数组
 */
function countingSort1(arr) {
  /**
   * 找到数组中的最大值，
   * 创建相应长度的计数数组（js 是动态的，这一步不要也行）
   */
  let maxValue = findMaxValue(arr);
  let counts = new Array(maxValue + 1); // 创建计数数组
  // let counts = [];

  // 生成计数数组
  for (let i = 0; i < arr.length; i++) {
    let index = arr[i]; // 原数组的值当作计数数组的下标
    if (!counts[index]) {
      counts[index] = 0; // 如果计数值不存在，则先初始化为 0
    }
    // 计数
    counts[index]++;
  }

  // 从计数数组还原出排好序的数组。
  let sortedIndex = 0;
  for (let i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      arr[sortedIndex++] = i;
      counts[i]--;
    }
  }
  return arr;
}

/**
 * 计数排序，优化了空间
 * 输入：待排序的数组
 * 输出：从小到大排好序的数组
 */
function countingSort2(arr) {
  /**
   * 找到数组中的最大值和最小值。
   * 通过最大值和最小值可以确定数组的长度并创建计数数组（js 是动态的，这一步不要也行）
   */
  let maxValue = findMaxValue(arr);
  let minValue = findMinValue(arr);
  let counts = new Array(maxValue - minValue + 1); // 创建计数数组
  // let counts = [];

  // 生成计数数组
  for (let i = 0; i < arr.length; i++) {
    // 关联关系为：index + minValue = value
    let index = arr[i] - minValue;
    if (!counts[index]) {
      counts[index] = 0;
    }
    counts[index]++;
  }

  // 从计数数组中恢复出排好序的数组
  let sortedIndex = 0;
  for (let i = 0; i < counts.length; i++) {
    while (counts[i] > 0) {
      arr[sortedIndex++] = i + minValue; // 关联关系为：index + minValue = value
      counts[i]--;
    }
  }
  return arr;
}

/**
 * 找到数组中的最大值
 * 输入：数组
 * 输出：数组中的最大值
 */
function findMaxValue(arr) {
  let max = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (max < arr[i]) {
      max = arr[i];
    }
  }
  return max;
}

/**
 * 找到数组中的最小值
 * 输入：数组
 * 输出：数组中的最大值
 */
function findMinValue(arr) {
  let min = arr[0];
  for (let i = 1; i < arr.length; i++) {
    if (min > arr[i]) {
      min = arr[i];
    }
  }
  return min;
}

// 测试
let testArr = [9, 4, 6, 7, 1, 3, 2, 5];
console.log(countingSort1(testArr));
let testArr2 = [1, -2, -3, 1, 0, 0, 0, 2, 2, 2, 2, 4, 1, 1, 3, 3, 3, 5, 5, 4];
console.log(countingSort2(testArr2));
