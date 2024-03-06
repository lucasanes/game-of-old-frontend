import ReactDOM from 'react-dom/client'
import { GlobalStyles } from './styles/global'
import { Routes } from './routes'
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify'
import { ThemeProvider } from './contexts/theme';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeProvider>
    <GlobalStyles />
    <Routes />
    <ToastContainer />
  </ThemeProvider>
)
