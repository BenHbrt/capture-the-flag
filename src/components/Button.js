import './Button.scss'

const Button = ({ text, func, active }) => {
    return (
        <div className={`button ${active ? "active" : "disabled"}`} onClick={() => active ? func() : null}>
            {text}
        </div>
    )
}

export default Button