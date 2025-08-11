import { useParams } from "react-router";

const MailboxDetails = ({mailboxes}) => {
const { mailboxId } = useParams();
const selectedBox = mailboxes.find(
  (mailbox) => mailbox._id === Number(mailboxId)
); 

if (!selectedBox) {
    return <h2>Mailbox Not Found!</h2>;
  }

return (
<>
<h1>Mailbox {selectedBox._id}</h1>


<h2>Details</h2>
<p>Boxholder: {selectedBox.boxOwner}</p>
<p>Box Size: {selectedBox.boxSize}</p>
</>
)
}
export default MailboxDetails