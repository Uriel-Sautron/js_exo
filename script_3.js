let floor = prompt("Salut, bienvenue dans ma super pyramide ! Combien d'étages veux-tu ?");

let i = 1;
while(i <= floor) {
  x = " "
  y = "#"
  console.log(x.repeat(floor-i) + y.repeat(i));
  i++
}
