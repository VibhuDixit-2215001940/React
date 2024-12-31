import './App.css';
import { Routes, Route, Link } from'react-router-dom';
import Cat from './Components/pages/Cat';
import Dog from './Components/pages/Dog';
// import Main from './Components/pages/Main';
function App() {
  return (
    <>
    <nav>
      <ul>
          {/* <li><a href="/cat">Cat</a></li> */}
          {/* <li><a href="/dog">Dog</a></li>  */}
          <li><Link to="/cat">Cat</Link></li>
          <li><Link to="/dog">Dog</Link></li>
      </ul>
    </nav>
    <Routes>
      <Route path='/cat' element={<Cat/>}/>
      <Route path='/dog' element={<Dog/>}/>
    </Routes>
    </>
  );
}

export default App;