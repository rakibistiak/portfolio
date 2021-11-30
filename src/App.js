import React, {useEffect} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Blog from './components/Blog/Blog';
import Header from './components/Header/Header';
import Home from './components/Home/Home';
import ProjectDetails from './components/Projects/ProjectDetails';

function App() {
  useEffect(() => {
    AOS.init();
}, [])
  return (
    <div className="App">
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/project/:id' element={<ProjectDetails></ProjectDetails>}></Route>
        <Route path='/blog' element={<Blog></Blog>}></Route>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
