import '../styles/Popup.css'

const Popup = ({ setPopup }) => {
    return (
        <div className="popup">
            <div>
                <span>Coming soon</span>
                <button onClick={() => setPopup(false)}>OK</button>
            </div>
        </div>
    )
}

export default Popup;