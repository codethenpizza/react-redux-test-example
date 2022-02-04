import {FC} from "react";
import {useAppSelector} from "../../store/hooks";


const CounterDisplay: FC = () => {
    const count = useAppSelector(({countSlice}) => countSlice.value )

    return (
        <div>
            <h1 className='counter-display'>{count}</h1>
        </div>
    )
}

export default CounterDisplay
