import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css'
import HomePage from './pages/Homepage';
import ClubsPage from './pages/Clubspage';
import ShoesPage from './pages/Shoespage';
import BallsPage from './pages/Ballspage';  
import 'bootstrap/dist/css/bootstrap.min.css';

export default function App() {
  console.log("App()")
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/clubs" element={<ClubsPage/>} />
          <Route path="/shoes" element={<ShoesPage/>} />
          <Route path="/balls" element={<BallsPage/>} />
        </Routes>
      </Router>
    </>
  )
}
