const a = 'Введите значение';
const b = 'Введите значение';
const c = 'Введите значение';
function Geronchik(a, b, c) {
  if (a < b + c && b < a + c && c < a + b) {
      return (a + b + c) / 2;
  } else {
      return 'Нельзя так!';
  }
}
console.log(Geronchik(4, 4, 4));