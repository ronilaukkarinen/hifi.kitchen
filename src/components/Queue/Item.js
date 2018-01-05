import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import { SortableElement } from 'react-sortable-hoc'

import './Item.css'

import SortHandle from '../SortHandle'
import SquareImage from '../SquareImage'
import Time from '../Time'

function QueueItem (props) {
  const { style, track, isSelected, onClick } = props

  return (
    <button
      style={style}
      className={classNames('QueueItem', {
        'QueueItem-selected': isSelected
      })}
      onClick={onClick}
    >
      <SquareImage
        className='QueueItem-thumb'
        src={track.parentThumb}
        size={40}
      />
      <div className='QueueItem-text'>
        <div className='QueueItem-title'>
          {track.title}
        </div>
        <div className='QueueItem-artist'>
          {track.grandparentTitle}
        </div>
      </div>
      <Time
        className='QueueItem-time'
        value={track.duration}
      />
      <SortHandle />
    </button>
  )
}

QueueItem.propTypes = {
  style: PropTypes.shape({}),
  track: PropTypes.shape({
    title: PropTypes.string
  }).isRequired,
  isSelected: PropTypes.bool.isRequired,
  onClick: PropTypes.func
}

export default new SortableElement(QueueItem)
