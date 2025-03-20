import React from 'react'
import ReactYarnVisualNovel from '../src/index'
import { ErrorBoundary } from 'react-error-boundary'
import './styles.css'

const dialogue = `
title: Start
---
Red: Hello.
Blue: Hi!
Red: I'm here.
Blue: I'm here too!
===
`

export default {
  title: 'ReactYarnVisualNovel',
  component: ReactYarnVisualNovel,
  className: 'react-yarn-visual-novel',
  args: {
    dialogue,
  },
  argTypes: {
    dialogue: {
      control: 'text'
    }
  }
}

const Template = (props) => {
  return (
    <div className="story">
      <ErrorBoundary
        resetKeys={[props.dialogue]}
        fallbackRender={({ error }) => {
          return (
            <div>
              Invalid Dialogue: {error.message}
            </div>
          )
        }}
      >
        <ReactYarnVisualNovel
          {...props}
          onDialogueEnd={() => { alert('onDialogueEnd called') }}
        />
      </ErrorBoundary>
    </div>
  )
}

export const Basic = Template.bind({})
