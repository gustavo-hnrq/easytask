import LandingPage from './pages/landing-page'
import LoginPage from './pages/login-page'
import SignupPage from './pages/signup-page'
import TasksPage from './pages/tasks-page'
import './App.css'

function App() {

  return (
    <div className='subpixel-antialiased'>
      <LandingPage />
      <TasksPage/>
    </div>
  )
}

export default App