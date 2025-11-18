import { useState } from "react";
import BookList from "./components/BookList";
import "./index.css";

function App() {
  const [viewMode, setViewMode] = useState("grid");
  const [search, setSearch] = useState("");

  const books = [
    {
      id: 1,
      title: "Atomic Habits",
      author: "James Clear",
      price: 499,
      cover:
        "https://m.media-amazon.com/images/I/91bYsX41DVL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 2,
      title: "Ikigai",
      author: "Héctor García",
      price: 350,
      cover:
        "https://m.media-amazon.com/images/I/71tbalAHYCL._AC_UF1000,1000_QL80_.jpg",
    },
    {
      id: 3,
      title: "Deep Work",
      author: "Cal Newport",
      price: 420,
      cover:
        "https://booksandyou.in/cdn/shop/files/DeepWorkCalNewport_1_2.jpg?v=1696761061&width=493",
    },
    {
      id: 4,
      title: "The Power of Now",
      author: "Eckhart Tolle",
      price: 390,
      cover:
        "https://www.hachette.co.nz/images/9780733627514.jpg",
    },
    {
      id: 5,
      title: "Rich Dad Poor Dad",
      author: "Robert Kiyosaki",
      price: 299,
      cover:
        "https://m.media-amazon.com/images/I/81bsw6fnUiL._AC_UF1000,1000_QL80_.jpg",
    },
  ];

  const filteredBooks = books.filter((book) =>
    book.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>📖 BookVerse</h1>
        <p>Find your next obsession</p>
      </header>

      <div className="toolbar">
        <input
          type="text"
          placeholder="Search your book..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <button
          onClick={() => setViewMode(viewMode === "grid" ? "list" : "grid")}
        >
          {viewMode === "grid" ? "📜 List View" : "🧩 Grid View"}
        </button>
      </div>

      <BookList books={filteredBooks} viewMode={viewMode} />
    </div>
  );
}

export default App;
