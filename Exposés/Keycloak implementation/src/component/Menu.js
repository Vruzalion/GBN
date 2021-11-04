import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Menu = (props) => {

  const [name, setName] = useState()
  useEffect(() => {
    setName(props.name)

  }, [props.name])


  return (<nav className="navbar navbar-default">
    <div className="container-fluid">
     {/* <div className="navbar-header">
        <Link className="navbar-brand" to="/books">BookBox!</Link>
      </div>
    */}
      <div id="navbar">
        <ul className="nav navbar-nav">
          <li><Link to="/">List</Link></li>
          <li><Link to="/books/new">New Book</Link></li>
          <li><Link to="/secret">Secret Books</Link></li>
          {/* <li><Link to="/foo Match</Link></li> */}
        </ul>

        <button className="btn btn-success navbar-btn navbar-right" style={{ marginRight: 0 }} onClick={() => props.keycloak1.logout()}>
          Logout
        </button>
        <p className="navbar-text navbar-right" style={{ marginRight: 15 }}>
        Signed in as {name}
        </p>
      </div>
    </div>
  </nav>
  )
}
export default Menu
