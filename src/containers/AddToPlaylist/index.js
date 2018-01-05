import React from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import compose from 'recompose/compose'
import withHandlers from 'recompose/withHandlers'
import lifecycle from 'recompose/lifecycle'

import Modal from '../../components/Modal'
import PlaylistList from '../../components/PlaylistList'

import {
  selectAllPlaylists,
  addTrackToPlaylist,
  fetchCurrentLibraryPlaylistsRegularRange,
  selectLibraryPlaylistsRegular,
  setTrackToAddToPlaylist,
  selectTrackToAddToPlaylist
} from '@stayradiated/hifi-redux'

function componentWillMount () {
  const { onLoadItems } = this.props
  onLoadItems(0, 30)
}

const handleSelectPlaylist = (props) => (playlist) => {
  const { dispatch, trackToAddToPlaylist } = props
  dispatch(addTrackToPlaylist(trackToAddToPlaylist, playlist.id))
  dispatch(setTrackToAddToPlaylist(null))
}

const handleLoadItems = (props) => (start, end) => {
  const { dispatch } = props
  return dispatch(fetchCurrentLibraryPlaylistsRegularRange(start, end))
}

const handleClose = (props) => () => {
  const { dispatch } = props
  return dispatch(setTrackToAddToPlaylist(null))
}

const AddToPlaylist = (props) => {
  const {
    trackToAddToPlaylist,
    playlistIds, values,
    onSelectPlaylist, onLoadItems, onClose
  } = props

  if (trackToAddToPlaylist == null) {
    return null
  }

  return (
    <Modal onClose={onClose}>
      <PlaylistList
        playlistIds={playlistIds}
        values={values}
        onSelectPlaylist={onSelectPlaylist}
        onLoadItems={onLoadItems}
      />
    </Modal>
  )
}

AddToPlaylist.propTypes = {
  playlistIds: PropTypes.arrayOf(PropTypes.number).isRequired,
  values: PropTypes.shape({
    playlists: PropTypes.instanceOf(Map).isRequired
  }).isRequired,
  trackToAddToPlaylist: PropTypes.number,
  onSelectPlaylist: PropTypes.func.isRequired,
  onLoadItems: PropTypes.func.isRequired,
  onClose: PropTypes.func.isRequired
}

export default compose(
  connect((state) => ({
    trackToAddToPlaylist: selectTrackToAddToPlaylist(state),
    playlistIds: selectLibraryPlaylistsRegular.currentIds(state),
    values: {
      playlists: selectAllPlaylists.values(state)
    }
  })),
  withHandlers({
    onSelectPlaylist: handleSelectPlaylist,
    onLoadItems: handleLoadItems,
    onClose: handleClose
  }),
  lifecycle({
    componentWillMount
  })
)(AddToPlaylist)
