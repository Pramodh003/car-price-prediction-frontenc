import logo from './logo.svg';
import './App.css';
import LoginSignup from './pages/LoginSignup/LoginSignup';
import { Route, Routes } from 'react-router-dom';
import VehiclePrice from './pages/Predict/VehiclePrice';


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<LoginSignup/>} />
        <Route path='/predict' element={<VehiclePrice/>}/>
      </Routes>
    </div>
  );
}

export default App;
