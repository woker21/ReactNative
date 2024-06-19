import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Container } from './components/styles.js'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Container>
    <App />
    </Container>
  </React.StrictMode>,
)
