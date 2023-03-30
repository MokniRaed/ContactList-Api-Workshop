import logo from './logo.svg';
import './App.css';
import { Route, Routes } from 'react-router-dom';
import Dashboard from './Components/Dashboard/Dashboard';
import AddContact from './Components/AddContact/AddContact';
import Navigation from './Components/Navigation/Navigation';

function App() {
  return (
    <>   
    <Navigation/>
     <Routes>
      <Route path='/' element={<Dashboard/>}/>
      <Route path='/Addcontact' element={<AddContact/>}/>
    </Routes>
    </>

  );
}

export default App;
