{
  enum Direction {
    Up, //1
    Down, //2
    Left, //3
    Right, //4
  }
}
{
  let level: 1 | 2 | 3 | 4;
  level = 1;
  console.log(level);
  // level = 6; false
}
{
  let x: "hello" = "hello";
  x = "hello";
  // x = "hi"; false
}
{
  type ID = number | undefined;
  const value: ID = 123;
  console.log(value);

  // const username: ID = "123";
  // console.log(username);       // false
}
{
  let msg: unknown = "Hello";
  console.log((msg as string).toUpperCase());
}
{
  let msg: unknown = "hello";
  if (typeof msg === "string") {
    msg.toUpperCase();
  }
}
{
  // 타입 별칭 정하기
  type User = {
    name: string;
    age: number;
  };
  let user: User; // 타입 지정
  user = { name: "jack", age: 22 };
  console.log(user);
}
{
  let nums: number[] = [1, 2, 3, 4, 5];
  console.log(nums);
  nums.push(6);
}
{
  console.log("Hello world!");

  function greet(person, date) {
    console.log(`${person} ${date}`);
  }
  greet("hy", new Date());
}
