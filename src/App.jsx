import Home from './Pages/Home'
import { PortfolioProvider, PortfolioContext } from './Context'
import './App.css'

function App() {

  return (
    <PortfolioProvider>
      <Home />
    </PortfolioProvider>
  )
}

export default App
