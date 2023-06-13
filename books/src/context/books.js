import {createContext, useCallback, useState} from "react";
import books from "../services/books";

const BooksContext = createContext();

function Provider ({ children }) {
    const [bookList, setBookList] = useState([]);

    const getBooks = useCallback( async () => {
        const booksResponse = await books.getBooks();
        setBookList(booksResponse)
    }, []);

    const createBook = async (title) => {
        await books.createBook(title);

        const booksResponse = await books.getBooks();

        setBookList(booksResponse)
    }

    const deleteBookById = async (id) => {
        await books.deleteBook(id);
        const booksResponse = await books.getBooks();

        setBookList(booksResponse)
    }

    const editBookById = async (id, newTitle) => {
        await books.updateBook(id, newTitle)
        const booksResponse = await books.getBooks();

        setBookList(booksResponse)
    }

    const valueToShare = {
        getBooks,
        createBook,
        editBookById,
        deleteBookById,
        bookList,
    };

    return (
        <BooksContext.Provider value={ valueToShare }>
            { children }
        </BooksContext.Provider>
    )
}

export { Provider }
export default BooksContext;
