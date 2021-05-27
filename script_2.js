// 2.2.1 Calculs Rapides

console.log("2.2.1 Calculs Rapides");
let answer = "";
answer = prompt("De quel nombre veux-tu faire la factorielle ?");
n = Number(answer);


let result = factorial(n);
console.log(result);

function factorial(n) {
  let facto = 1;
  if (n == 0 || n == 1) {
    return facto;
  }
  else {
    while (n > 1) {
      facto *= n;
      n--;
    }
    return facto;
  }

}
