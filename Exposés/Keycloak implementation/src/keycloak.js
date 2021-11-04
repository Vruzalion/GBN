import Keycloak from 'keycloak-js'
//import sdsd from "../public/keycloak.json"
// Setup Keycloak instance as needed
// Pass initialization options as required or leave blank to load from 'keycloak.json'


const keycloak = new Keycloak("./keycloak.json");
/*
keycloak.init({
    onLoad:'login-required'
})
*/

export default keycloak