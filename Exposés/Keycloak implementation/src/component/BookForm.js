import { useState } from "react";
import { useHistory } from "react-router-dom";
import { useEffect} from "react";


const BookForm = (props) => {
 
  const history=useHistory()
  const [author, setAuthor] = useState("");
  const [title, setTitle] = useState("");

  

  const handleSubmit = (event) => {
    event.preventDefault();
    if (author!==null && title!==null) {
      var temp=props.books.slice()
    
      if(temp.length-1 <0){
      temp.push({id:temp[0].id+1,
        title:title,
        author:author
      })
      }
      else{
        temp.push({id:temp[temp.length-1].id+1 ,
          title:title,
          author:author})
      }
    }
 
   props.setBooks(temp)
      history.push("/")
  };
  useEffect(()=> console.log(props.books),[props.books])
  return (
    <div className="row">
      <div className="col-sm-6">
        <form onSubmit={(event)=>handleSubmit(event)}>
          <h1>Add a new book:</h1>
          <div className="form-group">
            <label htmlFor="author">Author</label>
            <input type="text" className="form-control" placeholder="Author"
                   value={author} onChange={(e) => setAuthor(e.target.value)}/>
          </div>
          <div className="form-group">
            <label htmlFor="title">Title</label>
            <input type="text" className="form-control" placeholder="Title"
                   value={title} onChange={(e) => setTitle(e.target.value)}/>
          </div>
         
            <button type="submit" className="btn btn-primary">Add book</button>
         
        </form>
      </div>
    </div>
  );
}

export default BookForm
