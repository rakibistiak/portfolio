import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Home from './components/Home/Home';
import ProjectDetails from './components/Projects/ProjectDetails';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/home/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
