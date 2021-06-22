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
  amountOfReviwes: number;
  amountOfRatings: number;
}

const arr: Book[] = [
  {
    id: "1",
    title: "Harry Potter",
    author: "J. K. Rowling",
    amountOfPages: 300,
    currentlyReading: boolean,
    amazonLink: string,
    avatarLink: string,
    summary: string,
    publishedAt: Date,
    amountOfReviwes: number,
    amountOfRatings: number,
  },
];
