import { Route, Switch, useHistory } from 'react-router-dom';
import { useState, useEffect } from 'react';
import './App.css';
import Layout from './components/Layout/Layout';
import MainContainer from './container/MainContainer';
import Singup from './screens/SignUp/Signup';
import SignIn from './screens/SignIn/SignIn'
import { loginUser,registerUser,verifyUser,removeToken} from './services/auth'


function App() {
  const [currentUser, setCurrentUser] = useState(null)
  const history = useHistory()

  useEffect(() => {
    const handleVerify = async () => {
      const userData = await verifyUser()
      setCurrentUser(userData)
    }
    handleVerify()
  }, [])
  
  const handleLogin = async (loginData) => {
    const userData = await loginUser(loginData)
    setCurrentUser(userData)
    history.push('/home')
  }

  const handleRegister = async (registerData) => {
    const userData = await registerUser(registerData)
    setCurrentUser(userData)
    history.push('/home')
  }

  const handleLogout = async () => {
    setCurrentUser(null)
    localStorage.removeItem('authToken')
    removeToken()
    history.push('/home')

  }

  return (
    <div className="App">
      <Layout currentUser={currentUser} handleLogout={handleLogout}>
        <Switch>
          <Route path='/login'>
            <SignIn handleLogin={handleLogin}/>
          </Route>
          <Route path='/register'>
            <Singup handleRegister={handleRegister}/>
          </Route>
          <Route path='/'>
            <MainContainer currentUser={currentUser}/>
          </Route>
        </Switch>
      </Layout>
    </div>
  );
}

export default App;
