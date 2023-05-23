import {BrowserRouter,Routes,Route} from 'react-router-dom';
import LoginPage from './pages/login';
import SigninPage from './pages/signin';
import Home from './pages/Home';
import Appointment from './pages/appointment';
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/sign' element={<SigninPage/>}/>
        <Route path='/' element={<LoginPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/appointment' element={<Appointment/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
