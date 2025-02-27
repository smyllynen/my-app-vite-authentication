/* Suojatulle sivulle yrityksestä vahvistamattomalle käyttäjälle mahdollisuus 
   sähköpostiosoitevahvistuslinkin uudelleen lähetykseen. */
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { useAuth } from "../auth/Auth";

const Unconfirmed = () => {
// const { setAuthTokens } = useAuth();
const { setAuthConfirm } = useAuth();    
const location = useLocation()
const queryParams = new URLSearchParams(location.search);
const message = queryParams.get('message');

useEffect(() => {
    const handleStorageChange = event => {
        if (event.key === 'confirm') {
          setAuthConfirm(event.newValue)
          console.log('localStorage item confirm has changed:', event.newValue);
          }
        }
    window.addEventListener('storage', handleStorageChange);
    return () => window.removeEventListener('storage', handleStorageChange);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

console.log(`Rendering Unconfirmed, message:${message},location.search:`,location.search)
let otsikko = message || "Et ole vahvistanut sähköpostiosoitettasi vielä."
let viesti = !message && 
    "Sinun tulee vahvistaa sähköpostiosoitteesi, ennen kuin voit käyttää palvelua. " +
    "Tarkista sähköpostilaatikkosi, sieltä pitäisi löytyä sähköpostiviesti, jossa on " +
    "vahvistuslinkki."

return (
    <div className="page-header">
    <h3>{otsikko}</h3>
    <p>{viesti}</p>    
    <p>Tarvitsetko uuden vahvistuslinkin?</p>    
    <Link to="/confirm">Lähetä uusi sähköpostiosoitteen vahvistuslinkki</Link>
    </div>
    )
}

export default Unconfirmed;