
import { Link, NavLink } from "react-router-dom";

const SecretBooks = () => {

  var books=[{
    id: 1,
    title: "la bible de gutenberg",
    author: "J.K.Rowling"
  },
  {
    id: 2,
    title: "les comptes de beedle the Bard",
    author: "Gutenberg"
  },
  {
    id: 3,
    title: "premier Folio",
    author: "William Shapespeare"
  }]
  return(
  <div className="jumbotron">
    <h1>️️⚡️ Here are some secret books! ⚡️</h1>
    
    <div className="row">
      <div className="col-sm-12">
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
                <button className="btn btn-xs btn-danger" >
                  Delete Book
                </button>
              </td>
            </tr>
          ))}
          </tbody>
        </table>
      </div>
    </div>
  </div>
)
          }
export default SecretBooks
