import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import {TokenProvider} from './context/TokenContext.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
    <TokenProvider>
        <App />
    </TokenProvider>
)
