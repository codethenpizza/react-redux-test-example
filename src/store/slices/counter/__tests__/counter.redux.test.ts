import reducer, {increment, decrement, incrementByAmount} from '../index'
import {CounterSliceName} from '../types'

describe(`${CounterSliceName} test`, () => {
    it('should return the initial state', () => {
        expect(reducer(undefined, {type: undefined})).toEqual(
            {
                value: 0
            }
        )
    })

    it('should handle a increment action', () => {
        const previousState = {
            value: 0
        }
        expect(reducer(previousState, increment())).toEqual({
            value: 1
        })
    })

    it('should handle a decrement action', () => {
        const previousState = {
            value: 1
        }
        expect(reducer(previousState, decrement())).toEqual({
            value: 0
        })
    })

    it('should handle a increment by amount action', () => {
        const previousState = {
            value: 0
        }
        expect(reducer(previousState, incrementByAmount(3))).toEqual({
            value: 3
        })
    })
})

