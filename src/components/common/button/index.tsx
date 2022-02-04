import {FC} from "react";
import './styles.scss'

type ButtonProps = {
    onClick: () => void
    text: string
    className?: string
}

const Button: FC<ButtonProps> = ({onClick, text, className}) => {
    return (
        <button className={className} onClick={onClick}>
            {text}
        </button>
    )
}

export default Button
