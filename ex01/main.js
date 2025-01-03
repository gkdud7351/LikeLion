// 검색(find), 필터링(filter), 변환(map), 집계(reduce)

{
  let nums = [1, 32, 23, 14, 5, 100, 80];
  let result = nums
    .filter((num) => num > 20) // 20보다 큰 값을 찾아
    .map((num) => num * 2) // 2배 곱하고
    .reduce((acc, num) => acc + num); // 모든 값을 더해란
  console.log(result);
}
{
  // let add = new Function("a", "b", "return a+b");
  // console.log("add call", add(10, 20));

  let add = function (a, b) {
    return a + b;
  };
  console.log("add call", add(10, 20));
}
{
  let f3;
  let x = 100;
  let f1 = function () {
    let x = 40;
    f3 = function (x = 10) {
      console.log(x);
    };
  };
  f1();
  f3();
}
{
  var x = 20;
  console.log(x);
  console.log(window.x);
  // console.log(global.x); // 오류
}
{
  var gx = 1;
  gy = 2;
  function test() {
    var x = 20;
    y = 30;
    console.log(x, y, gx, gy);
    console.log(window.x, window.y, window.gx, window.gy);
    // console.log(global.x, global.y, global.gx, global.gy);
  }
  test();
}
{
  let x = "hello";
  let y = new String("hello");

  console.log(x === y);
}
{
  var json = '{"kor":100,"eng":90,"math":80}';
  var obj = JSON.parse(json); // {"kor":100,"eng":90,"math":80} 객체로 변환
  console.log(obj.kor, obj.eng, obj.math);
}
{
  var nums = [1, 3, 76, 6, 45, 7, 55, 255, 22];
  console.log(nums);
  // nums.sort(function (a, b) {
  //   return a - b;
  // });
  nums.sort((a, b) => a - b);

  console.log(nums);
}
{
  const data =
    '{"totalCount":12,"totalPages":2,"hasPreviousPage":false,"hasNextPage":true,"menus":[{"id":1651,"korName":"치즈 샌드위치","engName":"cheese sandwich","price":5000,"regDate":"2024-09-29T01:55:06Z","categoryId":3,"regMemberId":1,"images":[{"id":"5","isDefault":true,"src":"sandwich1.png"}]},{"id":1649,"korName":"베이컨 샌드위치","engName":"bacon sandwich","price":5000,"regDate":"2024-09-29T01:54:36Z","categoryId":3,"regMemberId":1,"images":[{"id":"7","isDefault":true,"src":"sandwich3.png"}]},{"id":1650,"korName":"바게트 샌드위치","engName":"baguette sandwich","price":7000,"regDate":"2024-09-29T01:54:29Z","categoryId":3,"regMemberId":1,"images":[{"id":"6","isDefault":true,"src":"sandwich2.png"}]},{"id":9,"korName":"카라멜 마끼아또","engName":"Caramel Macchiato","price":4500,"regDate":"2024-02-19T11:16:28Z","categoryId":1,"regMemberId":1,"images":[]},{"id":8,"korName":"디카페인아메리카노","engName":"decafamericano","price":5500,"regDate":"2024-02-19T11:15:27Z","categoryId":1,"regMemberId":1,"images":[]},{"id":7,"korName":"딸기 피지오","engName":"Strawberry Fizzio","price":3000,"regDate":"2024-02-19T11:15:12Z","categoryId":2,"regMemberId":1,"images":[]}],"pages":[1,2,3,4,5]}';

  // 1. data를 파싱하여 parsedMenus에 대입하세요.
  const parsedMenus = JSON.parse(data);

  // 2. parsedMenus에서 menus를 추출하여 새로운 변수 menus에 대입하세요.
  let { menus } = parsedMenus;

  // 3. 메뉴의 가격이 6000원 이상인 메뉴만 필터링하여 새로운 배열을 만들고
  menus = menus.filter((menu) => menu.price < 6000);

  // 4. 메뉴의 가격이 작은것부터 큰 순으로 정렬하고
  menus = menus.sort((a, b) => a.price - b.price);

  // 5. menus의 각 요소를 다음과 같은 형식으로 변환하여 새로운 배열을 만들고
  // 단. menu의 images의 0번째 이미지를 img 속성에 대입하며 개수가 0인 경우 'default.png'를 대입하세요.
  // { id: 1651, Name: '치즈 샌드위치', price: 5000, img: 'sandwich1.png' }
  menus = menus.map((menu) => {
    return {
      id: menu.id,
      Name: menu.korName,
      price: menu.price,
      img: menu || menu.images[0] || menu.images[0].src || "default.png",
    };
  });

  // 6. menuList를 출력하세요.
  menus.forEach((menu) => {
    console.log(menu);
  });
}
{
  // 객체가 중첩된 경우
  let exam = {
    kor: 10,
    eng: 20,
    math: 30,
    student: {
      name: "ds",
      phone: "01231841",
    },
  };

  let {
    student: { name: n }, // 별칭
  } = exam;
  console.log(n);
}
{
  let notice = {
    title: "공지사항",
    files: ["img1.png", "img2.png"],
  };
  let {
    files: [first],
  } = notice;
}
