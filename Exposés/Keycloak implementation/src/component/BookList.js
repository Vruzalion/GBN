
import { useEffect,useState } from "react";
import { Link, NavLink } from "react-router-dom";

const BookList = (props) => {
  
  const [books, setBooks]=useState([])
  const [keycloak, setKeycloak] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)

  
  useEffect(() => {

    setBooks(props.books)
  }, [props.books]); // eslint-disable-line react-hooks/exhaustive-deps

  const deleteBook=(book)=>{
var boooks=props.books.filter(b=>b===book)
props.setBooks(boooks)
  }
  useEffect(()=> console.log(props.books),[props.books])

  return (
    <div className="row">
      <div className="col-sm-12">
        <h1>Books to Read Before You Die</h1>
        <table className="table table-striped">
          <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Author</th>
            <th>Action</th>
          </tr>
          </thead>
          <tbody>
          {books.map((book) => (
            <tr key={book.id}>
              <td>{book.id}</td>
              <td>
                <Link to={`/books/${book.id}`}>{book.title}</Link>
              </td>
              <td>{book.author}</td>
              <td>
                <button className="btn btn-xs btn-danger" onClick={() => deleteBook(book)}>
                  Delete Book
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default BookList
