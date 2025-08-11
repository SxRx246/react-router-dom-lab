import { Link } from "react-router"
import "../../index.css"
const NavBar = () => (
    <>
            <Link className="link" to='/'>Home</Link>
            <Link className="link" to='/mailboxes'>Mailboxes</Link>
            <Link className="link" to='/new-mailbox'>New Mailbox</Link>
    </>
)
export default NavBar