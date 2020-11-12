let number = prompt("De quel nombre veux-tu calculer la factorielle ?")

const factorial = (number) => {
  f = 1;
  for( i = 1; i <= number; i++) {
  f *= i
}
  return f
}

console.log(`Le résultat est : ${factorial(number)}`)