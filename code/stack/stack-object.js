// 这是基于对象的栈
class Stack {
  constructor() {
    this.items = {};
    this.count = 0; // 用于记录栈内的元素
  }

  /**
   * 添加一个（或多个）元素到栈顶
   */
  push(...element) {
    element.forEach(item => {
      this.items[this.count++] = item;
    })
  }

  /**
   * 移除栈顶元素，返回移除的元素值
   */
  pop() {
    // 如果为空就返回 undefined
    if (this.isEmpty()) {
      return undefined;
    }

    let result = this.items[this.count - 1]; // 返回值
    delete this.items[this.count - 1]; // 删除该值
    this.count--; // 长度减1
    return result;
  }

  /**
   * 返回栈顶的元素（不对栈做任何修改）
   */
  peek() {
    // 如果为空就返回 undefined
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  /**
   * 判断栈是否为空，若为空则返回 true，否则返回 false
   */
  isEmpty() {
    return this.count === 0;
  }

  /**
   * 返回栈里的元素数量
   */
  size() {
    return this.count;
  }

  /**
   * 移除栈里的所有元素
   */
  clear() {
    this.items = {};
    this.count = 0;
  }

  /**
   * 打印出栈里的内容
   */
  toString() {
    if (this.count === 0) {
      return '';
    }
    let str = `${this.items[0]}`;
    for (let i = 1; i < this.count; i++) {
      str = `${str},${this.items[i]}`;
    }
    return str;
  }
}

// 测试
let stack = new Stack(); // 初始化一个栈

stack.push(1, 2, 3, 4, 5, 6, 7, 8, 9); // 往栈内添加元素
console.log('栈的内容：', stack.toString()); // 栈的内容：1,2,3,4,5,6,7,8,9

stack.pop(); // 移除栈顶元素
console.log('移除栈顶后：', stack.toString());
console.log('返回栈顶元素：', stack.peek());
console.log('栈内元素的个数：', stack.size());

console.log('清空栈元素之前，栈是不是为空：', stack.isEmpty());
stack.clear(stack.clear());
console.log('清空栈元素之前，栈是不是为空：', stack.isEmpty());