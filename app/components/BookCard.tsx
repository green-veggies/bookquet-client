import { Card, CardContent } from "./ui/card";
import { Book, Calendar } from "lucide-react";

interface BookCardProps {
  book: {
    id: string;
    title: string;
    author: string;
    createdAt: string;
  };
}

export function BookCard({ book }: BookCardProps) {
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  return (
    <Card className="group bg-gradient-card border-border/50 shadow-card hover:shadow-book transition-all duration-300 transform hover:-translate-y-1 cursor-pointer">
      <CardContent className="p-5">
        <div className="flex items-start gap-3">
          <div className="flex-shrink-0 p-2 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors duration-300">
            <Book className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1 min-w-0">
            <h3 className="font-serif font-semibold text-lg text-foreground group-hover:text-primary transition-colors duration-300 truncate">
              {book.title}
            </h3>
            <p className="text-muted-foreground font-medium text-sm mt-1 truncate">
              by {book.author}
            </p>
            <div className="flex items-center gap-1.5 mt-3 text-xs text-muted-foreground">
              <Calendar className="h-3 w-3" />
              <span>Added {formatDate(book.createdAt)}</span>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
