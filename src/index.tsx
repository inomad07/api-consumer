import * as React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import App from './app/App'
import Store from './features/redux/store'

import '@styles/css/reset.css'
import '@styles/scss/app.scss'

const store = Store();

render (
    <Provider store={store}>
      <App />
    </Provider>,
    document.getElementById('app')
);

/** Hot Module Replacement */
if (process.env.NODE_ENV == 'development' && module.hot) {
  module.hot.accept();
}
