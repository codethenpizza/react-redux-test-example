import {FC} from "react";
import {useAppDispatch} from "../../store/hooks";
import {increment, decrement} from "../../store/slices/counter";
import Button from "../common/button";
import './styles.scss'

const ReduxValueControl: FC = () => {
    const dispatch = useAppDispatch()

    const onIncrementClick = () => {
        dispatch(increment())
    }

    const onDecrementClick = () => {
        dispatch(decrement())
    }

    return (
        <div className='redux-value-control'>
            <Button
                onClick={onIncrementClick}
                text='Increment'
                className={'increment-button'}
            />
            <Button
                onClick={onDecrementClick}
                text='Decrement'
                className={'decrement-button'}
            />
        </div>
    )
}

export default ReduxValueControl
