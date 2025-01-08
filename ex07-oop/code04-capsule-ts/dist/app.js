{
    var x = "hello";
    x = "hello";
    console.log((x = "hi"));
}
{
    var value = 123;
    console.log(value);
    var username = "123";
    console.log(username);
}
{
    var msg = "Hello";
    console.log(msg.toUpperCase());
}
{
    var msg = "hello";
    if (typeof msg === "string") {
        msg.toUpperCase();
    }
}
{
    var user = // 타입 지정
     void 0; // 타입 지정
    user = { name: "jack", age: 22 };
    console.log(user);
}
{
    var nums = [1, 2, 3, 4, 5];
    console.log(nums);
    nums.push(6);
}
{
    console.log("Hello world!");
    function greet(person, date) {
        console.log("".concat(person, " ").concat(date));
    }
    greet("hy", new Date());
}
