import './App.css';
import { Route, Routes, useLocation } from "react-router-dom";
import Landing from './views/Landing/Landing';
import Home from './views/Home/Home';
import Detail from './views/Detail/Detail';
import Form from './views/Form/Form';
import NavBar from './Components/NavBar/NavBar';

function App() {
  const location = useLocation();
  
  return (
    <div className="App">
      {location.pathname !== "/" && <NavBar />}
      <Routes>
        <Route path='/' element={<Landing />}></Route>
        <Route path='/home' element={<Home />} />
        <Route path='/detail' element={<Detail />} />
        <Route path='/form' element={<Form />} />
      </Routes>
    </div>
  );
}

export default App;
