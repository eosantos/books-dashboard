export interface Book {
  id: string;
  title: string;
  author: string;
  amountOfPages: number;
  currentlyReading: boolean;
  amazonLink: string;
  avatarLink: string;
  summary: string;
  publishedAt: Date;
  amountOfReviews: number;
  amountOfRatings: number;
}

export const books: Book[] = [
  {
    id: "1",
    title: "Batman: Year One",
    author: "Frank Miller",
    amountOfPages: 144,
    currentlyReading: true,
    amazonLink:
      "https://www.amazon.com.br/gp/product/1401207529/ref=x_gr_w_bb_sin?ie=UTF8&tag=x_gr_w_bb_br-20&linkCode=ur2&camp=1789&creative=9325",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1574630214l/59980.jpg",
    summary:
      "In 1986, Frank Miller and David Mazzucchelli produced this groundbreaking reinterpretation of the origin of Batman—who he is and how... Continue lendo",
    publishedAt: new Date("02 01 1968"),
    amountOfReviews: 3.047,
    amountOfRatings: 214.553,
  },
  {
    id: "2",
    title: "Batman: The Killing Joke",
    author: "Alan Moore",
    amountOfPages: 50,
    currentlyReading: true,
    amazonLink:
      "https://www.amazon.com.br/gp/product/0930289455/ref=x_gr_w_bb_sin?ie=UTF8&tag=x_gr_w_bb_br-20&linkCode=ur2&camp=1789&creative=9325",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1346331835l/96358.jpg",
    summary:
      "For the first time the Joker's origin is revealed in this tale of insanity and human perseverance. Looking to prove that any man can... Continue lendo",
    publishedAt: new Date("12 01 1995"),
    amountOfReviews: 5.39,
    amountOfRatings: 179.524,
  },
  {
    id: "3",
    title: "Batman: The Long Halloween",
    author: "Jeph Loeb",
    amountOfPages: 376,
    currentlyReading: true,
    amazonLink:
      "https://www.amazon.com.br/gp/product/1563894696/ref=x_gr_w_bb_sin?ie=UTF8&tag=x_gr_w_bb_br-20&linkCode=ur2&camp=1789&creative=9325",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1350137101l/106069.jpg",
    summary:
      "Taking place during Batman's early days of crime fighting, this new edition of the classic mystery tells the story of a mysterious... Continue lendo",
    publishedAt: new Date("11 01 1999"),
    amountOfReviews: 2.541,
    amountOfRatings: 81.511,
  },
  {
    id: "4",
    title: "Batman, Volume 1: The Court of Owls",
    author: "Scott Snyder",
    amountOfPages: 176,
    currentlyReading: true,
    amazonLink:
      "https://www.amazon.com.br/gp/product/1401235417/ref=x_gr_w_bb_sin?ie=UTF8&tag=x_gr_w_bb_br-20&linkCode=ur2&camp=1789&creative=9325",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1563699401l/13223349._SX318_.jpg",
    summary:
      "Following his ground-breaking, critically acclaimed run on Detective Comics, writer Scott Snyder (American Vampire) alongside... Continue lendo",
    publishedAt: new Date("05 09 2012"),
    amountOfReviews: 2.048,
    amountOfRatings: 46.224,
  },
  {
    id: "5",
    title: "A Game of Thrones",
    author: "George R. R. Martin’s",
    amountOfPages: 864,
    currentlyReading: true,
    amazonLink:
      "https://www.amazon.com.br/gp/product/0553588486/ref=x_gr_w_bb_sout?ie=UTF8&tag=x_gr_w_bb_br-20&linkCode=ur2&camp=1789&creative=9325",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562726234l/13496.jpg",
    summary:
      "Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords... Continue lendo",
    publishedAt: new Date("08 01 2005"),
    amountOfReviews: 333,
    amountOfRatings: 19.325,
  },
  {
    id: "6",
    title: "Harry Potter",
    author: "J.K. Rowling",
    amountOfPages: 320,
    currentlyReading: true,
    amazonLink:
      "https://www.goodreads.com/book/show/13496.A_Game_of_Thrones?ac=1&from_search=true&qid=xjpmlWf3Oy&rank=1",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1474154022l/3._SY475_.jpg",
    summary:
      "Harry Potter has no idea how famous he is. That's because he's being raised by his miserable aunt and uncle who are terrified Harry... Continue lendo",
    publishedAt: new Date("11 01 2003"),
    amountOfReviews: 78,
    amountOfRatings: 32.015,
  },
  {
    id: "7",
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    amountOfPages: 366,
    currentlyReading: true,
    amazonLink:
      "https://www.amazon.com.br/gp/product/0618260307/ref=x_gr_w_bb_sin?ie=UTF8&tag=x_gr_w_bb_br-20&linkCode=ur2&camp=1789&creative=9325",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1546071216l/5907.jpg",
    summary:
      "In a hole in the ground there lived a hobbit. Not a nasty, dirty, wet hole, filled with the ends of worms and an oozy smell, nor... Continue lendo",
    publishedAt: new Date("08 15 2002"),
    amountOfReviews: 52.217,
    amountOfRatings: 3.092755,
  },
  {
    id: "8",
    title: "O Poder do Hábito",
    author: "Charles Duhigg",
    amountOfPages: 408,
    currentlyReading: true,
    amazonLink:
      "https://www.amazon.com.br/gp/product/8539004119/ref=x_gr_w_bb_sin?ie=UTF8&tag=x_gr_w_bb_br-20&linkCode=ur2&camp=1789&creative=9325",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1354798448l/16270446.jpg",
    summary:
      "Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma maratona e foi... Continue lendo",
    publishedAt: new Date("08 15 2002"),
    amountOfReviews: 18.643,
    amountOfRatings: 387.785,
  },
  {
    id: "9",
    title: "V for Vendetta",
    author: "Alan Moore",
    amountOfPages: 296,
    currentlyReading: true,
    amazonLink:
      "https://www.amazon.com.br/gp/product/1401207928/ref=x_gr_w_bb_sin?ie=UTF8&tag=x_gr_w_bb_br-20&linkCode=ur2&camp=1789&creative=9325",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1343668985l/5805.jpg",
    summary:
      "A frightening and powerful tale of the loss of freedom and identity in a chillingly believable totalitarian world, V for Vendetta... Continue lendo",
    publishedAt: new Date("11 01 2005"),
    amountOfReviews: 5.898,
    amountOfRatings: 278.999,
  },
  {
    id: "10",
    title: "Rich Dad, Poor Dad",
    author: "Robert T. Kiyosaki",
    amountOfPages: 256,
    currentlyReading: true,
    amazonLink:
      "https://www.amazon.com.br/gp/product/0751532711/ref=x_gr_w_bb_sin?ie=UTF8&tag=x_gr_w_bb_br-20&linkCode=ur2&camp=1789&creative=9325",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1436387128l/6383503._SX318_.jpg",
    summary:
      "Durante os últimos dois anos, uma jovem transformou quase todos os aspectos de sua vida. Parou de fumar, correu uma... Continue lendo",
    publishedAt: new Date("01 01 1997"),
    amountOfReviews: 16.392,
    amountOfRatings: 427.901,
  },
];
