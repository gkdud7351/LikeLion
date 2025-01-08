// 다음 함수를 구현해주세요 약속
// 타입스크립트트
// interface ILens {
//   zoomIn(): void;
// }

let zoomIn = Symbol();
let kor = 30;
let colName = "eng";
let obj = {
  kor: kor,
  [colName]: 40,
  total() {
    return this.kor + this.eng;
  },
};
console.log(obj.total());
