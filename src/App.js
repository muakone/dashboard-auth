import './App.css';
import { Route, Routes } from 'react-router';
import Dashboard from './pages/Dashboard'
import Login from './pages/Login'
import LandingPage from './pages/LandingPage'
import Courses from './pages/Course';
import SingleCourse from './pages/SingleCourse';
import Profile from './pages/Profile';

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={
          <LandingPage />
        } />
        <Route path='/login' element={
          <Login />
        } />
        <Route path='/dashboard' element={
          <Dashboard />
        } />
         <Route path='/courses' element={
          <Courses />
        } />
         <Route path='/courses/:id' element={
          <SingleCourse />
        } />
         <Route path='/profile' element={
          <Profile />
        } />
      </Routes>
    </div>
  );
}

export default App;
