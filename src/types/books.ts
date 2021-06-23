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
    title: "Harry Potter",
    author: "J. K. Rowling",
    amountOfPages: 864,
    currentlyReading: true,
    amazonLink:
      "https://www.goodreads.com/book/show/13496.A_Game_of_Thrones?ac=1&from_search=true&qid=xjpmlWf3Oy&rank=1",
    avatarLink:
      "https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1562726234l/13496.jpg",
    summary:
      "Here is the first volume in George R. R. Martin’s magnificent cycle of novels that includes A Clash of Kings and A Storm of Swords.",
    publishedAt: new Date(),
    amountOfReviews: 333,
    amountOfRatings: 19.325,
  },
];
