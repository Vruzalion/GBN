
import { useEffect, useState } from "react";
import Keycloak from 'keycloak-js';
import { Redirect, useHistory } from "react-router";


const Welcome = () => {
let history=useHistory()
  const [keycloak, setKeycloak] = useState(null)
  const [authenticated, setAuthenticated] = useState(false)


  useEffect(() => {
    const keycloak = Keycloak("./keycloak.json");
    console.log(keycloak)
    keycloak.init({ onLoad: 'login-required' }).then(authenticated => {
      setKeycloak(keycloak)
      setAuthenticated(authenticated)
     
    })
    }, [])
const Redirect=()=>{
  keycloak.logout()
}

  return (
    <>
    {authenticated ? 
    <div className="jumbotron" style={{ paddingTop: "20%", paddingLeft: "40%" }}>
      <h1>Hello Anonymous!</h1>
      <p className="lead">Please authenticate yourself!</p>

     
        <p style={{ paddingLeft: '20%' }}>
          <button className="btn btn-lg btn-warning" onClick={() =>Redirect()}>Connect</button>
        </p>
       

    </div>
    : <h2 style={{ paddingTop: "20%", paddingLeft: "40%" }}>keycloak initializing ....!!!!</h2>
  }
  </>
  )
}

export default Welcome;
