import { useParams } from "react-router";

const MailboxDetails = ({ mailboxes }) => {
    const { mailboxId } = useParams();
    const selectedBox = mailboxes.find(
        (mailbox) => mailbox._id === Number(mailboxId)
    );

    return (
        selectedBox
            ?
            (
                <>
                    <h1>Mailbox {selectedBox._id}</h1>


                    <h2>Details</h2>
                    <p>Boxholder: {selectedBox.boxOwner}</p>
                    <p>Box Size: {selectedBox.boxSize}</p>
                </>
            )
            :
            (
                <h2>Mailbox Not Found!</h2>
            )
    )
}
export default MailboxDetails