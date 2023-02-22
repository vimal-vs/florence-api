import { useState } from 'react';
import './App.scss';

import { Header, Footer } from './components';
import { Home, Events, Register } from './pages';

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
        <Header />
        <Home />
        <Events />
        <Register />
        <Footer />
    </div>
  )
}

export default App
