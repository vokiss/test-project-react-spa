import './App.css';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AboutPage from './pages/AboutPage';
import UserPage from './pages/UserPage';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route 
          path={'/'}
          element={<MainPage/>} 
          />
        <Route 
          path={'/about'}
          element={<AboutPage/>} 
          />
        <Route 
          path={'/user/:id'}
          element={<UserPage/>} 
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
