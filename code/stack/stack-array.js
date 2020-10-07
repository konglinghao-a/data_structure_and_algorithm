// 这是基于数组的栈
class Stack {
  constructor() {
    this.items = [];
  }

  /**
   * 添加一个（或多个）元素到栈顶
   */
  push(...element) {
    this.items.push(...element);
  }

  /**
   * 移除栈顶元素，返回移除的元素值
   */
  pop() {
    return this.items.pop();
  }

  /**
   * 返回栈顶的元素（不对栈做任何修改）
   */
  peek() {
    return this.items[this.items.length - 1];
  }

  /**
   * 判断栈是否为空，若为空则返回 true，否则返回 false
   */
  isEmpty() {
    return this.items.length === 0;
  }

  /**
   * 返回栈里的元素数量
   */
  size() {
    return this.items.length;
  }


  /**
   * 移除栈里的所有元素
   */
  clear() {
    this.items = [];
  }

  /**
   * 打印出栈里的内容
   */
  toString() {
    return this.items.toString();
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