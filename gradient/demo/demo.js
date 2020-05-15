// 使用示例
import Gradient from '../Gradient';

const gradient = new Gradient(
  [
    '#fff7e6',
    '#ffe7ba',
    '#ffd591',
    '#ffc069',
    '#ff9c6e',
    '#ff9c6e',
    '#ff7a45',
    '#ff4d4f',
    '#f5222d',
  ],
  100
);

console.log(gradient.getColor(12)); // rgba(255, 232, 189, 1)
console.log(gradient.getColor(22)); // rgba(255, 218, 156, 1)
console.log(gradient.getColors()); // Array(100)
