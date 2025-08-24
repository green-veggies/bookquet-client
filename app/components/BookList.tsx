import { BookCard } from "./BookCard";
import { Library } from "lucide-react";

interface Book {
  id: string;
  title: string;
  author: string;
  createdAt: string;
}

interface BookListProps {
  books: Book[];
}

export function BookList({ books }: BookListProps) {
  if (books.length === 0) {
    return (
      <div className="text-center py-12">
        <div className="mx-auto w-20 h-20 bg-muted/50 rounded-full flex items-center justify-center mb-4">
          <Library className="h-8 w-8 text-muted-foreground" />
        </div>
        <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
          No books yet
        </h3>
        <p className="text-muted-foreground">
          Start building your library by adding your first book above!
        </p>
      </div>
    );
  }

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="font-serif text-2xl font-semibold text-foreground">
          Your Library
        </h2>
        <span className="text-sm text-muted-foreground bg-muted/50 px-3 py-1 rounded-full">
          {books.length} {books.length === 1 ? 'book' : 'books'}
        </span>
      </div>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
