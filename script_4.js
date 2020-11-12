const entrepreneurs = [
  { first: 'Steve', last: 'Jobs', year: 1955 },
  { first: 'Oprah', last: 'Winfrey', year: 1954 },
  { first: 'Bill', last: 'Gates', year: 1955 },
  { first: 'Sheryl', last: 'Sandberg', year: 1969 },
  { first: 'Mark', last: 'Zuckerberg', year: 1984 },
  { first: 'Beyonce', last: 'Knowles', year: 1981 },
  { first: 'Jeff', last: 'Bezos', year: 1964 },
  { first: 'Diane', last: 'Hendricks', year: 1947 },
  { first: 'Elon', last: 'Musk', year: 1971 },
  { first: 'Marissa', last: 'Mayer', year: 1975 },
  { first: 'Walt', last: 'Disney', year: 1901 },
  { first: 'Larry', last: 'Page', year: 1973 },
  { first: 'Jack', last: 'Dorsey', year: 1976 },
  { first: 'Evan', last: 'Spiegel', year: 1990 },
  { first: 'Brian', last: 'Chesky', year: 1981 },
  { first: 'Travis', last: 'Kalanick', year: 1976 },
  { first: 'Marc', last: 'Andreessen', year: 1971 },
  { first: 'Peter', last: 'Thiel', year: 1967 }
];

// Les entrepreneurs des années 70
function seventies(){
  let year70 = entrepreneurs.filter(entrepreneur => entrepreneur.year>1970 && entrepreneur.year<1980);
  console.log(year70);
};

console.log(seventies());

// Array qui contient le prénom et le nom des entrepreneurs 
function names() {
  names = [];
  entrepreneurs.forEach(entrepreneur => names.push(entrepreneur.first + " " + entrepreneur.last));
  names.forEach(entrepreneur => console.log(entrepreneur));
};

console.log(names())

// Quel âge aurait chaque inventeur aujourd'hui ?
function ageNow() {
  entrepreneurs.forEach(entrepreneur => {
    age = new Date().getFullYear() - entrepreneur.year
    console.log(`Aujourd'hui ${entrepreneur.first} ${entrepreneur.last} à ${age}`);
  });
};

console.log(ageNow());

// Trie les entrepreneurs par ordre alphabétique du nom de famille.
function alphabeticOrder() {
  entrepreneurs.sort(function (a, b) {
    return a.last.localeCompare(b.last);
  });
  console.log(entrepreneurs);
};

console.log(alphabeticOrder());
