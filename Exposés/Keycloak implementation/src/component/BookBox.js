
import { BrowserRouter, Route, Switch } from "react-router-dom";
import BookDetails from "./BookDetails";
import BookForm from "./BookForm";
import BookList from "./BookList";
import RolesRoute from './RolesRoute';
import SecretBooks from './SecretBooks';
import NoMatch from "./NoMatch"
import Menu from './Menu';
import React, { useEffect, useState } from "react";
import Keycloak from 'keycloak-js';

const BookBox = (props) => {
  const [keycloak1, setKeycloak] = useState(null)
  const [name, setName] = useState("")
  //const [roles, setRoles] = useState(false)
  const [authenticate, setAuthenticate] = useState(false)
  useEffect(() => {
    const keycloak = new Keycloak("./keycloak.json");
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
     console.log("keycloak",keycloak)
      setKeycloak(keycloak)
     if (keycloak.authenticated ) { keycloak.loadUserInfo().then(user => setName(user.name)) } 
      setAuthenticate(keycloak.authenticated)
    })
  }, [])
  return (
  
    <React.Fragment>
 
      {authenticate ?
        <BrowserRouter>
          <Menu name={name} keycloak1={keycloak1} />

          <Switch>
            <Route keycloak={keycloak1} exact path="/">
              <BookList setBooks={props.setBooks} books={props.books} />
            </Route>

            <RolesRoute keycloak={keycloak1} exact path="/books/new" roles="bibliothécaire">
              <BookForm setBooks={props.setBooks} books={props.books} />
            </RolesRoute>
            <Route path="/books/:bookId">
              <BookDetails setBooks={props.setBooks} books={props.books} />
            </Route>
            <RolesRoute keycloak={keycloak1} exact path="/secret" roles={["bibliothécaire","VIP"]}>
              <SecretBooks />
            </RolesRoute>
           
            <Route path="*">
              <NoMatch />
            </Route>
          </Switch>
        </BrowserRouter>
        : <div style={{paddingLeft:'40%',marginTop:'20%'}}>  <strong style={{fontSize:"30                         px"}}>keycloak Loading ... </strong></div>}
    </React.Fragment>
  )

}
export default BookBox
