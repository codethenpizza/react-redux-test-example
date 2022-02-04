import configureStore, {MockStore} from 'redux-mock-store';
import * as Redux from "redux";
import {Provider} from "react-redux";
import renderer, {ReactTestRenderer} from "react-test-renderer";
import {RootState} from "../../../store";
import ReduxValueControl from "../index";
import {decrement, increment} from "../../../store/slices/counter";

const middlewares: Redux.Middleware[] = []
const mockStore = configureStore(middlewares)

describe('should handle render value from store', () => {
    const initialState: RootState = {
        countSlice: {
            value: 0
        }
    }

    let store: MockStore;
    let component: ReactTestRenderer;

    beforeEach(() => {
        store = mockStore(initialState)
        store.dispatch = jest.fn()

        component = renderer.create(
            <Provider store={store}>
                <ReduxValueControl/>
            </Provider>
        )
    })

    it('should dispatch an increment action on button click', async () => {
        const button = await component.root.findByProps({className: "increment-button"})
        renderer.act(() => {
            button.props.onClick()
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            increment()
        );
    });

    it('should dispatch an decrement action on button click', async () => {
        const button = await component.root.findByProps({className: "decrement-button"})
        renderer.act(() => {
            button.props.onClick()
        });

        expect(store.dispatch).toHaveBeenCalledTimes(1);
        expect(store.dispatch).toHaveBeenCalledWith(
            decrement()
        );
    });
})
