import { Link } from "react-router"
import "../../index.css"


const MailboxList = ({ mailboxes }) => {
    console.log(mailboxes)
    return (
        mailboxes.length === 0 
        ?
        (
        <>
        <h2>No MailBoxes</h2>
        </>
        )
        :
        (
    <>
        <h1>Mailbox List</h1>

        {mailboxes.map((mailbox) => (
            <Link key={mailbox._id} to={`/mailboxes/${mailbox._id}`}>
                <h2>Mailbox {mailbox._id}</h2>
            </Link>
        ))}
    </>
        )
    )
}


export default MailboxList
