import configureStore, {MockStore} from 'redux-mock-store';
import * as Redux from "redux";
import {Provider} from "react-redux";
import CounterDisplay from "../index";
import renderer, {ReactTestRenderer} from "react-test-renderer";
import {RootState} from "../../../store";

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

        component = renderer.create(
            <Provider store={store}>
                <CounterDisplay/>
            </Provider>
        )
    })

    it('should render with given state from Redux store', () => {
        expect(component.toJSON()).toMatchSnapshot();
    });

})
