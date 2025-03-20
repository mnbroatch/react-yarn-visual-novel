import React, { useRef } from 'react'
import PropTypes from 'prop-types'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import ReactDialogueTree from 'react-dialogue-tree/src/index'
import useForceUpdate from './use-force-update'

const characterImagesDict = {
  Red: {
    default: 'red.png'
  },
  Blue: {
    default: 'blue.png'
  }
}

export default function ReactYarnVisualNovel ({ dialogue }) {
  const runnerRef = useRef()
  const forceUpdate = useForceUpdate()
  const characterName = runnerRef.current
    ?.currentResult.markup
    ?.find(m => m.name === 'character')
    ?.properties.name
  const characterImages = characterName
    ? [characterImagesDict[characterName]?.default]
    : []
  console.log('characterImages', characterImages)
  return (
    <div className="react-yarn-visual-novel">
      <TransitionGroup className="animation-stage">
        {characterImages.map((character) => (
          <CSSTransition
            key={character}
            timeout={10000}
            classNames="character-image"
            appear
          >
            <img
              className={'animation-stage__character'}
              src={character}
            />
          </CSSTransition>
        ))}
      </TransitionGroup>
      <div className="dialogue-tree-container">
        <ReactDialogueTree
          dialogue={dialogue}
          onAdvance={(runner) => {
            if (!runnerRef.current) {
              runnerRef.current = runner
            }
            forceUpdate()
          }}
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
