import React from 'react'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'

import Wrapper from '../../stories/Wrapper'
import { albums, artists, playlists, values } from '../../stories/data'

import TypedPanel from './index'

storiesOf('TypedPanel', module)
  .addDecorator(Wrapper)
  .add('Album', () => (
    <TypedPanel
      item={albums[0]}
      values={values}
      currentlyPlayingTrackId={albums[0].tracks[4].id}
      onClickSubtitle={action('Click Subtitle')}
      onClickMeta={action('Click Meta')}
      onClose={action('Close Panel')}
      onSelectTrack={action('Change Track')}
      onRateTrack={action('Rate Track')}
      onCreateQueue={action('Create Queue')}
      onLoadItems={action('Load Items')}
      onNavigate={action('Navigate')}
    />
  ))
  .add('Artist', () => (
    <TypedPanel
      item={artists[0]}
      values={values}
      currentlyPlayingTrackId={artists[0].albums[0].tracks[4].id}
      onClickSubtitle={action('Click Subtitle')}
      onClickMeta={action('Click Meta')}
      onClose={action('Close Panel')}
      onSelectTrack={action('Change Track')}
      onRateTrack={action('Rate Track')}
    />
  ))
  .add('Playlist', () => (
    <TypedPanel
      item={playlists[0]}
      values={values}
      currentlyPlayingTrackId={playlists[0].tracks[4].id}
      onClickSubtitle={action('Click Subtitle')}
      onClickMeta={action('Click Meta')}
      onClose={action('Close Panel')}
      onSelectTrack={action('Change Track')}
      onRateTrack={action('Rate Track')}
    />
  ))
