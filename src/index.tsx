import 'bulmaswatch/nuclear/bulmaswatch.min.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import { Provider } from 'react-redux'
import { SelectGame } from './components/frontPage/select-game-type'
import { store } from './state/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)

root.render(
  <Provider store={store}>
    <React.StrictMode>
      <SelectGame />
    </React.StrictMode>
  </Provider>,
)
