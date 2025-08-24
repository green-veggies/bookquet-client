# Bookquet - Next.js Version

A modern, beautiful personal library tracker built with Next.js, TypeScript, and Tailwind CSS.

## Features

- 📚 Add and track books in your personal library
- 🎨 Beautiful, responsive UI with dark/light theme support
- ⚡ Fast performance with Next.js 14
- 🎯 TypeScript for better development experience
- 🎨 Tailwind CSS for modern styling
- 🌙 Dark mode support with next-themes
- 📱 Mobile-responsive design

## Tech Stack

- **Framework**: Next.js 14 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Radix UI + shadcn/ui
- **State Management**: React Query (TanStack Query)
- **Theme**: next-themes for dark/light mode
- **Icons**: Lucide React

## Getting Started

### Prerequisites

- Node.js 18+ 
- npm, yarn, or pnpm

### Installation

1. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   ```

2. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   ```

3. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Project Structure

```
app/
├── components/          # Reusable UI components
│   ├── ui/            # shadcn/ui components
│   ├── BookForm.tsx   # Book addition form
│   ├── BookList.tsx   # Book list display
│   ├── BookCard.tsx   # Individual book card
│   └── ThemeToggle.tsx # Theme switcher
├── hooks/              # Custom React hooks
├── lib/                # Utility functions
├── assets/             # Static assets
├── globals.css         # Global styles
├── layout.tsx          # Root layout
└── page.tsx            # Home page
```

## Features

### Book Management
- Add new books with title and author
- View all books in a beautiful grid layout
- Books are stored in localStorage for persistence
- Responsive design for all screen sizes

### Theme System
- Light and dark theme support
- Automatic theme detection based on system preference
- Smooth theme transitions
- Persistent theme selection

### UI/UX
- Modern, clean design with gradients and shadows
- Smooth animations and hover effects
- Responsive grid layouts
- Beautiful typography with custom fonts

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## License

This project is open source and available under the [MIT License](LICENSE).

---

Built with ❤️ for book enthusiasts
