import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './Pages/Home';
import About from './Pages/About';
import Locations from './Pages/Property/Locations';

function App() {
  return (
   <>
   {/* <Header/> */}
   <Routes>
      <Route path='/' element={<Home/>}/>
      {/* <Route path='/home' element={<Navigate to='/'/>}/> */}
      {/* <Route path='/properties' element={<Locations/>}/> */}
      {/* <Route path='About_Us'  element={<About/>}/> */}
   </Routes>
   </>
  );
}

export default App;
