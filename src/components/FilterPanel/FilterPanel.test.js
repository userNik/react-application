import React from 'react';
import { mount, render } from 'enzyme';
import ItemListPanel from './FilterPanel';

const tags = [
    {
        "title": "Accengage",
        "id": "accengage",
        "tags": [
            "marketing-automation"
        ]
    },
    {
        "title": "AdBuddiz",
        "id": "adbuddiz",
        "tags": [
            "ad-network"
        ]
    },
    {
        "title": "AdColony",
        "id": "adcolony",
        "tags": [
            "ad-network"
        ]
    }
];

it('FilterPanel renders correctly without items', () => {
    const selectItem = jest.fn();
    const showAllItems = jest.fn();
    const searchByQuery = jest.fn();
    const tree = render(
        <ItemListPanel
            tags={tags}
            selectItem={selectItem}
            showAllItems={showAllItems}
            searchByQuery={searchByQuery}
        />
    );

    expect(tree).toMatchSnapshot();
});