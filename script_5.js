// 2.3.2 Bibliothécaire

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

console.log("");


let count = 0;
// Regarde si tous les livres ont été emprunté au moins une fois ;
console.log("Livres empruntés ou non ?");
for (let book of books) {
  if (book.rented > 0){
    count +=1;
  }
}
if (books.length == count){
  console.log("Tous les livres ont été empruntés au moins une fois");
}
else{
  console.log("Tous les livres n'ont pas été empruntés au moins une fois");
}

console.log("");


// Cherche le livre le plus emprunté ;
console.log("Livre le plus emprunté");

let max = 0;
let title_max ="";
for (let book of books) {
  if (book.rented > max){
    max = book.rented
    title_max = book.title
  }
}

console.log("Le livre le plus emprunté est : " + title_max)


console.log("");


// Cherche le livre le moins emprunté ;
console.log("Livre le moins emprunté");

let min = 100000;
let title_min ="";
for (let book of books) {
  if (book.rented < min){
    min = book.rented
    title_min = book.title
  }
}

console.log("Le livre le moins emprunté est : " + title_min)

console.log("");


// Cherche l'ID 873495 ;
console.log("Livre le bon ID");


let title_id ="";
let id_looked = 873495;
for (let book of books) {
  if (book.id == id_looked){
    title_id = book.title;
  }
}

console.log("Le livre avec l'ID 873495 est : " + title_id)


console.log("");

// Supprime le livre avec l'ID: 133712 ;
let books_new = [];
let id_to_delete = 133712;

for (let book of books) {
  if (book.id != id_to_delete){
    books_new.push(book);
  }
}
console.log(books_new)


console.log("");

// Trie les livres par ordre alphabétique.
console.log("Livres triés par alphabétique");

books_new.sort(function(a, b){
  if(a.title < b.title) { return -1; }
  if(a.title > b.title) { return 1; }
  return 0;
})

console.log(books_new);
