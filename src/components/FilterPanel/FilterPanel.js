import React, { Component } from 'react';

import './style.scss';

class FilterPanel extends Component {
    state = {
        inputSelected: false,
        allItemsSelected: false,
    };

    clearState = () => this.setState({
        inputSelected: false,
        allItemsSelected: false,
    });


    selectInputItem = () => {
      const { selectItem } = this.props;
      const emptyData = {};

      selectItem(emptyData);

      this.setState({
          inputSelected: true,
          allItemsSelected: false
      });
    };

    selectAllItems = () => {
        const { showAllItems } = this.props;

        this.setState({
            inputSelected: false,
            allItemsSelected: true,
        });

        showAllItems();
    };

    render() {
        const { inputSelected, allItemsSelected } = this.state;
        const { tags, selectItem, searchByQuery } = this.props;

        return (
            <div className="panel-filter-box">
                <ul className="panel-filter-list">
                    <li
                        className="panel-filter-item"
                        onClick={this.selectInputItem}
                    >
                         <span className="panel-filter-checkbox">
                         {
                             inputSelected && <span className="panel-filter-checkbox-value" />
                         }
                         </span>
                        <span className="panel-filter-value">
                            <input
                                type="text"
                                placeholder="Type something..."
                                disabled={!inputSelected}
                                onChange={(e) => {
                                    searchByQuery(e.target.value);
                                }}
                                onBlur={(e) => {
                                    e.target.value = '';
                                }}
                            />
                        </span>
                    </li>
                    <li className="panel-filter-item" onClick={this.selectAllItems}>
                         <span className="panel-filter-checkbox">
                         {
                             allItemsSelected && <span className="panel-filter-checkbox-value" />
                         }
                         </span>
                        <span className="panel-filter-value">All</span>
                    </li>
                    {
                        tags.map(({ id, tagName, isSelected }) => {
                            return (
                                <li
                                    key={id}
                                    className="panel-filter-item"
                                    onClick={() => {
                                        selectItem({ id, tagName });
                                        this.clearState();
                                    }}
                                >
                                    <span className="panel-filter-checkbox">
                                        {
                                            isSelected && <span className="panel-filter-checkbox-value" />
                                        }
                                    </span>
                                    <span className="panel-filter-value">{tagName}</span>
                                </li>
                            )
                        })
                    }
                </ul>
            </div>
        );
    }
}

export default FilterPanel;