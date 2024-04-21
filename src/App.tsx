import { Routes, Route } from 'react-router-dom'
import './App.css'
import { Header } from './Components/Header/Header';
import { Home } from './Pages/Home/Home';
import { Drift } from './Pages/Drift/Drift';
import { Forza } from './Pages/Forza/Forza';
import { TimeAttack } from './Pages/TimeAttack/TimeAttack';


function App() {
  return (
    <div>
      <Header/>
      <div className='page'>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/drift' element={<Drift />} />
          <Route path='/forza' element={<Forza />} />
          <Route path='/timeattack' element={<TimeAttack />} />
        </Routes>
      </div>
    </div>
  )
}

export default App

