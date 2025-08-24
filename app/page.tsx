'use client'

import { useState, useEffect } from "react";
import { BookForm } from "./components/BookForm";
import { BookList } from "./components/BookList";
import { ThemeToggle } from "./components/ThemeToggle";
import { ThemeProvider } from "next-themes";
import libraryHero from "./assets/library-hero.jpg";

interface Book {
  id: string;
  title: string;
  author: string;
  createdAt: string;
}

const API_BASE_URL = 'http://localhost:8000/api';

export default function HomePage() {
  const [books, setBooks] = useState<Book[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Load books from API on mount
  useEffect(() => {
    fetchBooks();
  }, []);

  const fetchBooks = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch(`${API_BASE_URL}/books`);
      if (!response.ok) {
        throw new Error('Failed to fetch books');
      }
      const data = await response.json();
      setBooks(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch books');
      console.error('Error fetching books:', err);
    } finally {
      setLoading(false);
    }
  };

  const handleBookAdded = async (newBook: Omit<Book, 'id' | 'createdAt'>) => {
    try {
      const response = await fetch(`${API_BASE_URL}/books`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newBook),
      });

      if (!response.ok) {
        throw new Error('Failed to add book');
      }

      const addedBook = await response.json();
      setBooks(prevBooks => [addedBook, ...prevBooks]);
    } catch (err) {
      console.error('Error adding book:', err);
      // You might want to show an error toast here
    }
  };

  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
      <div className="min-h-screen bg-gradient-warm">
        {/* Header */}
        <header className="relative border-b border-border/50 bg-background/80 backdrop-blur-md">
          <div className="container mx-auto px-4 py-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="p-2 bg-gradient-hero rounded-lg shadow-elegant">
                  <span className="text-2xl text-primary-foreground">📚</span>
                </div>
                <div>
                  <h1 className="font-serif text-2xl font-bold text-foreground">
                    Bookquet
                  </h1>
                  <p className="text-sm text-muted-foreground">
                    Your personal library tracker
                  </p>
                </div>
              </div>
              <ThemeToggle />
            </div>
          </div>
        </header>

        {/* Hero Section */}
        <section className="relative overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-10 dark:opacity-5"
            style={{ backgroundImage: `url(${libraryHero})` }}
          />
          <div className="relative container mx-auto px-4 py-16 text-center">
            <h2 className="font-serif text-4xl md:text-5xl font-bold text-foreground mb-4">
              Track Your Literary Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
              Build and organize your personal library with Bookquet. 
              Keep track of the books you've read and discover your reading patterns.
            </p>
          </div>
        </section>

        {/* Main Content */}
        <main className="container mx-auto px-4 py-12 max-w-6xl">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Book Form */}
            <div className="lg:col-span-1">
              <BookForm onBookAdded={handleBookAdded} />
            </div>
            
            {/* Book List */}
            <div className="lg:col-span-2">
              {loading ? (
                <div className="text-center py-12">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
                  <p className="mt-4 text-muted-foreground">Loading your library...</p>
                </div>
              ) : error ? (
                <div className="text-center py-12">
                  <div className="mx-auto w-20 h-20 bg-destructive/10 rounded-full flex items-center justify-center mb-4">
                    <span className="text-2xl">⚠️</span>
                  </div>
                  <h3 className="font-serif text-xl font-semibold text-foreground mb-2">
                    Error loading books
                  </h3>
                  <p className="text-muted-foreground mb-4">{error}</p>
                  <button 
                    onClick={fetchBooks}
                    className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
                  >
                    Try Again
                  </button>
                </div>
              ) : (
                <BookList books={books} />
              )}
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="border-t border-border/50 bg-background/50 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-6 text-center">
            <p className="text-sm text-muted-foreground">
              Built with love for book enthusiasts
            </p>
          </div>
        </footer>
      </div>
    </ThemeProvider>
  );
}
