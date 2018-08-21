import React from 'react';
import { render, mount } from 'enzyme';

import App from './App';
import sdksData from './sdks';

it('renders without crashing', () => {
    const tree = render(<App/>);

    expect(tree).toMatchSnapshot();
});

it('getInitialState works correct', () => {
    const component = mount(<App />);
    const sdks = {
        results: [
            {
                id: 1,
                title: 'A',
                tags: ['uniq']
            }
        ]
    };

    const { getInitialState } = component.instance();
    const state = getInitialState(sdks);

    expect(state.selectedItems).toEqual([]);
});

it('showAllItems works correct', () => {
    const component = mount(<App />);

    const { showAllItems } = component.instance();

    showAllItems();

    expect(component.state().selectedItems).toEqual(sdksData.results);
});