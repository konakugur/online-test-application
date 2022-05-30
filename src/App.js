import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import UploadQuestions from './components/UploadQuestions';
import Questions from './components/Questions';
import Header from './components/Header';

function App() {
  return (
    <Router>
      <Header />
      <div className='App'>
        <Routes>
          <Route path='/' element={<UploadQuestions/>}></Route>
          <Route path='/questions' element={<Questions/>}></Route>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
