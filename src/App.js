
import './App.css';
import Show from './components/Show';
import Create from './components/Create';
import Ver from './components/Ver';
import {BrowserRouter, Route, Routes} from 'react-router-dom'
function App() {
  return (
    <div className="App">
     <BrowserRouter>
     <Routes>
    <Route path='/' element={ <Show/>}/>
    <Route path='/create' element={ <Create/>}/>
    <Route path='/ver/:id' element={ <Ver/>}/>

     </Routes>
     </BrowserRouter>

    </div>
  );
}

export default App;
