import BookShow from "./BookShow";
import useBooksContext from "../hooks/useBooksContext";

function BookList() {
    const { bookList } = useBooksContext();
    const renderedBooks = bookList.map((book) => {
            return <BookShow key={book.id} book={book} />
    });

    return (
        <div className="book-list">
            { renderedBooks }
        </div>
    );
}

export default BookList;
