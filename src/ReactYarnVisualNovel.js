import React from 'react'
import PropTypes from 'prop-types'
import ReactDialogueTree from 'react-dialogue-tree/src/index'

export default function ReactYarnVisualNovel ({ dialogue }) {
  return (
    <div className="react-yarn-visual-novel">
      <div className="animation-stage">
      </div>
      <div className="dialogue-tree-container">
        <ReactDialogueTree
          dialogue={dialogue}
        />
      </div>
    </div>
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
