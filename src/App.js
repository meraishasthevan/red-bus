// import logo from './logo.svg';
import './App.css';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbarsection from './Navbarsection';
import Footersection from './Footersection';
import Bannersection from './Bannersection';
import Busticket from './Bustickets';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbarsection/>
      <Routes>
        <Route path="/" element={<Bannersection/>}/>
        <Route path='/bus/:location' element={<Busticket/>}/>
      </Routes>
      <Footersection/>
      </BrowserRouter>
      
      
    </div>
  );
}


export default App;
