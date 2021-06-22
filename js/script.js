
let a = +prompt("введите число а");
let b = +prompt("введите число b");

// 1
if (a === 0){
    alert('Верно');
}
else {
    alert('Неверно');
}
//2///////////////
if (a > 0){
    alert('Верно');
}
else {
    alert('Неверно');
}
//3//////////////////
if (a < 0){
    alert('Верно');
}
else {
    alert('Неверно');
}
//4//////////////////
if (a >= 0){
    alert('Верно');
}
else {
    alert('Неверно');
}
//5//////////////////
if (a <= 0){
    alert('Верно');
}
else {
    alert('Неверно');
}
//6//////////////////
if (a !== 0){
    alert('Верно');
}
else {
    alert('Неверно');
}
//7//////////////////
if (a === 'test'){
    alert('Верно');
}
else {
    alert('Неверно');
}
//8//////////////////
if (a === 1){
    alert('Верно');
}
else {
    alert('Неверно');
}
//9//////////////////
if (a > 0 && a < 5){
    alert('Верно');
}
else {
    alert('Неверно');
}
//10//////////////////
if (a === 0 || a === 2){
    a += 7
    alert(a);
}
else {
    a /= 10
    alert(a);
}
//11//////////////////////
if (a <= 1 && b >= 3 ){

    alert(a + b);
}
else {

    alert(a - b);
}
//12//////////////////////

if (a > 2 && a < 11 || b >= 6 && b < 14 ){

    alert('Верно');
}
else {

    alert('неверно');
}
//13/////////////////////

let num = +prompt("введите число num")
let result;

switch (num){
    case 1:
        result = 'зима';
        console.log(result)
        break;

    case 2:
        result = 'весна';
        console.log(result)
        break;

    case 3:
        result = 'лето';
        console.log(result)
        break;

    case 4:
        result = 'осень';
        console.log(result)
        break;

    default:break

}