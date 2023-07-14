var myFavoriteNumber;
// string类型
myFavoriteNumber = 'seven';
// 5
console.log(myFavoriteNumber.length);
// number类型
myFavoriteNumber = 7;
// 编译时报错，此时已经是number类型，没有length属性
console.log(myFavoriteNumber.length);
