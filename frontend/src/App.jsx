import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from './pages/Home'
import Login from "./pages/Login"
import Signup from "./pages/Signup"
function App() {

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/home" element={<Home/>} />
          <Route path="/" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
