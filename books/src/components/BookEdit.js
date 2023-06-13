import {useState} from "react";
import useBooksContext from "../hooks/useBooksContext";


function BookEdit({ book, onSubmit }) {
    const [title, setTitle] = useState(book.title);
    const { editBookById } = useBooksContext();

    const handleTitleChange = (event) => {
        setTitle(event.target.value)
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        editBookById(book.id, title);
        onSubmit();
    }


    return (
        <form onSubmit={handleSubmit}>
            <label>Title</label>
            <input className="input" name="title-input" value={title} onChange={handleTitleChange} />
            <button className="button is-primary">Save</button>
        </form>
    );
}

export default BookEdit;
