/*
현재 이 코드는 exam 데이터들을 관리하는 서비스를 제공하는데,
하지만 exam이 제공하는 서비스는 아직 분리하지 않은 상태이므로로
exam 데이터를 직접 다루는 코드를 추가해보기로 하자.

*/
export default class ExamService {
  #exams = [];

  constructor() {
    // this.exams = [];
  }
  add(exam) {
    this.#exams.push(exam);
  }
  getList(page = 1, size = 3) {
    let exams = this.#exams.sort((a, b) => b.total() - a.total()).slice(0, 3);
    return exams;
  }
  size() {
    return this.#exams.length;
  }
}
// let exams = [];

// export const add = (exam) => {
//   exams.push(exam);
// };

// export const getList = (page = 1, size = 3) => {
//   let exams1 = exams.sort((a, b) => b.kor - a.kor).slice(0, 3);
//   return exams1;
// };

// export const size = () => exams.length;
//
// 위의 코드를 이용해서 ExamService 캡슐 작성
// ExamService으ㅢ 서비스 함수는 add,getList,size 3개
// 내부적으로 사용하는 속성은 Exam 객체를 담을 수 있는 배열
// 배열 명은 exams
