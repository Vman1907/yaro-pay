import { useState } from "react"

import '../styles/formPopup.css'

const FormPopup = ({ setShowPopup }) => {

    const [useremail, setUsermail] = useState('')
    const [sent, setSent] = useState(true)

    const handleSubmit = e => {

        setSent(false)

        e.preventDefault();

        console.log(useremail)

        fetch('https://api.yaropay.com/storemail', {
            method: 'POST',
            mode: 'no-cors',
            headers: { "Content-Type": "application/json", 'Accept': 'application/json', },
            body: JSON.stringify({ email: useremail })
        })
            .then(() => {
                console.log('successfully sent')
                setSent(true)
                setTimeout(() => {
                    setShowPopup(false)
                })
            })
            .catch((err) => {
                console.log(err)
            })
    }

    return (
        <div className="formPopup">
            <form onSubmit={handleSubmit}>
                <input type='email' placeholder='Your Email ID' value={useremail} onChange={(e) => { setUsermail(e.target.value) }} />
                {
                    sent ?
                        <button className={sent ? 'enabled' : 'disabled'} type='submit'>Subscribe</button>
                        :
                        <button className={sent ? 'enabled' : 'disabled'} type='submit' disabled='false'>Sending...</button>
                }
                {/* <button className={sent ? 'enabled' : 'disabled'} type='submit' disabled='false'>Subscribe</button> */}
            </form>
        </div>
    )
}

export default FormPopup