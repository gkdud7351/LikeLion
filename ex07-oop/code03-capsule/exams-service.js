/*
현재 이 코드는 exam 데이터들을 관리하는 서비스를 제공하는데,
하지만 exam이 제공하는 서비스는 아직 분리하지 않은 상태이므로로
exam 데이터를 직접 다루는 코드를 추가해보기로 하자.

*/

let exams = [];

export const add = (exam) => {
  exams.push(exam);
};

export const getList = (page = 1, size = 3) => {
  let exams1 = exams.sort((a, b) => b.kor - a.kor).slice(0, 3);
  return exams1;
};

export const size = () => exams.length;
