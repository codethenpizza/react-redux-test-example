import renderer, {ReactTestRenderer} from "react-test-renderer";
import React from "react";
import Button from "../index";

describe('test button component', () => {
    let component: ReactTestRenderer;
    const testFunc = jest.fn()
    beforeEach(() => {
        component = renderer.create(
            <Button
                onClick={testFunc}
                text='my-test-text'
                className='my-test-classname'
            />
        )
    })

    it('should render same class & text from props', function () {
        let tree = component.toJSON();
        expect(tree).toMatchSnapshot();
    });

    it('should dispatch an decrement action on button click', async () => {
        const button = await component.root.findByProps({className: "my-test-classname"})
        renderer.act(() => {
            button.props.onClick()
        });

        expect(testFunc).toHaveBeenCalledTimes(1);
    });
})
