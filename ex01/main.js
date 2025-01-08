// // 검색(find), 필터링(filter), 변환(map), 집계(reduce)

// {
//   let nums = [1, 32, 23, 14, 5, 100, 80];
//   let result = nums
//     .filter((num) => num > 20) // 20보다 큰 값을 찾아
//     .map((num) => num * 2) // 2배 곱하고
//     .reduce((acc, num) => acc + num); // 모든 값을 더해란
//   console.log(result);
// }
// {
//   // let add = new Function("a", "b", "return a+b");
//   // console.log("add call", add(10, 20));

//   let add = function (a, b) {
//     return a + b;
//   };
//   console.log("add call", add(10, 20));
// }
// {
//   let f3;
//   let x = 100;
//   let f1 = function () {
//     let x = 40;
//     f3 = function (x = 10) {
//       console.log(x);
//     };
//   };
//   f1();
//   f3();
// }
// {
//   var x = 20;
//   console.log(x);
//   console.log(window.x);
//   // console.log(global.x); // 오류
// }
// {
//   var gx = 1;
//   gy = 2;
//   function test() {
//     var x = 20;
//     y = 30;
//     console.log(x, y, gx, gy);
//     console.log(window.x, window.y, window.gx, window.gy);
//     // console.log(global.x, global.y, global.gx, global.gy);
//   }
//   test();
// }
// {
//   let x = "hello";
//   let y = new String("hello");

//   console.log(x === y);
// }
// {
//   var json = '{"kor":100,"eng":90,"math":80}';
//   var obj = JSON.parse(json); // {"kor":100,"eng":90,"math":80} 객체로 변환
//   console.log(obj.kor, obj.eng, obj.math);
// }
// {
//   var nums = [1, 3, 76, 6, 45, 7, 55, 255, 22];
//   console.log(nums);
//   // nums.sort(function (a, b) {
//   //   return a - b;
//   // });
//   nums.sort((a, b) => a - b);

//   console.log(nums);
// }
// {
//   const data =
//     '{"totalCount":12,"totalPages":2,"hasPreviousPage":false,"hasNextPage":true,"menus":[{"id":1651,"korName":"치즈 샌드위치","engName":"cheese sandwich","price":5000,"regDate":"2024-09-29T01:55:06Z","categoryId":3,"regMemberId":1,"images":[{"id":"5","isDefault":true,"src":"sandwich1.png"}]},{"id":1649,"korName":"베이컨 샌드위치","engName":"bacon sandwich","price":5000,"regDate":"2024-09-29T01:54:36Z","categoryId":3,"regMemberId":1,"images":[{"id":"7","isDefault":true,"src":"sandwich3.png"}]},{"id":1650,"korName":"바게트 샌드위치","engName":"baguette sandwich","price":7000,"regDate":"2024-09-29T01:54:29Z","categoryId":3,"regMemberId":1,"images":[{"id":"6","isDefault":true,"src":"sandwich2.png"}]},{"id":9,"korName":"카라멜 마끼아또","engName":"Caramel Macchiato","price":4500,"regDate":"2024-02-19T11:16:28Z","categoryId":1,"regMemberId":1,"images":[]},{"id":8,"korName":"디카페인아메리카노","engName":"decafamericano","price":5500,"regDate":"2024-02-19T11:15:27Z","categoryId":1,"regMemberId":1,"images":[]},{"id":7,"korName":"딸기 피지오","engName":"Strawberry Fizzio","price":3000,"regDate":"2024-02-19T11:15:12Z","categoryId":2,"regMemberId":1,"images":[]}],"pages":[1,2,3,4,5]}';

//   // 1. data를 파싱하여 parsedMenus에 대입하세요.
//   const parsedMenus = JSON.parse(data);

//   // 2. parsedMenus에서 menus를 추출하여 새로운 변수 menus에 대입하세요.
//   let { menus } = parsedMenus;

//   // 3. 메뉴의 가격이 6000원 이상인 메뉴만 필터링하여 새로운 배열을 만들고
//   menus = menus.filter((menu) => menu.price < 6000);

//   // 4. 메뉴의 가격이 작은것부터 큰 순으로 정렬하고
//   menus = menus.sort((a, b) => a.price - b.price);

//   // 5. menus의 각 요소를 다음과 같은 형식으로 변환하여 새로운 배열을 만들고
//   // 단. menu의 images의 0번째 이미지를 img 속성에 대입하며 개수가 0인 경우 'default.png'를 대입하세요.
//   // { id: 1651, Name: '치즈 샌드위치', price: 5000, img: 'sandwich1.png' }
//   menus = menus.map((menu) => {
//     return {
//       id: menu.id,
//       Name: menu.korName,
//       price: menu.price,
//       img: menu || menu.images[0] || menu.images[0].src || "default.png",
//     };
//   });

//   // 6. menuList를 출력하세요.
//   menus.forEach((menu) => {
//     console.log(menu);
//   });
// }
// {
//   // 객체가 중첩된 경우
//   let exam = {
//     kor: 10,
//     eng: 20,
//     math: 30,
//     student: {
//       name: "ds",
//       phone: "01231841",
//     },
//   };

//   let {
//     student: { name: n }, // 별칭
//   } = exam;
//   console.log(n);
// }
// {
//   let notice = {
//     title: "공지사항",
//     files: ["img1.png", "img2.png"],
//   };
//   let {
//     files: [first],
//   } = notice;
// }
// {
//   let arr = [1, 2, 3];
//   function resultPush() {
//     console.log(arr.push(4, 5, 6));
//   }
//   resultPush();
//   console.log(arr);

//   function resultPop() {
//     console.log(arr.pop());
//   }
//   resultPop();
//   console.log(arr);

//   function resultShift() {
//     console.log(arr.shift());
//   }
//   resultShift();
//   console.log(arr);

//   function resultUnshift() {
//     console.log(arr.unshift(7));
//   }
//   resultUnshift();
//   console.log(arr);
// }
// {
//   class User {
//     constructor() {
//       // function User() {} 역할
//       this.firstName = first;
//       this.lastName = last;
//     }
//     getFullName() {
//       //User.prototype 생략
//       return `${this.firstName} ${this.lastName}`;
//     }
//   }
// }
// // {
// //   const heropy = new User("Heropy", "Park");
// //   const neo = new User("Neo", "Anderson");

// //   console.log(heropy);
// //   console.log(neo);
// // }
// // {
// //   class A {
// //     constructor() {}
// //   }
// //   class B extends A {
// //     constructor() {
// //       super();
// //     }
// //   }

// //   // A클래스는 B의 부모 클래스이고
// //   // B클래스는 C의 부모클래스이고
// //   // a는 A클래스, b는 B클래스, c는 C클래스의 인스턴트일 때
// //   console.log(c instanceof A); // true
// //   console.log(c instanceof B); // true
// //   console.log(c instanceof C); // true

// //   console.log(c.constructor === A); // false
// //   console.log(c.constructor === B); // false
// //   console.log(c.constructor === B); // true
// // }
// {
//   const d1 = new Date(2025, 1, 4, 16, 20, 30);
//   console.log(d1);
// }
// {
//   const arr = ["A", "B", "C"];
//   arr.splice(2, 0, "X"); // 인덱스 2번 자리, 제거 개수 0, 추가할 아이템
//   console.log(arr); //['A','B','X','C']
// }
// {
//   const target = { a: 1, b: 2 };
//   const source1 = { b: 3, c: 4 };
//   const source2 = { c: 5, d: 6 };
//   const result = Object.assign(target, source1, source2);
//   console.log(target); // {a:1,b:3,c:5,d:6}
//   console.log(result); // {a:1,b:3,c:5,d:6}
// }
// {
//   console.log(JSON.stringify("Hello world!")); // "Hello world!"
//   console.log(JSON.stringify(123)); // 문자(string)로 변환되어 출력 : 123
//   console.log(JSON.stringify(false)); // 문자(string)로 변환되어 출력 : false
//   console.log(JSON.stringif(null)); // 문자(string)로 변환되어 출력 : null
//   console.log(JSON.stringif({ name: "hy", age: 12 })); // 큰 따옴표 사용 : {"name":"hy","age":12}
//   console.log(JSON.stringif([1, 2, 3])); // 문자(string)로 변환되어 출력 : [1,2,3]

//   console.log("//--------------------------------//");

//   console.log(JSON.parse('"Hello world!')); // JSON 문자는 큰 따옴표를 포함한 문자 덩어리임임 : Hello world!
//   console.log(JSON.parse("123")); // 숫자 데이터로 변환되어 출력 : 123
//   console.log(JSON.parse("false")); // 불린 데이터로 변환되어 출력 : false
//   console.log(JSON.parse("null")); // 널 데이터로 변환되어 출력 : null
//   console.log(JSON.parse('{"name":"hy","age":12}')); // 객체 데이터로 변환되어 출력 : { name: "hy", age: 12 }
//   console.log(JSON.parse("[1,2,3]")); // 배열 데이터로 변환되어 출력 : [1,2,3]
// }
{
  // 콜백 패턴

  const a = (callback) => {
    setTimeout(() => {
      console.log(1);
      callback();
    }, 1000);
  };
  const b = (callback) => {
    setTimeout(() => {
      console.log(2);
      callback();
    }, 1000);
  };
  const c = (callback) => {
    setTimeout(() => {
      console.log(3);
      callback();
    }, 1000);
  };
  const d = () => {
    console.log(4);
  };
  a(() => {
    b(() => {
      c(() => {
        d();
      });
    });
  });
}
