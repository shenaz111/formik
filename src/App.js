import { Routes,Route } from 'react-router-dom';
import './App.css';
import Home from './pages/Home';
import Edit from './pages/Edit';
import Add from './pages/Add';


function App() {
  return (
    <div className="container">
      <Routes>
        <Route path='/' Component={Home}></Route>
        <Route path='/Edit/:id' Component={Edit}></Route>
        <Route path='/add' Component={Add}></Route>
      </Routes>
    </div>
  );
}

export default App;