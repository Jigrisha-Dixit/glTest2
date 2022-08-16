import {useNavigate} from 'react-router-dom'
import LoginPage from './Login'
function LoginFunctional(){
const navigate=useNavigate()
return(
 <LoginPage navigate={navigate}></LoginPage>
)
}
export default LoginFunctional