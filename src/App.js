import React, {Component} from 'react';

import { getAllTags, findAllItemsByTagName, findAllItemsByQuery } from './common/helper';
import FilterPanel from './components/FilterPanel/FilterPanel';
import ItemListPanel from './components/ItemListPanel/ItemListPanel';
import './App.scss';
import sdksData from './sdks';

class App extends Component {
    constructor(props) {
        super(props);

        this.state = this.getInitialState(sdksData);
    }

    getInitialState = (sdksData) => {
        const availableTags = getAllTags(sdksData.results);
        const selectedItems = [];

        return { availableTags, selectedItems };
    };

    searchItemsByQueryInput = (query) => {
        const selectedItems = findAllItemsByQuery(query, sdksData.results);

        this.setState({ selectedItems });
    };

    showAllItems = () => this.setState({ selectedItems: sdksData.results });

    selectItem = ({id, tagName}) => {
        const {availableTags} = this.state;
        const selectedItems = findAllItemsByTagName(tagName, sdksData.results);
        const updatedTags = availableTags.reduce((acc, tag) => {

            acc.push({
                id: tag.id,
                tagName: tag.tagName,
                isSelected: tag.id === id,
            });

            return acc;
        }, []);

        this.setState({selectedItems, availableTags: updatedTags});
    };

    render() {
        const {availableTags, selectedItems} = this.state;

        return (
            <div className="container">
                <FilterPanel
                    tags={availableTags}
                    selectItem={this.selectItem}
                    showAllItems={this.showAllItems}
                    searchByQuery={this.searchItemsByQueryInput}
                />
                <ItemListPanel items={selectedItems}/>
            </div>
        );
    }
}

export default App;
