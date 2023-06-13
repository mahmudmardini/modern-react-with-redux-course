import {useEffect} from "react";
import BookCreate from "./components/BookCreate";
import BookList from "./components/BookList";
import useBooksContext from "./hooks/useBooksContext";

function App() {
    const { getBooks } = useBooksContext();
    useEffect(() => {
        getBooks();
    }, [getBooks]);

  return (
    <div className="app">
        <BookList />
        <BookCreate />
    </div>
  );
}

export default App;
