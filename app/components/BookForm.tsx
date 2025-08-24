'use client'

import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { BookPlus } from "lucide-react";
import { useToast } from "../hooks/use-toast";

interface Book {
  id: string;
  title: string;
  author: string;
  createdAt: string;
}

interface BookFormProps {
  onBookAdded: (book: Omit<Book, 'id' | 'createdAt'>) => void;
}

export function BookForm({ onBookAdded }: BookFormProps) {
  const [title, setTitle] = useState("");
  const [author, setAuthor] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!title.trim() || !author.trim()) {
      toast({
        title: "Missing information",
        description: "Please fill in both title and author fields.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);

    try {
      await onBookAdded({
        title: title.trim(),
        author: author.trim(),
      });
      
      setTitle("");
      setAuthor("");
      
      toast({
        title: "Book added successfully!",
        description: `"${title.trim()}" by ${author.trim()} has been added to your library.`,
      });
    } catch (error) {
      toast({
        title: "Error adding book",
        description: "Failed to add the book. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Card className="bg-gradient-card border-border/50 shadow-card backdrop-blur-sm">
      <CardHeader className="pb-4">
        <CardTitle className="flex items-center gap-2 font-serif text-xl">
          <BookPlus className="h-5 w-5 text-primary" />
          Add New Book
        </CardTitle>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="title" className="font-medium">
              Title
            </Label>
            <Input
              id="title"
              type="text"
              placeholder="Enter book title..."
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="bg-input/50 border-border/50 focus:border-primary/50 transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="author" className="font-medium">
              Author
            </Label>
            <Input
              id="author"
              type="text"
              placeholder="Enter author name..."
              value={author}
              onChange={(e) => setAuthor(e.target.value)}
              className="bg-input/50 border-border/50 focus:border-primary/50 transition-all duration-300"
              disabled={isSubmitting}
            />
          </div>
          <Button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-gradient-hero hover:shadow-elegant transition-all duration-300 transform hover:-translate-y-0.5"
          >
            {isSubmitting ? "Adding Book..." : "Add Book"}
          </Button>
        </form>
      </CardContent>
    </Card>
  );
}
