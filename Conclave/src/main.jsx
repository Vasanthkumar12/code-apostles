import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import ConclaveContextProvider from './context/ConclaveContext.jsx'
import { BrowserRouter } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
    <ConclaveContextProvider>
        <BrowserRouter>
        <App />
        </BrowserRouter>
    </ConclaveContextProvider>
    
)
