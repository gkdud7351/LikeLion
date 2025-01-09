// 외부라이브러리 : npm install readline-sync
// 절차적인 프로그래밍
/*
1. 고급언어를 이용한 절차작성
2. 제어구조를 이용한 흐름제어

*/

// const readlineSync = require("readline-sync");
// const lib = require("./lib.js");

import {
  printFooter,
  printHeader,
  printScore,
  inputMenu,
  inputScore,
} from "./lib.js";

// let kors = [];
// let engs = [];
// let maths = [];

let isRun = true;

printHeader();

while (isRun) {
  let menu = inputMenu();

  switch (menu) {
    case 1:
      inputScore();
      break;
    case 2:
      printScore();
    case 3:
      isRun = false;
      break;
  }
}

printFooter();

// top;
// ------------------------------------
// down;
