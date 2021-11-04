
import { Route } from "react-router-dom";
import NotAllowed from "./NotAllowed";

const RolesRoute = ({ keycloak,roles, children, ...rest }) => {

  
 return(
  <Route {...rest}>
    
    {roles.length ===2 ?
    keycloak.hasRealmRole(roles[0]) ? children : 
    keycloak.hasRealmRole(roles[1]) ? children : <NotAllowed/>
  :
  keycloak.hasRealmRole(roles) ? children :  <NotAllowed/>
  }
  </Route>
)

/*
RolesRoute.propTypes = {
  roles: PropTypes.arrayOf(PropTypes.string).isRequired,
}
*/

}
export default RolesRoute
