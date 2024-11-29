import React from 'react'
import PropTypes from 'prop-types'
import ReactDialogueTree from 'react-dialogue-tree'

export default function ReactYarnVisualNovel ({ dialogue }) {
  return (
    <ReactDialogueTree
      className='mnbroatch-react-yarn-visual-novel'
      dialogue={dialogue}
    />
  )
}

ReactYarnVisualNovel.propTypes = {
  dialogue: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.arrayOf(PropTypes.shape({
      title: PropTypes.string.isRequired,
      body: PropTypes.string.isRequired
    }))
  ])
}
