import { BrowserRouter,Routes,Route } from 'react-router-dom';
import './App.css';
import Job from './components/newjob';
import LoginForm from './components/login';

function App() {
  return (
    <>
    <BrowserRouter>
    <div className="App">
      <header className="App-header">
      </header>
    </div>
    <Routes>
      <Route path='/' element={<LoginForm/>} />
      <Route path="/newjob" element={<Job/>} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
