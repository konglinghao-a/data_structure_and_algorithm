/**
 * 快速排序
 * 输入：
 *    待排序的数组
 *    数组的最左端的数
 *    数组的最右端的数
 * 输出：从小到大排好序的数组
 */
function quickSort(arr, left, right) {
  // 如果数组的长度为 1 了，那就直接返回，这是递归的终点
  if (arr.length <= 1) {
    return arr;
  }

  // 分割数组
  let divide = partion(arr, left, right);

  // 根据分割完的情况继续进行递归
  if (left < divide - 1) {
    quickSort(arr, left, divide - 1);
  }
  if (right > divide) {
    quickSort(arr, divide, right);
  }

  return arr;
}

/**
 * 数组划分
 * 输入：
 *    待划分的数组
 *    划分的左边界
 *    划分的右边界
 * 输出：
 *    边界点；边界点左边的数小于或等于 pivot ，右边的数大于或等于 pivot 。
 */
function partion(arr, left, right) {
  // 定义指针
  let lPointer = left; // 左指针，指向最左边
  let rPointer = right; // 右指针，指向最右边

  // 定义主元 pivot，有多种定义方法，这里采用定义中值的方式
  const pivot = arr[Math.floor((left + right) / 2)];

  // 根据 pivot 来将数组的值分成两堆：大于 pivot 的一堆，小于 pivot 的一堆
  while (lPointer <= rPointer) {
    // 从左开始，遇到大于等于 pivot 的就停止
    while (arr[lPointer] < pivot) {
      lPointer++;
    }

    // 从右开始，遇到小于等于 pivot 的就停止
    while (arr[rPointer] > pivot) {
      rPointer--;
    }

    // 若 lPointer 和 rPointer 没有交错，那就交换位置
    if (lPointer <= rPointer) {
      [arr[lPointer], arr[rPointer]] = [arr[rPointer], arr[lPointer]];
      lPointer++;
      rPointer--;
    }
  }
  return lPointer;
}

// 测试
let testArr = [9, 4, 6, 8, 1, 11, 3, 2, 5];
let left = 0;
let right = testArr.length - 1;
console.log(quickSort(testArr, left, right));
