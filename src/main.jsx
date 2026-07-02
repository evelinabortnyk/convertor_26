import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Header from './Header/Header'
import MainContainer from './Main-container/MainContainer'
import Footer from './Footer/Footer'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Header />
    <MainContainer />
    <Footer />
  </StrictMode>,
)
