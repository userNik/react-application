import React from 'react';

import "./style.scss";

const ItemListPanel = ({items = []}) => {
  return (
      <div className="list-panel">
          <ul className="list-panel-items">
              {
                  items.map(({id, title, tags}) => {
                      const groupedTags = tags.join(', ');

                      return (
                          <li key={id} className="list-panel-item">
                              <span className="list-panel-title">{title}</span>
                              <span className="list-panel-tags">{groupedTags}</span>
                          </li>
                      )
                  })
              }
          </ul>
      </div>
  )
};

export default ItemListPanel;