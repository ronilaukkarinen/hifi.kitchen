import React, {PropTypes} from 'react'
import {AutoSizer} from 'react-virtualized'

import MagicGrid from '../MagicGrid'

export default function MuggleGrid (props) {
  const {
    className, items, currentId, onLoad, getId,
    getElement, component, propName, total,
  } = props

  const mappedItems = items.map((item) => {
    if (item == null) {
      return item
    }
    return {
      id: getId(item),
      element: getElement(item),
    }
  })

  return (
    <AutoSizer>
      {({height, width}) => (
        <MagicGrid
          className={className}
          component={component}
          currentId={currentId}
          height={height}
          itemHeight={212}
          itemWidth={150}
          items={mappedItems}
          onLoad={onLoad}
          propName={propName}
          total={total}
          width={width}
        />
      )}
    </AutoSizer>
  )
}

MuggleGrid.propTypes = {
  className: PropTypes.string,
  component: PropTypes.element.isRequired,
  currentId: PropTypes.number,
  getElement: PropTypes.func.isRequired,
  getId: PropTypes.func.isRequired,
  items: PropTypes.arrayOf(PropTypes.object).isRequired,
  onLoad: PropTypes.func,
  propName: PropTypes.string.isRequired,
  total: PropTypes.number.isRequired,
}

MuggleGrid.defaultProps = {
  getId: (item) => item.id,
}