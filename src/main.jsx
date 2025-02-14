import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter } from 'react-router';
import { Provider } from 'react-redux';
import { store } from './rtk/store.jsx';



createRoot(document.getElementById('root')).render(
  <StrictMode>
<BrowserRouter>
<Provider store={store}>

    <App />
</Provider>
</BrowserRouter>

 
  </StrictMode>,
)
