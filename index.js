let arr = "okljljlhlkjl";
arr = arr.split("");
let a = "";
for (let i = arr.length - 1; i > 0; i--) {
  a += arr[i];
}
console.log(a);
