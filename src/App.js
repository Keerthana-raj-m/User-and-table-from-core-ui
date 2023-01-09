import './App.css';
import Login from './components/Login';
import Table from "./components/Table";
import DocsExample from './components/DocsExample';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Login />}></Route>
        <Route path='/table' element={<Table />}></Route>
        <Route path='/doc' element={<DocsExample />}></Route>
         
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
