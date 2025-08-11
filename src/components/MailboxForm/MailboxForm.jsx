const MailboxForm = () => {

    <form onSubmit={addBox}>
        <label htmlFor="boxholder">Enter a Boxholder</label>
        <input type="text" name="boxholder"/>

        <label htmlFor="boxSize">Box Size</label>
        <select name="boxSize" id="boxSize">
            <option value="small">Small</option>
            <option value="medium">Medium</option>
            <option value="large">Large</option>
        </select>

        <input type="text" hidden value={mailboxes.legth}/>

        <button type="Submit">Submit</button>

        
    </form>
}

export default MailboxForm