import React from 'react'
import ReactDOM from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
import Container from './components/container.react'

injectTapEventPlugin()

ReactDOM.render(<Container/> , document.getElementById('container'))
