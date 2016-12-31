import React, {PropTypes} from 'react'

function pad (number) {
  return number < 10 ? `0${number}` : number.toString()
}

export default function Duration (props) {
  const {ms, minutesOnly} = props
  const time = (props.time || 0) / (ms ? 1000 : 1)

  const minutes = Math.floor(time / 60)
  if (minutesOnly) {
    return <span>{minutes}</span>
  }

  const seconds = pad(Math.floor(time % 60))
  return <span>{minutes}:{seconds}</span>
}

Duration.propTypes = {
  time: PropTypes.number,
  minutesOnly: PropTypes.bool,
  ms: PropTypes.bool,
}
