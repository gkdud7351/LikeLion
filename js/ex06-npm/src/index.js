// import a from "./module.js";
import { subtract } from "./module.js";

console.log("hello npm");

// console.log(a(2, 3)); // 디폴트 add 실행
console.log(subtract(2, 3));

// module에서 import 할 때 디폴트가 있는 건 import 할 때 별칭으로 가져올 수 있고
// 디폴트가 없는 건 { } 로 가져와야함
