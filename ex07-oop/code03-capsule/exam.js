//  자바스크립트의 캡슐화 도구
// 1. function
// 2. class

// 다음 두 가지 함수는 용도가 같은 함수? ㄴ?
// 답은 ㄴ
// 함수는 용도에 따라서 두가지 방식으로 사용된다다
// function Exam(kor, eng, math) {
//   // new 를 통해서 호출이 되었다면 this 객체를 받아서 초기화를 하는 역할을 한다
//   this.kor = kor || 0;
//   this.eng = eng || 0;
//   // this.math = 0;
//   this["math"] = math || 0;
//   this.total = function () {
//     return this.kor + this.eng + this.math;
//   };
// }

// // 다음 두 가지 방식으로 호출한 함수들은 모구 객체를 전달받는다
// // 코드를 실행하고 this 값을 확인해보자
// let exam = new Exam(1, 1, 1); // 객체의 초기화를 담당하는 함수 -> 생성자 constructor
// console.log(exam.total());

// const total = () => {
//   return kor + eng + math;
// };

// const avg = () => {
//   return total() / 3;
// };

// let exam1 = new Exam(10, 20, 30);
// let exam2 = new Exam(10, 20, 30);

// console.log(exam1.total());
// console.log(exam2.total());
// console.log(exam1.total === exam2.total);

//==================================================

function Exam(kor, eng, math) {
  // new 를 통해서 호출이 되었다면 this 객체를 받아서 초기화를 하는 역할을 한다
  this.kor = kor || 0;
  this.eng = eng || 0;
  // this.math = 0;
  this["math"] = math || 0;
}
Exam.prototype.total = function () {
  return this.kor + this.eng + this.math;
};

Exam.prototype.avg = function () {
  return this.total();
};
// 다음 두 가지 방식으로 호출한 함수들은 모구 객체를 전달받는다
// 코드를 실행하고 this 값을 확인해보자
// let exam = new Exam(1, 1, 1); // 객체의 초기화를 담당하는 함수 -> 생성자 constructor
// console.log(exam.total());

let exam1 = new Exam(10, 20, 30);
let exam2 = new Exam(10, 20, 30);

console.log(exam1.total());
console.log(exam2.total());
console.log(exam1.total === exam2.total);

Array.prototype.eng = 30;
let ar1 = [];
ar1.kor = 30;
let ar2 = [];
console.log(ar1.kor, ar2.kor);
console.log(ar1.eng, ar2.eng);
