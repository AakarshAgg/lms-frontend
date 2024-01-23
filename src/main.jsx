//CSS imports
import './index.css'

//Library imports
import ReactDOM from 'react-dom/client'
import { Toaster } from 'react-hot-toast'
import { BrowserRouter } from 'react-router-dom'

//Component imports
import App from './App.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
    <App />
    <Toaster/>
    </BrowserRouter>
)
