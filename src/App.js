
import './App.css';
import Show from './components/Show';
import Create from './components/Create';
import Ver from './components/Ver';
import {HashRouter, Route, Routes} from 'react-router-dom'
import Login from './components/Login';

function App() {
  return (
    <div className="App">
     <HashRouter>
     <Routes>
    <Route path='/show' element={ <Show/>}/>
    <Route path='/create' element={ <Create/>}/>
    <Route path='/ver/:id' element={ <Ver/>}/>
    <Route path='/' element={ <Login/>}/>
     </Routes>
     </HashRouter>

    </div>
  );
}

export default App;
