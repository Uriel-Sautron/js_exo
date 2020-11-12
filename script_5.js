const books = [
  { title: 'Gatsby le magnifique', id: 133712, rented: 39 },
  { title: 'A la recherche du temps,perdu', id: 237634, rented: 28 },
  { title: 'Orgueil & Préjugés', id: 873495, rented: 67 },
  { title: 'Les frères Karamazov', id: 450911, rented: 55 },
  { title: 'Dans les forêts de Sibérie', id: 8376365, rented: 15 },
  { title: 'Pourquoi j\'ai mangé mon père', id: 450911, rented: 45 },
  { title: 'Et on tuera tous les affreux', id: 67565, rented: 36 },
  { title: 'Le meilleur des mondes', id: 88847, rented: 58 },
  { title: 'La disparition', id: 364445, rented: 33 },
  { title: 'La lune seule le sait', id: 63541, rented: 43 },
  { title: 'Voyage au centre de la Terre', id: 4656388, rented: 38 },
  { title: 'Guerre et Paix', id: 748147, rented: 19 }
];

// Est-ce que tous les livres ont été au moins empruntés une fois ?

function rented(book) {
 return book.rented > 0;
};
console.log(`Tout les livres ont été au moins empruntés une fois ? ${books.every(rented)}`);
  

// Quel est livre le plus et le moins emprunté ?

function rentedOrder() {
  books.sort((a, b) => b.rented - a.rented);
  console.log(`Le livre le plus emprunté est : ${books[0].title}`);
  console.log(`Le livre le moins emprunté est : ${books.slice(-1)[0].title}`);
};

console.log(rentedOrder());


// Trouve le livre avec l'ID: 873495 

function findWithId() {
  bookId = books.find(book => book.id === 873495);
  console.log(`Le livre qui a l' ID 873495 est : ${bookId.title}`);
};

console.log(findWithId());


// Supprime le livre avec l'ID: 133712

function deleteWithId(){
  bookId = books.find(book => book.id === 133712);
  books.splice(books.indexOf(bookId),1)
  console.log(books);
};

console.log(deleteWithId());


// Trie les livres par ordre alphabétique 

function alphabeticOrder() {
  books.sort(function (a, b) {
    return a.title.localeCompare(b.title);
  });
  console.log(books);
};

console.log(alphabeticOrder());