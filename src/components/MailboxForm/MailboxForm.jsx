import { useState } from "react"
import { useNavigate } from "react-router"

const MailboxForm = ({ addBox }) => {

    const [formData, setFormData] = useState({
        id: "",
        boxSize: "Small",
        boxOwner: ""
    })
    const navigate = useNavigate()

    const handleChange = (event) => {
        setFormData({ ...formData, [event.target.name]: event.target.value })
        console.log(formData)

    }

    const handelSubmit = (event) => {
        event.preventDefault()
        addBox({ boxSize: formData.boxSize, boxOwner: formData.boxOwner })
        navigate('/mailboxes')
    }

    return (
        <form onSubmit={handelSubmit}>
            <label htmlFor="boxOwner">Enter a Boxholder</label>
            <input value={formData.boxOwner} type="text" name="boxOwner" onChange={handleChange} placeholder="Boxholder Name" />

            <label htmlFor="boxSize">Box Size</label>
            <select value={formData.boxSize} name="boxSize" id="boxSize" onChange={handleChange}>
                <option value="small">Small</option>
                <option value="medium">Medium</option>
                <option value="large">Large</option>
            </select>

            <button type="Submit">Submit</button>


        </form>
    )
}

export default MailboxForm