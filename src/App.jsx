import "./index.css"
import { useState } from "react";
import { BrowserRouter as Router, Routes , Route} from "react-router";

import NavBar from "./components/NavBar/NavBar";
import MailboxForm from "./components/MailboxForm/MailboxForm";
import MailboxList from "./components/MailboxList/MailboxList";
import MailboxDetails from "./components/MailboxDetails/MailboxDetails";

const App = () => {
  const {mailboxes, setMailboxes} = useState([]) 
  
  const addBox = (newMailbox) =>{
    const newMailboxes = [...mailboxes , newMailbox]
    setMailboxes(newMailboxes)
  }
  return (
    <>
  {/* <h1>Hello world!</h1> */}
  <NavBar />
  <Router>
    <Routes>
      <Route path='/' element={<main><h1>Post Office</h1></main>} />
      <Route path='/mailboxes' element={<MailboxList />} />
      <Route path='/new-mailbox' element={<MailboxForm />} />
      <Route path='/mailboxes/:mailboxId' element={<MailboxDetails />} />

    </Routes>
  
  
  </Router>
</>
)
};

export default App;