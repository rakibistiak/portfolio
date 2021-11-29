import { BrowserRouter,Routes, Route } from 'react-router-dom';
import './App.css';
import Banner from './components/Banner/Banner';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<Banner/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
