import {actionTypes} from 'redux-localstorage'
import {CREATE_QUEUE, SELECT_QUEUE_ITEM, STOP_QUEUE} from '../constants'

const initialState = {
  id: null,
  selectedItemOffset: null,
  items: [],
  shuffled: false,
}

export default function (state = initialState, action) {
  switch (action.type) {
    case actionTypes.INIT:
      return (action.payload && action.payload.queue)
        ? action.payload.queue
        : state

    case CREATE_QUEUE.REQUEST:
      const {initialTrack} = action.payload
      return {
        ...state,
        selectedItemOffset: 0,
        items: [{
          track: initialTrack.id,
        }],
      }

    case CREATE_QUEUE.SUCCESS:
      return {
        ...state,
        ...action.value.result,
      }

    case SELECT_QUEUE_ITEM:
      return {
        ...state,
        ...action.payload,
      }

    case STOP_QUEUE:
      return {
        ...state,
        id: null,
        selectedItemOffset: null,
        items: [],
      }

    default:
      return state
  }
}
