import {FC} from "react";
import './styles.scss'

type TitleProps = {
    text: string
}

const Title: FC<TitleProps> = ({text}) => {
    return (
        <h1 className='title'>{text}</h1>
    )
}

export default Title
