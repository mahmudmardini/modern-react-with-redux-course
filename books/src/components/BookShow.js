import {useState} from "react";
import BookEdit from "./BookEdit";
import useBooksContext from "../hooks/useBooksContext";


function BookShow({ book }) {
    const [isShowEdit, setIsShowEdit] = useState(false);
    const { deleteBookById } = useBooksContext();

    const handleDeleteClick = () => {
        deleteBookById(book.id);
    };

    const handleEditClick = () => {
        setIsShowEdit(!isShowEdit);
    };

    const handleSubmit = () => {
        setIsShowEdit(false);
    };

    const content = isShowEdit
        ? <BookEdit book={book} onSubmit={handleSubmit}/>
        : <h3>{book.title}</h3>;

    return (
        <div className="book-show">
            { content }
            <img src={`https://picsum.photos/300/200?${book.id}`} alt={book.description} />
            <div className="actions">
                <button className="edit" onClick={handleEditClick}>
                    Edit
                </button>
                <button className="delete" onClick={handleDeleteClick}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default BookShow;
