import logo from './logo.svg';
import './App.css';
import LoginFunctional from './product-test/LoginFunctional';
import { Route,Routes,Link ,BrowserRouter} from 'react-router-dom';
import Dashboard from './product-test/Dashboard';
 import SignUp from './product-test/SignUp';
function App() {
  return (
    <div className="App">
      
      <BrowserRouter>
        <Routes>
         
         <Route path='/' element={<LoginFunctional></LoginFunctional>}></Route>
        <Route path='/Dashboard' element={<Dashboard></Dashboard>}></Route>
        
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
