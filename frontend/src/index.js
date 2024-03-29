import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import App from './App'
import {store} from './state-management/store'
import {Provider} from 'react-redux'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <div className="ocean">
      <div className="wave"></div>
      <div className="wave"></div>
    </div>
    <App />
  </Provider>
);