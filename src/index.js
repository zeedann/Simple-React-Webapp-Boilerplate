import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import {
  BrowserRouter,
} from 'react-router-dom'
import Store from './store'
import AppRoot from './components/AppRoot'

function App() {
  return (
    <BrowserRouter>
    <Provider store={Store}>
      <AppRoot />
    </Provider>
  </BrowserRouter>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
