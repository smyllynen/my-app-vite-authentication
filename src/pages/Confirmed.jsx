/* Vahvistuslinkin saapumiskuittaus sähköpostiosoitteen aikaisemmasta 
   tai tuoreesta vahvistuksesta. */
import { useAuth } from "../auth/Auth";
import { useLocation } from "react-router-dom";


const Confirmed = () => {
const { authConfirm,setAuthConfirm } = useAuth();
const location = useLocation()
console.log("Rendering Confirmed, location.search:",location.search)

/* ?jo=jo */
// let jo = window.location.search ? "jo " : ""
let jo = location.search ? "jo " : ""
if (!authConfirm) setAuthConfirm('CONFIRMED')

return (
    <div>
    <h2>Sähköpostiosoite on {jo}vahvistettu.</h2>
    <p>Voit sulkea tämän ikkunan.</p>
    </div>
    )
}

export default Confirmed;