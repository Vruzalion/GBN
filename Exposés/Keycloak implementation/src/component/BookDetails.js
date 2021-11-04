import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link,NavLink } from "react-router-dom";

const BookDetails = (props) => {

  const { bookId } = useParams();
  //const dispatch = useDispatch(); 
  const [books, setBooks]=useState([])
  const [book, setBook] = useState({});

  useEffect(() => {
   setBooks(props.books)
  }, [props.books]); // eslint-disable-line react-hooks/exhaustive-deps

  useEffect(() => {
    setBook(books.find(book => book.id === parseInt(bookId, 10)))
  }, [bookId, books]);

  return book ? (
    <div className="row">
      <div className="col-sm-12">
        <h1>Details for Book ID {book.id}</h1>
        <hr/>
        <h3>Author</h3>
        <p className="lead">{book.title}</p>
        <h3>Title</h3>
        <p className="lead">{book.author}</p>
        <hr/>
        <p>
          <Link to="/">&laquo; back to list</Link>
        </p>
      </div>
    </div>
  ) : null
}

export default BookDetails
