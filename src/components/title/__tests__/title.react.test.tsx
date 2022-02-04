import React from "react";
import renderer from 'react-test-renderer';
import Title from "../index";


test('renders props correctly', () => {
    const component = renderer.create(
        <Title text='fff' />
    );
    let tree = component.toJSON();
    expect(tree).toMatchSnapshot();
});
