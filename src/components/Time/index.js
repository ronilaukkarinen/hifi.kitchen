import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import 'moment-duration-format'

export default function Time (props) {
  const { value, unit, format, trim, ...otherProps } = props

  return (
    <span {...otherProps}>
      {moment.duration(value, unit).format(format, { trim })}
    </span>
  )
}

Time.propTypes = {
  format: PropTypes.string.isRequired,
  value: PropTypes.number.isRequired,
  unit: PropTypes.string.isRequired,
  trim: PropTypes.bool.isRequired
}

Time.defaultProps = {
  format: 'h:mm:ss',
  unit: 'ms',
  trim: true
}
