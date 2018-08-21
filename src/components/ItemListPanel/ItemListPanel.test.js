import React from 'react';
import { mount, render } from 'enzyme';
import ItemListPanel from './ItemListPanel';

it('ItemListPanel renders correctly without items', () => {
    const tree = render(<ItemListPanel />);

    expect(tree).toMatchSnapshot();
});

it('ItemListPanel renders correctly within items', () => {
    const items = [
        {
            id: 1,
            title: 'React',
            tags: ['Redux']
        },
        {
            id: 2,
            title: 'Angular',
            tags: ['Mobx']
        }
    ];
    const component = mount(<ItemListPanel items={items} />);
    const childItems = component.find('.list-panel-item');

    expect(childItems.length).toBe(items.length);
});