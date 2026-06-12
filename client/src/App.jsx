import {BrowserRouter, Navigate, Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import Dashboard from './pages/Dashboard'
import Generate from './pages/Generate'
import { useSelector } from 'react-redux'
import useGetCurrentUser from './hooks/useGetCurrentUser'
export const serverUrl = "http://localhost:8000"
function App() {
  const { loading } = useGetCurrentUser()
  const { userData } = useSelector(state => state.user)
  if (loading) {
    return null
  }
  return (
    <BrowserRouter>
      <Routes>
          <Route path = '/' element={<Home/>}/>
          <Route path = '/dashboard' element={userData?<Dashboard/>:<Navigate to={"/"}/>}/>
          <Route path = '/generate' element={userData?<Generate/>:<Navigate to={"/"}/>}/>
      </Routes> 
    </BrowserRouter>

  )
}

export default App